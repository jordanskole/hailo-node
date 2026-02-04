#!/bin/bash

# check-hailo-setup.sh
# Verifies that HailoRT and GenAI server are properly configured for hailo-node

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASS="${GREEN}✓${NC}"
FAIL="${RED}✗${NC}"
WARN="${YELLOW}!${NC}"

echo "========================================"
echo "  Hailo Setup Check for hailo-node"
echo "========================================"
echo ""

ERRORS=0
WARNINGS=0

# 1. Check for Hailo device
echo -n "Checking for Hailo device (/dev/hailo*)... "
if ls /dev/hailo* 1>/dev/null 2>&1; then
    DEVICE=$(ls /dev/hailo* 2>/dev/null | head -1)
    echo -e "${PASS} Found: ${DEVICE}"
else
    echo -e "${FAIL} Not found"
    echo "   └─ Make sure the Hailo AI+ HAT is properly connected"
    ((ERRORS++))
fi

# 2. Check PCIe detection
echo -n "Checking PCIe detection... "
if lspci 2>/dev/null | grep -qi hailo; then
    PCIE_INFO=$(lspci | grep -i hailo | head -1)
    echo -e "${PASS} ${PCIE_INFO}"
else
    echo -e "${FAIL} Hailo device not detected on PCIe bus"
    echo "   └─ Check physical connection and reboot"
    ((ERRORS++))
fi

# 3. Check driver loaded
echo -n "Checking kernel driver... "
if lsmod | grep -q hailo; then
    DRIVER=$(lsmod | grep hailo | awk '{print $1}' | head -1)
    echo -e "${PASS} Loaded: ${DRIVER}"
else
    echo -e "${FAIL} Hailo driver not loaded"
    echo "   └─ Try: sudo modprobe hailo_pci"
    ((ERRORS++))
fi

# 4. Check libhailort
echo -n "Checking libhailort... "
if ldconfig -p 2>/dev/null | grep -q libhailort; then
    LIB_PATH=$(ldconfig -p | grep libhailort | awk '{print $4}' | head -1)
    echo -e "${PASS} Found: ${LIB_PATH}"
elif [ -f /usr/local/lib/libhailort.so ]; then
    echo -e "${WARN} Found at /usr/local/lib/libhailort.so but may not be in ldconfig"
    echo "   └─ Try: sudo ldconfig"
    ((WARNINGS++))
else
    echo -e "${FAIL} libhailort.so not found"
    echo "   └─ Run: cd ~/hailort/build && sudo make install && sudo ldconfig"
    ((ERRORS++))
fi

# 5. Check hailort_server binary
echo -n "Checking hailort_server binary... "
if command -v hailort_server &>/dev/null; then
    SERVER_PATH=$(which hailort_server)
    echo -e "${PASS} Found: ${SERVER_PATH}"
elif [ -f /usr/local/bin/hailort_server ]; then
    echo -e "${PASS} Found: /usr/local/bin/hailort_server"
elif [ -f ~/hailort/build/hailort/hailort_server/hailort_server ]; then
    echo -e "${WARN} Found in build dir (not installed)"
    echo "   └─ Consider: sudo cp ~/hailort/build/hailort/hailort_server/hailort_server /usr/local/bin/"
    ((WARNINGS++))
else
    echo -e "${FAIL} hailort_server not found"
    echo "   └─ Build with: cmake --build . --target hailort_server"
    ((ERRORS++))
fi

# 6. Check if hailort_server is running
echo -n "Checking if hailort_server is running... "
if pgrep -x hailort_server >/dev/null; then
    PID=$(pgrep -x hailort_server)
    echo -e "${PASS} Running (PID: ${PID})"
else
    echo -e "${WARN} Not running"
    echo "   └─ Start with: hailort_server 0.0.0.0"
    ((WARNINGS++))
fi

# 7. Check port 12133 (core RPC)
echo -n "Checking port 12133 (HailoRT RPC)... "
if ss -tlnp 2>/dev/null | grep -q ":12133"; then
    echo -e "${PASS} Listening"
else
    echo -e "${WARN} Not listening"
    echo "   └─ hailort_server may not be running"
    ((WARNINGS++))
fi

# 8. Check port 12145 (GenAI LLM)
echo -n "Checking port 12145 (GenAI LLM)... "
if ss -tlnp 2>/dev/null | grep -q ":12145"; then
    echo -e "${PASS} Listening"
else
    echo -e "${FAIL} Not listening"
    echo "   └─ hailort_server may not have been built with -DHAILO_BUILD_GENAI_SERVER=ON"
    ((ERRORS++))
fi

# 9. Check Node.js
echo -n "Checking Node.js... "
if command -v node &>/dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${PASS} ${NODE_VERSION}"
else
    echo -e "${FAIL} Node.js not installed"
    echo "   └─ Install Node.js 18+"
    ((ERRORS++))
fi

# 10. Check npm
echo -n "Checking npm... "
if command -v npm &>/dev/null; then
    NPM_VERSION=$(npm --version)
    echo -e "${PASS} ${NPM_VERSION}"
else
    echo -e "${FAIL} npm not installed"
    ((ERRORS++))
fi

# 11. Quick connectivity test
echo -n "Testing connection to GenAI server... "
if command -v nc &>/dev/null; then
    if nc -z localhost 12145 2>/dev/null; then
        echo -e "${PASS} Connection successful"
    else
        echo -e "${WARN} Cannot connect to localhost:12145"
        ((WARNINGS++))
    fi
else
    echo -e "${WARN} netcat not installed, skipping"
fi

# Summary
echo ""
echo "========================================"
echo "  Summary"
echo "========================================"

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}All checks passed! Ready to use hailo-node.${NC}"
    echo ""
    echo "Next steps:"
    echo "  1. npm install"
    echo "  2. npx ts-node examples/chat.ts /path/to/model.hef"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}${WARNINGS} warning(s), but should work.${NC}"
    echo ""
    echo "Fix warnings above for optimal setup."
    exit 0
else
    echo -e "${RED}${ERRORS} error(s), ${WARNINGS} warning(s)${NC}"
    echo ""
    echo "Fix the errors above before using hailo-node."
    exit 1
fi