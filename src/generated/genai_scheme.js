/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GenAIRpcRequest = (function() {

    /**
     * Properties of a GenAIRpcRequest.
     * @exports IGenAIRpcRequest
     * @interface IGenAIRpcRequest
     * @property {ILLM_Create_Request|null} [llmCreate] GenAIRpcRequest llmCreate
     * @property {ILLM_Get_Generator_Params_Request|null} [llmGetGeneratorParams] GenAIRpcRequest llmGetGeneratorParams
     * @property {ILLM_Generator_Create_Request|null} [llmGeneratorCreate] GenAIRpcRequest llmGeneratorCreate
     * @property {ILLM_Generator_Write_Request|null} [llmGeneratorWrite] GenAIRpcRequest llmGeneratorWrite
     * @property {ILLM_Generator_Generate_Request|null} [llmGeneratorGenerate] GenAIRpcRequest llmGeneratorGenerate
     * @property {ILLM_Generator_Read_Request|null} [llmGeneratorRead] GenAIRpcRequest llmGeneratorRead
     * @property {ILLM_Generator_Abort_Request|null} [llmGeneratorAbort] GenAIRpcRequest llmGeneratorAbort
     * @property {ILLM_Generator_Release_Request|null} [llmGeneratorRelease] GenAIRpcRequest llmGeneratorRelease
     * @property {ILLM_Tokenize_Request|null} [llmTokenize] GenAIRpcRequest llmTokenize
     * @property {ILLM_Get_Context_Request|null} [llmGetContext] GenAIRpcRequest llmGetContext
     * @property {ILLM_Set_Context_Request|null} [llmSetContext] GenAIRpcRequest llmSetContext
     * @property {ILLM_Clear_Context_Request|null} [llmClearContext] GenAIRpcRequest llmClearContext
     * @property {ILLM_Set_End_Of_Generation_Sequence_Request|null} [llmSetEndOfGenerationSequence] GenAIRpcRequest llmSetEndOfGenerationSequence
     * @property {ILLM_Get_End_Of_Generation_Sequence_Request|null} [llmGetEndOfGenerationSequence] GenAIRpcRequest llmGetEndOfGenerationSequence
     * @property {ILLM_Release_Request|null} [llmRelease] GenAIRpcRequest llmRelease
     * @property {ILLM_Set_Stop_Tokens_Request|null} [llmSetStopTokens] GenAIRpcRequest llmSetStopTokens
     * @property {ILLM_Get_Stop_Tokens_Request|null} [llmGetStopTokens] GenAIRpcRequest llmGetStopTokens
     * @property {ILLM_Get_Context_Usage_Size_Request|null} [llmGetContextUsageSize] GenAIRpcRequest llmGetContextUsageSize
     * @property {ILLM_Get_Max_Context_Capacity_Request|null} [llmGetMaxContextCapacity] GenAIRpcRequest llmGetMaxContextCapacity
     * @property {IVLM_Create_Request|null} [vlmCreate] GenAIRpcRequest vlmCreate
     * @property {IVLM_Generator_Generate_Request|null} [vlmGeneratorGenerate] GenAIRpcRequest vlmGeneratorGenerate
     * @property {IGenAI_Check_Hef_Exists_Request|null} [genaiCheckHefExists] GenAIRpcRequest genaiCheckHefExists
     * @property {ISpeech2Text_Create_Request|null} [speech2textCreate] GenAIRpcRequest speech2textCreate
     * @property {ISpeech2Text_Generate_Request|null} [speech2textGenerate] GenAIRpcRequest speech2textGenerate
     * @property {ISpeech2Text_Release_Request|null} [speech2textRelease] GenAIRpcRequest speech2textRelease
     * @property {ISpeech2Text_Tokenize_Request|null} [speech2textTokenize] GenAIRpcRequest speech2textTokenize
     */

    /**
     * Constructs a new GenAIRpcRequest.
     * @exports GenAIRpcRequest
     * @classdesc Represents a GenAIRpcRequest.
     * @implements IGenAIRpcRequest
     * @constructor
     * @param {IGenAIRpcRequest=} [properties] Properties to set
     */
    function GenAIRpcRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenAIRpcRequest llmCreate.
     * @member {ILLM_Create_Request|null|undefined} llmCreate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmCreate = null;

    /**
     * GenAIRpcRequest llmGetGeneratorParams.
     * @member {ILLM_Get_Generator_Params_Request|null|undefined} llmGetGeneratorParams
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetGeneratorParams = null;

    /**
     * GenAIRpcRequest llmGeneratorCreate.
     * @member {ILLM_Generator_Create_Request|null|undefined} llmGeneratorCreate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorCreate = null;

    /**
     * GenAIRpcRequest llmGeneratorWrite.
     * @member {ILLM_Generator_Write_Request|null|undefined} llmGeneratorWrite
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorWrite = null;

    /**
     * GenAIRpcRequest llmGeneratorGenerate.
     * @member {ILLM_Generator_Generate_Request|null|undefined} llmGeneratorGenerate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorGenerate = null;

    /**
     * GenAIRpcRequest llmGeneratorRead.
     * @member {ILLM_Generator_Read_Request|null|undefined} llmGeneratorRead
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorRead = null;

    /**
     * GenAIRpcRequest llmGeneratorAbort.
     * @member {ILLM_Generator_Abort_Request|null|undefined} llmGeneratorAbort
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorAbort = null;

    /**
     * GenAIRpcRequest llmGeneratorRelease.
     * @member {ILLM_Generator_Release_Request|null|undefined} llmGeneratorRelease
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorRelease = null;

    /**
     * GenAIRpcRequest llmTokenize.
     * @member {ILLM_Tokenize_Request|null|undefined} llmTokenize
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmTokenize = null;

    /**
     * GenAIRpcRequest llmGetContext.
     * @member {ILLM_Get_Context_Request|null|undefined} llmGetContext
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetContext = null;

    /**
     * GenAIRpcRequest llmSetContext.
     * @member {ILLM_Set_Context_Request|null|undefined} llmSetContext
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmSetContext = null;

    /**
     * GenAIRpcRequest llmClearContext.
     * @member {ILLM_Clear_Context_Request|null|undefined} llmClearContext
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmClearContext = null;

    /**
     * GenAIRpcRequest llmSetEndOfGenerationSequence.
     * @member {ILLM_Set_End_Of_Generation_Sequence_Request|null|undefined} llmSetEndOfGenerationSequence
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmSetEndOfGenerationSequence = null;

    /**
     * GenAIRpcRequest llmGetEndOfGenerationSequence.
     * @member {ILLM_Get_End_Of_Generation_Sequence_Request|null|undefined} llmGetEndOfGenerationSequence
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetEndOfGenerationSequence = null;

    /**
     * GenAIRpcRequest llmRelease.
     * @member {ILLM_Release_Request|null|undefined} llmRelease
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmRelease = null;

    /**
     * GenAIRpcRequest llmSetStopTokens.
     * @member {ILLM_Set_Stop_Tokens_Request|null|undefined} llmSetStopTokens
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmSetStopTokens = null;

    /**
     * GenAIRpcRequest llmGetStopTokens.
     * @member {ILLM_Get_Stop_Tokens_Request|null|undefined} llmGetStopTokens
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetStopTokens = null;

    /**
     * GenAIRpcRequest llmGetContextUsageSize.
     * @member {ILLM_Get_Context_Usage_Size_Request|null|undefined} llmGetContextUsageSize
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetContextUsageSize = null;

    /**
     * GenAIRpcRequest llmGetMaxContextCapacity.
     * @member {ILLM_Get_Max_Context_Capacity_Request|null|undefined} llmGetMaxContextCapacity
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetMaxContextCapacity = null;

    /**
     * GenAIRpcRequest vlmCreate.
     * @member {IVLM_Create_Request|null|undefined} vlmCreate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.vlmCreate = null;

    /**
     * GenAIRpcRequest vlmGeneratorGenerate.
     * @member {IVLM_Generator_Generate_Request|null|undefined} vlmGeneratorGenerate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.vlmGeneratorGenerate = null;

    /**
     * GenAIRpcRequest genaiCheckHefExists.
     * @member {IGenAI_Check_Hef_Exists_Request|null|undefined} genaiCheckHefExists
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.genaiCheckHefExists = null;

    /**
     * GenAIRpcRequest speech2textCreate.
     * @member {ISpeech2Text_Create_Request|null|undefined} speech2textCreate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.speech2textCreate = null;

    /**
     * GenAIRpcRequest speech2textGenerate.
     * @member {ISpeech2Text_Generate_Request|null|undefined} speech2textGenerate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.speech2textGenerate = null;

    /**
     * GenAIRpcRequest speech2textRelease.
     * @member {ISpeech2Text_Release_Request|null|undefined} speech2textRelease
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.speech2textRelease = null;

    /**
     * GenAIRpcRequest speech2textTokenize.
     * @member {ISpeech2Text_Tokenize_Request|null|undefined} speech2textTokenize
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.speech2textTokenize = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GenAIRpcRequest request.
     * @member {"llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize"|undefined} request
     * @memberof GenAIRpcRequest
     * @instance
     */
    Object.defineProperty(GenAIRpcRequest.prototype, "request", {
        get: $util.oneOfGetter($oneOfFields = ["llmCreate", "llmGetGeneratorParams", "llmGeneratorCreate", "llmGeneratorWrite", "llmGeneratorGenerate", "llmGeneratorRead", "llmGeneratorAbort", "llmGeneratorRelease", "llmTokenize", "llmGetContext", "llmSetContext", "llmClearContext", "llmSetEndOfGenerationSequence", "llmGetEndOfGenerationSequence", "llmRelease", "llmSetStopTokens", "llmGetStopTokens", "llmGetContextUsageSize", "llmGetMaxContextCapacity", "vlmCreate", "vlmGeneratorGenerate", "genaiCheckHefExists", "speech2textCreate", "speech2textGenerate", "speech2textRelease", "speech2textTokenize"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GenAIRpcRequest instance using the specified properties.
     * @function create
     * @memberof GenAIRpcRequest
     * @static
     * @param {IGenAIRpcRequest=} [properties] Properties to set
     * @returns {GenAIRpcRequest} GenAIRpcRequest instance
     */
    GenAIRpcRequest.create = function create(properties) {
        return new GenAIRpcRequest(properties);
    };

    /**
     * Encodes the specified GenAIRpcRequest message. Does not implicitly {@link GenAIRpcRequest.verify|verify} messages.
     * @function encode
     * @memberof GenAIRpcRequest
     * @static
     * @param {IGenAIRpcRequest} message GenAIRpcRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAIRpcRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.llmCreate != null && Object.hasOwnProperty.call(message, "llmCreate"))
            $root.LLM_Create_Request.encode(message.llmCreate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.llmGetGeneratorParams != null && Object.hasOwnProperty.call(message, "llmGetGeneratorParams"))
            $root.LLM_Get_Generator_Params_Request.encode(message.llmGetGeneratorParams, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.llmGeneratorCreate != null && Object.hasOwnProperty.call(message, "llmGeneratorCreate"))
            $root.LLM_Generator_Create_Request.encode(message.llmGeneratorCreate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.llmGeneratorWrite != null && Object.hasOwnProperty.call(message, "llmGeneratorWrite"))
            $root.LLM_Generator_Write_Request.encode(message.llmGeneratorWrite, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.llmGeneratorGenerate != null && Object.hasOwnProperty.call(message, "llmGeneratorGenerate"))
            $root.LLM_Generator_Generate_Request.encode(message.llmGeneratorGenerate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.llmGeneratorRead != null && Object.hasOwnProperty.call(message, "llmGeneratorRead"))
            $root.LLM_Generator_Read_Request.encode(message.llmGeneratorRead, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.llmGeneratorAbort != null && Object.hasOwnProperty.call(message, "llmGeneratorAbort"))
            $root.LLM_Generator_Abort_Request.encode(message.llmGeneratorAbort, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.llmGeneratorRelease != null && Object.hasOwnProperty.call(message, "llmGeneratorRelease"))
            $root.LLM_Generator_Release_Request.encode(message.llmGeneratorRelease, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.llmTokenize != null && Object.hasOwnProperty.call(message, "llmTokenize"))
            $root.LLM_Tokenize_Request.encode(message.llmTokenize, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.llmGetContext != null && Object.hasOwnProperty.call(message, "llmGetContext"))
            $root.LLM_Get_Context_Request.encode(message.llmGetContext, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.llmSetContext != null && Object.hasOwnProperty.call(message, "llmSetContext"))
            $root.LLM_Set_Context_Request.encode(message.llmSetContext, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.llmClearContext != null && Object.hasOwnProperty.call(message, "llmClearContext"))
            $root.LLM_Clear_Context_Request.encode(message.llmClearContext, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.llmSetEndOfGenerationSequence != null && Object.hasOwnProperty.call(message, "llmSetEndOfGenerationSequence"))
            $root.LLM_Set_End_Of_Generation_Sequence_Request.encode(message.llmSetEndOfGenerationSequence, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.llmGetEndOfGenerationSequence != null && Object.hasOwnProperty.call(message, "llmGetEndOfGenerationSequence"))
            $root.LLM_Get_End_Of_Generation_Sequence_Request.encode(message.llmGetEndOfGenerationSequence, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.llmRelease != null && Object.hasOwnProperty.call(message, "llmRelease"))
            $root.LLM_Release_Request.encode(message.llmRelease, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.llmSetStopTokens != null && Object.hasOwnProperty.call(message, "llmSetStopTokens"))
            $root.LLM_Set_Stop_Tokens_Request.encode(message.llmSetStopTokens, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.llmGetStopTokens != null && Object.hasOwnProperty.call(message, "llmGetStopTokens"))
            $root.LLM_Get_Stop_Tokens_Request.encode(message.llmGetStopTokens, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.llmGetContextUsageSize != null && Object.hasOwnProperty.call(message, "llmGetContextUsageSize"))
            $root.LLM_Get_Context_Usage_Size_Request.encode(message.llmGetContextUsageSize, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.llmGetMaxContextCapacity != null && Object.hasOwnProperty.call(message, "llmGetMaxContextCapacity"))
            $root.LLM_Get_Max_Context_Capacity_Request.encode(message.llmGetMaxContextCapacity, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.vlmCreate != null && Object.hasOwnProperty.call(message, "vlmCreate"))
            $root.VLM_Create_Request.encode(message.vlmCreate, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.vlmGeneratorGenerate != null && Object.hasOwnProperty.call(message, "vlmGeneratorGenerate"))
            $root.VLM_Generator_Generate_Request.encode(message.vlmGeneratorGenerate, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.genaiCheckHefExists != null && Object.hasOwnProperty.call(message, "genaiCheckHefExists"))
            $root.GenAI_Check_Hef_Exists_Request.encode(message.genaiCheckHefExists, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.speech2textCreate != null && Object.hasOwnProperty.call(message, "speech2textCreate"))
            $root.Speech2Text_Create_Request.encode(message.speech2textCreate, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.speech2textGenerate != null && Object.hasOwnProperty.call(message, "speech2textGenerate"))
            $root.Speech2Text_Generate_Request.encode(message.speech2textGenerate, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.speech2textRelease != null && Object.hasOwnProperty.call(message, "speech2textRelease"))
            $root.Speech2Text_Release_Request.encode(message.speech2textRelease, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.speech2textTokenize != null && Object.hasOwnProperty.call(message, "speech2textTokenize"))
            $root.Speech2Text_Tokenize_Request.encode(message.speech2textTokenize, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GenAIRpcRequest message, length delimited. Does not implicitly {@link GenAIRpcRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenAIRpcRequest
     * @static
     * @param {IGenAIRpcRequest} message GenAIRpcRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAIRpcRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenAIRpcRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GenAIRpcRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenAIRpcRequest} GenAIRpcRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAIRpcRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenAIRpcRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.llmCreate = $root.LLM_Create_Request.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Request.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.llmGeneratorCreate = $root.LLM_Generator_Create_Request.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.llmGeneratorWrite = $root.LLM_Generator_Write_Request.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.llmGeneratorGenerate = $root.LLM_Generator_Generate_Request.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.llmGeneratorRead = $root.LLM_Generator_Read_Request.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.llmGeneratorAbort = $root.LLM_Generator_Abort_Request.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.llmGeneratorRelease = $root.LLM_Generator_Release_Request.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.llmTokenize = $root.LLM_Tokenize_Request.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.llmGetContext = $root.LLM_Get_Context_Request.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.llmSetContext = $root.LLM_Set_Context_Request.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.llmClearContext = $root.LLM_Clear_Context_Request.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Request.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Request.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.llmRelease = $root.LLM_Release_Request.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Request.decode(reader, reader.uint32());
                    break;
                }
            case 17: {
                    message.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Request.decode(reader, reader.uint32());
                    break;
                }
            case 18: {
                    message.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Request.decode(reader, reader.uint32());
                    break;
                }
            case 19: {
                    message.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Request.decode(reader, reader.uint32());
                    break;
                }
            case 20: {
                    message.vlmCreate = $root.VLM_Create_Request.decode(reader, reader.uint32());
                    break;
                }
            case 21: {
                    message.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Request.decode(reader, reader.uint32());
                    break;
                }
            case 22: {
                    message.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Request.decode(reader, reader.uint32());
                    break;
                }
            case 23: {
                    message.speech2textCreate = $root.Speech2Text_Create_Request.decode(reader, reader.uint32());
                    break;
                }
            case 24: {
                    message.speech2textGenerate = $root.Speech2Text_Generate_Request.decode(reader, reader.uint32());
                    break;
                }
            case 25: {
                    message.speech2textRelease = $root.Speech2Text_Release_Request.decode(reader, reader.uint32());
                    break;
                }
            case 26: {
                    message.speech2textTokenize = $root.Speech2Text_Tokenize_Request.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenAIRpcRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenAIRpcRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenAIRpcRequest} GenAIRpcRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAIRpcRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenAIRpcRequest message.
     * @function verify
     * @memberof GenAIRpcRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenAIRpcRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.llmCreate != null && message.hasOwnProperty("llmCreate")) {
            properties.request = 1;
            {
                var error = $root.LLM_Create_Request.verify(message.llmCreate);
                if (error)
                    return "llmCreate." + error;
            }
        }
        if (message.llmGetGeneratorParams != null && message.hasOwnProperty("llmGetGeneratorParams")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Generator_Params_Request.verify(message.llmGetGeneratorParams);
                if (error)
                    return "llmGetGeneratorParams." + error;
            }
        }
        if (message.llmGeneratorCreate != null && message.hasOwnProperty("llmGeneratorCreate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Create_Request.verify(message.llmGeneratorCreate);
                if (error)
                    return "llmGeneratorCreate." + error;
            }
        }
        if (message.llmGeneratorWrite != null && message.hasOwnProperty("llmGeneratorWrite")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Write_Request.verify(message.llmGeneratorWrite);
                if (error)
                    return "llmGeneratorWrite." + error;
            }
        }
        if (message.llmGeneratorGenerate != null && message.hasOwnProperty("llmGeneratorGenerate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Generate_Request.verify(message.llmGeneratorGenerate);
                if (error)
                    return "llmGeneratorGenerate." + error;
            }
        }
        if (message.llmGeneratorRead != null && message.hasOwnProperty("llmGeneratorRead")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Read_Request.verify(message.llmGeneratorRead);
                if (error)
                    return "llmGeneratorRead." + error;
            }
        }
        if (message.llmGeneratorAbort != null && message.hasOwnProperty("llmGeneratorAbort")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Abort_Request.verify(message.llmGeneratorAbort);
                if (error)
                    return "llmGeneratorAbort." + error;
            }
        }
        if (message.llmGeneratorRelease != null && message.hasOwnProperty("llmGeneratorRelease")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Release_Request.verify(message.llmGeneratorRelease);
                if (error)
                    return "llmGeneratorRelease." + error;
            }
        }
        if (message.llmTokenize != null && message.hasOwnProperty("llmTokenize")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Tokenize_Request.verify(message.llmTokenize);
                if (error)
                    return "llmTokenize." + error;
            }
        }
        if (message.llmGetContext != null && message.hasOwnProperty("llmGetContext")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Context_Request.verify(message.llmGetContext);
                if (error)
                    return "llmGetContext." + error;
            }
        }
        if (message.llmSetContext != null && message.hasOwnProperty("llmSetContext")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Set_Context_Request.verify(message.llmSetContext);
                if (error)
                    return "llmSetContext." + error;
            }
        }
        if (message.llmClearContext != null && message.hasOwnProperty("llmClearContext")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Clear_Context_Request.verify(message.llmClearContext);
                if (error)
                    return "llmClearContext." + error;
            }
        }
        if (message.llmSetEndOfGenerationSequence != null && message.hasOwnProperty("llmSetEndOfGenerationSequence")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Set_End_Of_Generation_Sequence_Request.verify(message.llmSetEndOfGenerationSequence);
                if (error)
                    return "llmSetEndOfGenerationSequence." + error;
            }
        }
        if (message.llmGetEndOfGenerationSequence != null && message.hasOwnProperty("llmGetEndOfGenerationSequence")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_End_Of_Generation_Sequence_Request.verify(message.llmGetEndOfGenerationSequence);
                if (error)
                    return "llmGetEndOfGenerationSequence." + error;
            }
        }
        if (message.llmRelease != null && message.hasOwnProperty("llmRelease")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Release_Request.verify(message.llmRelease);
                if (error)
                    return "llmRelease." + error;
            }
        }
        if (message.llmSetStopTokens != null && message.hasOwnProperty("llmSetStopTokens")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Set_Stop_Tokens_Request.verify(message.llmSetStopTokens);
                if (error)
                    return "llmSetStopTokens." + error;
            }
        }
        if (message.llmGetStopTokens != null && message.hasOwnProperty("llmGetStopTokens")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Stop_Tokens_Request.verify(message.llmGetStopTokens);
                if (error)
                    return "llmGetStopTokens." + error;
            }
        }
        if (message.llmGetContextUsageSize != null && message.hasOwnProperty("llmGetContextUsageSize")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Context_Usage_Size_Request.verify(message.llmGetContextUsageSize);
                if (error)
                    return "llmGetContextUsageSize." + error;
            }
        }
        if (message.llmGetMaxContextCapacity != null && message.hasOwnProperty("llmGetMaxContextCapacity")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Max_Context_Capacity_Request.verify(message.llmGetMaxContextCapacity);
                if (error)
                    return "llmGetMaxContextCapacity." + error;
            }
        }
        if (message.vlmCreate != null && message.hasOwnProperty("vlmCreate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.VLM_Create_Request.verify(message.vlmCreate);
                if (error)
                    return "vlmCreate." + error;
            }
        }
        if (message.vlmGeneratorGenerate != null && message.hasOwnProperty("vlmGeneratorGenerate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.VLM_Generator_Generate_Request.verify(message.vlmGeneratorGenerate);
                if (error)
                    return "vlmGeneratorGenerate." + error;
            }
        }
        if (message.genaiCheckHefExists != null && message.hasOwnProperty("genaiCheckHefExists")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.GenAI_Check_Hef_Exists_Request.verify(message.genaiCheckHefExists);
                if (error)
                    return "genaiCheckHefExists." + error;
            }
        }
        if (message.speech2textCreate != null && message.hasOwnProperty("speech2textCreate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.Speech2Text_Create_Request.verify(message.speech2textCreate);
                if (error)
                    return "speech2textCreate." + error;
            }
        }
        if (message.speech2textGenerate != null && message.hasOwnProperty("speech2textGenerate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.Speech2Text_Generate_Request.verify(message.speech2textGenerate);
                if (error)
                    return "speech2textGenerate." + error;
            }
        }
        if (message.speech2textRelease != null && message.hasOwnProperty("speech2textRelease")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.Speech2Text_Release_Request.verify(message.speech2textRelease);
                if (error)
                    return "speech2textRelease." + error;
            }
        }
        if (message.speech2textTokenize != null && message.hasOwnProperty("speech2textTokenize")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.Speech2Text_Tokenize_Request.verify(message.speech2textTokenize);
                if (error)
                    return "speech2textTokenize." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GenAIRpcRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenAIRpcRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenAIRpcRequest} GenAIRpcRequest
     */
    GenAIRpcRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GenAIRpcRequest)
            return object;
        var message = new $root.GenAIRpcRequest();
        if (object.llmCreate != null) {
            if (typeof object.llmCreate !== "object")
                throw TypeError(".GenAIRpcRequest.llmCreate: object expected");
            message.llmCreate = $root.LLM_Create_Request.fromObject(object.llmCreate);
        }
        if (object.llmGetGeneratorParams != null) {
            if (typeof object.llmGetGeneratorParams !== "object")
                throw TypeError(".GenAIRpcRequest.llmGetGeneratorParams: object expected");
            message.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Request.fromObject(object.llmGetGeneratorParams);
        }
        if (object.llmGeneratorCreate != null) {
            if (typeof object.llmGeneratorCreate !== "object")
                throw TypeError(".GenAIRpcRequest.llmGeneratorCreate: object expected");
            message.llmGeneratorCreate = $root.LLM_Generator_Create_Request.fromObject(object.llmGeneratorCreate);
        }
        if (object.llmGeneratorWrite != null) {
            if (typeof object.llmGeneratorWrite !== "object")
                throw TypeError(".GenAIRpcRequest.llmGeneratorWrite: object expected");
            message.llmGeneratorWrite = $root.LLM_Generator_Write_Request.fromObject(object.llmGeneratorWrite);
        }
        if (object.llmGeneratorGenerate != null) {
            if (typeof object.llmGeneratorGenerate !== "object")
                throw TypeError(".GenAIRpcRequest.llmGeneratorGenerate: object expected");
            message.llmGeneratorGenerate = $root.LLM_Generator_Generate_Request.fromObject(object.llmGeneratorGenerate);
        }
        if (object.llmGeneratorRead != null) {
            if (typeof object.llmGeneratorRead !== "object")
                throw TypeError(".GenAIRpcRequest.llmGeneratorRead: object expected");
            message.llmGeneratorRead = $root.LLM_Generator_Read_Request.fromObject(object.llmGeneratorRead);
        }
        if (object.llmGeneratorAbort != null) {
            if (typeof object.llmGeneratorAbort !== "object")
                throw TypeError(".GenAIRpcRequest.llmGeneratorAbort: object expected");
            message.llmGeneratorAbort = $root.LLM_Generator_Abort_Request.fromObject(object.llmGeneratorAbort);
        }
        if (object.llmGeneratorRelease != null) {
            if (typeof object.llmGeneratorRelease !== "object")
                throw TypeError(".GenAIRpcRequest.llmGeneratorRelease: object expected");
            message.llmGeneratorRelease = $root.LLM_Generator_Release_Request.fromObject(object.llmGeneratorRelease);
        }
        if (object.llmTokenize != null) {
            if (typeof object.llmTokenize !== "object")
                throw TypeError(".GenAIRpcRequest.llmTokenize: object expected");
            message.llmTokenize = $root.LLM_Tokenize_Request.fromObject(object.llmTokenize);
        }
        if (object.llmGetContext != null) {
            if (typeof object.llmGetContext !== "object")
                throw TypeError(".GenAIRpcRequest.llmGetContext: object expected");
            message.llmGetContext = $root.LLM_Get_Context_Request.fromObject(object.llmGetContext);
        }
        if (object.llmSetContext != null) {
            if (typeof object.llmSetContext !== "object")
                throw TypeError(".GenAIRpcRequest.llmSetContext: object expected");
            message.llmSetContext = $root.LLM_Set_Context_Request.fromObject(object.llmSetContext);
        }
        if (object.llmClearContext != null) {
            if (typeof object.llmClearContext !== "object")
                throw TypeError(".GenAIRpcRequest.llmClearContext: object expected");
            message.llmClearContext = $root.LLM_Clear_Context_Request.fromObject(object.llmClearContext);
        }
        if (object.llmSetEndOfGenerationSequence != null) {
            if (typeof object.llmSetEndOfGenerationSequence !== "object")
                throw TypeError(".GenAIRpcRequest.llmSetEndOfGenerationSequence: object expected");
            message.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Request.fromObject(object.llmSetEndOfGenerationSequence);
        }
        if (object.llmGetEndOfGenerationSequence != null) {
            if (typeof object.llmGetEndOfGenerationSequence !== "object")
                throw TypeError(".GenAIRpcRequest.llmGetEndOfGenerationSequence: object expected");
            message.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Request.fromObject(object.llmGetEndOfGenerationSequence);
        }
        if (object.llmRelease != null) {
            if (typeof object.llmRelease !== "object")
                throw TypeError(".GenAIRpcRequest.llmRelease: object expected");
            message.llmRelease = $root.LLM_Release_Request.fromObject(object.llmRelease);
        }
        if (object.llmSetStopTokens != null) {
            if (typeof object.llmSetStopTokens !== "object")
                throw TypeError(".GenAIRpcRequest.llmSetStopTokens: object expected");
            message.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Request.fromObject(object.llmSetStopTokens);
        }
        if (object.llmGetStopTokens != null) {
            if (typeof object.llmGetStopTokens !== "object")
                throw TypeError(".GenAIRpcRequest.llmGetStopTokens: object expected");
            message.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Request.fromObject(object.llmGetStopTokens);
        }
        if (object.llmGetContextUsageSize != null) {
            if (typeof object.llmGetContextUsageSize !== "object")
                throw TypeError(".GenAIRpcRequest.llmGetContextUsageSize: object expected");
            message.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Request.fromObject(object.llmGetContextUsageSize);
        }
        if (object.llmGetMaxContextCapacity != null) {
            if (typeof object.llmGetMaxContextCapacity !== "object")
                throw TypeError(".GenAIRpcRequest.llmGetMaxContextCapacity: object expected");
            message.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Request.fromObject(object.llmGetMaxContextCapacity);
        }
        if (object.vlmCreate != null) {
            if (typeof object.vlmCreate !== "object")
                throw TypeError(".GenAIRpcRequest.vlmCreate: object expected");
            message.vlmCreate = $root.VLM_Create_Request.fromObject(object.vlmCreate);
        }
        if (object.vlmGeneratorGenerate != null) {
            if (typeof object.vlmGeneratorGenerate !== "object")
                throw TypeError(".GenAIRpcRequest.vlmGeneratorGenerate: object expected");
            message.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Request.fromObject(object.vlmGeneratorGenerate);
        }
        if (object.genaiCheckHefExists != null) {
            if (typeof object.genaiCheckHefExists !== "object")
                throw TypeError(".GenAIRpcRequest.genaiCheckHefExists: object expected");
            message.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Request.fromObject(object.genaiCheckHefExists);
        }
        if (object.speech2textCreate != null) {
            if (typeof object.speech2textCreate !== "object")
                throw TypeError(".GenAIRpcRequest.speech2textCreate: object expected");
            message.speech2textCreate = $root.Speech2Text_Create_Request.fromObject(object.speech2textCreate);
        }
        if (object.speech2textGenerate != null) {
            if (typeof object.speech2textGenerate !== "object")
                throw TypeError(".GenAIRpcRequest.speech2textGenerate: object expected");
            message.speech2textGenerate = $root.Speech2Text_Generate_Request.fromObject(object.speech2textGenerate);
        }
        if (object.speech2textRelease != null) {
            if (typeof object.speech2textRelease !== "object")
                throw TypeError(".GenAIRpcRequest.speech2textRelease: object expected");
            message.speech2textRelease = $root.Speech2Text_Release_Request.fromObject(object.speech2textRelease);
        }
        if (object.speech2textTokenize != null) {
            if (typeof object.speech2textTokenize !== "object")
                throw TypeError(".GenAIRpcRequest.speech2textTokenize: object expected");
            message.speech2textTokenize = $root.Speech2Text_Tokenize_Request.fromObject(object.speech2textTokenize);
        }
        return message;
    };

    /**
     * Creates a plain object from a GenAIRpcRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenAIRpcRequest
     * @static
     * @param {GenAIRpcRequest} message GenAIRpcRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenAIRpcRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.llmCreate != null && message.hasOwnProperty("llmCreate")) {
            object.llmCreate = $root.LLM_Create_Request.toObject(message.llmCreate, options);
            if (options.oneofs)
                object.request = "llmCreate";
        }
        if (message.llmGetGeneratorParams != null && message.hasOwnProperty("llmGetGeneratorParams")) {
            object.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Request.toObject(message.llmGetGeneratorParams, options);
            if (options.oneofs)
                object.request = "llmGetGeneratorParams";
        }
        if (message.llmGeneratorCreate != null && message.hasOwnProperty("llmGeneratorCreate")) {
            object.llmGeneratorCreate = $root.LLM_Generator_Create_Request.toObject(message.llmGeneratorCreate, options);
            if (options.oneofs)
                object.request = "llmGeneratorCreate";
        }
        if (message.llmGeneratorWrite != null && message.hasOwnProperty("llmGeneratorWrite")) {
            object.llmGeneratorWrite = $root.LLM_Generator_Write_Request.toObject(message.llmGeneratorWrite, options);
            if (options.oneofs)
                object.request = "llmGeneratorWrite";
        }
        if (message.llmGeneratorGenerate != null && message.hasOwnProperty("llmGeneratorGenerate")) {
            object.llmGeneratorGenerate = $root.LLM_Generator_Generate_Request.toObject(message.llmGeneratorGenerate, options);
            if (options.oneofs)
                object.request = "llmGeneratorGenerate";
        }
        if (message.llmGeneratorRead != null && message.hasOwnProperty("llmGeneratorRead")) {
            object.llmGeneratorRead = $root.LLM_Generator_Read_Request.toObject(message.llmGeneratorRead, options);
            if (options.oneofs)
                object.request = "llmGeneratorRead";
        }
        if (message.llmGeneratorAbort != null && message.hasOwnProperty("llmGeneratorAbort")) {
            object.llmGeneratorAbort = $root.LLM_Generator_Abort_Request.toObject(message.llmGeneratorAbort, options);
            if (options.oneofs)
                object.request = "llmGeneratorAbort";
        }
        if (message.llmGeneratorRelease != null && message.hasOwnProperty("llmGeneratorRelease")) {
            object.llmGeneratorRelease = $root.LLM_Generator_Release_Request.toObject(message.llmGeneratorRelease, options);
            if (options.oneofs)
                object.request = "llmGeneratorRelease";
        }
        if (message.llmTokenize != null && message.hasOwnProperty("llmTokenize")) {
            object.llmTokenize = $root.LLM_Tokenize_Request.toObject(message.llmTokenize, options);
            if (options.oneofs)
                object.request = "llmTokenize";
        }
        if (message.llmGetContext != null && message.hasOwnProperty("llmGetContext")) {
            object.llmGetContext = $root.LLM_Get_Context_Request.toObject(message.llmGetContext, options);
            if (options.oneofs)
                object.request = "llmGetContext";
        }
        if (message.llmSetContext != null && message.hasOwnProperty("llmSetContext")) {
            object.llmSetContext = $root.LLM_Set_Context_Request.toObject(message.llmSetContext, options);
            if (options.oneofs)
                object.request = "llmSetContext";
        }
        if (message.llmClearContext != null && message.hasOwnProperty("llmClearContext")) {
            object.llmClearContext = $root.LLM_Clear_Context_Request.toObject(message.llmClearContext, options);
            if (options.oneofs)
                object.request = "llmClearContext";
        }
        if (message.llmSetEndOfGenerationSequence != null && message.hasOwnProperty("llmSetEndOfGenerationSequence")) {
            object.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Request.toObject(message.llmSetEndOfGenerationSequence, options);
            if (options.oneofs)
                object.request = "llmSetEndOfGenerationSequence";
        }
        if (message.llmGetEndOfGenerationSequence != null && message.hasOwnProperty("llmGetEndOfGenerationSequence")) {
            object.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Request.toObject(message.llmGetEndOfGenerationSequence, options);
            if (options.oneofs)
                object.request = "llmGetEndOfGenerationSequence";
        }
        if (message.llmRelease != null && message.hasOwnProperty("llmRelease")) {
            object.llmRelease = $root.LLM_Release_Request.toObject(message.llmRelease, options);
            if (options.oneofs)
                object.request = "llmRelease";
        }
        if (message.llmSetStopTokens != null && message.hasOwnProperty("llmSetStopTokens")) {
            object.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Request.toObject(message.llmSetStopTokens, options);
            if (options.oneofs)
                object.request = "llmSetStopTokens";
        }
        if (message.llmGetStopTokens != null && message.hasOwnProperty("llmGetStopTokens")) {
            object.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Request.toObject(message.llmGetStopTokens, options);
            if (options.oneofs)
                object.request = "llmGetStopTokens";
        }
        if (message.llmGetContextUsageSize != null && message.hasOwnProperty("llmGetContextUsageSize")) {
            object.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Request.toObject(message.llmGetContextUsageSize, options);
            if (options.oneofs)
                object.request = "llmGetContextUsageSize";
        }
        if (message.llmGetMaxContextCapacity != null && message.hasOwnProperty("llmGetMaxContextCapacity")) {
            object.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Request.toObject(message.llmGetMaxContextCapacity, options);
            if (options.oneofs)
                object.request = "llmGetMaxContextCapacity";
        }
        if (message.vlmCreate != null && message.hasOwnProperty("vlmCreate")) {
            object.vlmCreate = $root.VLM_Create_Request.toObject(message.vlmCreate, options);
            if (options.oneofs)
                object.request = "vlmCreate";
        }
        if (message.vlmGeneratorGenerate != null && message.hasOwnProperty("vlmGeneratorGenerate")) {
            object.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Request.toObject(message.vlmGeneratorGenerate, options);
            if (options.oneofs)
                object.request = "vlmGeneratorGenerate";
        }
        if (message.genaiCheckHefExists != null && message.hasOwnProperty("genaiCheckHefExists")) {
            object.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Request.toObject(message.genaiCheckHefExists, options);
            if (options.oneofs)
                object.request = "genaiCheckHefExists";
        }
        if (message.speech2textCreate != null && message.hasOwnProperty("speech2textCreate")) {
            object.speech2textCreate = $root.Speech2Text_Create_Request.toObject(message.speech2textCreate, options);
            if (options.oneofs)
                object.request = "speech2textCreate";
        }
        if (message.speech2textGenerate != null && message.hasOwnProperty("speech2textGenerate")) {
            object.speech2textGenerate = $root.Speech2Text_Generate_Request.toObject(message.speech2textGenerate, options);
            if (options.oneofs)
                object.request = "speech2textGenerate";
        }
        if (message.speech2textRelease != null && message.hasOwnProperty("speech2textRelease")) {
            object.speech2textRelease = $root.Speech2Text_Release_Request.toObject(message.speech2textRelease, options);
            if (options.oneofs)
                object.request = "speech2textRelease";
        }
        if (message.speech2textTokenize != null && message.hasOwnProperty("speech2textTokenize")) {
            object.speech2textTokenize = $root.Speech2Text_Tokenize_Request.toObject(message.speech2textTokenize, options);
            if (options.oneofs)
                object.request = "speech2textTokenize";
        }
        return object;
    };

    /**
     * Converts this GenAIRpcRequest to JSON.
     * @function toJSON
     * @memberof GenAIRpcRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenAIRpcRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GenAIRpcRequest
     * @function getTypeUrl
     * @memberof GenAIRpcRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GenAIRpcRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GenAIRpcRequest";
    };

    return GenAIRpcRequest;
})();

$root.GenAIRpcReply = (function() {

    /**
     * Properties of a GenAIRpcReply.
     * @exports IGenAIRpcReply
     * @interface IGenAIRpcReply
     * @property {ILLM_Create_Reply|null} [llmCreate] GenAIRpcReply llmCreate
     * @property {ILLM_Get_Generator_Params_Reply|null} [llmGetGeneratorParams] GenAIRpcReply llmGetGeneratorParams
     * @property {ILLM_Generator_Create_Reply|null} [llmGeneratorCreate] GenAIRpcReply llmGeneratorCreate
     * @property {ILLM_Generator_Write_Reply|null} [llmGeneratorWrite] GenAIRpcReply llmGeneratorWrite
     * @property {ILLM_Generator_Generate_Reply|null} [llmGeneratorGenerate] GenAIRpcReply llmGeneratorGenerate
     * @property {ILLM_Generator_Read_Reply|null} [llmGeneratorRead] GenAIRpcReply llmGeneratorRead
     * @property {ILLM_Generator_Abort_Reply|null} [llmGeneratorAbort] GenAIRpcReply llmGeneratorAbort
     * @property {ILLM_Generator_Release_Reply|null} [llmGeneratorRelease] GenAIRpcReply llmGeneratorRelease
     * @property {ILLM_Tokenize_Reply|null} [llmTokenize] GenAIRpcReply llmTokenize
     * @property {ILLM_Get_Context_Reply|null} [llmGetContext] GenAIRpcReply llmGetContext
     * @property {ILLM_Set_Context_Reply|null} [llmSetContext] GenAIRpcReply llmSetContext
     * @property {ILLM_Clear_Context_Reply|null} [llmClearContext] GenAIRpcReply llmClearContext
     * @property {ILLM_Set_End_Of_Generation_Sequence_Reply|null} [llmSetEndOfGenerationSequence] GenAIRpcReply llmSetEndOfGenerationSequence
     * @property {ILLM_Get_End_Of_Generation_Sequence_Reply|null} [llmGetEndOfGenerationSequence] GenAIRpcReply llmGetEndOfGenerationSequence
     * @property {ILLM_Release_Reply|null} [llmRelease] GenAIRpcReply llmRelease
     * @property {ILLM_Set_Stop_Tokens_Reply|null} [llmSetStopTokens] GenAIRpcReply llmSetStopTokens
     * @property {ILLM_Get_Stop_Tokens_Reply|null} [llmGetStopTokens] GenAIRpcReply llmGetStopTokens
     * @property {ILLM_Get_Context_Usage_Size_Reply|null} [llmGetContextUsageSize] GenAIRpcReply llmGetContextUsageSize
     * @property {ILLM_Get_Max_Context_Capacity_Reply|null} [llmGetMaxContextCapacity] GenAIRpcReply llmGetMaxContextCapacity
     * @property {IVLM_Create_Reply|null} [vlmCreate] GenAIRpcReply vlmCreate
     * @property {IVLM_Generator_Generate_Reply|null} [vlmGeneratorGenerate] GenAIRpcReply vlmGeneratorGenerate
     * @property {IGenAI_Check_Hef_Exists_Reply|null} [genaiCheckHefExists] GenAIRpcReply genaiCheckHefExists
     * @property {ISpeech2Text_Create_Reply|null} [speech2textCreate] GenAIRpcReply speech2textCreate
     * @property {ISpeech2Text_Generate_Reply|null} [speech2textGenerate] GenAIRpcReply speech2textGenerate
     * @property {ISpeech2Text_Release_Reply|null} [speech2textRelease] GenAIRpcReply speech2textRelease
     * @property {ISpeech2Text_Tokenize_Reply|null} [speech2textTokenize] GenAIRpcReply speech2textTokenize
     */

    /**
     * Constructs a new GenAIRpcReply.
     * @exports GenAIRpcReply
     * @classdesc Represents a GenAIRpcReply.
     * @implements IGenAIRpcReply
     * @constructor
     * @param {IGenAIRpcReply=} [properties] Properties to set
     */
    function GenAIRpcReply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenAIRpcReply llmCreate.
     * @member {ILLM_Create_Reply|null|undefined} llmCreate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmCreate = null;

    /**
     * GenAIRpcReply llmGetGeneratorParams.
     * @member {ILLM_Get_Generator_Params_Reply|null|undefined} llmGetGeneratorParams
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetGeneratorParams = null;

    /**
     * GenAIRpcReply llmGeneratorCreate.
     * @member {ILLM_Generator_Create_Reply|null|undefined} llmGeneratorCreate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorCreate = null;

    /**
     * GenAIRpcReply llmGeneratorWrite.
     * @member {ILLM_Generator_Write_Reply|null|undefined} llmGeneratorWrite
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorWrite = null;

    /**
     * GenAIRpcReply llmGeneratorGenerate.
     * @member {ILLM_Generator_Generate_Reply|null|undefined} llmGeneratorGenerate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorGenerate = null;

    /**
     * GenAIRpcReply llmGeneratorRead.
     * @member {ILLM_Generator_Read_Reply|null|undefined} llmGeneratorRead
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorRead = null;

    /**
     * GenAIRpcReply llmGeneratorAbort.
     * @member {ILLM_Generator_Abort_Reply|null|undefined} llmGeneratorAbort
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorAbort = null;

    /**
     * GenAIRpcReply llmGeneratorRelease.
     * @member {ILLM_Generator_Release_Reply|null|undefined} llmGeneratorRelease
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorRelease = null;

    /**
     * GenAIRpcReply llmTokenize.
     * @member {ILLM_Tokenize_Reply|null|undefined} llmTokenize
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmTokenize = null;

    /**
     * GenAIRpcReply llmGetContext.
     * @member {ILLM_Get_Context_Reply|null|undefined} llmGetContext
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetContext = null;

    /**
     * GenAIRpcReply llmSetContext.
     * @member {ILLM_Set_Context_Reply|null|undefined} llmSetContext
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmSetContext = null;

    /**
     * GenAIRpcReply llmClearContext.
     * @member {ILLM_Clear_Context_Reply|null|undefined} llmClearContext
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmClearContext = null;

    /**
     * GenAIRpcReply llmSetEndOfGenerationSequence.
     * @member {ILLM_Set_End_Of_Generation_Sequence_Reply|null|undefined} llmSetEndOfGenerationSequence
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmSetEndOfGenerationSequence = null;

    /**
     * GenAIRpcReply llmGetEndOfGenerationSequence.
     * @member {ILLM_Get_End_Of_Generation_Sequence_Reply|null|undefined} llmGetEndOfGenerationSequence
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetEndOfGenerationSequence = null;

    /**
     * GenAIRpcReply llmRelease.
     * @member {ILLM_Release_Reply|null|undefined} llmRelease
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmRelease = null;

    /**
     * GenAIRpcReply llmSetStopTokens.
     * @member {ILLM_Set_Stop_Tokens_Reply|null|undefined} llmSetStopTokens
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmSetStopTokens = null;

    /**
     * GenAIRpcReply llmGetStopTokens.
     * @member {ILLM_Get_Stop_Tokens_Reply|null|undefined} llmGetStopTokens
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetStopTokens = null;

    /**
     * GenAIRpcReply llmGetContextUsageSize.
     * @member {ILLM_Get_Context_Usage_Size_Reply|null|undefined} llmGetContextUsageSize
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetContextUsageSize = null;

    /**
     * GenAIRpcReply llmGetMaxContextCapacity.
     * @member {ILLM_Get_Max_Context_Capacity_Reply|null|undefined} llmGetMaxContextCapacity
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetMaxContextCapacity = null;

    /**
     * GenAIRpcReply vlmCreate.
     * @member {IVLM_Create_Reply|null|undefined} vlmCreate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.vlmCreate = null;

    /**
     * GenAIRpcReply vlmGeneratorGenerate.
     * @member {IVLM_Generator_Generate_Reply|null|undefined} vlmGeneratorGenerate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.vlmGeneratorGenerate = null;

    /**
     * GenAIRpcReply genaiCheckHefExists.
     * @member {IGenAI_Check_Hef_Exists_Reply|null|undefined} genaiCheckHefExists
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.genaiCheckHefExists = null;

    /**
     * GenAIRpcReply speech2textCreate.
     * @member {ISpeech2Text_Create_Reply|null|undefined} speech2textCreate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.speech2textCreate = null;

    /**
     * GenAIRpcReply speech2textGenerate.
     * @member {ISpeech2Text_Generate_Reply|null|undefined} speech2textGenerate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.speech2textGenerate = null;

    /**
     * GenAIRpcReply speech2textRelease.
     * @member {ISpeech2Text_Release_Reply|null|undefined} speech2textRelease
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.speech2textRelease = null;

    /**
     * GenAIRpcReply speech2textTokenize.
     * @member {ISpeech2Text_Tokenize_Reply|null|undefined} speech2textTokenize
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.speech2textTokenize = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GenAIRpcReply reply.
     * @member {"llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize"|undefined} reply
     * @memberof GenAIRpcReply
     * @instance
     */
    Object.defineProperty(GenAIRpcReply.prototype, "reply", {
        get: $util.oneOfGetter($oneOfFields = ["llmCreate", "llmGetGeneratorParams", "llmGeneratorCreate", "llmGeneratorWrite", "llmGeneratorGenerate", "llmGeneratorRead", "llmGeneratorAbort", "llmGeneratorRelease", "llmTokenize", "llmGetContext", "llmSetContext", "llmClearContext", "llmSetEndOfGenerationSequence", "llmGetEndOfGenerationSequence", "llmRelease", "llmSetStopTokens", "llmGetStopTokens", "llmGetContextUsageSize", "llmGetMaxContextCapacity", "vlmCreate", "vlmGeneratorGenerate", "genaiCheckHefExists", "speech2textCreate", "speech2textGenerate", "speech2textRelease", "speech2textTokenize"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GenAIRpcReply instance using the specified properties.
     * @function create
     * @memberof GenAIRpcReply
     * @static
     * @param {IGenAIRpcReply=} [properties] Properties to set
     * @returns {GenAIRpcReply} GenAIRpcReply instance
     */
    GenAIRpcReply.create = function create(properties) {
        return new GenAIRpcReply(properties);
    };

    /**
     * Encodes the specified GenAIRpcReply message. Does not implicitly {@link GenAIRpcReply.verify|verify} messages.
     * @function encode
     * @memberof GenAIRpcReply
     * @static
     * @param {IGenAIRpcReply} message GenAIRpcReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAIRpcReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.llmCreate != null && Object.hasOwnProperty.call(message, "llmCreate"))
            $root.LLM_Create_Reply.encode(message.llmCreate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.llmGetGeneratorParams != null && Object.hasOwnProperty.call(message, "llmGetGeneratorParams"))
            $root.LLM_Get_Generator_Params_Reply.encode(message.llmGetGeneratorParams, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.llmGeneratorCreate != null && Object.hasOwnProperty.call(message, "llmGeneratorCreate"))
            $root.LLM_Generator_Create_Reply.encode(message.llmGeneratorCreate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.llmGeneratorWrite != null && Object.hasOwnProperty.call(message, "llmGeneratorWrite"))
            $root.LLM_Generator_Write_Reply.encode(message.llmGeneratorWrite, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.llmGeneratorGenerate != null && Object.hasOwnProperty.call(message, "llmGeneratorGenerate"))
            $root.LLM_Generator_Generate_Reply.encode(message.llmGeneratorGenerate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.llmGeneratorRead != null && Object.hasOwnProperty.call(message, "llmGeneratorRead"))
            $root.LLM_Generator_Read_Reply.encode(message.llmGeneratorRead, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.llmGeneratorAbort != null && Object.hasOwnProperty.call(message, "llmGeneratorAbort"))
            $root.LLM_Generator_Abort_Reply.encode(message.llmGeneratorAbort, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.llmGeneratorRelease != null && Object.hasOwnProperty.call(message, "llmGeneratorRelease"))
            $root.LLM_Generator_Release_Reply.encode(message.llmGeneratorRelease, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.llmTokenize != null && Object.hasOwnProperty.call(message, "llmTokenize"))
            $root.LLM_Tokenize_Reply.encode(message.llmTokenize, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.llmGetContext != null && Object.hasOwnProperty.call(message, "llmGetContext"))
            $root.LLM_Get_Context_Reply.encode(message.llmGetContext, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.llmSetContext != null && Object.hasOwnProperty.call(message, "llmSetContext"))
            $root.LLM_Set_Context_Reply.encode(message.llmSetContext, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.llmClearContext != null && Object.hasOwnProperty.call(message, "llmClearContext"))
            $root.LLM_Clear_Context_Reply.encode(message.llmClearContext, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.llmSetEndOfGenerationSequence != null && Object.hasOwnProperty.call(message, "llmSetEndOfGenerationSequence"))
            $root.LLM_Set_End_Of_Generation_Sequence_Reply.encode(message.llmSetEndOfGenerationSequence, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.llmGetEndOfGenerationSequence != null && Object.hasOwnProperty.call(message, "llmGetEndOfGenerationSequence"))
            $root.LLM_Get_End_Of_Generation_Sequence_Reply.encode(message.llmGetEndOfGenerationSequence, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.llmRelease != null && Object.hasOwnProperty.call(message, "llmRelease"))
            $root.LLM_Release_Reply.encode(message.llmRelease, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.llmSetStopTokens != null && Object.hasOwnProperty.call(message, "llmSetStopTokens"))
            $root.LLM_Set_Stop_Tokens_Reply.encode(message.llmSetStopTokens, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.llmGetStopTokens != null && Object.hasOwnProperty.call(message, "llmGetStopTokens"))
            $root.LLM_Get_Stop_Tokens_Reply.encode(message.llmGetStopTokens, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.llmGetContextUsageSize != null && Object.hasOwnProperty.call(message, "llmGetContextUsageSize"))
            $root.LLM_Get_Context_Usage_Size_Reply.encode(message.llmGetContextUsageSize, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.llmGetMaxContextCapacity != null && Object.hasOwnProperty.call(message, "llmGetMaxContextCapacity"))
            $root.LLM_Get_Max_Context_Capacity_Reply.encode(message.llmGetMaxContextCapacity, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.vlmCreate != null && Object.hasOwnProperty.call(message, "vlmCreate"))
            $root.VLM_Create_Reply.encode(message.vlmCreate, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.vlmGeneratorGenerate != null && Object.hasOwnProperty.call(message, "vlmGeneratorGenerate"))
            $root.VLM_Generator_Generate_Reply.encode(message.vlmGeneratorGenerate, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.genaiCheckHefExists != null && Object.hasOwnProperty.call(message, "genaiCheckHefExists"))
            $root.GenAI_Check_Hef_Exists_Reply.encode(message.genaiCheckHefExists, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.speech2textCreate != null && Object.hasOwnProperty.call(message, "speech2textCreate"))
            $root.Speech2Text_Create_Reply.encode(message.speech2textCreate, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.speech2textGenerate != null && Object.hasOwnProperty.call(message, "speech2textGenerate"))
            $root.Speech2Text_Generate_Reply.encode(message.speech2textGenerate, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.speech2textRelease != null && Object.hasOwnProperty.call(message, "speech2textRelease"))
            $root.Speech2Text_Release_Reply.encode(message.speech2textRelease, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.speech2textTokenize != null && Object.hasOwnProperty.call(message, "speech2textTokenize"))
            $root.Speech2Text_Tokenize_Reply.encode(message.speech2textTokenize, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GenAIRpcReply message, length delimited. Does not implicitly {@link GenAIRpcReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenAIRpcReply
     * @static
     * @param {IGenAIRpcReply} message GenAIRpcReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAIRpcReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenAIRpcReply message from the specified reader or buffer.
     * @function decode
     * @memberof GenAIRpcReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenAIRpcReply} GenAIRpcReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAIRpcReply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenAIRpcReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.llmCreate = $root.LLM_Create_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.llmGeneratorCreate = $root.LLM_Generator_Create_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.llmGeneratorWrite = $root.LLM_Generator_Write_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.llmGeneratorGenerate = $root.LLM_Generator_Generate_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.llmGeneratorRead = $root.LLM_Generator_Read_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.llmGeneratorAbort = $root.LLM_Generator_Abort_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.llmGeneratorRelease = $root.LLM_Generator_Release_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.llmTokenize = $root.LLM_Tokenize_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.llmGetContext = $root.LLM_Get_Context_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.llmSetContext = $root.LLM_Set_Context_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.llmClearContext = $root.LLM_Clear_Context_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.llmRelease = $root.LLM_Release_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 17: {
                    message.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 18: {
                    message.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 19: {
                    message.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 20: {
                    message.vlmCreate = $root.VLM_Create_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 21: {
                    message.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 22: {
                    message.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 23: {
                    message.speech2textCreate = $root.Speech2Text_Create_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 24: {
                    message.speech2textGenerate = $root.Speech2Text_Generate_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 25: {
                    message.speech2textRelease = $root.Speech2Text_Release_Reply.decode(reader, reader.uint32());
                    break;
                }
            case 26: {
                    message.speech2textTokenize = $root.Speech2Text_Tokenize_Reply.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenAIRpcReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenAIRpcReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenAIRpcReply} GenAIRpcReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAIRpcReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenAIRpcReply message.
     * @function verify
     * @memberof GenAIRpcReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenAIRpcReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.llmCreate != null && message.hasOwnProperty("llmCreate")) {
            properties.reply = 1;
            {
                var error = $root.LLM_Create_Reply.verify(message.llmCreate);
                if (error)
                    return "llmCreate." + error;
            }
        }
        if (message.llmGetGeneratorParams != null && message.hasOwnProperty("llmGetGeneratorParams")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Generator_Params_Reply.verify(message.llmGetGeneratorParams);
                if (error)
                    return "llmGetGeneratorParams." + error;
            }
        }
        if (message.llmGeneratorCreate != null && message.hasOwnProperty("llmGeneratorCreate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Create_Reply.verify(message.llmGeneratorCreate);
                if (error)
                    return "llmGeneratorCreate." + error;
            }
        }
        if (message.llmGeneratorWrite != null && message.hasOwnProperty("llmGeneratorWrite")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Write_Reply.verify(message.llmGeneratorWrite);
                if (error)
                    return "llmGeneratorWrite." + error;
            }
        }
        if (message.llmGeneratorGenerate != null && message.hasOwnProperty("llmGeneratorGenerate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Generate_Reply.verify(message.llmGeneratorGenerate);
                if (error)
                    return "llmGeneratorGenerate." + error;
            }
        }
        if (message.llmGeneratorRead != null && message.hasOwnProperty("llmGeneratorRead")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Read_Reply.verify(message.llmGeneratorRead);
                if (error)
                    return "llmGeneratorRead." + error;
            }
        }
        if (message.llmGeneratorAbort != null && message.hasOwnProperty("llmGeneratorAbort")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Abort_Reply.verify(message.llmGeneratorAbort);
                if (error)
                    return "llmGeneratorAbort." + error;
            }
        }
        if (message.llmGeneratorRelease != null && message.hasOwnProperty("llmGeneratorRelease")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Release_Reply.verify(message.llmGeneratorRelease);
                if (error)
                    return "llmGeneratorRelease." + error;
            }
        }
        if (message.llmTokenize != null && message.hasOwnProperty("llmTokenize")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Tokenize_Reply.verify(message.llmTokenize);
                if (error)
                    return "llmTokenize." + error;
            }
        }
        if (message.llmGetContext != null && message.hasOwnProperty("llmGetContext")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Context_Reply.verify(message.llmGetContext);
                if (error)
                    return "llmGetContext." + error;
            }
        }
        if (message.llmSetContext != null && message.hasOwnProperty("llmSetContext")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Set_Context_Reply.verify(message.llmSetContext);
                if (error)
                    return "llmSetContext." + error;
            }
        }
        if (message.llmClearContext != null && message.hasOwnProperty("llmClearContext")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Clear_Context_Reply.verify(message.llmClearContext);
                if (error)
                    return "llmClearContext." + error;
            }
        }
        if (message.llmSetEndOfGenerationSequence != null && message.hasOwnProperty("llmSetEndOfGenerationSequence")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Set_End_Of_Generation_Sequence_Reply.verify(message.llmSetEndOfGenerationSequence);
                if (error)
                    return "llmSetEndOfGenerationSequence." + error;
            }
        }
        if (message.llmGetEndOfGenerationSequence != null && message.hasOwnProperty("llmGetEndOfGenerationSequence")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_End_Of_Generation_Sequence_Reply.verify(message.llmGetEndOfGenerationSequence);
                if (error)
                    return "llmGetEndOfGenerationSequence." + error;
            }
        }
        if (message.llmRelease != null && message.hasOwnProperty("llmRelease")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Release_Reply.verify(message.llmRelease);
                if (error)
                    return "llmRelease." + error;
            }
        }
        if (message.llmSetStopTokens != null && message.hasOwnProperty("llmSetStopTokens")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Set_Stop_Tokens_Reply.verify(message.llmSetStopTokens);
                if (error)
                    return "llmSetStopTokens." + error;
            }
        }
        if (message.llmGetStopTokens != null && message.hasOwnProperty("llmGetStopTokens")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Stop_Tokens_Reply.verify(message.llmGetStopTokens);
                if (error)
                    return "llmGetStopTokens." + error;
            }
        }
        if (message.llmGetContextUsageSize != null && message.hasOwnProperty("llmGetContextUsageSize")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Context_Usage_Size_Reply.verify(message.llmGetContextUsageSize);
                if (error)
                    return "llmGetContextUsageSize." + error;
            }
        }
        if (message.llmGetMaxContextCapacity != null && message.hasOwnProperty("llmGetMaxContextCapacity")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Max_Context_Capacity_Reply.verify(message.llmGetMaxContextCapacity);
                if (error)
                    return "llmGetMaxContextCapacity." + error;
            }
        }
        if (message.vlmCreate != null && message.hasOwnProperty("vlmCreate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.VLM_Create_Reply.verify(message.vlmCreate);
                if (error)
                    return "vlmCreate." + error;
            }
        }
        if (message.vlmGeneratorGenerate != null && message.hasOwnProperty("vlmGeneratorGenerate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.VLM_Generator_Generate_Reply.verify(message.vlmGeneratorGenerate);
                if (error)
                    return "vlmGeneratorGenerate." + error;
            }
        }
        if (message.genaiCheckHefExists != null && message.hasOwnProperty("genaiCheckHefExists")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.GenAI_Check_Hef_Exists_Reply.verify(message.genaiCheckHefExists);
                if (error)
                    return "genaiCheckHefExists." + error;
            }
        }
        if (message.speech2textCreate != null && message.hasOwnProperty("speech2textCreate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.Speech2Text_Create_Reply.verify(message.speech2textCreate);
                if (error)
                    return "speech2textCreate." + error;
            }
        }
        if (message.speech2textGenerate != null && message.hasOwnProperty("speech2textGenerate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.Speech2Text_Generate_Reply.verify(message.speech2textGenerate);
                if (error)
                    return "speech2textGenerate." + error;
            }
        }
        if (message.speech2textRelease != null && message.hasOwnProperty("speech2textRelease")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.Speech2Text_Release_Reply.verify(message.speech2textRelease);
                if (error)
                    return "speech2textRelease." + error;
            }
        }
        if (message.speech2textTokenize != null && message.hasOwnProperty("speech2textTokenize")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.Speech2Text_Tokenize_Reply.verify(message.speech2textTokenize);
                if (error)
                    return "speech2textTokenize." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GenAIRpcReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenAIRpcReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenAIRpcReply} GenAIRpcReply
     */
    GenAIRpcReply.fromObject = function fromObject(object) {
        if (object instanceof $root.GenAIRpcReply)
            return object;
        var message = new $root.GenAIRpcReply();
        if (object.llmCreate != null) {
            if (typeof object.llmCreate !== "object")
                throw TypeError(".GenAIRpcReply.llmCreate: object expected");
            message.llmCreate = $root.LLM_Create_Reply.fromObject(object.llmCreate);
        }
        if (object.llmGetGeneratorParams != null) {
            if (typeof object.llmGetGeneratorParams !== "object")
                throw TypeError(".GenAIRpcReply.llmGetGeneratorParams: object expected");
            message.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Reply.fromObject(object.llmGetGeneratorParams);
        }
        if (object.llmGeneratorCreate != null) {
            if (typeof object.llmGeneratorCreate !== "object")
                throw TypeError(".GenAIRpcReply.llmGeneratorCreate: object expected");
            message.llmGeneratorCreate = $root.LLM_Generator_Create_Reply.fromObject(object.llmGeneratorCreate);
        }
        if (object.llmGeneratorWrite != null) {
            if (typeof object.llmGeneratorWrite !== "object")
                throw TypeError(".GenAIRpcReply.llmGeneratorWrite: object expected");
            message.llmGeneratorWrite = $root.LLM_Generator_Write_Reply.fromObject(object.llmGeneratorWrite);
        }
        if (object.llmGeneratorGenerate != null) {
            if (typeof object.llmGeneratorGenerate !== "object")
                throw TypeError(".GenAIRpcReply.llmGeneratorGenerate: object expected");
            message.llmGeneratorGenerate = $root.LLM_Generator_Generate_Reply.fromObject(object.llmGeneratorGenerate);
        }
        if (object.llmGeneratorRead != null) {
            if (typeof object.llmGeneratorRead !== "object")
                throw TypeError(".GenAIRpcReply.llmGeneratorRead: object expected");
            message.llmGeneratorRead = $root.LLM_Generator_Read_Reply.fromObject(object.llmGeneratorRead);
        }
        if (object.llmGeneratorAbort != null) {
            if (typeof object.llmGeneratorAbort !== "object")
                throw TypeError(".GenAIRpcReply.llmGeneratorAbort: object expected");
            message.llmGeneratorAbort = $root.LLM_Generator_Abort_Reply.fromObject(object.llmGeneratorAbort);
        }
        if (object.llmGeneratorRelease != null) {
            if (typeof object.llmGeneratorRelease !== "object")
                throw TypeError(".GenAIRpcReply.llmGeneratorRelease: object expected");
            message.llmGeneratorRelease = $root.LLM_Generator_Release_Reply.fromObject(object.llmGeneratorRelease);
        }
        if (object.llmTokenize != null) {
            if (typeof object.llmTokenize !== "object")
                throw TypeError(".GenAIRpcReply.llmTokenize: object expected");
            message.llmTokenize = $root.LLM_Tokenize_Reply.fromObject(object.llmTokenize);
        }
        if (object.llmGetContext != null) {
            if (typeof object.llmGetContext !== "object")
                throw TypeError(".GenAIRpcReply.llmGetContext: object expected");
            message.llmGetContext = $root.LLM_Get_Context_Reply.fromObject(object.llmGetContext);
        }
        if (object.llmSetContext != null) {
            if (typeof object.llmSetContext !== "object")
                throw TypeError(".GenAIRpcReply.llmSetContext: object expected");
            message.llmSetContext = $root.LLM_Set_Context_Reply.fromObject(object.llmSetContext);
        }
        if (object.llmClearContext != null) {
            if (typeof object.llmClearContext !== "object")
                throw TypeError(".GenAIRpcReply.llmClearContext: object expected");
            message.llmClearContext = $root.LLM_Clear_Context_Reply.fromObject(object.llmClearContext);
        }
        if (object.llmSetEndOfGenerationSequence != null) {
            if (typeof object.llmSetEndOfGenerationSequence !== "object")
                throw TypeError(".GenAIRpcReply.llmSetEndOfGenerationSequence: object expected");
            message.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Reply.fromObject(object.llmSetEndOfGenerationSequence);
        }
        if (object.llmGetEndOfGenerationSequence != null) {
            if (typeof object.llmGetEndOfGenerationSequence !== "object")
                throw TypeError(".GenAIRpcReply.llmGetEndOfGenerationSequence: object expected");
            message.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Reply.fromObject(object.llmGetEndOfGenerationSequence);
        }
        if (object.llmRelease != null) {
            if (typeof object.llmRelease !== "object")
                throw TypeError(".GenAIRpcReply.llmRelease: object expected");
            message.llmRelease = $root.LLM_Release_Reply.fromObject(object.llmRelease);
        }
        if (object.llmSetStopTokens != null) {
            if (typeof object.llmSetStopTokens !== "object")
                throw TypeError(".GenAIRpcReply.llmSetStopTokens: object expected");
            message.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Reply.fromObject(object.llmSetStopTokens);
        }
        if (object.llmGetStopTokens != null) {
            if (typeof object.llmGetStopTokens !== "object")
                throw TypeError(".GenAIRpcReply.llmGetStopTokens: object expected");
            message.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Reply.fromObject(object.llmGetStopTokens);
        }
        if (object.llmGetContextUsageSize != null) {
            if (typeof object.llmGetContextUsageSize !== "object")
                throw TypeError(".GenAIRpcReply.llmGetContextUsageSize: object expected");
            message.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Reply.fromObject(object.llmGetContextUsageSize);
        }
        if (object.llmGetMaxContextCapacity != null) {
            if (typeof object.llmGetMaxContextCapacity !== "object")
                throw TypeError(".GenAIRpcReply.llmGetMaxContextCapacity: object expected");
            message.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Reply.fromObject(object.llmGetMaxContextCapacity);
        }
        if (object.vlmCreate != null) {
            if (typeof object.vlmCreate !== "object")
                throw TypeError(".GenAIRpcReply.vlmCreate: object expected");
            message.vlmCreate = $root.VLM_Create_Reply.fromObject(object.vlmCreate);
        }
        if (object.vlmGeneratorGenerate != null) {
            if (typeof object.vlmGeneratorGenerate !== "object")
                throw TypeError(".GenAIRpcReply.vlmGeneratorGenerate: object expected");
            message.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Reply.fromObject(object.vlmGeneratorGenerate);
        }
        if (object.genaiCheckHefExists != null) {
            if (typeof object.genaiCheckHefExists !== "object")
                throw TypeError(".GenAIRpcReply.genaiCheckHefExists: object expected");
            message.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Reply.fromObject(object.genaiCheckHefExists);
        }
        if (object.speech2textCreate != null) {
            if (typeof object.speech2textCreate !== "object")
                throw TypeError(".GenAIRpcReply.speech2textCreate: object expected");
            message.speech2textCreate = $root.Speech2Text_Create_Reply.fromObject(object.speech2textCreate);
        }
        if (object.speech2textGenerate != null) {
            if (typeof object.speech2textGenerate !== "object")
                throw TypeError(".GenAIRpcReply.speech2textGenerate: object expected");
            message.speech2textGenerate = $root.Speech2Text_Generate_Reply.fromObject(object.speech2textGenerate);
        }
        if (object.speech2textRelease != null) {
            if (typeof object.speech2textRelease !== "object")
                throw TypeError(".GenAIRpcReply.speech2textRelease: object expected");
            message.speech2textRelease = $root.Speech2Text_Release_Reply.fromObject(object.speech2textRelease);
        }
        if (object.speech2textTokenize != null) {
            if (typeof object.speech2textTokenize !== "object")
                throw TypeError(".GenAIRpcReply.speech2textTokenize: object expected");
            message.speech2textTokenize = $root.Speech2Text_Tokenize_Reply.fromObject(object.speech2textTokenize);
        }
        return message;
    };

    /**
     * Creates a plain object from a GenAIRpcReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenAIRpcReply
     * @static
     * @param {GenAIRpcReply} message GenAIRpcReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenAIRpcReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.llmCreate != null && message.hasOwnProperty("llmCreate")) {
            object.llmCreate = $root.LLM_Create_Reply.toObject(message.llmCreate, options);
            if (options.oneofs)
                object.reply = "llmCreate";
        }
        if (message.llmGetGeneratorParams != null && message.hasOwnProperty("llmGetGeneratorParams")) {
            object.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Reply.toObject(message.llmGetGeneratorParams, options);
            if (options.oneofs)
                object.reply = "llmGetGeneratorParams";
        }
        if (message.llmGeneratorCreate != null && message.hasOwnProperty("llmGeneratorCreate")) {
            object.llmGeneratorCreate = $root.LLM_Generator_Create_Reply.toObject(message.llmGeneratorCreate, options);
            if (options.oneofs)
                object.reply = "llmGeneratorCreate";
        }
        if (message.llmGeneratorWrite != null && message.hasOwnProperty("llmGeneratorWrite")) {
            object.llmGeneratorWrite = $root.LLM_Generator_Write_Reply.toObject(message.llmGeneratorWrite, options);
            if (options.oneofs)
                object.reply = "llmGeneratorWrite";
        }
        if (message.llmGeneratorGenerate != null && message.hasOwnProperty("llmGeneratorGenerate")) {
            object.llmGeneratorGenerate = $root.LLM_Generator_Generate_Reply.toObject(message.llmGeneratorGenerate, options);
            if (options.oneofs)
                object.reply = "llmGeneratorGenerate";
        }
        if (message.llmGeneratorRead != null && message.hasOwnProperty("llmGeneratorRead")) {
            object.llmGeneratorRead = $root.LLM_Generator_Read_Reply.toObject(message.llmGeneratorRead, options);
            if (options.oneofs)
                object.reply = "llmGeneratorRead";
        }
        if (message.llmGeneratorAbort != null && message.hasOwnProperty("llmGeneratorAbort")) {
            object.llmGeneratorAbort = $root.LLM_Generator_Abort_Reply.toObject(message.llmGeneratorAbort, options);
            if (options.oneofs)
                object.reply = "llmGeneratorAbort";
        }
        if (message.llmGeneratorRelease != null && message.hasOwnProperty("llmGeneratorRelease")) {
            object.llmGeneratorRelease = $root.LLM_Generator_Release_Reply.toObject(message.llmGeneratorRelease, options);
            if (options.oneofs)
                object.reply = "llmGeneratorRelease";
        }
        if (message.llmTokenize != null && message.hasOwnProperty("llmTokenize")) {
            object.llmTokenize = $root.LLM_Tokenize_Reply.toObject(message.llmTokenize, options);
            if (options.oneofs)
                object.reply = "llmTokenize";
        }
        if (message.llmGetContext != null && message.hasOwnProperty("llmGetContext")) {
            object.llmGetContext = $root.LLM_Get_Context_Reply.toObject(message.llmGetContext, options);
            if (options.oneofs)
                object.reply = "llmGetContext";
        }
        if (message.llmSetContext != null && message.hasOwnProperty("llmSetContext")) {
            object.llmSetContext = $root.LLM_Set_Context_Reply.toObject(message.llmSetContext, options);
            if (options.oneofs)
                object.reply = "llmSetContext";
        }
        if (message.llmClearContext != null && message.hasOwnProperty("llmClearContext")) {
            object.llmClearContext = $root.LLM_Clear_Context_Reply.toObject(message.llmClearContext, options);
            if (options.oneofs)
                object.reply = "llmClearContext";
        }
        if (message.llmSetEndOfGenerationSequence != null && message.hasOwnProperty("llmSetEndOfGenerationSequence")) {
            object.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Reply.toObject(message.llmSetEndOfGenerationSequence, options);
            if (options.oneofs)
                object.reply = "llmSetEndOfGenerationSequence";
        }
        if (message.llmGetEndOfGenerationSequence != null && message.hasOwnProperty("llmGetEndOfGenerationSequence")) {
            object.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Reply.toObject(message.llmGetEndOfGenerationSequence, options);
            if (options.oneofs)
                object.reply = "llmGetEndOfGenerationSequence";
        }
        if (message.llmRelease != null && message.hasOwnProperty("llmRelease")) {
            object.llmRelease = $root.LLM_Release_Reply.toObject(message.llmRelease, options);
            if (options.oneofs)
                object.reply = "llmRelease";
        }
        if (message.llmSetStopTokens != null && message.hasOwnProperty("llmSetStopTokens")) {
            object.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Reply.toObject(message.llmSetStopTokens, options);
            if (options.oneofs)
                object.reply = "llmSetStopTokens";
        }
        if (message.llmGetStopTokens != null && message.hasOwnProperty("llmGetStopTokens")) {
            object.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Reply.toObject(message.llmGetStopTokens, options);
            if (options.oneofs)
                object.reply = "llmGetStopTokens";
        }
        if (message.llmGetContextUsageSize != null && message.hasOwnProperty("llmGetContextUsageSize")) {
            object.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Reply.toObject(message.llmGetContextUsageSize, options);
            if (options.oneofs)
                object.reply = "llmGetContextUsageSize";
        }
        if (message.llmGetMaxContextCapacity != null && message.hasOwnProperty("llmGetMaxContextCapacity")) {
            object.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Reply.toObject(message.llmGetMaxContextCapacity, options);
            if (options.oneofs)
                object.reply = "llmGetMaxContextCapacity";
        }
        if (message.vlmCreate != null && message.hasOwnProperty("vlmCreate")) {
            object.vlmCreate = $root.VLM_Create_Reply.toObject(message.vlmCreate, options);
            if (options.oneofs)
                object.reply = "vlmCreate";
        }
        if (message.vlmGeneratorGenerate != null && message.hasOwnProperty("vlmGeneratorGenerate")) {
            object.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Reply.toObject(message.vlmGeneratorGenerate, options);
            if (options.oneofs)
                object.reply = "vlmGeneratorGenerate";
        }
        if (message.genaiCheckHefExists != null && message.hasOwnProperty("genaiCheckHefExists")) {
            object.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Reply.toObject(message.genaiCheckHefExists, options);
            if (options.oneofs)
                object.reply = "genaiCheckHefExists";
        }
        if (message.speech2textCreate != null && message.hasOwnProperty("speech2textCreate")) {
            object.speech2textCreate = $root.Speech2Text_Create_Reply.toObject(message.speech2textCreate, options);
            if (options.oneofs)
                object.reply = "speech2textCreate";
        }
        if (message.speech2textGenerate != null && message.hasOwnProperty("speech2textGenerate")) {
            object.speech2textGenerate = $root.Speech2Text_Generate_Reply.toObject(message.speech2textGenerate, options);
            if (options.oneofs)
                object.reply = "speech2textGenerate";
        }
        if (message.speech2textRelease != null && message.hasOwnProperty("speech2textRelease")) {
            object.speech2textRelease = $root.Speech2Text_Release_Reply.toObject(message.speech2textRelease, options);
            if (options.oneofs)
                object.reply = "speech2textRelease";
        }
        if (message.speech2textTokenize != null && message.hasOwnProperty("speech2textTokenize")) {
            object.speech2textTokenize = $root.Speech2Text_Tokenize_Reply.toObject(message.speech2textTokenize, options);
            if (options.oneofs)
                object.reply = "speech2textTokenize";
        }
        return object;
    };

    /**
     * Converts this GenAIRpcReply to JSON.
     * @function toJSON
     * @memberof GenAIRpcReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenAIRpcReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GenAIRpcReply
     * @function getTypeUrl
     * @memberof GenAIRpcReply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GenAIRpcReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GenAIRpcReply";
    };

    return GenAIRpcReply;
})();

$root.HefChunkInfo = (function() {

    /**
     * Properties of a HefChunkInfo.
     * @exports IHefChunkInfo
     * @interface IHefChunkInfo
     * @property {string|null} [name] HefChunkInfo name
     * @property {number|Long|null} [size] HefChunkInfo size
     * @property {number|Long|null} [offset] HefChunkInfo offset
     */

    /**
     * Constructs a new HefChunkInfo.
     * @exports HefChunkInfo
     * @classdesc Represents a HefChunkInfo.
     * @implements IHefChunkInfo
     * @constructor
     * @param {IHefChunkInfo=} [properties] Properties to set
     */
    function HefChunkInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HefChunkInfo name.
     * @member {string} name
     * @memberof HefChunkInfo
     * @instance
     */
    HefChunkInfo.prototype.name = "";

    /**
     * HefChunkInfo size.
     * @member {number|Long} size
     * @memberof HefChunkInfo
     * @instance
     */
    HefChunkInfo.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * HefChunkInfo offset.
     * @member {number|Long} offset
     * @memberof HefChunkInfo
     * @instance
     */
    HefChunkInfo.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new HefChunkInfo instance using the specified properties.
     * @function create
     * @memberof HefChunkInfo
     * @static
     * @param {IHefChunkInfo=} [properties] Properties to set
     * @returns {HefChunkInfo} HefChunkInfo instance
     */
    HefChunkInfo.create = function create(properties) {
        return new HefChunkInfo(properties);
    };

    /**
     * Encodes the specified HefChunkInfo message. Does not implicitly {@link HefChunkInfo.verify|verify} messages.
     * @function encode
     * @memberof HefChunkInfo
     * @static
     * @param {IHefChunkInfo} message HefChunkInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HefChunkInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.size);
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.offset);
        return writer;
    };

    /**
     * Encodes the specified HefChunkInfo message, length delimited. Does not implicitly {@link HefChunkInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HefChunkInfo
     * @static
     * @param {IHefChunkInfo} message HefChunkInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HefChunkInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HefChunkInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HefChunkInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HefChunkInfo} HefChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HefChunkInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HefChunkInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.size = reader.uint64();
                    break;
                }
            case 3: {
                    message.offset = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HefChunkInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HefChunkInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HefChunkInfo} HefChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HefChunkInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HefChunkInfo message.
     * @function verify
     * @memberof HefChunkInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HefChunkInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.size != null && message.hasOwnProperty("size"))
            if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                return "size: integer|Long expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset) && !(message.offset && $util.isInteger(message.offset.low) && $util.isInteger(message.offset.high)))
                return "offset: integer|Long expected";
        return null;
    };

    /**
     * Creates a HefChunkInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HefChunkInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HefChunkInfo} HefChunkInfo
     */
    HefChunkInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.HefChunkInfo)
            return object;
        var message = new $root.HefChunkInfo();
        if (object.name != null)
            message.name = String(object.name);
        if (object.size != null)
            if ($util.Long)
                (message.size = $util.Long.fromValue(object.size)).unsigned = true;
            else if (typeof object.size === "string")
                message.size = parseInt(object.size, 10);
            else if (typeof object.size === "number")
                message.size = object.size;
            else if (typeof object.size === "object")
                message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
        if (object.offset != null)
            if ($util.Long)
                (message.offset = $util.Long.fromValue(object.offset)).unsigned = true;
            else if (typeof object.offset === "string")
                message.offset = parseInt(object.offset, 10);
            else if (typeof object.offset === "number")
                message.offset = object.offset;
            else if (typeof object.offset === "object")
                message.offset = new $util.LongBits(object.offset.low >>> 0, object.offset.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a HefChunkInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HefChunkInfo
     * @static
     * @param {HefChunkInfo} message HefChunkInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HefChunkInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.size = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.offset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.offset = options.longs === String ? "0" : 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.size != null && message.hasOwnProperty("size"))
            if (typeof message.size === "number")
                object.size = options.longs === String ? String(message.size) : message.size;
            else
                object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (typeof message.offset === "number")
                object.offset = options.longs === String ? String(message.offset) : message.offset;
            else
                object.offset = options.longs === String ? $util.Long.prototype.toString.call(message.offset) : options.longs === Number ? new $util.LongBits(message.offset.low >>> 0, message.offset.high >>> 0).toNumber(true) : message.offset;
        return object;
    };

    /**
     * Converts this HefChunkInfo to JSON.
     * @function toJSON
     * @memberof HefChunkInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HefChunkInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HefChunkInfo
     * @function getTypeUrl
     * @memberof HefChunkInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HefChunkInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HefChunkInfo";
    };

    return HefChunkInfo;
})();

$root.LLM_Create_Request = (function() {

    /**
     * Properties of a LLM_Create_Request.
     * @exports ILLM_Create_Request
     * @interface ILLM_Create_Request
     * @property {string|null} [loraName] LLM_Create_Request loraName
     * @property {string|null} [hefPath] LLM_Create_Request hefPath
     * @property {string|null} [groupId] LLM_Create_Request groupId
     * @property {Array.<IHefChunkInfo>|null} [chunksToTransfer] LLM_Create_Request chunksToTransfer
     * @property {boolean|null} [tokenizerOnHost] LLM_Create_Request tokenizerOnHost
     * @property {number|Long|null} [totalHefSize] LLM_Create_Request totalHefSize
     */

    /**
     * Constructs a new LLM_Create_Request.
     * @exports LLM_Create_Request
     * @classdesc Represents a LLM_Create_Request.
     * @implements ILLM_Create_Request
     * @constructor
     * @param {ILLM_Create_Request=} [properties] Properties to set
     */
    function LLM_Create_Request(properties) {
        this.chunksToTransfer = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Create_Request loraName.
     * @member {string} loraName
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.loraName = "";

    /**
     * LLM_Create_Request hefPath.
     * @member {string} hefPath
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.hefPath = "";

    /**
     * LLM_Create_Request groupId.
     * @member {string} groupId
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.groupId = "";

    /**
     * LLM_Create_Request chunksToTransfer.
     * @member {Array.<IHefChunkInfo>} chunksToTransfer
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.chunksToTransfer = $util.emptyArray;

    /**
     * LLM_Create_Request tokenizerOnHost.
     * @member {boolean} tokenizerOnHost
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.tokenizerOnHost = false;

    /**
     * LLM_Create_Request totalHefSize.
     * @member {number|Long} totalHefSize
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.totalHefSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new LLM_Create_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Create_Request
     * @static
     * @param {ILLM_Create_Request=} [properties] Properties to set
     * @returns {LLM_Create_Request} LLM_Create_Request instance
     */
    LLM_Create_Request.create = function create(properties) {
        return new LLM_Create_Request(properties);
    };

    /**
     * Encodes the specified LLM_Create_Request message. Does not implicitly {@link LLM_Create_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Create_Request
     * @static
     * @param {ILLM_Create_Request} message LLM_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Create_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.loraName != null && Object.hasOwnProperty.call(message, "loraName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.loraName);
        if (message.hefPath != null && Object.hasOwnProperty.call(message, "hefPath"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.hefPath);
        if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.groupId);
        if (message.chunksToTransfer != null && message.chunksToTransfer.length)
            for (var i = 0; i < message.chunksToTransfer.length; ++i)
                $root.HefChunkInfo.encode(message.chunksToTransfer[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.tokenizerOnHost != null && Object.hasOwnProperty.call(message, "tokenizerOnHost"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.tokenizerOnHost);
        if (message.totalHefSize != null && Object.hasOwnProperty.call(message, "totalHefSize"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.totalHefSize);
        return writer;
    };

    /**
     * Encodes the specified LLM_Create_Request message, length delimited. Does not implicitly {@link LLM_Create_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Create_Request
     * @static
     * @param {ILLM_Create_Request} message LLM_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Create_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Create_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Create_Request} LLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Create_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Create_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.loraName = reader.string();
                    break;
                }
            case 2: {
                    message.hefPath = reader.string();
                    break;
                }
            case 3: {
                    message.groupId = reader.string();
                    break;
                }
            case 4: {
                    if (!(message.chunksToTransfer && message.chunksToTransfer.length))
                        message.chunksToTransfer = [];
                    message.chunksToTransfer.push($root.HefChunkInfo.decode(reader, reader.uint32()));
                    break;
                }
            case 5: {
                    message.tokenizerOnHost = reader.bool();
                    break;
                }
            case 6: {
                    message.totalHefSize = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Create_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Create_Request} LLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Create_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Create_Request message.
     * @function verify
     * @memberof LLM_Create_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Create_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.loraName != null && message.hasOwnProperty("loraName"))
            if (!$util.isString(message.loraName))
                return "loraName: string expected";
        if (message.hefPath != null && message.hasOwnProperty("hefPath"))
            if (!$util.isString(message.hefPath))
                return "hefPath: string expected";
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            if (!$util.isString(message.groupId))
                return "groupId: string expected";
        if (message.chunksToTransfer != null && message.hasOwnProperty("chunksToTransfer")) {
            if (!Array.isArray(message.chunksToTransfer))
                return "chunksToTransfer: array expected";
            for (var i = 0; i < message.chunksToTransfer.length; ++i) {
                var error = $root.HefChunkInfo.verify(message.chunksToTransfer[i]);
                if (error)
                    return "chunksToTransfer." + error;
            }
        }
        if (message.tokenizerOnHost != null && message.hasOwnProperty("tokenizerOnHost"))
            if (typeof message.tokenizerOnHost !== "boolean")
                return "tokenizerOnHost: boolean expected";
        if (message.totalHefSize != null && message.hasOwnProperty("totalHefSize"))
            if (!$util.isInteger(message.totalHefSize) && !(message.totalHefSize && $util.isInteger(message.totalHefSize.low) && $util.isInteger(message.totalHefSize.high)))
                return "totalHefSize: integer|Long expected";
        return null;
    };

    /**
     * Creates a LLM_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Create_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Create_Request} LLM_Create_Request
     */
    LLM_Create_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Create_Request)
            return object;
        var message = new $root.LLM_Create_Request();
        if (object.loraName != null)
            message.loraName = String(object.loraName);
        if (object.hefPath != null)
            message.hefPath = String(object.hefPath);
        if (object.groupId != null)
            message.groupId = String(object.groupId);
        if (object.chunksToTransfer) {
            if (!Array.isArray(object.chunksToTransfer))
                throw TypeError(".LLM_Create_Request.chunksToTransfer: array expected");
            message.chunksToTransfer = [];
            for (var i = 0; i < object.chunksToTransfer.length; ++i) {
                if (typeof object.chunksToTransfer[i] !== "object")
                    throw TypeError(".LLM_Create_Request.chunksToTransfer: object expected");
                message.chunksToTransfer[i] = $root.HefChunkInfo.fromObject(object.chunksToTransfer[i]);
            }
        }
        if (object.tokenizerOnHost != null)
            message.tokenizerOnHost = Boolean(object.tokenizerOnHost);
        if (object.totalHefSize != null)
            if ($util.Long)
                (message.totalHefSize = $util.Long.fromValue(object.totalHefSize)).unsigned = true;
            else if (typeof object.totalHefSize === "string")
                message.totalHefSize = parseInt(object.totalHefSize, 10);
            else if (typeof object.totalHefSize === "number")
                message.totalHefSize = object.totalHefSize;
            else if (typeof object.totalHefSize === "object")
                message.totalHefSize = new $util.LongBits(object.totalHefSize.low >>> 0, object.totalHefSize.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a LLM_Create_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Create_Request
     * @static
     * @param {LLM_Create_Request} message LLM_Create_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Create_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.chunksToTransfer = [];
        if (options.defaults) {
            object.loraName = "";
            object.hefPath = "";
            object.groupId = "";
            object.tokenizerOnHost = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.totalHefSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalHefSize = options.longs === String ? "0" : 0;
        }
        if (message.loraName != null && message.hasOwnProperty("loraName"))
            object.loraName = message.loraName;
        if (message.hefPath != null && message.hasOwnProperty("hefPath"))
            object.hefPath = message.hefPath;
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        if (message.chunksToTransfer && message.chunksToTransfer.length) {
            object.chunksToTransfer = [];
            for (var j = 0; j < message.chunksToTransfer.length; ++j)
                object.chunksToTransfer[j] = $root.HefChunkInfo.toObject(message.chunksToTransfer[j], options);
        }
        if (message.tokenizerOnHost != null && message.hasOwnProperty("tokenizerOnHost"))
            object.tokenizerOnHost = message.tokenizerOnHost;
        if (message.totalHefSize != null && message.hasOwnProperty("totalHefSize"))
            if (typeof message.totalHefSize === "number")
                object.totalHefSize = options.longs === String ? String(message.totalHefSize) : message.totalHefSize;
            else
                object.totalHefSize = options.longs === String ? $util.Long.prototype.toString.call(message.totalHefSize) : options.longs === Number ? new $util.LongBits(message.totalHefSize.low >>> 0, message.totalHefSize.high >>> 0).toNumber(true) : message.totalHefSize;
        return object;
    };

    /**
     * Converts this LLM_Create_Request to JSON.
     * @function toJSON
     * @memberof LLM_Create_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Create_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Create_Request
     * @function getTypeUrl
     * @memberof LLM_Create_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Create_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Create_Request";
    };

    return LLM_Create_Request;
})();

$root.LLM_Create_Reply = (function() {

    /**
     * Properties of a LLM_Create_Reply.
     * @exports ILLM_Create_Reply
     * @interface ILLM_Create_Reply
     * @property {number|null} [status] LLM_Create_Reply status
     * @property {string|null} [promptTemplate] LLM_Create_Reply promptTemplate
     * @property {number|null} [embeddingFeatures] LLM_Create_Reply embeddingFeatures
     */

    /**
     * Constructs a new LLM_Create_Reply.
     * @exports LLM_Create_Reply
     * @classdesc Represents a LLM_Create_Reply.
     * @implements ILLM_Create_Reply
     * @constructor
     * @param {ILLM_Create_Reply=} [properties] Properties to set
     */
    function LLM_Create_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Create_Reply status.
     * @member {number} status
     * @memberof LLM_Create_Reply
     * @instance
     */
    LLM_Create_Reply.prototype.status = 0;

    /**
     * LLM_Create_Reply promptTemplate.
     * @member {string} promptTemplate
     * @memberof LLM_Create_Reply
     * @instance
     */
    LLM_Create_Reply.prototype.promptTemplate = "";

    /**
     * LLM_Create_Reply embeddingFeatures.
     * @member {number} embeddingFeatures
     * @memberof LLM_Create_Reply
     * @instance
     */
    LLM_Create_Reply.prototype.embeddingFeatures = 0;

    /**
     * Creates a new LLM_Create_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Create_Reply
     * @static
     * @param {ILLM_Create_Reply=} [properties] Properties to set
     * @returns {LLM_Create_Reply} LLM_Create_Reply instance
     */
    LLM_Create_Reply.create = function create(properties) {
        return new LLM_Create_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Create_Reply message. Does not implicitly {@link LLM_Create_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Create_Reply
     * @static
     * @param {ILLM_Create_Reply} message LLM_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Create_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.promptTemplate != null && Object.hasOwnProperty.call(message, "promptTemplate"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.promptTemplate);
        if (message.embeddingFeatures != null && Object.hasOwnProperty.call(message, "embeddingFeatures"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.embeddingFeatures);
        return writer;
    };

    /**
     * Encodes the specified LLM_Create_Reply message, length delimited. Does not implicitly {@link LLM_Create_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Create_Reply
     * @static
     * @param {ILLM_Create_Reply} message LLM_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Create_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Create_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Create_Reply} LLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Create_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Create_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            case 2: {
                    message.promptTemplate = reader.string();
                    break;
                }
            case 3: {
                    message.embeddingFeatures = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Create_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Create_Reply} LLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Create_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Create_Reply message.
     * @function verify
     * @memberof LLM_Create_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Create_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.promptTemplate != null && message.hasOwnProperty("promptTemplate"))
            if (!$util.isString(message.promptTemplate))
                return "promptTemplate: string expected";
        if (message.embeddingFeatures != null && message.hasOwnProperty("embeddingFeatures"))
            if (!$util.isInteger(message.embeddingFeatures))
                return "embeddingFeatures: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Create_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Create_Reply} LLM_Create_Reply
     */
    LLM_Create_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Create_Reply)
            return object;
        var message = new $root.LLM_Create_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        if (object.promptTemplate != null)
            message.promptTemplate = String(object.promptTemplate);
        if (object.embeddingFeatures != null)
            message.embeddingFeatures = object.embeddingFeatures >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Create_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Create_Reply
     * @static
     * @param {LLM_Create_Reply} message LLM_Create_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Create_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.promptTemplate = "";
            object.embeddingFeatures = 0;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.promptTemplate != null && message.hasOwnProperty("promptTemplate"))
            object.promptTemplate = message.promptTemplate;
        if (message.embeddingFeatures != null && message.hasOwnProperty("embeddingFeatures"))
            object.embeddingFeatures = message.embeddingFeatures;
        return object;
    };

    /**
     * Converts this LLM_Create_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Create_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Create_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Create_Reply
     * @function getTypeUrl
     * @memberof LLM_Create_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Create_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Create_Reply";
    };

    return LLM_Create_Reply;
})();

$root.LLM_Get_Generator_Params_Request = (function() {

    /**
     * Properties of a LLM_Get_Generator_Params_Request.
     * @exports ILLM_Get_Generator_Params_Request
     * @interface ILLM_Get_Generator_Params_Request
     */

    /**
     * Constructs a new LLM_Get_Generator_Params_Request.
     * @exports LLM_Get_Generator_Params_Request
     * @classdesc Represents a LLM_Get_Generator_Params_Request.
     * @implements ILLM_Get_Generator_Params_Request
     * @constructor
     * @param {ILLM_Get_Generator_Params_Request=} [properties] Properties to set
     */
    function LLM_Get_Generator_Params_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Get_Generator_Params_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {ILLM_Get_Generator_Params_Request=} [properties] Properties to set
     * @returns {LLM_Get_Generator_Params_Request} LLM_Get_Generator_Params_Request instance
     */
    LLM_Get_Generator_Params_Request.create = function create(properties) {
        return new LLM_Get_Generator_Params_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Generator_Params_Request message. Does not implicitly {@link LLM_Get_Generator_Params_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {ILLM_Get_Generator_Params_Request} message LLM_Get_Generator_Params_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Generator_Params_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Generator_Params_Request message, length delimited. Does not implicitly {@link LLM_Get_Generator_Params_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {ILLM_Get_Generator_Params_Request} message LLM_Get_Generator_Params_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Generator_Params_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Generator_Params_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Generator_Params_Request} LLM_Get_Generator_Params_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Generator_Params_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Generator_Params_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Generator_Params_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Generator_Params_Request} LLM_Get_Generator_Params_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Generator_Params_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Generator_Params_Request message.
     * @function verify
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Generator_Params_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Generator_Params_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Generator_Params_Request} LLM_Get_Generator_Params_Request
     */
    LLM_Get_Generator_Params_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Generator_Params_Request)
            return object;
        return new $root.LLM_Get_Generator_Params_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Generator_Params_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {LLM_Get_Generator_Params_Request} message LLM_Get_Generator_Params_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Generator_Params_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Get_Generator_Params_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Generator_Params_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Generator_Params_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Generator_Params_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Generator_Params_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Generator_Params_Request";
    };

    return LLM_Get_Generator_Params_Request;
})();

$root.LLMGeneratorParams = (function() {

    /**
     * Properties of a LLMGeneratorParams.
     * @exports ILLMGeneratorParams
     * @interface ILLMGeneratorParams
     * @property {number|null} [temperature] LLMGeneratorParams temperature
     * @property {number|null} [topP] LLMGeneratorParams topP
     * @property {number|null} [topK] LLMGeneratorParams topK
     * @property {number|null} [frequencyPenalty] LLMGeneratorParams frequencyPenalty
     * @property {number|null} [maxGeneratedTokens] LLMGeneratorParams maxGeneratedTokens
     * @property {boolean|null} [doSample] LLMGeneratorParams doSample
     * @property {number|null} [seed] LLMGeneratorParams seed
     */

    /**
     * Constructs a new LLMGeneratorParams.
     * @exports LLMGeneratorParams
     * @classdesc Represents a LLMGeneratorParams.
     * @implements ILLMGeneratorParams
     * @constructor
     * @param {ILLMGeneratorParams=} [properties] Properties to set
     */
    function LLMGeneratorParams(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLMGeneratorParams temperature.
     * @member {number} temperature
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.temperature = 0;

    /**
     * LLMGeneratorParams topP.
     * @member {number} topP
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.topP = 0;

    /**
     * LLMGeneratorParams topK.
     * @member {number} topK
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.topK = 0;

    /**
     * LLMGeneratorParams frequencyPenalty.
     * @member {number} frequencyPenalty
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.frequencyPenalty = 0;

    /**
     * LLMGeneratorParams maxGeneratedTokens.
     * @member {number} maxGeneratedTokens
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.maxGeneratedTokens = 0;

    /**
     * LLMGeneratorParams doSample.
     * @member {boolean} doSample
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.doSample = false;

    /**
     * LLMGeneratorParams seed.
     * @member {number} seed
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.seed = 0;

    /**
     * Creates a new LLMGeneratorParams instance using the specified properties.
     * @function create
     * @memberof LLMGeneratorParams
     * @static
     * @param {ILLMGeneratorParams=} [properties] Properties to set
     * @returns {LLMGeneratorParams} LLMGeneratorParams instance
     */
    LLMGeneratorParams.create = function create(properties) {
        return new LLMGeneratorParams(properties);
    };

    /**
     * Encodes the specified LLMGeneratorParams message. Does not implicitly {@link LLMGeneratorParams.verify|verify} messages.
     * @function encode
     * @memberof LLMGeneratorParams
     * @static
     * @param {ILLMGeneratorParams} message LLMGeneratorParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLMGeneratorParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.temperature);
        if (message.topP != null && Object.hasOwnProperty.call(message, "topP"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.topP);
        if (message.topK != null && Object.hasOwnProperty.call(message, "topK"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.topK);
        if (message.frequencyPenalty != null && Object.hasOwnProperty.call(message, "frequencyPenalty"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.frequencyPenalty);
        if (message.maxGeneratedTokens != null && Object.hasOwnProperty.call(message, "maxGeneratedTokens"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.maxGeneratedTokens);
        if (message.doSample != null && Object.hasOwnProperty.call(message, "doSample"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.doSample);
        if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.seed);
        return writer;
    };

    /**
     * Encodes the specified LLMGeneratorParams message, length delimited. Does not implicitly {@link LLMGeneratorParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLMGeneratorParams
     * @static
     * @param {ILLMGeneratorParams} message LLMGeneratorParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLMGeneratorParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLMGeneratorParams message from the specified reader or buffer.
     * @function decode
     * @memberof LLMGeneratorParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLMGeneratorParams} LLMGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLMGeneratorParams.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLMGeneratorParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.temperature = reader.float();
                    break;
                }
            case 2: {
                    message.topP = reader.float();
                    break;
                }
            case 3: {
                    message.topK = reader.uint32();
                    break;
                }
            case 4: {
                    message.frequencyPenalty = reader.float();
                    break;
                }
            case 5: {
                    message.maxGeneratedTokens = reader.uint32();
                    break;
                }
            case 6: {
                    message.doSample = reader.bool();
                    break;
                }
            case 7: {
                    message.seed = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLMGeneratorParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLMGeneratorParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLMGeneratorParams} LLMGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLMGeneratorParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLMGeneratorParams message.
     * @function verify
     * @memberof LLMGeneratorParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLMGeneratorParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        if (message.topP != null && message.hasOwnProperty("topP"))
            if (typeof message.topP !== "number")
                return "topP: number expected";
        if (message.topK != null && message.hasOwnProperty("topK"))
            if (!$util.isInteger(message.topK))
                return "topK: integer expected";
        if (message.frequencyPenalty != null && message.hasOwnProperty("frequencyPenalty"))
            if (typeof message.frequencyPenalty !== "number")
                return "frequencyPenalty: number expected";
        if (message.maxGeneratedTokens != null && message.hasOwnProperty("maxGeneratedTokens"))
            if (!$util.isInteger(message.maxGeneratedTokens))
                return "maxGeneratedTokens: integer expected";
        if (message.doSample != null && message.hasOwnProperty("doSample"))
            if (typeof message.doSample !== "boolean")
                return "doSample: boolean expected";
        if (message.seed != null && message.hasOwnProperty("seed"))
            if (!$util.isInteger(message.seed))
                return "seed: integer expected";
        return null;
    };

    /**
     * Creates a LLMGeneratorParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLMGeneratorParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLMGeneratorParams} LLMGeneratorParams
     */
    LLMGeneratorParams.fromObject = function fromObject(object) {
        if (object instanceof $root.LLMGeneratorParams)
            return object;
        var message = new $root.LLMGeneratorParams();
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        if (object.topP != null)
            message.topP = Number(object.topP);
        if (object.topK != null)
            message.topK = object.topK >>> 0;
        if (object.frequencyPenalty != null)
            message.frequencyPenalty = Number(object.frequencyPenalty);
        if (object.maxGeneratedTokens != null)
            message.maxGeneratedTokens = object.maxGeneratedTokens >>> 0;
        if (object.doSample != null)
            message.doSample = Boolean(object.doSample);
        if (object.seed != null)
            message.seed = object.seed >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLMGeneratorParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLMGeneratorParams
     * @static
     * @param {LLMGeneratorParams} message LLMGeneratorParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLMGeneratorParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.temperature = 0;
            object.topP = 0;
            object.topK = 0;
            object.frequencyPenalty = 0;
            object.maxGeneratedTokens = 0;
            object.doSample = false;
            object.seed = 0;
        }
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        if (message.topP != null && message.hasOwnProperty("topP"))
            object.topP = options.json && !isFinite(message.topP) ? String(message.topP) : message.topP;
        if (message.topK != null && message.hasOwnProperty("topK"))
            object.topK = message.topK;
        if (message.frequencyPenalty != null && message.hasOwnProperty("frequencyPenalty"))
            object.frequencyPenalty = options.json && !isFinite(message.frequencyPenalty) ? String(message.frequencyPenalty) : message.frequencyPenalty;
        if (message.maxGeneratedTokens != null && message.hasOwnProperty("maxGeneratedTokens"))
            object.maxGeneratedTokens = message.maxGeneratedTokens;
        if (message.doSample != null && message.hasOwnProperty("doSample"))
            object.doSample = message.doSample;
        if (message.seed != null && message.hasOwnProperty("seed"))
            object.seed = message.seed;
        return object;
    };

    /**
     * Converts this LLMGeneratorParams to JSON.
     * @function toJSON
     * @memberof LLMGeneratorParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLMGeneratorParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLMGeneratorParams
     * @function getTypeUrl
     * @memberof LLMGeneratorParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLMGeneratorParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLMGeneratorParams";
    };

    return LLMGeneratorParams;
})();

$root.LLM_Get_Generator_Params_Reply = (function() {

    /**
     * Properties of a LLM_Get_Generator_Params_Reply.
     * @exports ILLM_Get_Generator_Params_Reply
     * @interface ILLM_Get_Generator_Params_Reply
     * @property {ILLMGeneratorParams|null} [generatorParams] LLM_Get_Generator_Params_Reply generatorParams
     * @property {number|null} [status] LLM_Get_Generator_Params_Reply status
     */

    /**
     * Constructs a new LLM_Get_Generator_Params_Reply.
     * @exports LLM_Get_Generator_Params_Reply
     * @classdesc Represents a LLM_Get_Generator_Params_Reply.
     * @implements ILLM_Get_Generator_Params_Reply
     * @constructor
     * @param {ILLM_Get_Generator_Params_Reply=} [properties] Properties to set
     */
    function LLM_Get_Generator_Params_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Get_Generator_Params_Reply generatorParams.
     * @member {ILLMGeneratorParams|null|undefined} generatorParams
     * @memberof LLM_Get_Generator_Params_Reply
     * @instance
     */
    LLM_Get_Generator_Params_Reply.prototype.generatorParams = null;

    /**
     * LLM_Get_Generator_Params_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Generator_Params_Reply
     * @instance
     */
    LLM_Get_Generator_Params_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Get_Generator_Params_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {ILLM_Get_Generator_Params_Reply=} [properties] Properties to set
     * @returns {LLM_Get_Generator_Params_Reply} LLM_Get_Generator_Params_Reply instance
     */
    LLM_Get_Generator_Params_Reply.create = function create(properties) {
        return new LLM_Get_Generator_Params_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Generator_Params_Reply message. Does not implicitly {@link LLM_Get_Generator_Params_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {ILLM_Get_Generator_Params_Reply} message LLM_Get_Generator_Params_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Generator_Params_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.generatorParams != null && Object.hasOwnProperty.call(message, "generatorParams"))
            $root.LLMGeneratorParams.encode(message.generatorParams, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Generator_Params_Reply message, length delimited. Does not implicitly {@link LLM_Get_Generator_Params_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {ILLM_Get_Generator_Params_Reply} message LLM_Get_Generator_Params_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Generator_Params_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Generator_Params_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Generator_Params_Reply} LLM_Get_Generator_Params_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Generator_Params_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Generator_Params_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.generatorParams = $root.LLMGeneratorParams.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Generator_Params_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Generator_Params_Reply} LLM_Get_Generator_Params_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Generator_Params_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Generator_Params_Reply message.
     * @function verify
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Generator_Params_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.generatorParams != null && message.hasOwnProperty("generatorParams")) {
            var error = $root.LLMGeneratorParams.verify(message.generatorParams);
            if (error)
                return "generatorParams." + error;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Generator_Params_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Generator_Params_Reply} LLM_Get_Generator_Params_Reply
     */
    LLM_Get_Generator_Params_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Generator_Params_Reply)
            return object;
        var message = new $root.LLM_Get_Generator_Params_Reply();
        if (object.generatorParams != null) {
            if (typeof object.generatorParams !== "object")
                throw TypeError(".LLM_Get_Generator_Params_Reply.generatorParams: object expected");
            message.generatorParams = $root.LLMGeneratorParams.fromObject(object.generatorParams);
        }
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Generator_Params_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {LLM_Get_Generator_Params_Reply} message LLM_Get_Generator_Params_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Generator_Params_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.generatorParams = null;
            object.status = 0;
        }
        if (message.generatorParams != null && message.hasOwnProperty("generatorParams"))
            object.generatorParams = $root.LLMGeneratorParams.toObject(message.generatorParams, options);
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Get_Generator_Params_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Generator_Params_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Generator_Params_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Generator_Params_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Generator_Params_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Generator_Params_Reply";
    };

    return LLM_Get_Generator_Params_Reply;
})();

$root.LLM_Generator_Create_Request = (function() {

    /**
     * Properties of a LLM_Generator_Create_Request.
     * @exports ILLM_Generator_Create_Request
     * @interface ILLM_Generator_Create_Request
     * @property {ILLMGeneratorParams|null} [generatorParams] LLM_Generator_Create_Request generatorParams
     */

    /**
     * Constructs a new LLM_Generator_Create_Request.
     * @exports LLM_Generator_Create_Request
     * @classdesc Represents a LLM_Generator_Create_Request.
     * @implements ILLM_Generator_Create_Request
     * @constructor
     * @param {ILLM_Generator_Create_Request=} [properties] Properties to set
     */
    function LLM_Generator_Create_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Generator_Create_Request generatorParams.
     * @member {ILLMGeneratorParams|null|undefined} generatorParams
     * @memberof LLM_Generator_Create_Request
     * @instance
     */
    LLM_Generator_Create_Request.prototype.generatorParams = null;

    /**
     * Creates a new LLM_Generator_Create_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {ILLM_Generator_Create_Request=} [properties] Properties to set
     * @returns {LLM_Generator_Create_Request} LLM_Generator_Create_Request instance
     */
    LLM_Generator_Create_Request.create = function create(properties) {
        return new LLM_Generator_Create_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Create_Request message. Does not implicitly {@link LLM_Generator_Create_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {ILLM_Generator_Create_Request} message LLM_Generator_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Create_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.generatorParams != null && Object.hasOwnProperty.call(message, "generatorParams"))
            $root.LLMGeneratorParams.encode(message.generatorParams, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Create_Request message, length delimited. Does not implicitly {@link LLM_Generator_Create_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {ILLM_Generator_Create_Request} message LLM_Generator_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Create_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Create_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Create_Request} LLM_Generator_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Create_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Create_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.generatorParams = $root.LLMGeneratorParams.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Create_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Create_Request} LLM_Generator_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Create_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Create_Request message.
     * @function verify
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Create_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.generatorParams != null && message.hasOwnProperty("generatorParams")) {
            var error = $root.LLMGeneratorParams.verify(message.generatorParams);
            if (error)
                return "generatorParams." + error;
        }
        return null;
    };

    /**
     * Creates a LLM_Generator_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Create_Request} LLM_Generator_Create_Request
     */
    LLM_Generator_Create_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Create_Request)
            return object;
        var message = new $root.LLM_Generator_Create_Request();
        if (object.generatorParams != null) {
            if (typeof object.generatorParams !== "object")
                throw TypeError(".LLM_Generator_Create_Request.generatorParams: object expected");
            message.generatorParams = $root.LLMGeneratorParams.fromObject(object.generatorParams);
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Create_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {LLM_Generator_Create_Request} message LLM_Generator_Create_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Create_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.generatorParams = null;
        if (message.generatorParams != null && message.hasOwnProperty("generatorParams"))
            object.generatorParams = $root.LLMGeneratorParams.toObject(message.generatorParams, options);
        return object;
    };

    /**
     * Converts this LLM_Generator_Create_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Create_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Create_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Create_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Create_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Create_Request";
    };

    return LLM_Generator_Create_Request;
})();

$root.LLM_Generator_Create_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Create_Reply.
     * @exports ILLM_Generator_Create_Reply
     * @interface ILLM_Generator_Create_Reply
     * @property {number|null} [status] LLM_Generator_Create_Reply status
     */

    /**
     * Constructs a new LLM_Generator_Create_Reply.
     * @exports LLM_Generator_Create_Reply
     * @classdesc Represents a LLM_Generator_Create_Reply.
     * @implements ILLM_Generator_Create_Reply
     * @constructor
     * @param {ILLM_Generator_Create_Reply=} [properties] Properties to set
     */
    function LLM_Generator_Create_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Generator_Create_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Create_Reply
     * @instance
     */
    LLM_Generator_Create_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Generator_Create_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {ILLM_Generator_Create_Reply=} [properties] Properties to set
     * @returns {LLM_Generator_Create_Reply} LLM_Generator_Create_Reply instance
     */
    LLM_Generator_Create_Reply.create = function create(properties) {
        return new LLM_Generator_Create_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Create_Reply message. Does not implicitly {@link LLM_Generator_Create_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {ILLM_Generator_Create_Reply} message LLM_Generator_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Create_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Create_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Create_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {ILLM_Generator_Create_Reply} message LLM_Generator_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Create_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Create_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Create_Reply} LLM_Generator_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Create_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Create_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Create_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Create_Reply} LLM_Generator_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Create_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Create_Reply message.
     * @function verify
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Create_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Create_Reply} LLM_Generator_Create_Reply
     */
    LLM_Generator_Create_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Create_Reply)
            return object;
        var message = new $root.LLM_Generator_Create_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Create_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {LLM_Generator_Create_Reply} message LLM_Generator_Create_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Create_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Generator_Create_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Create_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Create_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Create_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Create_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Create_Reply";
    };

    return LLM_Generator_Create_Reply;
})();

$root.LLM_Generator_Write_Request = (function() {

    /**
     * Properties of a LLM_Generator_Write_Request.
     * @exports ILLM_Generator_Write_Request
     * @interface ILLM_Generator_Write_Request
     */

    /**
     * Constructs a new LLM_Generator_Write_Request.
     * @exports LLM_Generator_Write_Request
     * @classdesc Represents a LLM_Generator_Write_Request.
     * @implements ILLM_Generator_Write_Request
     * @constructor
     * @param {ILLM_Generator_Write_Request=} [properties] Properties to set
     */
    function LLM_Generator_Write_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Generator_Write_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {ILLM_Generator_Write_Request=} [properties] Properties to set
     * @returns {LLM_Generator_Write_Request} LLM_Generator_Write_Request instance
     */
    LLM_Generator_Write_Request.create = function create(properties) {
        return new LLM_Generator_Write_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Write_Request message. Does not implicitly {@link LLM_Generator_Write_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {ILLM_Generator_Write_Request} message LLM_Generator_Write_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Write_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Write_Request message, length delimited. Does not implicitly {@link LLM_Generator_Write_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {ILLM_Generator_Write_Request} message LLM_Generator_Write_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Write_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Write_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Write_Request} LLM_Generator_Write_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Write_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Write_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Write_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Write_Request} LLM_Generator_Write_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Write_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Write_Request message.
     * @function verify
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Write_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Write_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Write_Request} LLM_Generator_Write_Request
     */
    LLM_Generator_Write_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Write_Request)
            return object;
        return new $root.LLM_Generator_Write_Request();
    };

    /**
     * Creates a plain object from a LLM_Generator_Write_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {LLM_Generator_Write_Request} message LLM_Generator_Write_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Write_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Generator_Write_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Write_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Write_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Write_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Write_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Write_Request";
    };

    return LLM_Generator_Write_Request;
})();

$root.LLM_Generator_Write_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Write_Reply.
     * @exports ILLM_Generator_Write_Reply
     * @interface ILLM_Generator_Write_Reply
     * @property {number|null} [status] LLM_Generator_Write_Reply status
     */

    /**
     * Constructs a new LLM_Generator_Write_Reply.
     * @exports LLM_Generator_Write_Reply
     * @classdesc Represents a LLM_Generator_Write_Reply.
     * @implements ILLM_Generator_Write_Reply
     * @constructor
     * @param {ILLM_Generator_Write_Reply=} [properties] Properties to set
     */
    function LLM_Generator_Write_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Generator_Write_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Write_Reply
     * @instance
     */
    LLM_Generator_Write_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Generator_Write_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {ILLM_Generator_Write_Reply=} [properties] Properties to set
     * @returns {LLM_Generator_Write_Reply} LLM_Generator_Write_Reply instance
     */
    LLM_Generator_Write_Reply.create = function create(properties) {
        return new LLM_Generator_Write_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Write_Reply message. Does not implicitly {@link LLM_Generator_Write_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {ILLM_Generator_Write_Reply} message LLM_Generator_Write_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Write_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Write_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Write_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {ILLM_Generator_Write_Reply} message LLM_Generator_Write_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Write_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Write_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Write_Reply} LLM_Generator_Write_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Write_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Write_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Write_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Write_Reply} LLM_Generator_Write_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Write_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Write_Reply message.
     * @function verify
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Write_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Write_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Write_Reply} LLM_Generator_Write_Reply
     */
    LLM_Generator_Write_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Write_Reply)
            return object;
        var message = new $root.LLM_Generator_Write_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Write_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {LLM_Generator_Write_Reply} message LLM_Generator_Write_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Write_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Generator_Write_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Write_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Write_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Write_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Write_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Write_Reply";
    };

    return LLM_Generator_Write_Reply;
})();

$root.LLM_Generator_Generate_Request = (function() {

    /**
     * Properties of a LLM_Generator_Generate_Request.
     * @exports ILLM_Generator_Generate_Request
     * @interface ILLM_Generator_Generate_Request
     */

    /**
     * Constructs a new LLM_Generator_Generate_Request.
     * @exports LLM_Generator_Generate_Request
     * @classdesc Represents a LLM_Generator_Generate_Request.
     * @implements ILLM_Generator_Generate_Request
     * @constructor
     * @param {ILLM_Generator_Generate_Request=} [properties] Properties to set
     */
    function LLM_Generator_Generate_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Generator_Generate_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {ILLM_Generator_Generate_Request=} [properties] Properties to set
     * @returns {LLM_Generator_Generate_Request} LLM_Generator_Generate_Request instance
     */
    LLM_Generator_Generate_Request.create = function create(properties) {
        return new LLM_Generator_Generate_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Generate_Request message. Does not implicitly {@link LLM_Generator_Generate_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {ILLM_Generator_Generate_Request} message LLM_Generator_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Generate_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Generate_Request message, length delimited. Does not implicitly {@link LLM_Generator_Generate_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {ILLM_Generator_Generate_Request} message LLM_Generator_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Generate_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Generate_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Generate_Request} LLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Generate_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Generate_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Generate_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Generate_Request} LLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Generate_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Generate_Request message.
     * @function verify
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Generate_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Generate_Request} LLM_Generator_Generate_Request
     */
    LLM_Generator_Generate_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Generate_Request)
            return object;
        return new $root.LLM_Generator_Generate_Request();
    };

    /**
     * Creates a plain object from a LLM_Generator_Generate_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {LLM_Generator_Generate_Request} message LLM_Generator_Generate_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Generate_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Generator_Generate_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Generate_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Generate_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Generate_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Generate_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Generate_Request";
    };

    return LLM_Generator_Generate_Request;
})();

$root.LLM_Generator_Generate_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Generate_Reply.
     * @exports ILLM_Generator_Generate_Reply
     * @interface ILLM_Generator_Generate_Reply
     * @property {number|null} [status] LLM_Generator_Generate_Reply status
     * @property {Array.<number>|null} [initialPrefixTokens] LLM_Generator_Generate_Reply initialPrefixTokens
     */

    /**
     * Constructs a new LLM_Generator_Generate_Reply.
     * @exports LLM_Generator_Generate_Reply
     * @classdesc Represents a LLM_Generator_Generate_Reply.
     * @implements ILLM_Generator_Generate_Reply
     * @constructor
     * @param {ILLM_Generator_Generate_Reply=} [properties] Properties to set
     */
    function LLM_Generator_Generate_Reply(properties) {
        this.initialPrefixTokens = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Generator_Generate_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Generate_Reply
     * @instance
     */
    LLM_Generator_Generate_Reply.prototype.status = 0;

    /**
     * LLM_Generator_Generate_Reply initialPrefixTokens.
     * @member {Array.<number>} initialPrefixTokens
     * @memberof LLM_Generator_Generate_Reply
     * @instance
     */
    LLM_Generator_Generate_Reply.prototype.initialPrefixTokens = $util.emptyArray;

    /**
     * Creates a new LLM_Generator_Generate_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {ILLM_Generator_Generate_Reply=} [properties] Properties to set
     * @returns {LLM_Generator_Generate_Reply} LLM_Generator_Generate_Reply instance
     */
    LLM_Generator_Generate_Reply.create = function create(properties) {
        return new LLM_Generator_Generate_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Generate_Reply message. Does not implicitly {@link LLM_Generator_Generate_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {ILLM_Generator_Generate_Reply} message LLM_Generator_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Generate_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.initialPrefixTokens != null && message.initialPrefixTokens.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.initialPrefixTokens.length; ++i)
                writer.uint32(message.initialPrefixTokens[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Generate_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Generate_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {ILLM_Generator_Generate_Reply} message LLM_Generator_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Generate_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Generate_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Generate_Reply} LLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Generate_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Generate_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            case 2: {
                    if (!(message.initialPrefixTokens && message.initialPrefixTokens.length))
                        message.initialPrefixTokens = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.initialPrefixTokens.push(reader.uint32());
                    } else
                        message.initialPrefixTokens.push(reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Generate_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Generate_Reply} LLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Generate_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Generate_Reply message.
     * @function verify
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Generate_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.initialPrefixTokens != null && message.hasOwnProperty("initialPrefixTokens")) {
            if (!Array.isArray(message.initialPrefixTokens))
                return "initialPrefixTokens: array expected";
            for (var i = 0; i < message.initialPrefixTokens.length; ++i)
                if (!$util.isInteger(message.initialPrefixTokens[i]))
                    return "initialPrefixTokens: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a LLM_Generator_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Generate_Reply} LLM_Generator_Generate_Reply
     */
    LLM_Generator_Generate_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Generate_Reply)
            return object;
        var message = new $root.LLM_Generator_Generate_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        if (object.initialPrefixTokens) {
            if (!Array.isArray(object.initialPrefixTokens))
                throw TypeError(".LLM_Generator_Generate_Reply.initialPrefixTokens: array expected");
            message.initialPrefixTokens = [];
            for (var i = 0; i < object.initialPrefixTokens.length; ++i)
                message.initialPrefixTokens[i] = object.initialPrefixTokens[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Generate_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {LLM_Generator_Generate_Reply} message LLM_Generator_Generate_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Generate_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.initialPrefixTokens = [];
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.initialPrefixTokens && message.initialPrefixTokens.length) {
            object.initialPrefixTokens = [];
            for (var j = 0; j < message.initialPrefixTokens.length; ++j)
                object.initialPrefixTokens[j] = message.initialPrefixTokens[j];
        }
        return object;
    };

    /**
     * Converts this LLM_Generator_Generate_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Generate_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Generate_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Generate_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Generate_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Generate_Reply";
    };

    return LLM_Generator_Generate_Reply;
})();

$root.Embedding = (function() {

    /**
     * Properties of an Embedding.
     * @exports IEmbedding
     * @interface IEmbedding
     * @property {number|null} [type] Embedding type
     * @property {Uint8Array|null} [data] Embedding data
     */

    /**
     * Constructs a new Embedding.
     * @exports Embedding
     * @classdesc Represents an Embedding.
     * @implements IEmbedding
     * @constructor
     * @param {IEmbedding=} [properties] Properties to set
     */
    function Embedding(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Embedding type.
     * @member {number} type
     * @memberof Embedding
     * @instance
     */
    Embedding.prototype.type = 0;

    /**
     * Embedding data.
     * @member {Uint8Array} data
     * @memberof Embedding
     * @instance
     */
    Embedding.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new Embedding instance using the specified properties.
     * @function create
     * @memberof Embedding
     * @static
     * @param {IEmbedding=} [properties] Properties to set
     * @returns {Embedding} Embedding instance
     */
    Embedding.create = function create(properties) {
        return new Embedding(properties);
    };

    /**
     * Encodes the specified Embedding message. Does not implicitly {@link Embedding.verify|verify} messages.
     * @function encode
     * @memberof Embedding
     * @static
     * @param {IEmbedding} message Embedding message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Embedding.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.type);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified Embedding message, length delimited. Does not implicitly {@link Embedding.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Embedding
     * @static
     * @param {IEmbedding} message Embedding message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Embedding.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Embedding message from the specified reader or buffer.
     * @function decode
     * @memberof Embedding
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Embedding} Embedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Embedding.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Embedding();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.uint32();
                    break;
                }
            case 2: {
                    message.data = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Embedding message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Embedding
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Embedding} Embedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Embedding.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Embedding message.
     * @function verify
     * @memberof Embedding
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Embedding.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates an Embedding message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Embedding
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Embedding} Embedding
     */
    Embedding.fromObject = function fromObject(object) {
        if (object instanceof $root.Embedding)
            return object;
        var message = new $root.Embedding();
        if (object.type != null)
            message.type = object.type >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length >= 0)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from an Embedding message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Embedding
     * @static
     * @param {Embedding} message Embedding
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Embedding.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this Embedding to JSON.
     * @function toJSON
     * @memberof Embedding
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Embedding.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Embedding
     * @function getTypeUrl
     * @memberof Embedding
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Embedding.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Embedding";
    };

    return Embedding;
})();

$root.TextGenerationInput = (function() {

    /**
     * Properties of a TextGenerationInput.
     * @exports ITextGenerationInput
     * @interface ITextGenerationInput
     * @property {string|null} [initialPrompt] TextGenerationInput initialPrompt
     * @property {Array.<number>|null} [tokens] TextGenerationInput tokens
     * @property {Array.<IEmbedding>|null} [embeddings] TextGenerationInput embeddings
     */

    /**
     * Constructs a new TextGenerationInput.
     * @exports TextGenerationInput
     * @classdesc Represents a TextGenerationInput.
     * @implements ITextGenerationInput
     * @constructor
     * @param {ITextGenerationInput=} [properties] Properties to set
     */
    function TextGenerationInput(properties) {
        this.tokens = [];
        this.embeddings = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TextGenerationInput initialPrompt.
     * @member {string} initialPrompt
     * @memberof TextGenerationInput
     * @instance
     */
    TextGenerationInput.prototype.initialPrompt = "";

    /**
     * TextGenerationInput tokens.
     * @member {Array.<number>} tokens
     * @memberof TextGenerationInput
     * @instance
     */
    TextGenerationInput.prototype.tokens = $util.emptyArray;

    /**
     * TextGenerationInput embeddings.
     * @member {Array.<IEmbedding>} embeddings
     * @memberof TextGenerationInput
     * @instance
     */
    TextGenerationInput.prototype.embeddings = $util.emptyArray;

    /**
     * Creates a new TextGenerationInput instance using the specified properties.
     * @function create
     * @memberof TextGenerationInput
     * @static
     * @param {ITextGenerationInput=} [properties] Properties to set
     * @returns {TextGenerationInput} TextGenerationInput instance
     */
    TextGenerationInput.create = function create(properties) {
        return new TextGenerationInput(properties);
    };

    /**
     * Encodes the specified TextGenerationInput message. Does not implicitly {@link TextGenerationInput.verify|verify} messages.
     * @function encode
     * @memberof TextGenerationInput
     * @static
     * @param {ITextGenerationInput} message TextGenerationInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextGenerationInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.initialPrompt != null && Object.hasOwnProperty.call(message, "initialPrompt"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.initialPrompt);
        if (message.tokens != null && message.tokens.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.tokens.length; ++i)
                writer.uint32(message.tokens[i]);
            writer.ldelim();
        }
        if (message.embeddings != null && message.embeddings.length)
            for (var i = 0; i < message.embeddings.length; ++i)
                $root.Embedding.encode(message.embeddings[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TextGenerationInput message, length delimited. Does not implicitly {@link TextGenerationInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextGenerationInput
     * @static
     * @param {ITextGenerationInput} message TextGenerationInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextGenerationInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TextGenerationInput message from the specified reader or buffer.
     * @function decode
     * @memberof TextGenerationInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextGenerationInput} TextGenerationInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextGenerationInput.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TextGenerationInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.initialPrompt = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tokens.push(reader.uint32());
                    } else
                        message.tokens.push(reader.uint32());
                    break;
                }
            case 3: {
                    if (!(message.embeddings && message.embeddings.length))
                        message.embeddings = [];
                    message.embeddings.push($root.Embedding.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TextGenerationInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextGenerationInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextGenerationInput} TextGenerationInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextGenerationInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextGenerationInput message.
     * @function verify
     * @memberof TextGenerationInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextGenerationInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.initialPrompt != null && message.hasOwnProperty("initialPrompt"))
            if (!$util.isString(message.initialPrompt))
                return "initialPrompt: string expected";
        if (message.tokens != null && message.hasOwnProperty("tokens")) {
            if (!Array.isArray(message.tokens))
                return "tokens: array expected";
            for (var i = 0; i < message.tokens.length; ++i)
                if (!$util.isInteger(message.tokens[i]))
                    return "tokens: integer[] expected";
        }
        if (message.embeddings != null && message.hasOwnProperty("embeddings")) {
            if (!Array.isArray(message.embeddings))
                return "embeddings: array expected";
            for (var i = 0; i < message.embeddings.length; ++i) {
                var error = $root.Embedding.verify(message.embeddings[i]);
                if (error)
                    return "embeddings." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TextGenerationInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextGenerationInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextGenerationInput} TextGenerationInput
     */
    TextGenerationInput.fromObject = function fromObject(object) {
        if (object instanceof $root.TextGenerationInput)
            return object;
        var message = new $root.TextGenerationInput();
        if (object.initialPrompt != null)
            message.initialPrompt = String(object.initialPrompt);
        if (object.tokens) {
            if (!Array.isArray(object.tokens))
                throw TypeError(".TextGenerationInput.tokens: array expected");
            message.tokens = [];
            for (var i = 0; i < object.tokens.length; ++i)
                message.tokens[i] = object.tokens[i] >>> 0;
        }
        if (object.embeddings) {
            if (!Array.isArray(object.embeddings))
                throw TypeError(".TextGenerationInput.embeddings: array expected");
            message.embeddings = [];
            for (var i = 0; i < object.embeddings.length; ++i) {
                if (typeof object.embeddings[i] !== "object")
                    throw TypeError(".TextGenerationInput.embeddings: object expected");
                message.embeddings[i] = $root.Embedding.fromObject(object.embeddings[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TextGenerationInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextGenerationInput
     * @static
     * @param {TextGenerationInput} message TextGenerationInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextGenerationInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.tokens = [];
            object.embeddings = [];
        }
        if (options.defaults)
            object.initialPrompt = "";
        if (message.initialPrompt != null && message.hasOwnProperty("initialPrompt"))
            object.initialPrompt = message.initialPrompt;
        if (message.tokens && message.tokens.length) {
            object.tokens = [];
            for (var j = 0; j < message.tokens.length; ++j)
                object.tokens[j] = message.tokens[j];
        }
        if (message.embeddings && message.embeddings.length) {
            object.embeddings = [];
            for (var j = 0; j < message.embeddings.length; ++j)
                object.embeddings[j] = $root.Embedding.toObject(message.embeddings[j], options);
        }
        return object;
    };

    /**
     * Converts this TextGenerationInput to JSON.
     * @function toJSON
     * @memberof TextGenerationInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextGenerationInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TextGenerationInput
     * @function getTypeUrl
     * @memberof TextGenerationInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TextGenerationInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TextGenerationInput";
    };

    return TextGenerationInput;
})();

$root.TextGenerationOutput = (function() {

    /**
     * Properties of a TextGenerationOutput.
     * @exports ITextGenerationOutput
     * @interface ITextGenerationOutput
     * @property {string|null} [outputTokenStr] TextGenerationOutput outputTokenStr
     * @property {number|null} [outputTokenId] TextGenerationOutput outputTokenId
     */

    /**
     * Constructs a new TextGenerationOutput.
     * @exports TextGenerationOutput
     * @classdesc Represents a TextGenerationOutput.
     * @implements ITextGenerationOutput
     * @constructor
     * @param {ITextGenerationOutput=} [properties] Properties to set
     */
    function TextGenerationOutput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TextGenerationOutput outputTokenStr.
     * @member {string} outputTokenStr
     * @memberof TextGenerationOutput
     * @instance
     */
    TextGenerationOutput.prototype.outputTokenStr = "";

    /**
     * TextGenerationOutput outputTokenId.
     * @member {number} outputTokenId
     * @memberof TextGenerationOutput
     * @instance
     */
    TextGenerationOutput.prototype.outputTokenId = 0;

    /**
     * Creates a new TextGenerationOutput instance using the specified properties.
     * @function create
     * @memberof TextGenerationOutput
     * @static
     * @param {ITextGenerationOutput=} [properties] Properties to set
     * @returns {TextGenerationOutput} TextGenerationOutput instance
     */
    TextGenerationOutput.create = function create(properties) {
        return new TextGenerationOutput(properties);
    };

    /**
     * Encodes the specified TextGenerationOutput message. Does not implicitly {@link TextGenerationOutput.verify|verify} messages.
     * @function encode
     * @memberof TextGenerationOutput
     * @static
     * @param {ITextGenerationOutput} message TextGenerationOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextGenerationOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.outputTokenStr != null && Object.hasOwnProperty.call(message, "outputTokenStr"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.outputTokenStr);
        if (message.outputTokenId != null && Object.hasOwnProperty.call(message, "outputTokenId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.outputTokenId);
        return writer;
    };

    /**
     * Encodes the specified TextGenerationOutput message, length delimited. Does not implicitly {@link TextGenerationOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextGenerationOutput
     * @static
     * @param {ITextGenerationOutput} message TextGenerationOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextGenerationOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TextGenerationOutput message from the specified reader or buffer.
     * @function decode
     * @memberof TextGenerationOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextGenerationOutput} TextGenerationOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextGenerationOutput.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TextGenerationOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.outputTokenStr = reader.string();
                    break;
                }
            case 2: {
                    message.outputTokenId = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TextGenerationOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextGenerationOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextGenerationOutput} TextGenerationOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextGenerationOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextGenerationOutput message.
     * @function verify
     * @memberof TextGenerationOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextGenerationOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.outputTokenStr != null && message.hasOwnProperty("outputTokenStr"))
            if (!$util.isString(message.outputTokenStr))
                return "outputTokenStr: string expected";
        if (message.outputTokenId != null && message.hasOwnProperty("outputTokenId"))
            if (!$util.isInteger(message.outputTokenId))
                return "outputTokenId: integer expected";
        return null;
    };

    /**
     * Creates a TextGenerationOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextGenerationOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextGenerationOutput} TextGenerationOutput
     */
    TextGenerationOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.TextGenerationOutput)
            return object;
        var message = new $root.TextGenerationOutput();
        if (object.outputTokenStr != null)
            message.outputTokenStr = String(object.outputTokenStr);
        if (object.outputTokenId != null)
            message.outputTokenId = object.outputTokenId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a TextGenerationOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextGenerationOutput
     * @static
     * @param {TextGenerationOutput} message TextGenerationOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextGenerationOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.outputTokenStr = "";
            object.outputTokenId = 0;
        }
        if (message.outputTokenStr != null && message.hasOwnProperty("outputTokenStr"))
            object.outputTokenStr = message.outputTokenStr;
        if (message.outputTokenId != null && message.hasOwnProperty("outputTokenId"))
            object.outputTokenId = message.outputTokenId;
        return object;
    };

    /**
     * Converts this TextGenerationOutput to JSON.
     * @function toJSON
     * @memberof TextGenerationOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextGenerationOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TextGenerationOutput
     * @function getTypeUrl
     * @memberof TextGenerationOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TextGenerationOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TextGenerationOutput";
    };

    return TextGenerationOutput;
})();

$root.LLM_Generator_Read_Request = (function() {

    /**
     * Properties of a LLM_Generator_Read_Request.
     * @exports ILLM_Generator_Read_Request
     * @interface ILLM_Generator_Read_Request
     * @property {number|null} [timeoutMs] LLM_Generator_Read_Request timeoutMs
     * @property {ITextGenerationInput|null} [generationInput] LLM_Generator_Read_Request generationInput
     */

    /**
     * Constructs a new LLM_Generator_Read_Request.
     * @exports LLM_Generator_Read_Request
     * @classdesc Represents a LLM_Generator_Read_Request.
     * @implements ILLM_Generator_Read_Request
     * @constructor
     * @param {ILLM_Generator_Read_Request=} [properties] Properties to set
     */
    function LLM_Generator_Read_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Generator_Read_Request timeoutMs.
     * @member {number} timeoutMs
     * @memberof LLM_Generator_Read_Request
     * @instance
     */
    LLM_Generator_Read_Request.prototype.timeoutMs = 0;

    /**
     * LLM_Generator_Read_Request generationInput.
     * @member {ITextGenerationInput|null|undefined} generationInput
     * @memberof LLM_Generator_Read_Request
     * @instance
     */
    LLM_Generator_Read_Request.prototype.generationInput = null;

    /**
     * Creates a new LLM_Generator_Read_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {ILLM_Generator_Read_Request=} [properties] Properties to set
     * @returns {LLM_Generator_Read_Request} LLM_Generator_Read_Request instance
     */
    LLM_Generator_Read_Request.create = function create(properties) {
        return new LLM_Generator_Read_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Read_Request message. Does not implicitly {@link LLM_Generator_Read_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {ILLM_Generator_Read_Request} message LLM_Generator_Read_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Read_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timeoutMs != null && Object.hasOwnProperty.call(message, "timeoutMs"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timeoutMs);
        if (message.generationInput != null && Object.hasOwnProperty.call(message, "generationInput"))
            $root.TextGenerationInput.encode(message.generationInput, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Read_Request message, length delimited. Does not implicitly {@link LLM_Generator_Read_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {ILLM_Generator_Read_Request} message LLM_Generator_Read_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Read_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Read_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Read_Request} LLM_Generator_Read_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Read_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Read_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.timeoutMs = reader.uint32();
                    break;
                }
            case 2: {
                    message.generationInput = $root.TextGenerationInput.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Read_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Read_Request} LLM_Generator_Read_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Read_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Read_Request message.
     * @function verify
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Read_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timeoutMs != null && message.hasOwnProperty("timeoutMs"))
            if (!$util.isInteger(message.timeoutMs))
                return "timeoutMs: integer expected";
        if (message.generationInput != null && message.hasOwnProperty("generationInput")) {
            var error = $root.TextGenerationInput.verify(message.generationInput);
            if (error)
                return "generationInput." + error;
        }
        return null;
    };

    /**
     * Creates a LLM_Generator_Read_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Read_Request} LLM_Generator_Read_Request
     */
    LLM_Generator_Read_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Read_Request)
            return object;
        var message = new $root.LLM_Generator_Read_Request();
        if (object.timeoutMs != null)
            message.timeoutMs = object.timeoutMs >>> 0;
        if (object.generationInput != null) {
            if (typeof object.generationInput !== "object")
                throw TypeError(".LLM_Generator_Read_Request.generationInput: object expected");
            message.generationInput = $root.TextGenerationInput.fromObject(object.generationInput);
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Read_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {LLM_Generator_Read_Request} message LLM_Generator_Read_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Read_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.timeoutMs = 0;
            object.generationInput = null;
        }
        if (message.timeoutMs != null && message.hasOwnProperty("timeoutMs"))
            object.timeoutMs = message.timeoutMs;
        if (message.generationInput != null && message.hasOwnProperty("generationInput"))
            object.generationInput = $root.TextGenerationInput.toObject(message.generationInput, options);
        return object;
    };

    /**
     * Converts this LLM_Generator_Read_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Read_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Read_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Read_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Read_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Read_Request";
    };

    return LLM_Generator_Read_Request;
})();

$root.LLM_Generator_Read_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Read_Reply.
     * @exports ILLM_Generator_Read_Reply
     * @interface ILLM_Generator_Read_Reply
     * @property {ITextGenerationOutput|null} [generationOutput] LLM_Generator_Read_Reply generationOutput
     * @property {number|null} [generationStatus] LLM_Generator_Read_Reply generationStatus
     * @property {number|null} [status] LLM_Generator_Read_Reply status
     * @property {boolean|null} [isContextFull] LLM_Generator_Read_Reply isContextFull
     */

    /**
     * Constructs a new LLM_Generator_Read_Reply.
     * @exports LLM_Generator_Read_Reply
     * @classdesc Represents a LLM_Generator_Read_Reply.
     * @implements ILLM_Generator_Read_Reply
     * @constructor
     * @param {ILLM_Generator_Read_Reply=} [properties] Properties to set
     */
    function LLM_Generator_Read_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Generator_Read_Reply generationOutput.
     * @member {ITextGenerationOutput|null|undefined} generationOutput
     * @memberof LLM_Generator_Read_Reply
     * @instance
     */
    LLM_Generator_Read_Reply.prototype.generationOutput = null;

    /**
     * LLM_Generator_Read_Reply generationStatus.
     * @member {number} generationStatus
     * @memberof LLM_Generator_Read_Reply
     * @instance
     */
    LLM_Generator_Read_Reply.prototype.generationStatus = 0;

    /**
     * LLM_Generator_Read_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Read_Reply
     * @instance
     */
    LLM_Generator_Read_Reply.prototype.status = 0;

    /**
     * LLM_Generator_Read_Reply isContextFull.
     * @member {boolean} isContextFull
     * @memberof LLM_Generator_Read_Reply
     * @instance
     */
    LLM_Generator_Read_Reply.prototype.isContextFull = false;

    /**
     * Creates a new LLM_Generator_Read_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {ILLM_Generator_Read_Reply=} [properties] Properties to set
     * @returns {LLM_Generator_Read_Reply} LLM_Generator_Read_Reply instance
     */
    LLM_Generator_Read_Reply.create = function create(properties) {
        return new LLM_Generator_Read_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Read_Reply message. Does not implicitly {@link LLM_Generator_Read_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {ILLM_Generator_Read_Reply} message LLM_Generator_Read_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Read_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.generationOutput != null && Object.hasOwnProperty.call(message, "generationOutput"))
            $root.TextGenerationOutput.encode(message.generationOutput, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.generationStatus != null && Object.hasOwnProperty.call(message, "generationStatus"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.generationStatus);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
        if (message.isContextFull != null && Object.hasOwnProperty.call(message, "isContextFull"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isContextFull);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Read_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Read_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {ILLM_Generator_Read_Reply} message LLM_Generator_Read_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Read_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Read_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Read_Reply} LLM_Generator_Read_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Read_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Read_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.generationOutput = $root.TextGenerationOutput.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.generationStatus = reader.uint32();
                    break;
                }
            case 3: {
                    message.status = reader.uint32();
                    break;
                }
            case 4: {
                    message.isContextFull = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Read_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Read_Reply} LLM_Generator_Read_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Read_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Read_Reply message.
     * @function verify
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Read_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.generationOutput != null && message.hasOwnProperty("generationOutput")) {
            var error = $root.TextGenerationOutput.verify(message.generationOutput);
            if (error)
                return "generationOutput." + error;
        }
        if (message.generationStatus != null && message.hasOwnProperty("generationStatus"))
            if (!$util.isInteger(message.generationStatus))
                return "generationStatus: integer expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.isContextFull != null && message.hasOwnProperty("isContextFull"))
            if (typeof message.isContextFull !== "boolean")
                return "isContextFull: boolean expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Read_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Read_Reply} LLM_Generator_Read_Reply
     */
    LLM_Generator_Read_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Read_Reply)
            return object;
        var message = new $root.LLM_Generator_Read_Reply();
        if (object.generationOutput != null) {
            if (typeof object.generationOutput !== "object")
                throw TypeError(".LLM_Generator_Read_Reply.generationOutput: object expected");
            message.generationOutput = $root.TextGenerationOutput.fromObject(object.generationOutput);
        }
        if (object.generationStatus != null)
            message.generationStatus = object.generationStatus >>> 0;
        if (object.status != null)
            message.status = object.status >>> 0;
        if (object.isContextFull != null)
            message.isContextFull = Boolean(object.isContextFull);
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Read_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {LLM_Generator_Read_Reply} message LLM_Generator_Read_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Read_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.generationOutput = null;
            object.generationStatus = 0;
            object.status = 0;
            object.isContextFull = false;
        }
        if (message.generationOutput != null && message.hasOwnProperty("generationOutput"))
            object.generationOutput = $root.TextGenerationOutput.toObject(message.generationOutput, options);
        if (message.generationStatus != null && message.hasOwnProperty("generationStatus"))
            object.generationStatus = message.generationStatus;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.isContextFull != null && message.hasOwnProperty("isContextFull"))
            object.isContextFull = message.isContextFull;
        return object;
    };

    /**
     * Converts this LLM_Generator_Read_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Read_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Read_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Read_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Read_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Read_Reply";
    };

    return LLM_Generator_Read_Reply;
})();

$root.LLM_Tokenize_Request = (function() {

    /**
     * Properties of a LLM_Tokenize_Request.
     * @exports ILLM_Tokenize_Request
     * @interface ILLM_Tokenize_Request
     * @property {string|null} [prompt] LLM_Tokenize_Request prompt
     */

    /**
     * Constructs a new LLM_Tokenize_Request.
     * @exports LLM_Tokenize_Request
     * @classdesc Represents a LLM_Tokenize_Request.
     * @implements ILLM_Tokenize_Request
     * @constructor
     * @param {ILLM_Tokenize_Request=} [properties] Properties to set
     */
    function LLM_Tokenize_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Tokenize_Request prompt.
     * @member {string} prompt
     * @memberof LLM_Tokenize_Request
     * @instance
     */
    LLM_Tokenize_Request.prototype.prompt = "";

    /**
     * Creates a new LLM_Tokenize_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {ILLM_Tokenize_Request=} [properties] Properties to set
     * @returns {LLM_Tokenize_Request} LLM_Tokenize_Request instance
     */
    LLM_Tokenize_Request.create = function create(properties) {
        return new LLM_Tokenize_Request(properties);
    };

    /**
     * Encodes the specified LLM_Tokenize_Request message. Does not implicitly {@link LLM_Tokenize_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {ILLM_Tokenize_Request} message LLM_Tokenize_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Tokenize_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.prompt != null && Object.hasOwnProperty.call(message, "prompt"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.prompt);
        return writer;
    };

    /**
     * Encodes the specified LLM_Tokenize_Request message, length delimited. Does not implicitly {@link LLM_Tokenize_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {ILLM_Tokenize_Request} message LLM_Tokenize_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Tokenize_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Tokenize_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Tokenize_Request} LLM_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Tokenize_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Tokenize_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.prompt = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Tokenize_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Tokenize_Request} LLM_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Tokenize_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Tokenize_Request message.
     * @function verify
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Tokenize_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.prompt != null && message.hasOwnProperty("prompt"))
            if (!$util.isString(message.prompt))
                return "prompt: string expected";
        return null;
    };

    /**
     * Creates a LLM_Tokenize_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Tokenize_Request} LLM_Tokenize_Request
     */
    LLM_Tokenize_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Tokenize_Request)
            return object;
        var message = new $root.LLM_Tokenize_Request();
        if (object.prompt != null)
            message.prompt = String(object.prompt);
        return message;
    };

    /**
     * Creates a plain object from a LLM_Tokenize_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {LLM_Tokenize_Request} message LLM_Tokenize_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Tokenize_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.prompt = "";
        if (message.prompt != null && message.hasOwnProperty("prompt"))
            object.prompt = message.prompt;
        return object;
    };

    /**
     * Converts this LLM_Tokenize_Request to JSON.
     * @function toJSON
     * @memberof LLM_Tokenize_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Tokenize_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Tokenize_Request
     * @function getTypeUrl
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Tokenize_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Tokenize_Request";
    };

    return LLM_Tokenize_Request;
})();

$root.LLM_Tokenize_Reply = (function() {

    /**
     * Properties of a LLM_Tokenize_Reply.
     * @exports ILLM_Tokenize_Reply
     * @interface ILLM_Tokenize_Reply
     * @property {Array.<number>|null} [tokens] LLM_Tokenize_Reply tokens
     * @property {number|null} [status] LLM_Tokenize_Reply status
     */

    /**
     * Constructs a new LLM_Tokenize_Reply.
     * @exports LLM_Tokenize_Reply
     * @classdesc Represents a LLM_Tokenize_Reply.
     * @implements ILLM_Tokenize_Reply
     * @constructor
     * @param {ILLM_Tokenize_Reply=} [properties] Properties to set
     */
    function LLM_Tokenize_Reply(properties) {
        this.tokens = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Tokenize_Reply tokens.
     * @member {Array.<number>} tokens
     * @memberof LLM_Tokenize_Reply
     * @instance
     */
    LLM_Tokenize_Reply.prototype.tokens = $util.emptyArray;

    /**
     * LLM_Tokenize_Reply status.
     * @member {number} status
     * @memberof LLM_Tokenize_Reply
     * @instance
     */
    LLM_Tokenize_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Tokenize_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {ILLM_Tokenize_Reply=} [properties] Properties to set
     * @returns {LLM_Tokenize_Reply} LLM_Tokenize_Reply instance
     */
    LLM_Tokenize_Reply.create = function create(properties) {
        return new LLM_Tokenize_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Tokenize_Reply message. Does not implicitly {@link LLM_Tokenize_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {ILLM_Tokenize_Reply} message LLM_Tokenize_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Tokenize_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tokens != null && message.tokens.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.tokens.length; ++i)
                writer.uint32(message.tokens[i]);
            writer.ldelim();
        }
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Tokenize_Reply message, length delimited. Does not implicitly {@link LLM_Tokenize_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {ILLM_Tokenize_Reply} message LLM_Tokenize_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Tokenize_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Tokenize_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Tokenize_Reply} LLM_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Tokenize_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Tokenize_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tokens.push(reader.uint32());
                    } else
                        message.tokens.push(reader.uint32());
                    break;
                }
            case 2: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Tokenize_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Tokenize_Reply} LLM_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Tokenize_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Tokenize_Reply message.
     * @function verify
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Tokenize_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tokens != null && message.hasOwnProperty("tokens")) {
            if (!Array.isArray(message.tokens))
                return "tokens: array expected";
            for (var i = 0; i < message.tokens.length; ++i)
                if (!$util.isInteger(message.tokens[i]))
                    return "tokens: integer[] expected";
        }
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Tokenize_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Tokenize_Reply} LLM_Tokenize_Reply
     */
    LLM_Tokenize_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Tokenize_Reply)
            return object;
        var message = new $root.LLM_Tokenize_Reply();
        if (object.tokens) {
            if (!Array.isArray(object.tokens))
                throw TypeError(".LLM_Tokenize_Reply.tokens: array expected");
            message.tokens = [];
            for (var i = 0; i < object.tokens.length; ++i)
                message.tokens[i] = object.tokens[i] >>> 0;
        }
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Tokenize_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {LLM_Tokenize_Reply} message LLM_Tokenize_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Tokenize_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.tokens = [];
        if (options.defaults)
            object.status = 0;
        if (message.tokens && message.tokens.length) {
            object.tokens = [];
            for (var j = 0; j < message.tokens.length; ++j)
                object.tokens[j] = message.tokens[j];
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Tokenize_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Tokenize_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Tokenize_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Tokenize_Reply
     * @function getTypeUrl
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Tokenize_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Tokenize_Reply";
    };

    return LLM_Tokenize_Reply;
})();

$root.LLM_Get_Context_Request = (function() {

    /**
     * Properties of a LLM_Get_Context_Request.
     * @exports ILLM_Get_Context_Request
     * @interface ILLM_Get_Context_Request
     */

    /**
     * Constructs a new LLM_Get_Context_Request.
     * @exports LLM_Get_Context_Request
     * @classdesc Represents a LLM_Get_Context_Request.
     * @implements ILLM_Get_Context_Request
     * @constructor
     * @param {ILLM_Get_Context_Request=} [properties] Properties to set
     */
    function LLM_Get_Context_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Get_Context_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {ILLM_Get_Context_Request=} [properties] Properties to set
     * @returns {LLM_Get_Context_Request} LLM_Get_Context_Request instance
     */
    LLM_Get_Context_Request.create = function create(properties) {
        return new LLM_Get_Context_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Context_Request message. Does not implicitly {@link LLM_Get_Context_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {ILLM_Get_Context_Request} message LLM_Get_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Context_Request message, length delimited. Does not implicitly {@link LLM_Get_Context_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {ILLM_Get_Context_Request} message LLM_Get_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Context_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Request} LLM_Get_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Context_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Context_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Request} LLM_Get_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Context_Request message.
     * @function verify
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Context_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Context_Request} LLM_Get_Context_Request
     */
    LLM_Get_Context_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Context_Request)
            return object;
        return new $root.LLM_Get_Context_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Context_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {LLM_Get_Context_Request} message LLM_Get_Context_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Context_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Get_Context_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Context_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Context_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Context_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Context_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Context_Request";
    };

    return LLM_Get_Context_Request;
})();

$root.LLM_Get_Context_Reply = (function() {

    /**
     * Properties of a LLM_Get_Context_Reply.
     * @exports ILLM_Get_Context_Reply
     * @interface ILLM_Get_Context_Reply
     * @property {number|null} [status] LLM_Get_Context_Reply status
     */

    /**
     * Constructs a new LLM_Get_Context_Reply.
     * @exports LLM_Get_Context_Reply
     * @classdesc Represents a LLM_Get_Context_Reply.
     * @implements ILLM_Get_Context_Reply
     * @constructor
     * @param {ILLM_Get_Context_Reply=} [properties] Properties to set
     */
    function LLM_Get_Context_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Get_Context_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Context_Reply
     * @instance
     */
    LLM_Get_Context_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Get_Context_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {ILLM_Get_Context_Reply=} [properties] Properties to set
     * @returns {LLM_Get_Context_Reply} LLM_Get_Context_Reply instance
     */
    LLM_Get_Context_Reply.create = function create(properties) {
        return new LLM_Get_Context_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Context_Reply message. Does not implicitly {@link LLM_Get_Context_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {ILLM_Get_Context_Reply} message LLM_Get_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Context_Reply message, length delimited. Does not implicitly {@link LLM_Get_Context_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {ILLM_Get_Context_Reply} message LLM_Get_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Context_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Reply} LLM_Get_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Context_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Context_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Reply} LLM_Get_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Context_Reply message.
     * @function verify
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Context_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Context_Reply} LLM_Get_Context_Reply
     */
    LLM_Get_Context_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Context_Reply)
            return object;
        var message = new $root.LLM_Get_Context_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Context_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {LLM_Get_Context_Reply} message LLM_Get_Context_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Context_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Get_Context_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Context_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Context_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Context_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Context_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Context_Reply";
    };

    return LLM_Get_Context_Reply;
})();

$root.LLM_Set_Context_Request = (function() {

    /**
     * Properties of a LLM_Set_Context_Request.
     * @exports ILLM_Set_Context_Request
     * @interface ILLM_Set_Context_Request
     */

    /**
     * Constructs a new LLM_Set_Context_Request.
     * @exports LLM_Set_Context_Request
     * @classdesc Represents a LLM_Set_Context_Request.
     * @implements ILLM_Set_Context_Request
     * @constructor
     * @param {ILLM_Set_Context_Request=} [properties] Properties to set
     */
    function LLM_Set_Context_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Set_Context_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {ILLM_Set_Context_Request=} [properties] Properties to set
     * @returns {LLM_Set_Context_Request} LLM_Set_Context_Request instance
     */
    LLM_Set_Context_Request.create = function create(properties) {
        return new LLM_Set_Context_Request(properties);
    };

    /**
     * Encodes the specified LLM_Set_Context_Request message. Does not implicitly {@link LLM_Set_Context_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {ILLM_Set_Context_Request} message LLM_Set_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Context_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_Context_Request message, length delimited. Does not implicitly {@link LLM_Set_Context_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {ILLM_Set_Context_Request} message LLM_Set_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Context_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_Context_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_Context_Request} LLM_Set_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Context_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Set_Context_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Set_Context_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_Context_Request} LLM_Set_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Context_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_Context_Request message.
     * @function verify
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_Context_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Set_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_Context_Request} LLM_Set_Context_Request
     */
    LLM_Set_Context_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Set_Context_Request)
            return object;
        return new $root.LLM_Set_Context_Request();
    };

    /**
     * Creates a plain object from a LLM_Set_Context_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {LLM_Set_Context_Request} message LLM_Set_Context_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_Context_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Set_Context_Request to JSON.
     * @function toJSON
     * @memberof LLM_Set_Context_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_Context_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Set_Context_Request
     * @function getTypeUrl
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Set_Context_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Set_Context_Request";
    };

    return LLM_Set_Context_Request;
})();

$root.LLM_Set_Context_Reply = (function() {

    /**
     * Properties of a LLM_Set_Context_Reply.
     * @exports ILLM_Set_Context_Reply
     * @interface ILLM_Set_Context_Reply
     * @property {number|null} [status] LLM_Set_Context_Reply status
     */

    /**
     * Constructs a new LLM_Set_Context_Reply.
     * @exports LLM_Set_Context_Reply
     * @classdesc Represents a LLM_Set_Context_Reply.
     * @implements ILLM_Set_Context_Reply
     * @constructor
     * @param {ILLM_Set_Context_Reply=} [properties] Properties to set
     */
    function LLM_Set_Context_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Set_Context_Reply status.
     * @member {number} status
     * @memberof LLM_Set_Context_Reply
     * @instance
     */
    LLM_Set_Context_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Set_Context_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {ILLM_Set_Context_Reply=} [properties] Properties to set
     * @returns {LLM_Set_Context_Reply} LLM_Set_Context_Reply instance
     */
    LLM_Set_Context_Reply.create = function create(properties) {
        return new LLM_Set_Context_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Set_Context_Reply message. Does not implicitly {@link LLM_Set_Context_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {ILLM_Set_Context_Reply} message LLM_Set_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Context_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_Context_Reply message, length delimited. Does not implicitly {@link LLM_Set_Context_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {ILLM_Set_Context_Reply} message LLM_Set_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Context_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_Context_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_Context_Reply} LLM_Set_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Context_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Set_Context_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Set_Context_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_Context_Reply} LLM_Set_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Context_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_Context_Reply message.
     * @function verify
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_Context_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Set_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_Context_Reply} LLM_Set_Context_Reply
     */
    LLM_Set_Context_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Set_Context_Reply)
            return object;
        var message = new $root.LLM_Set_Context_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_Context_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {LLM_Set_Context_Reply} message LLM_Set_Context_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_Context_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Set_Context_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Set_Context_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_Context_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Set_Context_Reply
     * @function getTypeUrl
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Set_Context_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Set_Context_Reply";
    };

    return LLM_Set_Context_Reply;
})();

$root.LLM_Clear_Context_Request = (function() {

    /**
     * Properties of a LLM_Clear_Context_Request.
     * @exports ILLM_Clear_Context_Request
     * @interface ILLM_Clear_Context_Request
     */

    /**
     * Constructs a new LLM_Clear_Context_Request.
     * @exports LLM_Clear_Context_Request
     * @classdesc Represents a LLM_Clear_Context_Request.
     * @implements ILLM_Clear_Context_Request
     * @constructor
     * @param {ILLM_Clear_Context_Request=} [properties] Properties to set
     */
    function LLM_Clear_Context_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Clear_Context_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {ILLM_Clear_Context_Request=} [properties] Properties to set
     * @returns {LLM_Clear_Context_Request} LLM_Clear_Context_Request instance
     */
    LLM_Clear_Context_Request.create = function create(properties) {
        return new LLM_Clear_Context_Request(properties);
    };

    /**
     * Encodes the specified LLM_Clear_Context_Request message. Does not implicitly {@link LLM_Clear_Context_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {ILLM_Clear_Context_Request} message LLM_Clear_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Clear_Context_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Clear_Context_Request message, length delimited. Does not implicitly {@link LLM_Clear_Context_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {ILLM_Clear_Context_Request} message LLM_Clear_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Clear_Context_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Clear_Context_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Clear_Context_Request} LLM_Clear_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Clear_Context_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Clear_Context_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Clear_Context_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Clear_Context_Request} LLM_Clear_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Clear_Context_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Clear_Context_Request message.
     * @function verify
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Clear_Context_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Clear_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Clear_Context_Request} LLM_Clear_Context_Request
     */
    LLM_Clear_Context_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Clear_Context_Request)
            return object;
        return new $root.LLM_Clear_Context_Request();
    };

    /**
     * Creates a plain object from a LLM_Clear_Context_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {LLM_Clear_Context_Request} message LLM_Clear_Context_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Clear_Context_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Clear_Context_Request to JSON.
     * @function toJSON
     * @memberof LLM_Clear_Context_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Clear_Context_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Clear_Context_Request
     * @function getTypeUrl
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Clear_Context_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Clear_Context_Request";
    };

    return LLM_Clear_Context_Request;
})();

$root.LLM_Clear_Context_Reply = (function() {

    /**
     * Properties of a LLM_Clear_Context_Reply.
     * @exports ILLM_Clear_Context_Reply
     * @interface ILLM_Clear_Context_Reply
     * @property {number|null} [status] LLM_Clear_Context_Reply status
     */

    /**
     * Constructs a new LLM_Clear_Context_Reply.
     * @exports LLM_Clear_Context_Reply
     * @classdesc Represents a LLM_Clear_Context_Reply.
     * @implements ILLM_Clear_Context_Reply
     * @constructor
     * @param {ILLM_Clear_Context_Reply=} [properties] Properties to set
     */
    function LLM_Clear_Context_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Clear_Context_Reply status.
     * @member {number} status
     * @memberof LLM_Clear_Context_Reply
     * @instance
     */
    LLM_Clear_Context_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Clear_Context_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {ILLM_Clear_Context_Reply=} [properties] Properties to set
     * @returns {LLM_Clear_Context_Reply} LLM_Clear_Context_Reply instance
     */
    LLM_Clear_Context_Reply.create = function create(properties) {
        return new LLM_Clear_Context_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Clear_Context_Reply message. Does not implicitly {@link LLM_Clear_Context_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {ILLM_Clear_Context_Reply} message LLM_Clear_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Clear_Context_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Clear_Context_Reply message, length delimited. Does not implicitly {@link LLM_Clear_Context_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {ILLM_Clear_Context_Reply} message LLM_Clear_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Clear_Context_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Clear_Context_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Clear_Context_Reply} LLM_Clear_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Clear_Context_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Clear_Context_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Clear_Context_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Clear_Context_Reply} LLM_Clear_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Clear_Context_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Clear_Context_Reply message.
     * @function verify
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Clear_Context_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Clear_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Clear_Context_Reply} LLM_Clear_Context_Reply
     */
    LLM_Clear_Context_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Clear_Context_Reply)
            return object;
        var message = new $root.LLM_Clear_Context_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Clear_Context_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {LLM_Clear_Context_Reply} message LLM_Clear_Context_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Clear_Context_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Clear_Context_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Clear_Context_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Clear_Context_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Clear_Context_Reply
     * @function getTypeUrl
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Clear_Context_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Clear_Context_Reply";
    };

    return LLM_Clear_Context_Reply;
})();

$root.LLM_Release_Request = (function() {

    /**
     * Properties of a LLM_Release_Request.
     * @exports ILLM_Release_Request
     * @interface ILLM_Release_Request
     */

    /**
     * Constructs a new LLM_Release_Request.
     * @exports LLM_Release_Request
     * @classdesc Represents a LLM_Release_Request.
     * @implements ILLM_Release_Request
     * @constructor
     * @param {ILLM_Release_Request=} [properties] Properties to set
     */
    function LLM_Release_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Release_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Release_Request
     * @static
     * @param {ILLM_Release_Request=} [properties] Properties to set
     * @returns {LLM_Release_Request} LLM_Release_Request instance
     */
    LLM_Release_Request.create = function create(properties) {
        return new LLM_Release_Request(properties);
    };

    /**
     * Encodes the specified LLM_Release_Request message. Does not implicitly {@link LLM_Release_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Release_Request
     * @static
     * @param {ILLM_Release_Request} message LLM_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Release_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Release_Request message, length delimited. Does not implicitly {@link LLM_Release_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Release_Request
     * @static
     * @param {ILLM_Release_Request} message LLM_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Release_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Release_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Release_Request} LLM_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Release_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Release_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Release_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Release_Request} LLM_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Release_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Release_Request message.
     * @function verify
     * @memberof LLM_Release_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Release_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Release_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Release_Request} LLM_Release_Request
     */
    LLM_Release_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Release_Request)
            return object;
        return new $root.LLM_Release_Request();
    };

    /**
     * Creates a plain object from a LLM_Release_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Release_Request
     * @static
     * @param {LLM_Release_Request} message LLM_Release_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Release_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Release_Request to JSON.
     * @function toJSON
     * @memberof LLM_Release_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Release_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Release_Request
     * @function getTypeUrl
     * @memberof LLM_Release_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Release_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Release_Request";
    };

    return LLM_Release_Request;
})();

$root.LLM_Release_Reply = (function() {

    /**
     * Properties of a LLM_Release_Reply.
     * @exports ILLM_Release_Reply
     * @interface ILLM_Release_Reply
     * @property {number|null} [status] LLM_Release_Reply status
     */

    /**
     * Constructs a new LLM_Release_Reply.
     * @exports LLM_Release_Reply
     * @classdesc Represents a LLM_Release_Reply.
     * @implements ILLM_Release_Reply
     * @constructor
     * @param {ILLM_Release_Reply=} [properties] Properties to set
     */
    function LLM_Release_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Release_Reply status.
     * @member {number} status
     * @memberof LLM_Release_Reply
     * @instance
     */
    LLM_Release_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Release_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Release_Reply
     * @static
     * @param {ILLM_Release_Reply=} [properties] Properties to set
     * @returns {LLM_Release_Reply} LLM_Release_Reply instance
     */
    LLM_Release_Reply.create = function create(properties) {
        return new LLM_Release_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Release_Reply message. Does not implicitly {@link LLM_Release_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Release_Reply
     * @static
     * @param {ILLM_Release_Reply} message LLM_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Release_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Release_Reply message, length delimited. Does not implicitly {@link LLM_Release_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Release_Reply
     * @static
     * @param {ILLM_Release_Reply} message LLM_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Release_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Release_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Release_Reply} LLM_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Release_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Release_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Release_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Release_Reply} LLM_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Release_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Release_Reply message.
     * @function verify
     * @memberof LLM_Release_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Release_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Release_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Release_Reply} LLM_Release_Reply
     */
    LLM_Release_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Release_Reply)
            return object;
        var message = new $root.LLM_Release_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Release_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Release_Reply
     * @static
     * @param {LLM_Release_Reply} message LLM_Release_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Release_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Release_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Release_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Release_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Release_Reply
     * @function getTypeUrl
     * @memberof LLM_Release_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Release_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Release_Reply";
    };

    return LLM_Release_Reply;
})();

$root.LLM_Generator_Abort_Request = (function() {

    /**
     * Properties of a LLM_Generator_Abort_Request.
     * @exports ILLM_Generator_Abort_Request
     * @interface ILLM_Generator_Abort_Request
     */

    /**
     * Constructs a new LLM_Generator_Abort_Request.
     * @exports LLM_Generator_Abort_Request
     * @classdesc Represents a LLM_Generator_Abort_Request.
     * @implements ILLM_Generator_Abort_Request
     * @constructor
     * @param {ILLM_Generator_Abort_Request=} [properties] Properties to set
     */
    function LLM_Generator_Abort_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Generator_Abort_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {ILLM_Generator_Abort_Request=} [properties] Properties to set
     * @returns {LLM_Generator_Abort_Request} LLM_Generator_Abort_Request instance
     */
    LLM_Generator_Abort_Request.create = function create(properties) {
        return new LLM_Generator_Abort_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Abort_Request message. Does not implicitly {@link LLM_Generator_Abort_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {ILLM_Generator_Abort_Request} message LLM_Generator_Abort_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Abort_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Abort_Request message, length delimited. Does not implicitly {@link LLM_Generator_Abort_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {ILLM_Generator_Abort_Request} message LLM_Generator_Abort_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Abort_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Abort_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Abort_Request} LLM_Generator_Abort_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Abort_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Abort_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Abort_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Abort_Request} LLM_Generator_Abort_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Abort_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Abort_Request message.
     * @function verify
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Abort_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Abort_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Abort_Request} LLM_Generator_Abort_Request
     */
    LLM_Generator_Abort_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Abort_Request)
            return object;
        return new $root.LLM_Generator_Abort_Request();
    };

    /**
     * Creates a plain object from a LLM_Generator_Abort_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {LLM_Generator_Abort_Request} message LLM_Generator_Abort_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Abort_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Generator_Abort_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Abort_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Abort_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Abort_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Abort_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Abort_Request";
    };

    return LLM_Generator_Abort_Request;
})();

$root.LLM_Generator_Abort_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Abort_Reply.
     * @exports ILLM_Generator_Abort_Reply
     * @interface ILLM_Generator_Abort_Reply
     * @property {number|null} [status] LLM_Generator_Abort_Reply status
     */

    /**
     * Constructs a new LLM_Generator_Abort_Reply.
     * @exports LLM_Generator_Abort_Reply
     * @classdesc Represents a LLM_Generator_Abort_Reply.
     * @implements ILLM_Generator_Abort_Reply
     * @constructor
     * @param {ILLM_Generator_Abort_Reply=} [properties] Properties to set
     */
    function LLM_Generator_Abort_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Generator_Abort_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Abort_Reply
     * @instance
     */
    LLM_Generator_Abort_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Generator_Abort_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {ILLM_Generator_Abort_Reply=} [properties] Properties to set
     * @returns {LLM_Generator_Abort_Reply} LLM_Generator_Abort_Reply instance
     */
    LLM_Generator_Abort_Reply.create = function create(properties) {
        return new LLM_Generator_Abort_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Abort_Reply message. Does not implicitly {@link LLM_Generator_Abort_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {ILLM_Generator_Abort_Reply} message LLM_Generator_Abort_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Abort_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Abort_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Abort_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {ILLM_Generator_Abort_Reply} message LLM_Generator_Abort_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Abort_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Abort_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Abort_Reply} LLM_Generator_Abort_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Abort_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Abort_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Abort_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Abort_Reply} LLM_Generator_Abort_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Abort_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Abort_Reply message.
     * @function verify
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Abort_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Abort_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Abort_Reply} LLM_Generator_Abort_Reply
     */
    LLM_Generator_Abort_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Abort_Reply)
            return object;
        var message = new $root.LLM_Generator_Abort_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Abort_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {LLM_Generator_Abort_Reply} message LLM_Generator_Abort_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Abort_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Generator_Abort_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Abort_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Abort_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Abort_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Abort_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Abort_Reply";
    };

    return LLM_Generator_Abort_Reply;
})();

$root.LLM_Set_End_Of_Generation_Sequence_Request = (function() {

    /**
     * Properties of a LLM_Set_End_Of_Generation_Sequence_Request.
     * @exports ILLM_Set_End_Of_Generation_Sequence_Request
     * @interface ILLM_Set_End_Of_Generation_Sequence_Request
     * @property {Array.<number>|null} [endOfGenerationSequenceTokens] LLM_Set_End_Of_Generation_Sequence_Request endOfGenerationSequenceTokens
     */

    /**
     * Constructs a new LLM_Set_End_Of_Generation_Sequence_Request.
     * @exports LLM_Set_End_Of_Generation_Sequence_Request
     * @classdesc Represents a LLM_Set_End_Of_Generation_Sequence_Request.
     * @implements ILLM_Set_End_Of_Generation_Sequence_Request
     * @constructor
     * @param {ILLM_Set_End_Of_Generation_Sequence_Request=} [properties] Properties to set
     */
    function LLM_Set_End_Of_Generation_Sequence_Request(properties) {
        this.endOfGenerationSequenceTokens = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Set_End_Of_Generation_Sequence_Request endOfGenerationSequenceTokens.
     * @member {Array.<number>} endOfGenerationSequenceTokens
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @instance
     */
    LLM_Set_End_Of_Generation_Sequence_Request.prototype.endOfGenerationSequenceTokens = $util.emptyArray;

    /**
     * Creates a new LLM_Set_End_Of_Generation_Sequence_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {ILLM_Set_End_Of_Generation_Sequence_Request=} [properties] Properties to set
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request} LLM_Set_End_Of_Generation_Sequence_Request instance
     */
    LLM_Set_End_Of_Generation_Sequence_Request.create = function create(properties) {
        return new LLM_Set_End_Of_Generation_Sequence_Request(properties);
    };

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Request message. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {ILLM_Set_End_Of_Generation_Sequence_Request} message LLM_Set_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_End_Of_Generation_Sequence_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.endOfGenerationSequenceTokens != null && message.endOfGenerationSequenceTokens.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.endOfGenerationSequenceTokens.length; ++i)
                writer.int32(message.endOfGenerationSequenceTokens[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Request message, length delimited. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {ILLM_Set_End_Of_Generation_Sequence_Request} message LLM_Set_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_End_Of_Generation_Sequence_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request} LLM_Set_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_End_Of_Generation_Sequence_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Set_End_Of_Generation_Sequence_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length))
                        message.endOfGenerationSequenceTokens = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.endOfGenerationSequenceTokens.push(reader.int32());
                    } else
                        message.endOfGenerationSequenceTokens.push(reader.int32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request} LLM_Set_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_End_Of_Generation_Sequence_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_End_Of_Generation_Sequence_Request message.
     * @function verify
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_End_Of_Generation_Sequence_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.endOfGenerationSequenceTokens != null && message.hasOwnProperty("endOfGenerationSequenceTokens")) {
            if (!Array.isArray(message.endOfGenerationSequenceTokens))
                return "endOfGenerationSequenceTokens: array expected";
            for (var i = 0; i < message.endOfGenerationSequenceTokens.length; ++i)
                if (!$util.isInteger(message.endOfGenerationSequenceTokens[i]))
                    return "endOfGenerationSequenceTokens: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a LLM_Set_End_Of_Generation_Sequence_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request} LLM_Set_End_Of_Generation_Sequence_Request
     */
    LLM_Set_End_Of_Generation_Sequence_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Set_End_Of_Generation_Sequence_Request)
            return object;
        var message = new $root.LLM_Set_End_Of_Generation_Sequence_Request();
        if (object.endOfGenerationSequenceTokens) {
            if (!Array.isArray(object.endOfGenerationSequenceTokens))
                throw TypeError(".LLM_Set_End_Of_Generation_Sequence_Request.endOfGenerationSequenceTokens: array expected");
            message.endOfGenerationSequenceTokens = [];
            for (var i = 0; i < object.endOfGenerationSequenceTokens.length; ++i)
                message.endOfGenerationSequenceTokens[i] = object.endOfGenerationSequenceTokens[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_End_Of_Generation_Sequence_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Request} message LLM_Set_End_Of_Generation_Sequence_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_End_Of_Generation_Sequence_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.endOfGenerationSequenceTokens = [];
        if (message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length) {
            object.endOfGenerationSequenceTokens = [];
            for (var j = 0; j < message.endOfGenerationSequenceTokens.length; ++j)
                object.endOfGenerationSequenceTokens[j] = message.endOfGenerationSequenceTokens[j];
        }
        return object;
    };

    /**
     * Converts this LLM_Set_End_Of_Generation_Sequence_Request to JSON.
     * @function toJSON
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_End_Of_Generation_Sequence_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Set_End_Of_Generation_Sequence_Request
     * @function getTypeUrl
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Set_End_Of_Generation_Sequence_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Set_End_Of_Generation_Sequence_Request";
    };

    return LLM_Set_End_Of_Generation_Sequence_Request;
})();

$root.LLM_Generator_Release_Request = (function() {

    /**
     * Properties of a LLM_Generator_Release_Request.
     * @exports ILLM_Generator_Release_Request
     * @interface ILLM_Generator_Release_Request
     */

    /**
     * Constructs a new LLM_Generator_Release_Request.
     * @exports LLM_Generator_Release_Request
     * @classdesc Represents a LLM_Generator_Release_Request.
     * @implements ILLM_Generator_Release_Request
     * @constructor
     * @param {ILLM_Generator_Release_Request=} [properties] Properties to set
     */
    function LLM_Generator_Release_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Generator_Release_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {ILLM_Generator_Release_Request=} [properties] Properties to set
     * @returns {LLM_Generator_Release_Request} LLM_Generator_Release_Request instance
     */
    LLM_Generator_Release_Request.create = function create(properties) {
        return new LLM_Generator_Release_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Release_Request message. Does not implicitly {@link LLM_Generator_Release_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {ILLM_Generator_Release_Request} message LLM_Generator_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Release_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Release_Request message, length delimited. Does not implicitly {@link LLM_Generator_Release_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {ILLM_Generator_Release_Request} message LLM_Generator_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Release_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Release_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Release_Request} LLM_Generator_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Release_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Release_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Release_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Release_Request} LLM_Generator_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Release_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Release_Request message.
     * @function verify
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Release_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Release_Request} LLM_Generator_Release_Request
     */
    LLM_Generator_Release_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Release_Request)
            return object;
        return new $root.LLM_Generator_Release_Request();
    };

    /**
     * Creates a plain object from a LLM_Generator_Release_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {LLM_Generator_Release_Request} message LLM_Generator_Release_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Release_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Generator_Release_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Release_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Release_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Release_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Release_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Release_Request";
    };

    return LLM_Generator_Release_Request;
})();

$root.LLM_Generator_Release_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Release_Reply.
     * @exports ILLM_Generator_Release_Reply
     * @interface ILLM_Generator_Release_Reply
     * @property {number|null} [status] LLM_Generator_Release_Reply status
     */

    /**
     * Constructs a new LLM_Generator_Release_Reply.
     * @exports LLM_Generator_Release_Reply
     * @classdesc Represents a LLM_Generator_Release_Reply.
     * @implements ILLM_Generator_Release_Reply
     * @constructor
     * @param {ILLM_Generator_Release_Reply=} [properties] Properties to set
     */
    function LLM_Generator_Release_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Generator_Release_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Release_Reply
     * @instance
     */
    LLM_Generator_Release_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Generator_Release_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {ILLM_Generator_Release_Reply=} [properties] Properties to set
     * @returns {LLM_Generator_Release_Reply} LLM_Generator_Release_Reply instance
     */
    LLM_Generator_Release_Reply.create = function create(properties) {
        return new LLM_Generator_Release_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Release_Reply message. Does not implicitly {@link LLM_Generator_Release_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {ILLM_Generator_Release_Reply} message LLM_Generator_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Release_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Release_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Release_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {ILLM_Generator_Release_Reply} message LLM_Generator_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Release_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Release_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Release_Reply} LLM_Generator_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Release_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Generator_Release_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Generator_Release_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Release_Reply} LLM_Generator_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Release_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Release_Reply message.
     * @function verify
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Release_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Release_Reply} LLM_Generator_Release_Reply
     */
    LLM_Generator_Release_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Generator_Release_Reply)
            return object;
        var message = new $root.LLM_Generator_Release_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Release_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {LLM_Generator_Release_Reply} message LLM_Generator_Release_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Release_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Generator_Release_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Release_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Release_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Generator_Release_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Generator_Release_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Generator_Release_Reply";
    };

    return LLM_Generator_Release_Reply;
})();

$root.LLM_Set_End_Of_Generation_Sequence_Reply = (function() {

    /**
     * Properties of a LLM_Set_End_Of_Generation_Sequence_Reply.
     * @exports ILLM_Set_End_Of_Generation_Sequence_Reply
     * @interface ILLM_Set_End_Of_Generation_Sequence_Reply
     * @property {number|null} [status] LLM_Set_End_Of_Generation_Sequence_Reply status
     */

    /**
     * Constructs a new LLM_Set_End_Of_Generation_Sequence_Reply.
     * @exports LLM_Set_End_Of_Generation_Sequence_Reply
     * @classdesc Represents a LLM_Set_End_Of_Generation_Sequence_Reply.
     * @implements ILLM_Set_End_Of_Generation_Sequence_Reply
     * @constructor
     * @param {ILLM_Set_End_Of_Generation_Sequence_Reply=} [properties] Properties to set
     */
    function LLM_Set_End_Of_Generation_Sequence_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Set_End_Of_Generation_Sequence_Reply status.
     * @member {number} status
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @instance
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Set_End_Of_Generation_Sequence_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {ILLM_Set_End_Of_Generation_Sequence_Reply=} [properties] Properties to set
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply} LLM_Set_End_Of_Generation_Sequence_Reply instance
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.create = function create(properties) {
        return new LLM_Set_End_Of_Generation_Sequence_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Reply message. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {ILLM_Set_End_Of_Generation_Sequence_Reply} message LLM_Set_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Reply message, length delimited. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {ILLM_Set_End_Of_Generation_Sequence_Reply} message LLM_Set_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply} LLM_Set_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Set_End_Of_Generation_Sequence_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply} LLM_Set_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_End_Of_Generation_Sequence_Reply message.
     * @function verify
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Set_End_Of_Generation_Sequence_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply} LLM_Set_End_Of_Generation_Sequence_Reply
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Set_End_Of_Generation_Sequence_Reply)
            return object;
        var message = new $root.LLM_Set_End_Of_Generation_Sequence_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_End_Of_Generation_Sequence_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Reply} message LLM_Set_End_Of_Generation_Sequence_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Set_End_Of_Generation_Sequence_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Set_End_Of_Generation_Sequence_Reply
     * @function getTypeUrl
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Set_End_Of_Generation_Sequence_Reply";
    };

    return LLM_Set_End_Of_Generation_Sequence_Reply;
})();

$root.LLM_Get_End_Of_Generation_Sequence_Request = (function() {

    /**
     * Properties of a LLM_Get_End_Of_Generation_Sequence_Request.
     * @exports ILLM_Get_End_Of_Generation_Sequence_Request
     * @interface ILLM_Get_End_Of_Generation_Sequence_Request
     */

    /**
     * Constructs a new LLM_Get_End_Of_Generation_Sequence_Request.
     * @exports LLM_Get_End_Of_Generation_Sequence_Request
     * @classdesc Represents a LLM_Get_End_Of_Generation_Sequence_Request.
     * @implements ILLM_Get_End_Of_Generation_Sequence_Request
     * @constructor
     * @param {ILLM_Get_End_Of_Generation_Sequence_Request=} [properties] Properties to set
     */
    function LLM_Get_End_Of_Generation_Sequence_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Get_End_Of_Generation_Sequence_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {ILLM_Get_End_Of_Generation_Sequence_Request=} [properties] Properties to set
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request} LLM_Get_End_Of_Generation_Sequence_Request instance
     */
    LLM_Get_End_Of_Generation_Sequence_Request.create = function create(properties) {
        return new LLM_Get_End_Of_Generation_Sequence_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Request message. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {ILLM_Get_End_Of_Generation_Sequence_Request} message LLM_Get_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_End_Of_Generation_Sequence_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Request message, length delimited. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {ILLM_Get_End_Of_Generation_Sequence_Request} message LLM_Get_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_End_Of_Generation_Sequence_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request} LLM_Get_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_End_Of_Generation_Sequence_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_End_Of_Generation_Sequence_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request} LLM_Get_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_End_Of_Generation_Sequence_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_End_Of_Generation_Sequence_Request message.
     * @function verify
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_End_Of_Generation_Sequence_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Get_End_Of_Generation_Sequence_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request} LLM_Get_End_Of_Generation_Sequence_Request
     */
    LLM_Get_End_Of_Generation_Sequence_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_End_Of_Generation_Sequence_Request)
            return object;
        return new $root.LLM_Get_End_Of_Generation_Sequence_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_End_Of_Generation_Sequence_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Request} message LLM_Get_End_Of_Generation_Sequence_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_End_Of_Generation_Sequence_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Get_End_Of_Generation_Sequence_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_End_Of_Generation_Sequence_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_End_Of_Generation_Sequence_Request
     * @function getTypeUrl
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_End_Of_Generation_Sequence_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_End_Of_Generation_Sequence_Request";
    };

    return LLM_Get_End_Of_Generation_Sequence_Request;
})();

$root.LLM_Get_End_Of_Generation_Sequence_Reply = (function() {

    /**
     * Properties of a LLM_Get_End_Of_Generation_Sequence_Reply.
     * @exports ILLM_Get_End_Of_Generation_Sequence_Reply
     * @interface ILLM_Get_End_Of_Generation_Sequence_Reply
     * @property {string|null} [endOfGenerationSequence] LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequence
     * @property {Array.<number>|null} [endOfGenerationSequenceTokens] LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequenceTokens
     * @property {number|null} [status] LLM_Get_End_Of_Generation_Sequence_Reply status
     */

    /**
     * Constructs a new LLM_Get_End_Of_Generation_Sequence_Reply.
     * @exports LLM_Get_End_Of_Generation_Sequence_Reply
     * @classdesc Represents a LLM_Get_End_Of_Generation_Sequence_Reply.
     * @implements ILLM_Get_End_Of_Generation_Sequence_Reply
     * @constructor
     * @param {ILLM_Get_End_Of_Generation_Sequence_Reply=} [properties] Properties to set
     */
    function LLM_Get_End_Of_Generation_Sequence_Reply(properties) {
        this.endOfGenerationSequenceTokens = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequence.
     * @member {string} endOfGenerationSequence
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @instance
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.prototype.endOfGenerationSequence = "";

    /**
     * LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequenceTokens.
     * @member {Array.<number>} endOfGenerationSequenceTokens
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @instance
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.prototype.endOfGenerationSequenceTokens = $util.emptyArray;

    /**
     * LLM_Get_End_Of_Generation_Sequence_Reply status.
     * @member {number} status
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @instance
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Get_End_Of_Generation_Sequence_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {ILLM_Get_End_Of_Generation_Sequence_Reply=} [properties] Properties to set
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply} LLM_Get_End_Of_Generation_Sequence_Reply instance
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.create = function create(properties) {
        return new LLM_Get_End_Of_Generation_Sequence_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Reply message. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {ILLM_Get_End_Of_Generation_Sequence_Reply} message LLM_Get_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.endOfGenerationSequence != null && Object.hasOwnProperty.call(message, "endOfGenerationSequence"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.endOfGenerationSequence);
        if (message.endOfGenerationSequenceTokens != null && message.endOfGenerationSequenceTokens.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.endOfGenerationSequenceTokens.length; ++i)
                writer.int32(message.endOfGenerationSequenceTokens[i]);
            writer.ldelim();
        }
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Reply message, length delimited. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {ILLM_Get_End_Of_Generation_Sequence_Reply} message LLM_Get_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply} LLM_Get_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_End_Of_Generation_Sequence_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.endOfGenerationSequence = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length))
                        message.endOfGenerationSequenceTokens = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.endOfGenerationSequenceTokens.push(reader.int32());
                    } else
                        message.endOfGenerationSequenceTokens.push(reader.int32());
                    break;
                }
            case 3: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply} LLM_Get_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_End_Of_Generation_Sequence_Reply message.
     * @function verify
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.endOfGenerationSequence != null && message.hasOwnProperty("endOfGenerationSequence"))
            if (!$util.isString(message.endOfGenerationSequence))
                return "endOfGenerationSequence: string expected";
        if (message.endOfGenerationSequenceTokens != null && message.hasOwnProperty("endOfGenerationSequenceTokens")) {
            if (!Array.isArray(message.endOfGenerationSequenceTokens))
                return "endOfGenerationSequenceTokens: array expected";
            for (var i = 0; i < message.endOfGenerationSequenceTokens.length; ++i)
                if (!$util.isInteger(message.endOfGenerationSequenceTokens[i]))
                    return "endOfGenerationSequenceTokens: integer[] expected";
        }
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_End_Of_Generation_Sequence_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply} LLM_Get_End_Of_Generation_Sequence_Reply
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_End_Of_Generation_Sequence_Reply)
            return object;
        var message = new $root.LLM_Get_End_Of_Generation_Sequence_Reply();
        if (object.endOfGenerationSequence != null)
            message.endOfGenerationSequence = String(object.endOfGenerationSequence);
        if (object.endOfGenerationSequenceTokens) {
            if (!Array.isArray(object.endOfGenerationSequenceTokens))
                throw TypeError(".LLM_Get_End_Of_Generation_Sequence_Reply.endOfGenerationSequenceTokens: array expected");
            message.endOfGenerationSequenceTokens = [];
            for (var i = 0; i < object.endOfGenerationSequenceTokens.length; ++i)
                message.endOfGenerationSequenceTokens[i] = object.endOfGenerationSequenceTokens[i] | 0;
        }
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_End_Of_Generation_Sequence_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Reply} message LLM_Get_End_Of_Generation_Sequence_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.endOfGenerationSequenceTokens = [];
        if (options.defaults) {
            object.endOfGenerationSequence = "";
            object.status = 0;
        }
        if (message.endOfGenerationSequence != null && message.hasOwnProperty("endOfGenerationSequence"))
            object.endOfGenerationSequence = message.endOfGenerationSequence;
        if (message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length) {
            object.endOfGenerationSequenceTokens = [];
            for (var j = 0; j < message.endOfGenerationSequenceTokens.length; ++j)
                object.endOfGenerationSequenceTokens[j] = message.endOfGenerationSequenceTokens[j];
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Get_End_Of_Generation_Sequence_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_End_Of_Generation_Sequence_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_End_Of_Generation_Sequence_Reply";
    };

    return LLM_Get_End_Of_Generation_Sequence_Reply;
})();

$root.LLM_Set_Stop_Tokens_Request = (function() {

    /**
     * Properties of a LLM_Set_Stop_Tokens_Request.
     * @exports ILLM_Set_Stop_Tokens_Request
     * @interface ILLM_Set_Stop_Tokens_Request
     * @property {Array.<ITokenizedSequence>|null} [tokenizedStopTokens] LLM_Set_Stop_Tokens_Request tokenizedStopTokens
     */

    /**
     * Constructs a new LLM_Set_Stop_Tokens_Request.
     * @exports LLM_Set_Stop_Tokens_Request
     * @classdesc Represents a LLM_Set_Stop_Tokens_Request.
     * @implements ILLM_Set_Stop_Tokens_Request
     * @constructor
     * @param {ILLM_Set_Stop_Tokens_Request=} [properties] Properties to set
     */
    function LLM_Set_Stop_Tokens_Request(properties) {
        this.tokenizedStopTokens = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Set_Stop_Tokens_Request tokenizedStopTokens.
     * @member {Array.<ITokenizedSequence>} tokenizedStopTokens
     * @memberof LLM_Set_Stop_Tokens_Request
     * @instance
     */
    LLM_Set_Stop_Tokens_Request.prototype.tokenizedStopTokens = $util.emptyArray;

    /**
     * Creates a new LLM_Set_Stop_Tokens_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {ILLM_Set_Stop_Tokens_Request=} [properties] Properties to set
     * @returns {LLM_Set_Stop_Tokens_Request} LLM_Set_Stop_Tokens_Request instance
     */
    LLM_Set_Stop_Tokens_Request.create = function create(properties) {
        return new LLM_Set_Stop_Tokens_Request(properties);
    };

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Request message. Does not implicitly {@link LLM_Set_Stop_Tokens_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {ILLM_Set_Stop_Tokens_Request} message LLM_Set_Stop_Tokens_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Stop_Tokens_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tokenizedStopTokens != null && message.tokenizedStopTokens.length)
            for (var i = 0; i < message.tokenizedStopTokens.length; ++i)
                $root.TokenizedSequence.encode(message.tokenizedStopTokens[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Request message, length delimited. Does not implicitly {@link LLM_Set_Stop_Tokens_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {ILLM_Set_Stop_Tokens_Request} message LLM_Set_Stop_Tokens_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Stop_Tokens_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_Stop_Tokens_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_Stop_Tokens_Request} LLM_Set_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Stop_Tokens_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Set_Stop_Tokens_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.tokenizedStopTokens && message.tokenizedStopTokens.length))
                        message.tokenizedStopTokens = [];
                    message.tokenizedStopTokens.push($root.TokenizedSequence.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Set_Stop_Tokens_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_Stop_Tokens_Request} LLM_Set_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Stop_Tokens_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_Stop_Tokens_Request message.
     * @function verify
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_Stop_Tokens_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tokenizedStopTokens != null && message.hasOwnProperty("tokenizedStopTokens")) {
            if (!Array.isArray(message.tokenizedStopTokens))
                return "tokenizedStopTokens: array expected";
            for (var i = 0; i < message.tokenizedStopTokens.length; ++i) {
                var error = $root.TokenizedSequence.verify(message.tokenizedStopTokens[i]);
                if (error)
                    return "tokenizedStopTokens." + error;
            }
        }
        return null;
    };

    /**
     * Creates a LLM_Set_Stop_Tokens_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_Stop_Tokens_Request} LLM_Set_Stop_Tokens_Request
     */
    LLM_Set_Stop_Tokens_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Set_Stop_Tokens_Request)
            return object;
        var message = new $root.LLM_Set_Stop_Tokens_Request();
        if (object.tokenizedStopTokens) {
            if (!Array.isArray(object.tokenizedStopTokens))
                throw TypeError(".LLM_Set_Stop_Tokens_Request.tokenizedStopTokens: array expected");
            message.tokenizedStopTokens = [];
            for (var i = 0; i < object.tokenizedStopTokens.length; ++i) {
                if (typeof object.tokenizedStopTokens[i] !== "object")
                    throw TypeError(".LLM_Set_Stop_Tokens_Request.tokenizedStopTokens: object expected");
                message.tokenizedStopTokens[i] = $root.TokenizedSequence.fromObject(object.tokenizedStopTokens[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_Stop_Tokens_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {LLM_Set_Stop_Tokens_Request} message LLM_Set_Stop_Tokens_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_Stop_Tokens_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.tokenizedStopTokens = [];
        if (message.tokenizedStopTokens && message.tokenizedStopTokens.length) {
            object.tokenizedStopTokens = [];
            for (var j = 0; j < message.tokenizedStopTokens.length; ++j)
                object.tokenizedStopTokens[j] = $root.TokenizedSequence.toObject(message.tokenizedStopTokens[j], options);
        }
        return object;
    };

    /**
     * Converts this LLM_Set_Stop_Tokens_Request to JSON.
     * @function toJSON
     * @memberof LLM_Set_Stop_Tokens_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_Stop_Tokens_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Set_Stop_Tokens_Request
     * @function getTypeUrl
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Set_Stop_Tokens_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Set_Stop_Tokens_Request";
    };

    return LLM_Set_Stop_Tokens_Request;
})();

$root.TokenizedSequence = (function() {

    /**
     * Properties of a TokenizedSequence.
     * @exports ITokenizedSequence
     * @interface ITokenizedSequence
     * @property {Array.<number>|null} [tokens] TokenizedSequence tokens
     */

    /**
     * Constructs a new TokenizedSequence.
     * @exports TokenizedSequence
     * @classdesc Represents a TokenizedSequence.
     * @implements ITokenizedSequence
     * @constructor
     * @param {ITokenizedSequence=} [properties] Properties to set
     */
    function TokenizedSequence(properties) {
        this.tokens = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TokenizedSequence tokens.
     * @member {Array.<number>} tokens
     * @memberof TokenizedSequence
     * @instance
     */
    TokenizedSequence.prototype.tokens = $util.emptyArray;

    /**
     * Creates a new TokenizedSequence instance using the specified properties.
     * @function create
     * @memberof TokenizedSequence
     * @static
     * @param {ITokenizedSequence=} [properties] Properties to set
     * @returns {TokenizedSequence} TokenizedSequence instance
     */
    TokenizedSequence.create = function create(properties) {
        return new TokenizedSequence(properties);
    };

    /**
     * Encodes the specified TokenizedSequence message. Does not implicitly {@link TokenizedSequence.verify|verify} messages.
     * @function encode
     * @memberof TokenizedSequence
     * @static
     * @param {ITokenizedSequence} message TokenizedSequence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenizedSequence.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tokens != null && message.tokens.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.tokens.length; ++i)
                writer.int32(message.tokens[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified TokenizedSequence message, length delimited. Does not implicitly {@link TokenizedSequence.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TokenizedSequence
     * @static
     * @param {ITokenizedSequence} message TokenizedSequence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenizedSequence.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TokenizedSequence message from the specified reader or buffer.
     * @function decode
     * @memberof TokenizedSequence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TokenizedSequence} TokenizedSequence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenizedSequence.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TokenizedSequence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tokens.push(reader.int32());
                    } else
                        message.tokens.push(reader.int32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TokenizedSequence message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TokenizedSequence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TokenizedSequence} TokenizedSequence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenizedSequence.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TokenizedSequence message.
     * @function verify
     * @memberof TokenizedSequence
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TokenizedSequence.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tokens != null && message.hasOwnProperty("tokens")) {
            if (!Array.isArray(message.tokens))
                return "tokens: array expected";
            for (var i = 0; i < message.tokens.length; ++i)
                if (!$util.isInteger(message.tokens[i]))
                    return "tokens: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a TokenizedSequence message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TokenizedSequence
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TokenizedSequence} TokenizedSequence
     */
    TokenizedSequence.fromObject = function fromObject(object) {
        if (object instanceof $root.TokenizedSequence)
            return object;
        var message = new $root.TokenizedSequence();
        if (object.tokens) {
            if (!Array.isArray(object.tokens))
                throw TypeError(".TokenizedSequence.tokens: array expected");
            message.tokens = [];
            for (var i = 0; i < object.tokens.length; ++i)
                message.tokens[i] = object.tokens[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a TokenizedSequence message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TokenizedSequence
     * @static
     * @param {TokenizedSequence} message TokenizedSequence
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TokenizedSequence.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.tokens = [];
        if (message.tokens && message.tokens.length) {
            object.tokens = [];
            for (var j = 0; j < message.tokens.length; ++j)
                object.tokens[j] = message.tokens[j];
        }
        return object;
    };

    /**
     * Converts this TokenizedSequence to JSON.
     * @function toJSON
     * @memberof TokenizedSequence
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TokenizedSequence.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TokenizedSequence
     * @function getTypeUrl
     * @memberof TokenizedSequence
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TokenizedSequence.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TokenizedSequence";
    };

    return TokenizedSequence;
})();

$root.LLM_Set_Stop_Tokens_Reply = (function() {

    /**
     * Properties of a LLM_Set_Stop_Tokens_Reply.
     * @exports ILLM_Set_Stop_Tokens_Reply
     * @interface ILLM_Set_Stop_Tokens_Reply
     * @property {number|null} [status] LLM_Set_Stop_Tokens_Reply status
     */

    /**
     * Constructs a new LLM_Set_Stop_Tokens_Reply.
     * @exports LLM_Set_Stop_Tokens_Reply
     * @classdesc Represents a LLM_Set_Stop_Tokens_Reply.
     * @implements ILLM_Set_Stop_Tokens_Reply
     * @constructor
     * @param {ILLM_Set_Stop_Tokens_Reply=} [properties] Properties to set
     */
    function LLM_Set_Stop_Tokens_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Set_Stop_Tokens_Reply status.
     * @member {number} status
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @instance
     */
    LLM_Set_Stop_Tokens_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Set_Stop_Tokens_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {ILLM_Set_Stop_Tokens_Reply=} [properties] Properties to set
     * @returns {LLM_Set_Stop_Tokens_Reply} LLM_Set_Stop_Tokens_Reply instance
     */
    LLM_Set_Stop_Tokens_Reply.create = function create(properties) {
        return new LLM_Set_Stop_Tokens_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Reply message. Does not implicitly {@link LLM_Set_Stop_Tokens_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {ILLM_Set_Stop_Tokens_Reply} message LLM_Set_Stop_Tokens_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Stop_Tokens_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Reply message, length delimited. Does not implicitly {@link LLM_Set_Stop_Tokens_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {ILLM_Set_Stop_Tokens_Reply} message LLM_Set_Stop_Tokens_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Stop_Tokens_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_Stop_Tokens_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_Stop_Tokens_Reply} LLM_Set_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Stop_Tokens_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Set_Stop_Tokens_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Set_Stop_Tokens_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_Stop_Tokens_Reply} LLM_Set_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Stop_Tokens_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_Stop_Tokens_Reply message.
     * @function verify
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_Stop_Tokens_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Set_Stop_Tokens_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_Stop_Tokens_Reply} LLM_Set_Stop_Tokens_Reply
     */
    LLM_Set_Stop_Tokens_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Set_Stop_Tokens_Reply)
            return object;
        var message = new $root.LLM_Set_Stop_Tokens_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_Stop_Tokens_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {LLM_Set_Stop_Tokens_Reply} message LLM_Set_Stop_Tokens_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_Stop_Tokens_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Set_Stop_Tokens_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_Stop_Tokens_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Set_Stop_Tokens_Reply
     * @function getTypeUrl
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Set_Stop_Tokens_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Set_Stop_Tokens_Reply";
    };

    return LLM_Set_Stop_Tokens_Reply;
})();

$root.LLM_Get_Stop_Tokens_Request = (function() {

    /**
     * Properties of a LLM_Get_Stop_Tokens_Request.
     * @exports ILLM_Get_Stop_Tokens_Request
     * @interface ILLM_Get_Stop_Tokens_Request
     */

    /**
     * Constructs a new LLM_Get_Stop_Tokens_Request.
     * @exports LLM_Get_Stop_Tokens_Request
     * @classdesc Represents a LLM_Get_Stop_Tokens_Request.
     * @implements ILLM_Get_Stop_Tokens_Request
     * @constructor
     * @param {ILLM_Get_Stop_Tokens_Request=} [properties] Properties to set
     */
    function LLM_Get_Stop_Tokens_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Get_Stop_Tokens_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {ILLM_Get_Stop_Tokens_Request=} [properties] Properties to set
     * @returns {LLM_Get_Stop_Tokens_Request} LLM_Get_Stop_Tokens_Request instance
     */
    LLM_Get_Stop_Tokens_Request.create = function create(properties) {
        return new LLM_Get_Stop_Tokens_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Request message. Does not implicitly {@link LLM_Get_Stop_Tokens_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {ILLM_Get_Stop_Tokens_Request} message LLM_Get_Stop_Tokens_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Stop_Tokens_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Request message, length delimited. Does not implicitly {@link LLM_Get_Stop_Tokens_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {ILLM_Get_Stop_Tokens_Request} message LLM_Get_Stop_Tokens_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Stop_Tokens_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Stop_Tokens_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Stop_Tokens_Request} LLM_Get_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Stop_Tokens_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Stop_Tokens_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Stop_Tokens_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Stop_Tokens_Request} LLM_Get_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Stop_Tokens_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Stop_Tokens_Request message.
     * @function verify
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Stop_Tokens_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Stop_Tokens_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Stop_Tokens_Request} LLM_Get_Stop_Tokens_Request
     */
    LLM_Get_Stop_Tokens_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Stop_Tokens_Request)
            return object;
        return new $root.LLM_Get_Stop_Tokens_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Stop_Tokens_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {LLM_Get_Stop_Tokens_Request} message LLM_Get_Stop_Tokens_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Stop_Tokens_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Get_Stop_Tokens_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Stop_Tokens_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Stop_Tokens_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Stop_Tokens_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Stop_Tokens_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Stop_Tokens_Request";
    };

    return LLM_Get_Stop_Tokens_Request;
})();

$root.LLM_Get_Stop_Tokens_Reply = (function() {

    /**
     * Properties of a LLM_Get_Stop_Tokens_Reply.
     * @exports ILLM_Get_Stop_Tokens_Reply
     * @interface ILLM_Get_Stop_Tokens_Reply
     * @property {Array.<string>|null} [stopTokens] LLM_Get_Stop_Tokens_Reply stopTokens
     * @property {Array.<ITokenizedSequence>|null} [tokenizedStopTokens] LLM_Get_Stop_Tokens_Reply tokenizedStopTokens
     * @property {number|null} [status] LLM_Get_Stop_Tokens_Reply status
     */

    /**
     * Constructs a new LLM_Get_Stop_Tokens_Reply.
     * @exports LLM_Get_Stop_Tokens_Reply
     * @classdesc Represents a LLM_Get_Stop_Tokens_Reply.
     * @implements ILLM_Get_Stop_Tokens_Reply
     * @constructor
     * @param {ILLM_Get_Stop_Tokens_Reply=} [properties] Properties to set
     */
    function LLM_Get_Stop_Tokens_Reply(properties) {
        this.stopTokens = [];
        this.tokenizedStopTokens = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Get_Stop_Tokens_Reply stopTokens.
     * @member {Array.<string>} stopTokens
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @instance
     */
    LLM_Get_Stop_Tokens_Reply.prototype.stopTokens = $util.emptyArray;

    /**
     * LLM_Get_Stop_Tokens_Reply tokenizedStopTokens.
     * @member {Array.<ITokenizedSequence>} tokenizedStopTokens
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @instance
     */
    LLM_Get_Stop_Tokens_Reply.prototype.tokenizedStopTokens = $util.emptyArray;

    /**
     * LLM_Get_Stop_Tokens_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @instance
     */
    LLM_Get_Stop_Tokens_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Get_Stop_Tokens_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {ILLM_Get_Stop_Tokens_Reply=} [properties] Properties to set
     * @returns {LLM_Get_Stop_Tokens_Reply} LLM_Get_Stop_Tokens_Reply instance
     */
    LLM_Get_Stop_Tokens_Reply.create = function create(properties) {
        return new LLM_Get_Stop_Tokens_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Reply message. Does not implicitly {@link LLM_Get_Stop_Tokens_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {ILLM_Get_Stop_Tokens_Reply} message LLM_Get_Stop_Tokens_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Stop_Tokens_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.stopTokens != null && message.stopTokens.length)
            for (var i = 0; i < message.stopTokens.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stopTokens[i]);
        if (message.tokenizedStopTokens != null && message.tokenizedStopTokens.length)
            for (var i = 0; i < message.tokenizedStopTokens.length; ++i)
                $root.TokenizedSequence.encode(message.tokenizedStopTokens[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Reply message, length delimited. Does not implicitly {@link LLM_Get_Stop_Tokens_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {ILLM_Get_Stop_Tokens_Reply} message LLM_Get_Stop_Tokens_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Stop_Tokens_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Stop_Tokens_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Stop_Tokens_Reply} LLM_Get_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Stop_Tokens_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Stop_Tokens_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.stopTokens && message.stopTokens.length))
                        message.stopTokens = [];
                    message.stopTokens.push(reader.string());
                    break;
                }
            case 2: {
                    if (!(message.tokenizedStopTokens && message.tokenizedStopTokens.length))
                        message.tokenizedStopTokens = [];
                    message.tokenizedStopTokens.push($root.TokenizedSequence.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Stop_Tokens_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Stop_Tokens_Reply} LLM_Get_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Stop_Tokens_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Stop_Tokens_Reply message.
     * @function verify
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Stop_Tokens_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.stopTokens != null && message.hasOwnProperty("stopTokens")) {
            if (!Array.isArray(message.stopTokens))
                return "stopTokens: array expected";
            for (var i = 0; i < message.stopTokens.length; ++i)
                if (!$util.isString(message.stopTokens[i]))
                    return "stopTokens: string[] expected";
        }
        if (message.tokenizedStopTokens != null && message.hasOwnProperty("tokenizedStopTokens")) {
            if (!Array.isArray(message.tokenizedStopTokens))
                return "tokenizedStopTokens: array expected";
            for (var i = 0; i < message.tokenizedStopTokens.length; ++i) {
                var error = $root.TokenizedSequence.verify(message.tokenizedStopTokens[i]);
                if (error)
                    return "tokenizedStopTokens." + error;
            }
        }
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Stop_Tokens_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Stop_Tokens_Reply} LLM_Get_Stop_Tokens_Reply
     */
    LLM_Get_Stop_Tokens_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Stop_Tokens_Reply)
            return object;
        var message = new $root.LLM_Get_Stop_Tokens_Reply();
        if (object.stopTokens) {
            if (!Array.isArray(object.stopTokens))
                throw TypeError(".LLM_Get_Stop_Tokens_Reply.stopTokens: array expected");
            message.stopTokens = [];
            for (var i = 0; i < object.stopTokens.length; ++i)
                message.stopTokens[i] = String(object.stopTokens[i]);
        }
        if (object.tokenizedStopTokens) {
            if (!Array.isArray(object.tokenizedStopTokens))
                throw TypeError(".LLM_Get_Stop_Tokens_Reply.tokenizedStopTokens: array expected");
            message.tokenizedStopTokens = [];
            for (var i = 0; i < object.tokenizedStopTokens.length; ++i) {
                if (typeof object.tokenizedStopTokens[i] !== "object")
                    throw TypeError(".LLM_Get_Stop_Tokens_Reply.tokenizedStopTokens: object expected");
                message.tokenizedStopTokens[i] = $root.TokenizedSequence.fromObject(object.tokenizedStopTokens[i]);
            }
        }
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Stop_Tokens_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {LLM_Get_Stop_Tokens_Reply} message LLM_Get_Stop_Tokens_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Stop_Tokens_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.stopTokens = [];
            object.tokenizedStopTokens = [];
        }
        if (options.defaults)
            object.status = 0;
        if (message.stopTokens && message.stopTokens.length) {
            object.stopTokens = [];
            for (var j = 0; j < message.stopTokens.length; ++j)
                object.stopTokens[j] = message.stopTokens[j];
        }
        if (message.tokenizedStopTokens && message.tokenizedStopTokens.length) {
            object.tokenizedStopTokens = [];
            for (var j = 0; j < message.tokenizedStopTokens.length; ++j)
                object.tokenizedStopTokens[j] = $root.TokenizedSequence.toObject(message.tokenizedStopTokens[j], options);
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Get_Stop_Tokens_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Stop_Tokens_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Stop_Tokens_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Stop_Tokens_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Stop_Tokens_Reply";
    };

    return LLM_Get_Stop_Tokens_Reply;
})();

$root.LLM_Get_Context_Usage_Size_Request = (function() {

    /**
     * Properties of a LLM_Get_Context_Usage_Size_Request.
     * @exports ILLM_Get_Context_Usage_Size_Request
     * @interface ILLM_Get_Context_Usage_Size_Request
     */

    /**
     * Constructs a new LLM_Get_Context_Usage_Size_Request.
     * @exports LLM_Get_Context_Usage_Size_Request
     * @classdesc Represents a LLM_Get_Context_Usage_Size_Request.
     * @implements ILLM_Get_Context_Usage_Size_Request
     * @constructor
     * @param {ILLM_Get_Context_Usage_Size_Request=} [properties] Properties to set
     */
    function LLM_Get_Context_Usage_Size_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Get_Context_Usage_Size_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {ILLM_Get_Context_Usage_Size_Request=} [properties] Properties to set
     * @returns {LLM_Get_Context_Usage_Size_Request} LLM_Get_Context_Usage_Size_Request instance
     */
    LLM_Get_Context_Usage_Size_Request.create = function create(properties) {
        return new LLM_Get_Context_Usage_Size_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Request message. Does not implicitly {@link LLM_Get_Context_Usage_Size_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {ILLM_Get_Context_Usage_Size_Request} message LLM_Get_Context_Usage_Size_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Usage_Size_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Request message, length delimited. Does not implicitly {@link LLM_Get_Context_Usage_Size_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {ILLM_Get_Context_Usage_Size_Request} message LLM_Get_Context_Usage_Size_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Usage_Size_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Usage_Size_Request} LLM_Get_Context_Usage_Size_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Usage_Size_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Context_Usage_Size_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Usage_Size_Request} LLM_Get_Context_Usage_Size_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Usage_Size_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Context_Usage_Size_Request message.
     * @function verify
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Context_Usage_Size_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Context_Usage_Size_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Context_Usage_Size_Request} LLM_Get_Context_Usage_Size_Request
     */
    LLM_Get_Context_Usage_Size_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Context_Usage_Size_Request)
            return object;
        return new $root.LLM_Get_Context_Usage_Size_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Context_Usage_Size_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {LLM_Get_Context_Usage_Size_Request} message LLM_Get_Context_Usage_Size_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Context_Usage_Size_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Get_Context_Usage_Size_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Context_Usage_Size_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Context_Usage_Size_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Context_Usage_Size_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Context_Usage_Size_Request";
    };

    return LLM_Get_Context_Usage_Size_Request;
})();

$root.LLM_Get_Context_Usage_Size_Reply = (function() {

    /**
     * Properties of a LLM_Get_Context_Usage_Size_Reply.
     * @exports ILLM_Get_Context_Usage_Size_Reply
     * @interface ILLM_Get_Context_Usage_Size_Reply
     * @property {number|null} [status] LLM_Get_Context_Usage_Size_Reply status
     * @property {number|null} [contextUsage] LLM_Get_Context_Usage_Size_Reply contextUsage
     */

    /**
     * Constructs a new LLM_Get_Context_Usage_Size_Reply.
     * @exports LLM_Get_Context_Usage_Size_Reply
     * @classdesc Represents a LLM_Get_Context_Usage_Size_Reply.
     * @implements ILLM_Get_Context_Usage_Size_Reply
     * @constructor
     * @param {ILLM_Get_Context_Usage_Size_Reply=} [properties] Properties to set
     */
    function LLM_Get_Context_Usage_Size_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Get_Context_Usage_Size_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @instance
     */
    LLM_Get_Context_Usage_Size_Reply.prototype.status = 0;

    /**
     * LLM_Get_Context_Usage_Size_Reply contextUsage.
     * @member {number} contextUsage
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @instance
     */
    LLM_Get_Context_Usage_Size_Reply.prototype.contextUsage = 0;

    /**
     * Creates a new LLM_Get_Context_Usage_Size_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {ILLM_Get_Context_Usage_Size_Reply=} [properties] Properties to set
     * @returns {LLM_Get_Context_Usage_Size_Reply} LLM_Get_Context_Usage_Size_Reply instance
     */
    LLM_Get_Context_Usage_Size_Reply.create = function create(properties) {
        return new LLM_Get_Context_Usage_Size_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Reply message. Does not implicitly {@link LLM_Get_Context_Usage_Size_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {ILLM_Get_Context_Usage_Size_Reply} message LLM_Get_Context_Usage_Size_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Usage_Size_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.contextUsage != null && Object.hasOwnProperty.call(message, "contextUsage"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.contextUsage);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Reply message, length delimited. Does not implicitly {@link LLM_Get_Context_Usage_Size_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {ILLM_Get_Context_Usage_Size_Reply} message LLM_Get_Context_Usage_Size_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Usage_Size_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Usage_Size_Reply} LLM_Get_Context_Usage_Size_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Usage_Size_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Context_Usage_Size_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            case 2: {
                    message.contextUsage = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Usage_Size_Reply} LLM_Get_Context_Usage_Size_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Usage_Size_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Context_Usage_Size_Reply message.
     * @function verify
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Context_Usage_Size_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.contextUsage != null && message.hasOwnProperty("contextUsage"))
            if (!$util.isInteger(message.contextUsage))
                return "contextUsage: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Context_Usage_Size_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Context_Usage_Size_Reply} LLM_Get_Context_Usage_Size_Reply
     */
    LLM_Get_Context_Usage_Size_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Context_Usage_Size_Reply)
            return object;
        var message = new $root.LLM_Get_Context_Usage_Size_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        if (object.contextUsage != null)
            message.contextUsage = object.contextUsage >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Context_Usage_Size_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {LLM_Get_Context_Usage_Size_Reply} message LLM_Get_Context_Usage_Size_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Context_Usage_Size_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.contextUsage = 0;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.contextUsage != null && message.hasOwnProperty("contextUsage"))
            object.contextUsage = message.contextUsage;
        return object;
    };

    /**
     * Converts this LLM_Get_Context_Usage_Size_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Context_Usage_Size_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Context_Usage_Size_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Context_Usage_Size_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Context_Usage_Size_Reply";
    };

    return LLM_Get_Context_Usage_Size_Reply;
})();

$root.LLM_Get_Max_Context_Capacity_Request = (function() {

    /**
     * Properties of a LLM_Get_Max_Context_Capacity_Request.
     * @exports ILLM_Get_Max_Context_Capacity_Request
     * @interface ILLM_Get_Max_Context_Capacity_Request
     */

    /**
     * Constructs a new LLM_Get_Max_Context_Capacity_Request.
     * @exports LLM_Get_Max_Context_Capacity_Request
     * @classdesc Represents a LLM_Get_Max_Context_Capacity_Request.
     * @implements ILLM_Get_Max_Context_Capacity_Request
     * @constructor
     * @param {ILLM_Get_Max_Context_Capacity_Request=} [properties] Properties to set
     */
    function LLM_Get_Max_Context_Capacity_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new LLM_Get_Max_Context_Capacity_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {ILLM_Get_Max_Context_Capacity_Request=} [properties] Properties to set
     * @returns {LLM_Get_Max_Context_Capacity_Request} LLM_Get_Max_Context_Capacity_Request instance
     */
    LLM_Get_Max_Context_Capacity_Request.create = function create(properties) {
        return new LLM_Get_Max_Context_Capacity_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Request message. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {ILLM_Get_Max_Context_Capacity_Request} message LLM_Get_Max_Context_Capacity_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Max_Context_Capacity_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Request message, length delimited. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {ILLM_Get_Max_Context_Capacity_Request} message LLM_Get_Max_Context_Capacity_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Max_Context_Capacity_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Max_Context_Capacity_Request} LLM_Get_Max_Context_Capacity_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Max_Context_Capacity_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Max_Context_Capacity_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Max_Context_Capacity_Request} LLM_Get_Max_Context_Capacity_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Max_Context_Capacity_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Max_Context_Capacity_Request message.
     * @function verify
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Max_Context_Capacity_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Max_Context_Capacity_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Max_Context_Capacity_Request} LLM_Get_Max_Context_Capacity_Request
     */
    LLM_Get_Max_Context_Capacity_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Max_Context_Capacity_Request)
            return object;
        return new $root.LLM_Get_Max_Context_Capacity_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Max_Context_Capacity_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Request} message LLM_Get_Max_Context_Capacity_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Max_Context_Capacity_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this LLM_Get_Max_Context_Capacity_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Max_Context_Capacity_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Max_Context_Capacity_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Max_Context_Capacity_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Max_Context_Capacity_Request";
    };

    return LLM_Get_Max_Context_Capacity_Request;
})();

$root.LLM_Get_Max_Context_Capacity_Reply = (function() {

    /**
     * Properties of a LLM_Get_Max_Context_Capacity_Reply.
     * @exports ILLM_Get_Max_Context_Capacity_Reply
     * @interface ILLM_Get_Max_Context_Capacity_Reply
     * @property {number|null} [status] LLM_Get_Max_Context_Capacity_Reply status
     * @property {number|null} [maxContextCapacity] LLM_Get_Max_Context_Capacity_Reply maxContextCapacity
     */

    /**
     * Constructs a new LLM_Get_Max_Context_Capacity_Reply.
     * @exports LLM_Get_Max_Context_Capacity_Reply
     * @classdesc Represents a LLM_Get_Max_Context_Capacity_Reply.
     * @implements ILLM_Get_Max_Context_Capacity_Reply
     * @constructor
     * @param {ILLM_Get_Max_Context_Capacity_Reply=} [properties] Properties to set
     */
    function LLM_Get_Max_Context_Capacity_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LLM_Get_Max_Context_Capacity_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @instance
     */
    LLM_Get_Max_Context_Capacity_Reply.prototype.status = 0;

    /**
     * LLM_Get_Max_Context_Capacity_Reply maxContextCapacity.
     * @member {number} maxContextCapacity
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @instance
     */
    LLM_Get_Max_Context_Capacity_Reply.prototype.maxContextCapacity = 0;

    /**
     * Creates a new LLM_Get_Max_Context_Capacity_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {ILLM_Get_Max_Context_Capacity_Reply=} [properties] Properties to set
     * @returns {LLM_Get_Max_Context_Capacity_Reply} LLM_Get_Max_Context_Capacity_Reply instance
     */
    LLM_Get_Max_Context_Capacity_Reply.create = function create(properties) {
        return new LLM_Get_Max_Context_Capacity_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Reply message. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {ILLM_Get_Max_Context_Capacity_Reply} message LLM_Get_Max_Context_Capacity_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Max_Context_Capacity_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.maxContextCapacity != null && Object.hasOwnProperty.call(message, "maxContextCapacity"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maxContextCapacity);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Reply message, length delimited. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {ILLM_Get_Max_Context_Capacity_Reply} message LLM_Get_Max_Context_Capacity_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Max_Context_Capacity_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Max_Context_Capacity_Reply} LLM_Get_Max_Context_Capacity_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Max_Context_Capacity_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LLM_Get_Max_Context_Capacity_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            case 2: {
                    message.maxContextCapacity = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Max_Context_Capacity_Reply} LLM_Get_Max_Context_Capacity_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Max_Context_Capacity_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Max_Context_Capacity_Reply message.
     * @function verify
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Max_Context_Capacity_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.maxContextCapacity != null && message.hasOwnProperty("maxContextCapacity"))
            if (!$util.isInteger(message.maxContextCapacity))
                return "maxContextCapacity: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Max_Context_Capacity_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Max_Context_Capacity_Reply} LLM_Get_Max_Context_Capacity_Reply
     */
    LLM_Get_Max_Context_Capacity_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.LLM_Get_Max_Context_Capacity_Reply)
            return object;
        var message = new $root.LLM_Get_Max_Context_Capacity_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        if (object.maxContextCapacity != null)
            message.maxContextCapacity = object.maxContextCapacity >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Max_Context_Capacity_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Reply} message LLM_Get_Max_Context_Capacity_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Max_Context_Capacity_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.maxContextCapacity = 0;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.maxContextCapacity != null && message.hasOwnProperty("maxContextCapacity"))
            object.maxContextCapacity = message.maxContextCapacity;
        return object;
    };

    /**
     * Converts this LLM_Get_Max_Context_Capacity_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Max_Context_Capacity_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LLM_Get_Max_Context_Capacity_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LLM_Get_Max_Context_Capacity_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LLM_Get_Max_Context_Capacity_Reply";
    };

    return LLM_Get_Max_Context_Capacity_Reply;
})();

$root.VLM_Create_Request = (function() {

    /**
     * Properties of a VLM_Create_Request.
     * @exports IVLM_Create_Request
     * @interface IVLM_Create_Request
     * @property {string|null} [groupId] VLM_Create_Request groupId
     * @property {string|null} [hefPath] VLM_Create_Request hefPath
     * @property {Array.<IHefChunkInfo>|null} [chunksToTransfer] VLM_Create_Request chunksToTransfer
     * @property {boolean|null} [tokenizerOnHost] VLM_Create_Request tokenizerOnHost
     * @property {number|Long|null} [totalHefSize] VLM_Create_Request totalHefSize
     */

    /**
     * Constructs a new VLM_Create_Request.
     * @exports VLM_Create_Request
     * @classdesc Represents a VLM_Create_Request.
     * @implements IVLM_Create_Request
     * @constructor
     * @param {IVLM_Create_Request=} [properties] Properties to set
     */
    function VLM_Create_Request(properties) {
        this.chunksToTransfer = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VLM_Create_Request groupId.
     * @member {string} groupId
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.groupId = "";

    /**
     * VLM_Create_Request hefPath.
     * @member {string} hefPath
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.hefPath = "";

    /**
     * VLM_Create_Request chunksToTransfer.
     * @member {Array.<IHefChunkInfo>} chunksToTransfer
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.chunksToTransfer = $util.emptyArray;

    /**
     * VLM_Create_Request tokenizerOnHost.
     * @member {boolean} tokenizerOnHost
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.tokenizerOnHost = false;

    /**
     * VLM_Create_Request totalHefSize.
     * @member {number|Long} totalHefSize
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.totalHefSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new VLM_Create_Request instance using the specified properties.
     * @function create
     * @memberof VLM_Create_Request
     * @static
     * @param {IVLM_Create_Request=} [properties] Properties to set
     * @returns {VLM_Create_Request} VLM_Create_Request instance
     */
    VLM_Create_Request.create = function create(properties) {
        return new VLM_Create_Request(properties);
    };

    /**
     * Encodes the specified VLM_Create_Request message. Does not implicitly {@link VLM_Create_Request.verify|verify} messages.
     * @function encode
     * @memberof VLM_Create_Request
     * @static
     * @param {IVLM_Create_Request} message VLM_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Create_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        if (message.hefPath != null && Object.hasOwnProperty.call(message, "hefPath"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.hefPath);
        if (message.chunksToTransfer != null && message.chunksToTransfer.length)
            for (var i = 0; i < message.chunksToTransfer.length; ++i)
                $root.HefChunkInfo.encode(message.chunksToTransfer[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.tokenizerOnHost != null && Object.hasOwnProperty.call(message, "tokenizerOnHost"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.tokenizerOnHost);
        if (message.totalHefSize != null && Object.hasOwnProperty.call(message, "totalHefSize"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.totalHefSize);
        return writer;
    };

    /**
     * Encodes the specified VLM_Create_Request message, length delimited. Does not implicitly {@link VLM_Create_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VLM_Create_Request
     * @static
     * @param {IVLM_Create_Request} message VLM_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Create_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VLM_Create_Request message from the specified reader or buffer.
     * @function decode
     * @memberof VLM_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VLM_Create_Request} VLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Create_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VLM_Create_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.groupId = reader.string();
                    break;
                }
            case 2: {
                    message.hefPath = reader.string();
                    break;
                }
            case 3: {
                    if (!(message.chunksToTransfer && message.chunksToTransfer.length))
                        message.chunksToTransfer = [];
                    message.chunksToTransfer.push($root.HefChunkInfo.decode(reader, reader.uint32()));
                    break;
                }
            case 4: {
                    message.tokenizerOnHost = reader.bool();
                    break;
                }
            case 5: {
                    message.totalHefSize = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VLM_Create_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VLM_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VLM_Create_Request} VLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Create_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VLM_Create_Request message.
     * @function verify
     * @memberof VLM_Create_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VLM_Create_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            if (!$util.isString(message.groupId))
                return "groupId: string expected";
        if (message.hefPath != null && message.hasOwnProperty("hefPath"))
            if (!$util.isString(message.hefPath))
                return "hefPath: string expected";
        if (message.chunksToTransfer != null && message.hasOwnProperty("chunksToTransfer")) {
            if (!Array.isArray(message.chunksToTransfer))
                return "chunksToTransfer: array expected";
            for (var i = 0; i < message.chunksToTransfer.length; ++i) {
                var error = $root.HefChunkInfo.verify(message.chunksToTransfer[i]);
                if (error)
                    return "chunksToTransfer." + error;
            }
        }
        if (message.tokenizerOnHost != null && message.hasOwnProperty("tokenizerOnHost"))
            if (typeof message.tokenizerOnHost !== "boolean")
                return "tokenizerOnHost: boolean expected";
        if (message.totalHefSize != null && message.hasOwnProperty("totalHefSize"))
            if (!$util.isInteger(message.totalHefSize) && !(message.totalHefSize && $util.isInteger(message.totalHefSize.low) && $util.isInteger(message.totalHefSize.high)))
                return "totalHefSize: integer|Long expected";
        return null;
    };

    /**
     * Creates a VLM_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VLM_Create_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VLM_Create_Request} VLM_Create_Request
     */
    VLM_Create_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.VLM_Create_Request)
            return object;
        var message = new $root.VLM_Create_Request();
        if (object.groupId != null)
            message.groupId = String(object.groupId);
        if (object.hefPath != null)
            message.hefPath = String(object.hefPath);
        if (object.chunksToTransfer) {
            if (!Array.isArray(object.chunksToTransfer))
                throw TypeError(".VLM_Create_Request.chunksToTransfer: array expected");
            message.chunksToTransfer = [];
            for (var i = 0; i < object.chunksToTransfer.length; ++i) {
                if (typeof object.chunksToTransfer[i] !== "object")
                    throw TypeError(".VLM_Create_Request.chunksToTransfer: object expected");
                message.chunksToTransfer[i] = $root.HefChunkInfo.fromObject(object.chunksToTransfer[i]);
            }
        }
        if (object.tokenizerOnHost != null)
            message.tokenizerOnHost = Boolean(object.tokenizerOnHost);
        if (object.totalHefSize != null)
            if ($util.Long)
                (message.totalHefSize = $util.Long.fromValue(object.totalHefSize)).unsigned = true;
            else if (typeof object.totalHefSize === "string")
                message.totalHefSize = parseInt(object.totalHefSize, 10);
            else if (typeof object.totalHefSize === "number")
                message.totalHefSize = object.totalHefSize;
            else if (typeof object.totalHefSize === "object")
                message.totalHefSize = new $util.LongBits(object.totalHefSize.low >>> 0, object.totalHefSize.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a VLM_Create_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VLM_Create_Request
     * @static
     * @param {VLM_Create_Request} message VLM_Create_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VLM_Create_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.chunksToTransfer = [];
        if (options.defaults) {
            object.groupId = "";
            object.hefPath = "";
            object.tokenizerOnHost = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.totalHefSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalHefSize = options.longs === String ? "0" : 0;
        }
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        if (message.hefPath != null && message.hasOwnProperty("hefPath"))
            object.hefPath = message.hefPath;
        if (message.chunksToTransfer && message.chunksToTransfer.length) {
            object.chunksToTransfer = [];
            for (var j = 0; j < message.chunksToTransfer.length; ++j)
                object.chunksToTransfer[j] = $root.HefChunkInfo.toObject(message.chunksToTransfer[j], options);
        }
        if (message.tokenizerOnHost != null && message.hasOwnProperty("tokenizerOnHost"))
            object.tokenizerOnHost = message.tokenizerOnHost;
        if (message.totalHefSize != null && message.hasOwnProperty("totalHefSize"))
            if (typeof message.totalHefSize === "number")
                object.totalHefSize = options.longs === String ? String(message.totalHefSize) : message.totalHefSize;
            else
                object.totalHefSize = options.longs === String ? $util.Long.prototype.toString.call(message.totalHefSize) : options.longs === Number ? new $util.LongBits(message.totalHefSize.low >>> 0, message.totalHefSize.high >>> 0).toNumber(true) : message.totalHefSize;
        return object;
    };

    /**
     * Converts this VLM_Create_Request to JSON.
     * @function toJSON
     * @memberof VLM_Create_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VLM_Create_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VLM_Create_Request
     * @function getTypeUrl
     * @memberof VLM_Create_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VLM_Create_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VLM_Create_Request";
    };

    return VLM_Create_Request;
})();

$root.FrameFormat = (function() {

    /**
     * Properties of a FrameFormat.
     * @exports IFrameFormat
     * @interface IFrameFormat
     * @property {number|null} [formatOrder] FrameFormat formatOrder
     * @property {number|null} [formatType] FrameFormat formatType
     */

    /**
     * Constructs a new FrameFormat.
     * @exports FrameFormat
     * @classdesc Represents a FrameFormat.
     * @implements IFrameFormat
     * @constructor
     * @param {IFrameFormat=} [properties] Properties to set
     */
    function FrameFormat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FrameFormat formatOrder.
     * @member {number} formatOrder
     * @memberof FrameFormat
     * @instance
     */
    FrameFormat.prototype.formatOrder = 0;

    /**
     * FrameFormat formatType.
     * @member {number} formatType
     * @memberof FrameFormat
     * @instance
     */
    FrameFormat.prototype.formatType = 0;

    /**
     * Creates a new FrameFormat instance using the specified properties.
     * @function create
     * @memberof FrameFormat
     * @static
     * @param {IFrameFormat=} [properties] Properties to set
     * @returns {FrameFormat} FrameFormat instance
     */
    FrameFormat.create = function create(properties) {
        return new FrameFormat(properties);
    };

    /**
     * Encodes the specified FrameFormat message. Does not implicitly {@link FrameFormat.verify|verify} messages.
     * @function encode
     * @memberof FrameFormat
     * @static
     * @param {IFrameFormat} message FrameFormat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameFormat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.formatOrder != null && Object.hasOwnProperty.call(message, "formatOrder"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.formatOrder);
        if (message.formatType != null && Object.hasOwnProperty.call(message, "formatType"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.formatType);
        return writer;
    };

    /**
     * Encodes the specified FrameFormat message, length delimited. Does not implicitly {@link FrameFormat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FrameFormat
     * @static
     * @param {IFrameFormat} message FrameFormat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameFormat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FrameFormat message from the specified reader or buffer.
     * @function decode
     * @memberof FrameFormat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FrameFormat} FrameFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameFormat.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FrameFormat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.formatOrder = reader.uint32();
                    break;
                }
            case 2: {
                    message.formatType = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FrameFormat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FrameFormat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FrameFormat} FrameFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameFormat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FrameFormat message.
     * @function verify
     * @memberof FrameFormat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FrameFormat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.formatOrder != null && message.hasOwnProperty("formatOrder"))
            if (!$util.isInteger(message.formatOrder))
                return "formatOrder: integer expected";
        if (message.formatType != null && message.hasOwnProperty("formatType"))
            if (!$util.isInteger(message.formatType))
                return "formatType: integer expected";
        return null;
    };

    /**
     * Creates a FrameFormat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FrameFormat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FrameFormat} FrameFormat
     */
    FrameFormat.fromObject = function fromObject(object) {
        if (object instanceof $root.FrameFormat)
            return object;
        var message = new $root.FrameFormat();
        if (object.formatOrder != null)
            message.formatOrder = object.formatOrder >>> 0;
        if (object.formatType != null)
            message.formatType = object.formatType >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a FrameFormat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FrameFormat
     * @static
     * @param {FrameFormat} message FrameFormat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FrameFormat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.formatOrder = 0;
            object.formatType = 0;
        }
        if (message.formatOrder != null && message.hasOwnProperty("formatOrder"))
            object.formatOrder = message.formatOrder;
        if (message.formatType != null && message.hasOwnProperty("formatType"))
            object.formatType = message.formatType;
        return object;
    };

    /**
     * Converts this FrameFormat to JSON.
     * @function toJSON
     * @memberof FrameFormat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FrameFormat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FrameFormat
     * @function getTypeUrl
     * @memberof FrameFormat
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FrameFormat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FrameFormat";
    };

    return FrameFormat;
})();

$root.FrameShape = (function() {

    /**
     * Properties of a FrameShape.
     * @exports IFrameShape
     * @interface IFrameShape
     * @property {number|null} [height] FrameShape height
     * @property {number|null} [width] FrameShape width
     * @property {number|null} [features] FrameShape features
     */

    /**
     * Constructs a new FrameShape.
     * @exports FrameShape
     * @classdesc Represents a FrameShape.
     * @implements IFrameShape
     * @constructor
     * @param {IFrameShape=} [properties] Properties to set
     */
    function FrameShape(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FrameShape height.
     * @member {number} height
     * @memberof FrameShape
     * @instance
     */
    FrameShape.prototype.height = 0;

    /**
     * FrameShape width.
     * @member {number} width
     * @memberof FrameShape
     * @instance
     */
    FrameShape.prototype.width = 0;

    /**
     * FrameShape features.
     * @member {number} features
     * @memberof FrameShape
     * @instance
     */
    FrameShape.prototype.features = 0;

    /**
     * Creates a new FrameShape instance using the specified properties.
     * @function create
     * @memberof FrameShape
     * @static
     * @param {IFrameShape=} [properties] Properties to set
     * @returns {FrameShape} FrameShape instance
     */
    FrameShape.create = function create(properties) {
        return new FrameShape(properties);
    };

    /**
     * Encodes the specified FrameShape message. Does not implicitly {@link FrameShape.verify|verify} messages.
     * @function encode
     * @memberof FrameShape
     * @static
     * @param {IFrameShape} message FrameShape message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameShape.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.height);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.width);
        if (message.features != null && Object.hasOwnProperty.call(message, "features"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.features);
        return writer;
    };

    /**
     * Encodes the specified FrameShape message, length delimited. Does not implicitly {@link FrameShape.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FrameShape
     * @static
     * @param {IFrameShape} message FrameShape message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameShape.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FrameShape message from the specified reader or buffer.
     * @function decode
     * @memberof FrameShape
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FrameShape} FrameShape
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameShape.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FrameShape();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.height = reader.uint32();
                    break;
                }
            case 2: {
                    message.width = reader.uint32();
                    break;
                }
            case 3: {
                    message.features = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FrameShape message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FrameShape
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FrameShape} FrameShape
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameShape.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FrameShape message.
     * @function verify
     * @memberof FrameShape
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FrameShape.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (!$util.isInteger(message.width))
                return "width: integer expected";
        if (message.features != null && message.hasOwnProperty("features"))
            if (!$util.isInteger(message.features))
                return "features: integer expected";
        return null;
    };

    /**
     * Creates a FrameShape message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FrameShape
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FrameShape} FrameShape
     */
    FrameShape.fromObject = function fromObject(object) {
        if (object instanceof $root.FrameShape)
            return object;
        var message = new $root.FrameShape();
        if (object.height != null)
            message.height = object.height >>> 0;
        if (object.width != null)
            message.width = object.width >>> 0;
        if (object.features != null)
            message.features = object.features >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a FrameShape message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FrameShape
     * @static
     * @param {FrameShape} message FrameShape
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FrameShape.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.height = 0;
            object.width = 0;
            object.features = 0;
        }
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = message.height;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = message.width;
        if (message.features != null && message.hasOwnProperty("features"))
            object.features = message.features;
        return object;
    };

    /**
     * Converts this FrameShape to JSON.
     * @function toJSON
     * @memberof FrameShape
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FrameShape.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FrameShape
     * @function getTypeUrl
     * @memberof FrameShape
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FrameShape.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FrameShape";
    };

    return FrameShape;
})();

$root.VLM_Create_Reply = (function() {

    /**
     * Properties of a VLM_Create_Reply.
     * @exports IVLM_Create_Reply
     * @interface IVLM_Create_Reply
     * @property {number|null} [status] VLM_Create_Reply status
     * @property {IFrameFormat|null} [frameFormat] VLM_Create_Reply frameFormat
     * @property {IFrameShape|null} [frameShape] VLM_Create_Reply frameShape
     * @property {string|null} [promptTemplate] VLM_Create_Reply promptTemplate
     * @property {number|null} [embeddingFeatures] VLM_Create_Reply embeddingFeatures
     * @property {number|null} [imagePadTokenId] VLM_Create_Reply imagePadTokenId
     * @property {number|null} [videoPadTokenId] VLM_Create_Reply videoPadTokenId
     * @property {number|null} [embeddingsPerFrame] VLM_Create_Reply embeddingsPerFrame
     */

    /**
     * Constructs a new VLM_Create_Reply.
     * @exports VLM_Create_Reply
     * @classdesc Represents a VLM_Create_Reply.
     * @implements IVLM_Create_Reply
     * @constructor
     * @param {IVLM_Create_Reply=} [properties] Properties to set
     */
    function VLM_Create_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VLM_Create_Reply status.
     * @member {number} status
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.status = 0;

    /**
     * VLM_Create_Reply frameFormat.
     * @member {IFrameFormat|null|undefined} frameFormat
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.frameFormat = null;

    /**
     * VLM_Create_Reply frameShape.
     * @member {IFrameShape|null|undefined} frameShape
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.frameShape = null;

    /**
     * VLM_Create_Reply promptTemplate.
     * @member {string} promptTemplate
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.promptTemplate = "";

    /**
     * VLM_Create_Reply embeddingFeatures.
     * @member {number} embeddingFeatures
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.embeddingFeatures = 0;

    /**
     * VLM_Create_Reply imagePadTokenId.
     * @member {number} imagePadTokenId
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.imagePadTokenId = 0;

    /**
     * VLM_Create_Reply videoPadTokenId.
     * @member {number} videoPadTokenId
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.videoPadTokenId = 0;

    /**
     * VLM_Create_Reply embeddingsPerFrame.
     * @member {number} embeddingsPerFrame
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.embeddingsPerFrame = 0;

    /**
     * Creates a new VLM_Create_Reply instance using the specified properties.
     * @function create
     * @memberof VLM_Create_Reply
     * @static
     * @param {IVLM_Create_Reply=} [properties] Properties to set
     * @returns {VLM_Create_Reply} VLM_Create_Reply instance
     */
    VLM_Create_Reply.create = function create(properties) {
        return new VLM_Create_Reply(properties);
    };

    /**
     * Encodes the specified VLM_Create_Reply message. Does not implicitly {@link VLM_Create_Reply.verify|verify} messages.
     * @function encode
     * @memberof VLM_Create_Reply
     * @static
     * @param {IVLM_Create_Reply} message VLM_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Create_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.frameFormat != null && Object.hasOwnProperty.call(message, "frameFormat"))
            $root.FrameFormat.encode(message.frameFormat, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.frameShape != null && Object.hasOwnProperty.call(message, "frameShape"))
            $root.FrameShape.encode(message.frameShape, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.promptTemplate != null && Object.hasOwnProperty.call(message, "promptTemplate"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.promptTemplate);
        if (message.embeddingFeatures != null && Object.hasOwnProperty.call(message, "embeddingFeatures"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.embeddingFeatures);
        if (message.imagePadTokenId != null && Object.hasOwnProperty.call(message, "imagePadTokenId"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.imagePadTokenId);
        if (message.videoPadTokenId != null && Object.hasOwnProperty.call(message, "videoPadTokenId"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.videoPadTokenId);
        if (message.embeddingsPerFrame != null && Object.hasOwnProperty.call(message, "embeddingsPerFrame"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.embeddingsPerFrame);
        return writer;
    };

    /**
     * Encodes the specified VLM_Create_Reply message, length delimited. Does not implicitly {@link VLM_Create_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VLM_Create_Reply
     * @static
     * @param {IVLM_Create_Reply} message VLM_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Create_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VLM_Create_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof VLM_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VLM_Create_Reply} VLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Create_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VLM_Create_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            case 2: {
                    message.frameFormat = $root.FrameFormat.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.frameShape = $root.FrameShape.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.promptTemplate = reader.string();
                    break;
                }
            case 5: {
                    message.embeddingFeatures = reader.uint32();
                    break;
                }
            case 6: {
                    message.imagePadTokenId = reader.uint32();
                    break;
                }
            case 7: {
                    message.videoPadTokenId = reader.uint32();
                    break;
                }
            case 8: {
                    message.embeddingsPerFrame = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VLM_Create_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VLM_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VLM_Create_Reply} VLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Create_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VLM_Create_Reply message.
     * @function verify
     * @memberof VLM_Create_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VLM_Create_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.frameFormat != null && message.hasOwnProperty("frameFormat")) {
            var error = $root.FrameFormat.verify(message.frameFormat);
            if (error)
                return "frameFormat." + error;
        }
        if (message.frameShape != null && message.hasOwnProperty("frameShape")) {
            var error = $root.FrameShape.verify(message.frameShape);
            if (error)
                return "frameShape." + error;
        }
        if (message.promptTemplate != null && message.hasOwnProperty("promptTemplate"))
            if (!$util.isString(message.promptTemplate))
                return "promptTemplate: string expected";
        if (message.embeddingFeatures != null && message.hasOwnProperty("embeddingFeatures"))
            if (!$util.isInteger(message.embeddingFeatures))
                return "embeddingFeatures: integer expected";
        if (message.imagePadTokenId != null && message.hasOwnProperty("imagePadTokenId"))
            if (!$util.isInteger(message.imagePadTokenId))
                return "imagePadTokenId: integer expected";
        if (message.videoPadTokenId != null && message.hasOwnProperty("videoPadTokenId"))
            if (!$util.isInteger(message.videoPadTokenId))
                return "videoPadTokenId: integer expected";
        if (message.embeddingsPerFrame != null && message.hasOwnProperty("embeddingsPerFrame"))
            if (!$util.isInteger(message.embeddingsPerFrame))
                return "embeddingsPerFrame: integer expected";
        return null;
    };

    /**
     * Creates a VLM_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VLM_Create_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VLM_Create_Reply} VLM_Create_Reply
     */
    VLM_Create_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.VLM_Create_Reply)
            return object;
        var message = new $root.VLM_Create_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        if (object.frameFormat != null) {
            if (typeof object.frameFormat !== "object")
                throw TypeError(".VLM_Create_Reply.frameFormat: object expected");
            message.frameFormat = $root.FrameFormat.fromObject(object.frameFormat);
        }
        if (object.frameShape != null) {
            if (typeof object.frameShape !== "object")
                throw TypeError(".VLM_Create_Reply.frameShape: object expected");
            message.frameShape = $root.FrameShape.fromObject(object.frameShape);
        }
        if (object.promptTemplate != null)
            message.promptTemplate = String(object.promptTemplate);
        if (object.embeddingFeatures != null)
            message.embeddingFeatures = object.embeddingFeatures >>> 0;
        if (object.imagePadTokenId != null)
            message.imagePadTokenId = object.imagePadTokenId >>> 0;
        if (object.videoPadTokenId != null)
            message.videoPadTokenId = object.videoPadTokenId >>> 0;
        if (object.embeddingsPerFrame != null)
            message.embeddingsPerFrame = object.embeddingsPerFrame >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a VLM_Create_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VLM_Create_Reply
     * @static
     * @param {VLM_Create_Reply} message VLM_Create_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VLM_Create_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.frameFormat = null;
            object.frameShape = null;
            object.promptTemplate = "";
            object.embeddingFeatures = 0;
            object.imagePadTokenId = 0;
            object.videoPadTokenId = 0;
            object.embeddingsPerFrame = 0;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.frameFormat != null && message.hasOwnProperty("frameFormat"))
            object.frameFormat = $root.FrameFormat.toObject(message.frameFormat, options);
        if (message.frameShape != null && message.hasOwnProperty("frameShape"))
            object.frameShape = $root.FrameShape.toObject(message.frameShape, options);
        if (message.promptTemplate != null && message.hasOwnProperty("promptTemplate"))
            object.promptTemplate = message.promptTemplate;
        if (message.embeddingFeatures != null && message.hasOwnProperty("embeddingFeatures"))
            object.embeddingFeatures = message.embeddingFeatures;
        if (message.imagePadTokenId != null && message.hasOwnProperty("imagePadTokenId"))
            object.imagePadTokenId = message.imagePadTokenId;
        if (message.videoPadTokenId != null && message.hasOwnProperty("videoPadTokenId"))
            object.videoPadTokenId = message.videoPadTokenId;
        if (message.embeddingsPerFrame != null && message.hasOwnProperty("embeddingsPerFrame"))
            object.embeddingsPerFrame = message.embeddingsPerFrame;
        return object;
    };

    /**
     * Converts this VLM_Create_Reply to JSON.
     * @function toJSON
     * @memberof VLM_Create_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VLM_Create_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VLM_Create_Reply
     * @function getTypeUrl
     * @memberof VLM_Create_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VLM_Create_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VLM_Create_Reply";
    };

    return VLM_Create_Reply;
})();

$root.VLM_Generator_Generate_Request = (function() {

    /**
     * Properties of a VLM_Generator_Generate_Request.
     * @exports IVLM_Generator_Generate_Request
     * @interface IVLM_Generator_Generate_Request
     * @property {number|null} [numberOfFrames] VLM_Generator_Generate_Request numberOfFrames
     * @property {Array.<number>|null} [videoFramesCountPerVideo] VLM_Generator_Generate_Request videoFramesCountPerVideo
     */

    /**
     * Constructs a new VLM_Generator_Generate_Request.
     * @exports VLM_Generator_Generate_Request
     * @classdesc Represents a VLM_Generator_Generate_Request.
     * @implements IVLM_Generator_Generate_Request
     * @constructor
     * @param {IVLM_Generator_Generate_Request=} [properties] Properties to set
     */
    function VLM_Generator_Generate_Request(properties) {
        this.videoFramesCountPerVideo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VLM_Generator_Generate_Request numberOfFrames.
     * @member {number} numberOfFrames
     * @memberof VLM_Generator_Generate_Request
     * @instance
     */
    VLM_Generator_Generate_Request.prototype.numberOfFrames = 0;

    /**
     * VLM_Generator_Generate_Request videoFramesCountPerVideo.
     * @member {Array.<number>} videoFramesCountPerVideo
     * @memberof VLM_Generator_Generate_Request
     * @instance
     */
    VLM_Generator_Generate_Request.prototype.videoFramesCountPerVideo = $util.emptyArray;

    /**
     * Creates a new VLM_Generator_Generate_Request instance using the specified properties.
     * @function create
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {IVLM_Generator_Generate_Request=} [properties] Properties to set
     * @returns {VLM_Generator_Generate_Request} VLM_Generator_Generate_Request instance
     */
    VLM_Generator_Generate_Request.create = function create(properties) {
        return new VLM_Generator_Generate_Request(properties);
    };

    /**
     * Encodes the specified VLM_Generator_Generate_Request message. Does not implicitly {@link VLM_Generator_Generate_Request.verify|verify} messages.
     * @function encode
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {IVLM_Generator_Generate_Request} message VLM_Generator_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Generator_Generate_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.numberOfFrames != null && Object.hasOwnProperty.call(message, "numberOfFrames"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.numberOfFrames);
        if (message.videoFramesCountPerVideo != null && message.videoFramesCountPerVideo.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.videoFramesCountPerVideo.length; ++i)
                writer.uint32(message.videoFramesCountPerVideo[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified VLM_Generator_Generate_Request message, length delimited. Does not implicitly {@link VLM_Generator_Generate_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {IVLM_Generator_Generate_Request} message VLM_Generator_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Generator_Generate_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VLM_Generator_Generate_Request message from the specified reader or buffer.
     * @function decode
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VLM_Generator_Generate_Request} VLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Generator_Generate_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VLM_Generator_Generate_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.numberOfFrames = reader.uint32();
                    break;
                }
            case 3: {
                    if (!(message.videoFramesCountPerVideo && message.videoFramesCountPerVideo.length))
                        message.videoFramesCountPerVideo = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.videoFramesCountPerVideo.push(reader.uint32());
                    } else
                        message.videoFramesCountPerVideo.push(reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VLM_Generator_Generate_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VLM_Generator_Generate_Request} VLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Generator_Generate_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VLM_Generator_Generate_Request message.
     * @function verify
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VLM_Generator_Generate_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.numberOfFrames != null && message.hasOwnProperty("numberOfFrames"))
            if (!$util.isInteger(message.numberOfFrames))
                return "numberOfFrames: integer expected";
        if (message.videoFramesCountPerVideo != null && message.hasOwnProperty("videoFramesCountPerVideo")) {
            if (!Array.isArray(message.videoFramesCountPerVideo))
                return "videoFramesCountPerVideo: array expected";
            for (var i = 0; i < message.videoFramesCountPerVideo.length; ++i)
                if (!$util.isInteger(message.videoFramesCountPerVideo[i]))
                    return "videoFramesCountPerVideo: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a VLM_Generator_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VLM_Generator_Generate_Request} VLM_Generator_Generate_Request
     */
    VLM_Generator_Generate_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.VLM_Generator_Generate_Request)
            return object;
        var message = new $root.VLM_Generator_Generate_Request();
        if (object.numberOfFrames != null)
            message.numberOfFrames = object.numberOfFrames >>> 0;
        if (object.videoFramesCountPerVideo) {
            if (!Array.isArray(object.videoFramesCountPerVideo))
                throw TypeError(".VLM_Generator_Generate_Request.videoFramesCountPerVideo: array expected");
            message.videoFramesCountPerVideo = [];
            for (var i = 0; i < object.videoFramesCountPerVideo.length; ++i)
                message.videoFramesCountPerVideo[i] = object.videoFramesCountPerVideo[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a VLM_Generator_Generate_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {VLM_Generator_Generate_Request} message VLM_Generator_Generate_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VLM_Generator_Generate_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.videoFramesCountPerVideo = [];
        if (options.defaults)
            object.numberOfFrames = 0;
        if (message.numberOfFrames != null && message.hasOwnProperty("numberOfFrames"))
            object.numberOfFrames = message.numberOfFrames;
        if (message.videoFramesCountPerVideo && message.videoFramesCountPerVideo.length) {
            object.videoFramesCountPerVideo = [];
            for (var j = 0; j < message.videoFramesCountPerVideo.length; ++j)
                object.videoFramesCountPerVideo[j] = message.videoFramesCountPerVideo[j];
        }
        return object;
    };

    /**
     * Converts this VLM_Generator_Generate_Request to JSON.
     * @function toJSON
     * @memberof VLM_Generator_Generate_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VLM_Generator_Generate_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VLM_Generator_Generate_Request
     * @function getTypeUrl
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VLM_Generator_Generate_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VLM_Generator_Generate_Request";
    };

    return VLM_Generator_Generate_Request;
})();

$root.VLM_Generator_Generate_Reply = (function() {

    /**
     * Properties of a VLM_Generator_Generate_Reply.
     * @exports IVLM_Generator_Generate_Reply
     * @interface IVLM_Generator_Generate_Reply
     * @property {number|null} [status] VLM_Generator_Generate_Reply status
     */

    /**
     * Constructs a new VLM_Generator_Generate_Reply.
     * @exports VLM_Generator_Generate_Reply
     * @classdesc Represents a VLM_Generator_Generate_Reply.
     * @implements IVLM_Generator_Generate_Reply
     * @constructor
     * @param {IVLM_Generator_Generate_Reply=} [properties] Properties to set
     */
    function VLM_Generator_Generate_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VLM_Generator_Generate_Reply status.
     * @member {number} status
     * @memberof VLM_Generator_Generate_Reply
     * @instance
     */
    VLM_Generator_Generate_Reply.prototype.status = 0;

    /**
     * Creates a new VLM_Generator_Generate_Reply instance using the specified properties.
     * @function create
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {IVLM_Generator_Generate_Reply=} [properties] Properties to set
     * @returns {VLM_Generator_Generate_Reply} VLM_Generator_Generate_Reply instance
     */
    VLM_Generator_Generate_Reply.create = function create(properties) {
        return new VLM_Generator_Generate_Reply(properties);
    };

    /**
     * Encodes the specified VLM_Generator_Generate_Reply message. Does not implicitly {@link VLM_Generator_Generate_Reply.verify|verify} messages.
     * @function encode
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {IVLM_Generator_Generate_Reply} message VLM_Generator_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Generator_Generate_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified VLM_Generator_Generate_Reply message, length delimited. Does not implicitly {@link VLM_Generator_Generate_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {IVLM_Generator_Generate_Reply} message VLM_Generator_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Generator_Generate_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VLM_Generator_Generate_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VLM_Generator_Generate_Reply} VLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Generator_Generate_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VLM_Generator_Generate_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VLM_Generator_Generate_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VLM_Generator_Generate_Reply} VLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Generator_Generate_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VLM_Generator_Generate_Reply message.
     * @function verify
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VLM_Generator_Generate_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a VLM_Generator_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VLM_Generator_Generate_Reply} VLM_Generator_Generate_Reply
     */
    VLM_Generator_Generate_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.VLM_Generator_Generate_Reply)
            return object;
        var message = new $root.VLM_Generator_Generate_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a VLM_Generator_Generate_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {VLM_Generator_Generate_Reply} message VLM_Generator_Generate_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VLM_Generator_Generate_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this VLM_Generator_Generate_Reply to JSON.
     * @function toJSON
     * @memberof VLM_Generator_Generate_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VLM_Generator_Generate_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VLM_Generator_Generate_Reply
     * @function getTypeUrl
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VLM_Generator_Generate_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VLM_Generator_Generate_Reply";
    };

    return VLM_Generator_Generate_Reply;
})();

$root.GenAI_Check_Hef_Exists_Request = (function() {

    /**
     * Properties of a GenAI_Check_Hef_Exists_Request.
     * @exports IGenAI_Check_Hef_Exists_Request
     * @interface IGenAI_Check_Hef_Exists_Request
     * @property {string|null} [hefPath] GenAI_Check_Hef_Exists_Request hefPath
     * @property {string|null} [hash] GenAI_Check_Hef_Exists_Request hash
     */

    /**
     * Constructs a new GenAI_Check_Hef_Exists_Request.
     * @exports GenAI_Check_Hef_Exists_Request
     * @classdesc Represents a GenAI_Check_Hef_Exists_Request.
     * @implements IGenAI_Check_Hef_Exists_Request
     * @constructor
     * @param {IGenAI_Check_Hef_Exists_Request=} [properties] Properties to set
     */
    function GenAI_Check_Hef_Exists_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenAI_Check_Hef_Exists_Request hefPath.
     * @member {string} hefPath
     * @memberof GenAI_Check_Hef_Exists_Request
     * @instance
     */
    GenAI_Check_Hef_Exists_Request.prototype.hefPath = "";

    /**
     * GenAI_Check_Hef_Exists_Request hash.
     * @member {string} hash
     * @memberof GenAI_Check_Hef_Exists_Request
     * @instance
     */
    GenAI_Check_Hef_Exists_Request.prototype.hash = "";

    /**
     * Creates a new GenAI_Check_Hef_Exists_Request instance using the specified properties.
     * @function create
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {IGenAI_Check_Hef_Exists_Request=} [properties] Properties to set
     * @returns {GenAI_Check_Hef_Exists_Request} GenAI_Check_Hef_Exists_Request instance
     */
    GenAI_Check_Hef_Exists_Request.create = function create(properties) {
        return new GenAI_Check_Hef_Exists_Request(properties);
    };

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Request message. Does not implicitly {@link GenAI_Check_Hef_Exists_Request.verify|verify} messages.
     * @function encode
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {IGenAI_Check_Hef_Exists_Request} message GenAI_Check_Hef_Exists_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAI_Check_Hef_Exists_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hefPath != null && Object.hasOwnProperty.call(message, "hefPath"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hefPath);
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.hash);
        return writer;
    };

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Request message, length delimited. Does not implicitly {@link GenAI_Check_Hef_Exists_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {IGenAI_Check_Hef_Exists_Request} message GenAI_Check_Hef_Exists_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAI_Check_Hef_Exists_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenAI_Check_Hef_Exists_Request message from the specified reader or buffer.
     * @function decode
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenAI_Check_Hef_Exists_Request} GenAI_Check_Hef_Exists_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAI_Check_Hef_Exists_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenAI_Check_Hef_Exists_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.hefPath = reader.string();
                    break;
                }
            case 2: {
                    message.hash = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenAI_Check_Hef_Exists_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenAI_Check_Hef_Exists_Request} GenAI_Check_Hef_Exists_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAI_Check_Hef_Exists_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenAI_Check_Hef_Exists_Request message.
     * @function verify
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenAI_Check_Hef_Exists_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hefPath != null && message.hasOwnProperty("hefPath"))
            if (!$util.isString(message.hefPath))
                return "hefPath: string expected";
        if (message.hash != null && message.hasOwnProperty("hash"))
            if (!$util.isString(message.hash))
                return "hash: string expected";
        return null;
    };

    /**
     * Creates a GenAI_Check_Hef_Exists_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenAI_Check_Hef_Exists_Request} GenAI_Check_Hef_Exists_Request
     */
    GenAI_Check_Hef_Exists_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.GenAI_Check_Hef_Exists_Request)
            return object;
        var message = new $root.GenAI_Check_Hef_Exists_Request();
        if (object.hefPath != null)
            message.hefPath = String(object.hefPath);
        if (object.hash != null)
            message.hash = String(object.hash);
        return message;
    };

    /**
     * Creates a plain object from a GenAI_Check_Hef_Exists_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {GenAI_Check_Hef_Exists_Request} message GenAI_Check_Hef_Exists_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenAI_Check_Hef_Exists_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.hefPath = "";
            object.hash = "";
        }
        if (message.hefPath != null && message.hasOwnProperty("hefPath"))
            object.hefPath = message.hefPath;
        if (message.hash != null && message.hasOwnProperty("hash"))
            object.hash = message.hash;
        return object;
    };

    /**
     * Converts this GenAI_Check_Hef_Exists_Request to JSON.
     * @function toJSON
     * @memberof GenAI_Check_Hef_Exists_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenAI_Check_Hef_Exists_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GenAI_Check_Hef_Exists_Request
     * @function getTypeUrl
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GenAI_Check_Hef_Exists_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GenAI_Check_Hef_Exists_Request";
    };

    return GenAI_Check_Hef_Exists_Request;
})();

$root.GenAI_Check_Hef_Exists_Reply = (function() {

    /**
     * Properties of a GenAI_Check_Hef_Exists_Reply.
     * @exports IGenAI_Check_Hef_Exists_Reply
     * @interface IGenAI_Check_Hef_Exists_Reply
     * @property {number|null} [status] GenAI_Check_Hef_Exists_Reply status
     * @property {boolean|null} [hefExists] GenAI_Check_Hef_Exists_Reply hefExists
     */

    /**
     * Constructs a new GenAI_Check_Hef_Exists_Reply.
     * @exports GenAI_Check_Hef_Exists_Reply
     * @classdesc Represents a GenAI_Check_Hef_Exists_Reply.
     * @implements IGenAI_Check_Hef_Exists_Reply
     * @constructor
     * @param {IGenAI_Check_Hef_Exists_Reply=} [properties] Properties to set
     */
    function GenAI_Check_Hef_Exists_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenAI_Check_Hef_Exists_Reply status.
     * @member {number} status
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @instance
     */
    GenAI_Check_Hef_Exists_Reply.prototype.status = 0;

    /**
     * GenAI_Check_Hef_Exists_Reply hefExists.
     * @member {boolean} hefExists
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @instance
     */
    GenAI_Check_Hef_Exists_Reply.prototype.hefExists = false;

    /**
     * Creates a new GenAI_Check_Hef_Exists_Reply instance using the specified properties.
     * @function create
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {IGenAI_Check_Hef_Exists_Reply=} [properties] Properties to set
     * @returns {GenAI_Check_Hef_Exists_Reply} GenAI_Check_Hef_Exists_Reply instance
     */
    GenAI_Check_Hef_Exists_Reply.create = function create(properties) {
        return new GenAI_Check_Hef_Exists_Reply(properties);
    };

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Reply message. Does not implicitly {@link GenAI_Check_Hef_Exists_Reply.verify|verify} messages.
     * @function encode
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {IGenAI_Check_Hef_Exists_Reply} message GenAI_Check_Hef_Exists_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAI_Check_Hef_Exists_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.hefExists != null && Object.hasOwnProperty.call(message, "hefExists"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hefExists);
        return writer;
    };

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Reply message, length delimited. Does not implicitly {@link GenAI_Check_Hef_Exists_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {IGenAI_Check_Hef_Exists_Reply} message GenAI_Check_Hef_Exists_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAI_Check_Hef_Exists_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenAI_Check_Hef_Exists_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenAI_Check_Hef_Exists_Reply} GenAI_Check_Hef_Exists_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAI_Check_Hef_Exists_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenAI_Check_Hef_Exists_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            case 2: {
                    message.hefExists = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenAI_Check_Hef_Exists_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenAI_Check_Hef_Exists_Reply} GenAI_Check_Hef_Exists_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAI_Check_Hef_Exists_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenAI_Check_Hef_Exists_Reply message.
     * @function verify
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenAI_Check_Hef_Exists_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.hefExists != null && message.hasOwnProperty("hefExists"))
            if (typeof message.hefExists !== "boolean")
                return "hefExists: boolean expected";
        return null;
    };

    /**
     * Creates a GenAI_Check_Hef_Exists_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenAI_Check_Hef_Exists_Reply} GenAI_Check_Hef_Exists_Reply
     */
    GenAI_Check_Hef_Exists_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.GenAI_Check_Hef_Exists_Reply)
            return object;
        var message = new $root.GenAI_Check_Hef_Exists_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        if (object.hefExists != null)
            message.hefExists = Boolean(object.hefExists);
        return message;
    };

    /**
     * Creates a plain object from a GenAI_Check_Hef_Exists_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {GenAI_Check_Hef_Exists_Reply} message GenAI_Check_Hef_Exists_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenAI_Check_Hef_Exists_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.hefExists = false;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.hefExists != null && message.hasOwnProperty("hefExists"))
            object.hefExists = message.hefExists;
        return object;
    };

    /**
     * Converts this GenAI_Check_Hef_Exists_Reply to JSON.
     * @function toJSON
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenAI_Check_Hef_Exists_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GenAI_Check_Hef_Exists_Reply
     * @function getTypeUrl
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GenAI_Check_Hef_Exists_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GenAI_Check_Hef_Exists_Reply";
    };

    return GenAI_Check_Hef_Exists_Reply;
})();

$root.Speech2Text_Create_Request = (function() {

    /**
     * Properties of a Speech2Text_Create_Request.
     * @exports ISpeech2Text_Create_Request
     * @interface ISpeech2Text_Create_Request
     * @property {string|null} [groupId] Speech2Text_Create_Request groupId
     */

    /**
     * Constructs a new Speech2Text_Create_Request.
     * @exports Speech2Text_Create_Request
     * @classdesc Represents a Speech2Text_Create_Request.
     * @implements ISpeech2Text_Create_Request
     * @constructor
     * @param {ISpeech2Text_Create_Request=} [properties] Properties to set
     */
    function Speech2Text_Create_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Speech2Text_Create_Request groupId.
     * @member {string} groupId
     * @memberof Speech2Text_Create_Request
     * @instance
     */
    Speech2Text_Create_Request.prototype.groupId = "";

    /**
     * Creates a new Speech2Text_Create_Request instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {ISpeech2Text_Create_Request=} [properties] Properties to set
     * @returns {Speech2Text_Create_Request} Speech2Text_Create_Request instance
     */
    Speech2Text_Create_Request.create = function create(properties) {
        return new Speech2Text_Create_Request(properties);
    };

    /**
     * Encodes the specified Speech2Text_Create_Request message. Does not implicitly {@link Speech2Text_Create_Request.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {ISpeech2Text_Create_Request} message Speech2Text_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Create_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Create_Request message, length delimited. Does not implicitly {@link Speech2Text_Create_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {ISpeech2Text_Create_Request} message Speech2Text_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Create_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Create_Request message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Create_Request} Speech2Text_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Create_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Speech2Text_Create_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.groupId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Speech2Text_Create_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Create_Request} Speech2Text_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Create_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Create_Request message.
     * @function verify
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Create_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            if (!$util.isString(message.groupId))
                return "groupId: string expected";
        return null;
    };

    /**
     * Creates a Speech2Text_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Create_Request} Speech2Text_Create_Request
     */
    Speech2Text_Create_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Speech2Text_Create_Request)
            return object;
        var message = new $root.Speech2Text_Create_Request();
        if (object.groupId != null)
            message.groupId = String(object.groupId);
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Create_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {Speech2Text_Create_Request} message Speech2Text_Create_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Create_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.groupId = "";
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        return object;
    };

    /**
     * Converts this Speech2Text_Create_Request to JSON.
     * @function toJSON
     * @memberof Speech2Text_Create_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Create_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Speech2Text_Create_Request
     * @function getTypeUrl
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Speech2Text_Create_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Speech2Text_Create_Request";
    };

    return Speech2Text_Create_Request;
})();

$root.Speech2Text_Create_Reply = (function() {

    /**
     * Properties of a Speech2Text_Create_Reply.
     * @exports ISpeech2Text_Create_Reply
     * @interface ISpeech2Text_Create_Reply
     * @property {number|null} [status] Speech2Text_Create_Reply status
     * @property {ISpeech2TextGeneratorParams|null} [generatorParams] Speech2Text_Create_Reply generatorParams
     */

    /**
     * Constructs a new Speech2Text_Create_Reply.
     * @exports Speech2Text_Create_Reply
     * @classdesc Represents a Speech2Text_Create_Reply.
     * @implements ISpeech2Text_Create_Reply
     * @constructor
     * @param {ISpeech2Text_Create_Reply=} [properties] Properties to set
     */
    function Speech2Text_Create_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Speech2Text_Create_Reply status.
     * @member {number} status
     * @memberof Speech2Text_Create_Reply
     * @instance
     */
    Speech2Text_Create_Reply.prototype.status = 0;

    /**
     * Speech2Text_Create_Reply generatorParams.
     * @member {ISpeech2TextGeneratorParams|null|undefined} generatorParams
     * @memberof Speech2Text_Create_Reply
     * @instance
     */
    Speech2Text_Create_Reply.prototype.generatorParams = null;

    /**
     * Creates a new Speech2Text_Create_Reply instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {ISpeech2Text_Create_Reply=} [properties] Properties to set
     * @returns {Speech2Text_Create_Reply} Speech2Text_Create_Reply instance
     */
    Speech2Text_Create_Reply.create = function create(properties) {
        return new Speech2Text_Create_Reply(properties);
    };

    /**
     * Encodes the specified Speech2Text_Create_Reply message. Does not implicitly {@link Speech2Text_Create_Reply.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {ISpeech2Text_Create_Reply} message Speech2Text_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Create_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.generatorParams != null && Object.hasOwnProperty.call(message, "generatorParams"))
            $root.Speech2TextGeneratorParams.encode(message.generatorParams, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Create_Reply message, length delimited. Does not implicitly {@link Speech2Text_Create_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {ISpeech2Text_Create_Reply} message Speech2Text_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Create_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Create_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Create_Reply} Speech2Text_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Create_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Speech2Text_Create_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            case 2: {
                    message.generatorParams = $root.Speech2TextGeneratorParams.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Speech2Text_Create_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Create_Reply} Speech2Text_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Create_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Create_Reply message.
     * @function verify
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Create_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.generatorParams != null && message.hasOwnProperty("generatorParams")) {
            var error = $root.Speech2TextGeneratorParams.verify(message.generatorParams);
            if (error)
                return "generatorParams." + error;
        }
        return null;
    };

    /**
     * Creates a Speech2Text_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Create_Reply} Speech2Text_Create_Reply
     */
    Speech2Text_Create_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.Speech2Text_Create_Reply)
            return object;
        var message = new $root.Speech2Text_Create_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        if (object.generatorParams != null) {
            if (typeof object.generatorParams !== "object")
                throw TypeError(".Speech2Text_Create_Reply.generatorParams: object expected");
            message.generatorParams = $root.Speech2TextGeneratorParams.fromObject(object.generatorParams);
        }
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Create_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {Speech2Text_Create_Reply} message Speech2Text_Create_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Create_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.generatorParams = null;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.generatorParams != null && message.hasOwnProperty("generatorParams"))
            object.generatorParams = $root.Speech2TextGeneratorParams.toObject(message.generatorParams, options);
        return object;
    };

    /**
     * Converts this Speech2Text_Create_Reply to JSON.
     * @function toJSON
     * @memberof Speech2Text_Create_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Create_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Speech2Text_Create_Reply
     * @function getTypeUrl
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Speech2Text_Create_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Speech2Text_Create_Reply";
    };

    return Speech2Text_Create_Reply;
})();

$root.Speech2TextGeneratorParams = (function() {

    /**
     * Properties of a Speech2TextGeneratorParams.
     * @exports ISpeech2TextGeneratorParams
     * @interface ISpeech2TextGeneratorParams
     * @property {number|null} [taskType] Speech2TextGeneratorParams taskType
     * @property {string|null} [language] Speech2TextGeneratorParams language
     * @property {number|null} [repetitionPenalty] Speech2TextGeneratorParams repetitionPenalty
     */

    /**
     * Constructs a new Speech2TextGeneratorParams.
     * @exports Speech2TextGeneratorParams
     * @classdesc Represents a Speech2TextGeneratorParams.
     * @implements ISpeech2TextGeneratorParams
     * @constructor
     * @param {ISpeech2TextGeneratorParams=} [properties] Properties to set
     */
    function Speech2TextGeneratorParams(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Speech2TextGeneratorParams taskType.
     * @member {number} taskType
     * @memberof Speech2TextGeneratorParams
     * @instance
     */
    Speech2TextGeneratorParams.prototype.taskType = 0;

    /**
     * Speech2TextGeneratorParams language.
     * @member {string} language
     * @memberof Speech2TextGeneratorParams
     * @instance
     */
    Speech2TextGeneratorParams.prototype.language = "";

    /**
     * Speech2TextGeneratorParams repetitionPenalty.
     * @member {number} repetitionPenalty
     * @memberof Speech2TextGeneratorParams
     * @instance
     */
    Speech2TextGeneratorParams.prototype.repetitionPenalty = 0;

    /**
     * Creates a new Speech2TextGeneratorParams instance using the specified properties.
     * @function create
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {ISpeech2TextGeneratorParams=} [properties] Properties to set
     * @returns {Speech2TextGeneratorParams} Speech2TextGeneratorParams instance
     */
    Speech2TextGeneratorParams.create = function create(properties) {
        return new Speech2TextGeneratorParams(properties);
    };

    /**
     * Encodes the specified Speech2TextGeneratorParams message. Does not implicitly {@link Speech2TextGeneratorParams.verify|verify} messages.
     * @function encode
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {ISpeech2TextGeneratorParams} message Speech2TextGeneratorParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2TextGeneratorParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.taskType != null && Object.hasOwnProperty.call(message, "taskType"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.taskType);
        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.language);
        if (message.repetitionPenalty != null && Object.hasOwnProperty.call(message, "repetitionPenalty"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.repetitionPenalty);
        return writer;
    };

    /**
     * Encodes the specified Speech2TextGeneratorParams message, length delimited. Does not implicitly {@link Speech2TextGeneratorParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {ISpeech2TextGeneratorParams} message Speech2TextGeneratorParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2TextGeneratorParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Speech2TextGeneratorParams message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2TextGeneratorParams} Speech2TextGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2TextGeneratorParams.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Speech2TextGeneratorParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.taskType = reader.uint32();
                    break;
                }
            case 2: {
                    message.language = reader.string();
                    break;
                }
            case 3: {
                    message.repetitionPenalty = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Speech2TextGeneratorParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2TextGeneratorParams} Speech2TextGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2TextGeneratorParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2TextGeneratorParams message.
     * @function verify
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2TextGeneratorParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.taskType != null && message.hasOwnProperty("taskType"))
            if (!$util.isInteger(message.taskType))
                return "taskType: integer expected";
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isString(message.language))
                return "language: string expected";
        if (message.repetitionPenalty != null && message.hasOwnProperty("repetitionPenalty"))
            if (typeof message.repetitionPenalty !== "number")
                return "repetitionPenalty: number expected";
        return null;
    };

    /**
     * Creates a Speech2TextGeneratorParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2TextGeneratorParams} Speech2TextGeneratorParams
     */
    Speech2TextGeneratorParams.fromObject = function fromObject(object) {
        if (object instanceof $root.Speech2TextGeneratorParams)
            return object;
        var message = new $root.Speech2TextGeneratorParams();
        if (object.taskType != null)
            message.taskType = object.taskType >>> 0;
        if (object.language != null)
            message.language = String(object.language);
        if (object.repetitionPenalty != null)
            message.repetitionPenalty = Number(object.repetitionPenalty);
        return message;
    };

    /**
     * Creates a plain object from a Speech2TextGeneratorParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {Speech2TextGeneratorParams} message Speech2TextGeneratorParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2TextGeneratorParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.taskType = 0;
            object.language = "";
            object.repetitionPenalty = 0;
        }
        if (message.taskType != null && message.hasOwnProperty("taskType"))
            object.taskType = message.taskType;
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        if (message.repetitionPenalty != null && message.hasOwnProperty("repetitionPenalty"))
            object.repetitionPenalty = options.json && !isFinite(message.repetitionPenalty) ? String(message.repetitionPenalty) : message.repetitionPenalty;
        return object;
    };

    /**
     * Converts this Speech2TextGeneratorParams to JSON.
     * @function toJSON
     * @memberof Speech2TextGeneratorParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2TextGeneratorParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Speech2TextGeneratorParams
     * @function getTypeUrl
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Speech2TextGeneratorParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Speech2TextGeneratorParams";
    };

    return Speech2TextGeneratorParams;
})();

$root.Speech2Text_Generate_Request = (function() {

    /**
     * Properties of a Speech2Text_Generate_Request.
     * @exports ISpeech2Text_Generate_Request
     * @interface ISpeech2Text_Generate_Request
     * @property {ISpeech2TextGeneratorParams|null} [generatorParams] Speech2Text_Generate_Request generatorParams
     */

    /**
     * Constructs a new Speech2Text_Generate_Request.
     * @exports Speech2Text_Generate_Request
     * @classdesc Represents a Speech2Text_Generate_Request.
     * @implements ISpeech2Text_Generate_Request
     * @constructor
     * @param {ISpeech2Text_Generate_Request=} [properties] Properties to set
     */
    function Speech2Text_Generate_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Speech2Text_Generate_Request generatorParams.
     * @member {ISpeech2TextGeneratorParams|null|undefined} generatorParams
     * @memberof Speech2Text_Generate_Request
     * @instance
     */
    Speech2Text_Generate_Request.prototype.generatorParams = null;

    /**
     * Creates a new Speech2Text_Generate_Request instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {ISpeech2Text_Generate_Request=} [properties] Properties to set
     * @returns {Speech2Text_Generate_Request} Speech2Text_Generate_Request instance
     */
    Speech2Text_Generate_Request.create = function create(properties) {
        return new Speech2Text_Generate_Request(properties);
    };

    /**
     * Encodes the specified Speech2Text_Generate_Request message. Does not implicitly {@link Speech2Text_Generate_Request.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {ISpeech2Text_Generate_Request} message Speech2Text_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Generate_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.generatorParams != null && Object.hasOwnProperty.call(message, "generatorParams"))
            $root.Speech2TextGeneratorParams.encode(message.generatorParams, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Generate_Request message, length delimited. Does not implicitly {@link Speech2Text_Generate_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {ISpeech2Text_Generate_Request} message Speech2Text_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Generate_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Generate_Request message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Generate_Request} Speech2Text_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Generate_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Speech2Text_Generate_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.generatorParams = $root.Speech2TextGeneratorParams.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Speech2Text_Generate_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Generate_Request} Speech2Text_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Generate_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Generate_Request message.
     * @function verify
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Generate_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.generatorParams != null && message.hasOwnProperty("generatorParams")) {
            var error = $root.Speech2TextGeneratorParams.verify(message.generatorParams);
            if (error)
                return "generatorParams." + error;
        }
        return null;
    };

    /**
     * Creates a Speech2Text_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Generate_Request} Speech2Text_Generate_Request
     */
    Speech2Text_Generate_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Speech2Text_Generate_Request)
            return object;
        var message = new $root.Speech2Text_Generate_Request();
        if (object.generatorParams != null) {
            if (typeof object.generatorParams !== "object")
                throw TypeError(".Speech2Text_Generate_Request.generatorParams: object expected");
            message.generatorParams = $root.Speech2TextGeneratorParams.fromObject(object.generatorParams);
        }
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Generate_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {Speech2Text_Generate_Request} message Speech2Text_Generate_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Generate_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.generatorParams = null;
        if (message.generatorParams != null && message.hasOwnProperty("generatorParams"))
            object.generatorParams = $root.Speech2TextGeneratorParams.toObject(message.generatorParams, options);
        return object;
    };

    /**
     * Converts this Speech2Text_Generate_Request to JSON.
     * @function toJSON
     * @memberof Speech2Text_Generate_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Generate_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Speech2Text_Generate_Request
     * @function getTypeUrl
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Speech2Text_Generate_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Speech2Text_Generate_Request";
    };

    return Speech2Text_Generate_Request;
})();

$root.ProtoSpeech2TextSegmentInfo = (function() {

    /**
     * Properties of a ProtoSpeech2TextSegmentInfo.
     * @exports IProtoSpeech2TextSegmentInfo
     * @interface IProtoSpeech2TextSegmentInfo
     * @property {number|null} [startSec] ProtoSpeech2TextSegmentInfo startSec
     * @property {number|null} [endSec] ProtoSpeech2TextSegmentInfo endSec
     * @property {string|null} [text] ProtoSpeech2TextSegmentInfo text
     */

    /**
     * Constructs a new ProtoSpeech2TextSegmentInfo.
     * @exports ProtoSpeech2TextSegmentInfo
     * @classdesc Represents a ProtoSpeech2TextSegmentInfo.
     * @implements IProtoSpeech2TextSegmentInfo
     * @constructor
     * @param {IProtoSpeech2TextSegmentInfo=} [properties] Properties to set
     */
    function ProtoSpeech2TextSegmentInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoSpeech2TextSegmentInfo startSec.
     * @member {number} startSec
     * @memberof ProtoSpeech2TextSegmentInfo
     * @instance
     */
    ProtoSpeech2TextSegmentInfo.prototype.startSec = 0;

    /**
     * ProtoSpeech2TextSegmentInfo endSec.
     * @member {number} endSec
     * @memberof ProtoSpeech2TextSegmentInfo
     * @instance
     */
    ProtoSpeech2TextSegmentInfo.prototype.endSec = 0;

    /**
     * ProtoSpeech2TextSegmentInfo text.
     * @member {string} text
     * @memberof ProtoSpeech2TextSegmentInfo
     * @instance
     */
    ProtoSpeech2TextSegmentInfo.prototype.text = "";

    /**
     * Creates a new ProtoSpeech2TextSegmentInfo instance using the specified properties.
     * @function create
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {IProtoSpeech2TextSegmentInfo=} [properties] Properties to set
     * @returns {ProtoSpeech2TextSegmentInfo} ProtoSpeech2TextSegmentInfo instance
     */
    ProtoSpeech2TextSegmentInfo.create = function create(properties) {
        return new ProtoSpeech2TextSegmentInfo(properties);
    };

    /**
     * Encodes the specified ProtoSpeech2TextSegmentInfo message. Does not implicitly {@link ProtoSpeech2TextSegmentInfo.verify|verify} messages.
     * @function encode
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {IProtoSpeech2TextSegmentInfo} message ProtoSpeech2TextSegmentInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoSpeech2TextSegmentInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.startSec != null && Object.hasOwnProperty.call(message, "startSec"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.startSec);
        if (message.endSec != null && Object.hasOwnProperty.call(message, "endSec"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.endSec);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified ProtoSpeech2TextSegmentInfo message, length delimited. Does not implicitly {@link ProtoSpeech2TextSegmentInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {IProtoSpeech2TextSegmentInfo} message ProtoSpeech2TextSegmentInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoSpeech2TextSegmentInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProtoSpeech2TextSegmentInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoSpeech2TextSegmentInfo} ProtoSpeech2TextSegmentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoSpeech2TextSegmentInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtoSpeech2TextSegmentInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.startSec = reader.float();
                    break;
                }
            case 2: {
                    message.endSec = reader.float();
                    break;
                }
            case 3: {
                    message.text = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProtoSpeech2TextSegmentInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProtoSpeech2TextSegmentInfo} ProtoSpeech2TextSegmentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoSpeech2TextSegmentInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProtoSpeech2TextSegmentInfo message.
     * @function verify
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProtoSpeech2TextSegmentInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.startSec != null && message.hasOwnProperty("startSec"))
            if (typeof message.startSec !== "number")
                return "startSec: number expected";
        if (message.endSec != null && message.hasOwnProperty("endSec"))
            if (typeof message.endSec !== "number")
                return "endSec: number expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a ProtoSpeech2TextSegmentInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProtoSpeech2TextSegmentInfo} ProtoSpeech2TextSegmentInfo
     */
    ProtoSpeech2TextSegmentInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ProtoSpeech2TextSegmentInfo)
            return object;
        var message = new $root.ProtoSpeech2TextSegmentInfo();
        if (object.startSec != null)
            message.startSec = Number(object.startSec);
        if (object.endSec != null)
            message.endSec = Number(object.endSec);
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a ProtoSpeech2TextSegmentInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {ProtoSpeech2TextSegmentInfo} message ProtoSpeech2TextSegmentInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProtoSpeech2TextSegmentInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.startSec = 0;
            object.endSec = 0;
            object.text = "";
        }
        if (message.startSec != null && message.hasOwnProperty("startSec"))
            object.startSec = options.json && !isFinite(message.startSec) ? String(message.startSec) : message.startSec;
        if (message.endSec != null && message.hasOwnProperty("endSec"))
            object.endSec = options.json && !isFinite(message.endSec) ? String(message.endSec) : message.endSec;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this ProtoSpeech2TextSegmentInfo to JSON.
     * @function toJSON
     * @memberof ProtoSpeech2TextSegmentInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProtoSpeech2TextSegmentInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ProtoSpeech2TextSegmentInfo
     * @function getTypeUrl
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoSpeech2TextSegmentInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ProtoSpeech2TextSegmentInfo";
    };

    return ProtoSpeech2TextSegmentInfo;
})();

$root.Speech2Text_Generate_Reply = (function() {

    /**
     * Properties of a Speech2Text_Generate_Reply.
     * @exports ISpeech2Text_Generate_Reply
     * @interface ISpeech2Text_Generate_Reply
     * @property {number|null} [status] Speech2Text_Generate_Reply status
     * @property {Array.<IProtoSpeech2TextSegmentInfo>|null} [segmentsInfos] Speech2Text_Generate_Reply segmentsInfos
     */

    /**
     * Constructs a new Speech2Text_Generate_Reply.
     * @exports Speech2Text_Generate_Reply
     * @classdesc Represents a Speech2Text_Generate_Reply.
     * @implements ISpeech2Text_Generate_Reply
     * @constructor
     * @param {ISpeech2Text_Generate_Reply=} [properties] Properties to set
     */
    function Speech2Text_Generate_Reply(properties) {
        this.segmentsInfos = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Speech2Text_Generate_Reply status.
     * @member {number} status
     * @memberof Speech2Text_Generate_Reply
     * @instance
     */
    Speech2Text_Generate_Reply.prototype.status = 0;

    /**
     * Speech2Text_Generate_Reply segmentsInfos.
     * @member {Array.<IProtoSpeech2TextSegmentInfo>} segmentsInfos
     * @memberof Speech2Text_Generate_Reply
     * @instance
     */
    Speech2Text_Generate_Reply.prototype.segmentsInfos = $util.emptyArray;

    /**
     * Creates a new Speech2Text_Generate_Reply instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {ISpeech2Text_Generate_Reply=} [properties] Properties to set
     * @returns {Speech2Text_Generate_Reply} Speech2Text_Generate_Reply instance
     */
    Speech2Text_Generate_Reply.create = function create(properties) {
        return new Speech2Text_Generate_Reply(properties);
    };

    /**
     * Encodes the specified Speech2Text_Generate_Reply message. Does not implicitly {@link Speech2Text_Generate_Reply.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {ISpeech2Text_Generate_Reply} message Speech2Text_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Generate_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.segmentsInfos != null && message.segmentsInfos.length)
            for (var i = 0; i < message.segmentsInfos.length; ++i)
                $root.ProtoSpeech2TextSegmentInfo.encode(message.segmentsInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Generate_Reply message, length delimited. Does not implicitly {@link Speech2Text_Generate_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {ISpeech2Text_Generate_Reply} message Speech2Text_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Generate_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Generate_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Generate_Reply} Speech2Text_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Generate_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Speech2Text_Generate_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            case 2: {
                    if (!(message.segmentsInfos && message.segmentsInfos.length))
                        message.segmentsInfos = [];
                    message.segmentsInfos.push($root.ProtoSpeech2TextSegmentInfo.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Speech2Text_Generate_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Generate_Reply} Speech2Text_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Generate_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Generate_Reply message.
     * @function verify
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Generate_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.segmentsInfos != null && message.hasOwnProperty("segmentsInfos")) {
            if (!Array.isArray(message.segmentsInfos))
                return "segmentsInfos: array expected";
            for (var i = 0; i < message.segmentsInfos.length; ++i) {
                var error = $root.ProtoSpeech2TextSegmentInfo.verify(message.segmentsInfos[i]);
                if (error)
                    return "segmentsInfos." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Speech2Text_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Generate_Reply} Speech2Text_Generate_Reply
     */
    Speech2Text_Generate_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.Speech2Text_Generate_Reply)
            return object;
        var message = new $root.Speech2Text_Generate_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        if (object.segmentsInfos) {
            if (!Array.isArray(object.segmentsInfos))
                throw TypeError(".Speech2Text_Generate_Reply.segmentsInfos: array expected");
            message.segmentsInfos = [];
            for (var i = 0; i < object.segmentsInfos.length; ++i) {
                if (typeof object.segmentsInfos[i] !== "object")
                    throw TypeError(".Speech2Text_Generate_Reply.segmentsInfos: object expected");
                message.segmentsInfos[i] = $root.ProtoSpeech2TextSegmentInfo.fromObject(object.segmentsInfos[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Generate_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {Speech2Text_Generate_Reply} message Speech2Text_Generate_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Generate_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.segmentsInfos = [];
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.segmentsInfos && message.segmentsInfos.length) {
            object.segmentsInfos = [];
            for (var j = 0; j < message.segmentsInfos.length; ++j)
                object.segmentsInfos[j] = $root.ProtoSpeech2TextSegmentInfo.toObject(message.segmentsInfos[j], options);
        }
        return object;
    };

    /**
     * Converts this Speech2Text_Generate_Reply to JSON.
     * @function toJSON
     * @memberof Speech2Text_Generate_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Generate_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Speech2Text_Generate_Reply
     * @function getTypeUrl
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Speech2Text_Generate_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Speech2Text_Generate_Reply";
    };

    return Speech2Text_Generate_Reply;
})();

$root.Speech2Text_Release_Request = (function() {

    /**
     * Properties of a Speech2Text_Release_Request.
     * @exports ISpeech2Text_Release_Request
     * @interface ISpeech2Text_Release_Request
     */

    /**
     * Constructs a new Speech2Text_Release_Request.
     * @exports Speech2Text_Release_Request
     * @classdesc Represents a Speech2Text_Release_Request.
     * @implements ISpeech2Text_Release_Request
     * @constructor
     * @param {ISpeech2Text_Release_Request=} [properties] Properties to set
     */
    function Speech2Text_Release_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Speech2Text_Release_Request instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {ISpeech2Text_Release_Request=} [properties] Properties to set
     * @returns {Speech2Text_Release_Request} Speech2Text_Release_Request instance
     */
    Speech2Text_Release_Request.create = function create(properties) {
        return new Speech2Text_Release_Request(properties);
    };

    /**
     * Encodes the specified Speech2Text_Release_Request message. Does not implicitly {@link Speech2Text_Release_Request.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {ISpeech2Text_Release_Request} message Speech2Text_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Release_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Release_Request message, length delimited. Does not implicitly {@link Speech2Text_Release_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {ISpeech2Text_Release_Request} message Speech2Text_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Release_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Release_Request message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Release_Request} Speech2Text_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Release_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Speech2Text_Release_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Speech2Text_Release_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Release_Request} Speech2Text_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Release_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Release_Request message.
     * @function verify
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Release_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Speech2Text_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Release_Request} Speech2Text_Release_Request
     */
    Speech2Text_Release_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Speech2Text_Release_Request)
            return object;
        return new $root.Speech2Text_Release_Request();
    };

    /**
     * Creates a plain object from a Speech2Text_Release_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {Speech2Text_Release_Request} message Speech2Text_Release_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Release_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Speech2Text_Release_Request to JSON.
     * @function toJSON
     * @memberof Speech2Text_Release_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Release_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Speech2Text_Release_Request
     * @function getTypeUrl
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Speech2Text_Release_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Speech2Text_Release_Request";
    };

    return Speech2Text_Release_Request;
})();

$root.Speech2Text_Release_Reply = (function() {

    /**
     * Properties of a Speech2Text_Release_Reply.
     * @exports ISpeech2Text_Release_Reply
     * @interface ISpeech2Text_Release_Reply
     * @property {number|null} [status] Speech2Text_Release_Reply status
     */

    /**
     * Constructs a new Speech2Text_Release_Reply.
     * @exports Speech2Text_Release_Reply
     * @classdesc Represents a Speech2Text_Release_Reply.
     * @implements ISpeech2Text_Release_Reply
     * @constructor
     * @param {ISpeech2Text_Release_Reply=} [properties] Properties to set
     */
    function Speech2Text_Release_Reply(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Speech2Text_Release_Reply status.
     * @member {number} status
     * @memberof Speech2Text_Release_Reply
     * @instance
     */
    Speech2Text_Release_Reply.prototype.status = 0;

    /**
     * Creates a new Speech2Text_Release_Reply instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {ISpeech2Text_Release_Reply=} [properties] Properties to set
     * @returns {Speech2Text_Release_Reply} Speech2Text_Release_Reply instance
     */
    Speech2Text_Release_Reply.create = function create(properties) {
        return new Speech2Text_Release_Reply(properties);
    };

    /**
     * Encodes the specified Speech2Text_Release_Reply message. Does not implicitly {@link Speech2Text_Release_Reply.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {ISpeech2Text_Release_Reply} message Speech2Text_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Release_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Release_Reply message, length delimited. Does not implicitly {@link Speech2Text_Release_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {ISpeech2Text_Release_Reply} message Speech2Text_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Release_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Release_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Release_Reply} Speech2Text_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Release_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Speech2Text_Release_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Speech2Text_Release_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Release_Reply} Speech2Text_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Release_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Release_Reply message.
     * @function verify
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Release_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a Speech2Text_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Release_Reply} Speech2Text_Release_Reply
     */
    Speech2Text_Release_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.Speech2Text_Release_Reply)
            return object;
        var message = new $root.Speech2Text_Release_Reply();
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Release_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {Speech2Text_Release_Reply} message Speech2Text_Release_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Release_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this Speech2Text_Release_Reply to JSON.
     * @function toJSON
     * @memberof Speech2Text_Release_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Release_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Speech2Text_Release_Reply
     * @function getTypeUrl
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Speech2Text_Release_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Speech2Text_Release_Reply";
    };

    return Speech2Text_Release_Reply;
})();

$root.Speech2Text_Tokenize_Request = (function() {

    /**
     * Properties of a Speech2Text_Tokenize_Request.
     * @exports ISpeech2Text_Tokenize_Request
     * @interface ISpeech2Text_Tokenize_Request
     * @property {string|null} [text] Speech2Text_Tokenize_Request text
     */

    /**
     * Constructs a new Speech2Text_Tokenize_Request.
     * @exports Speech2Text_Tokenize_Request
     * @classdesc Represents a Speech2Text_Tokenize_Request.
     * @implements ISpeech2Text_Tokenize_Request
     * @constructor
     * @param {ISpeech2Text_Tokenize_Request=} [properties] Properties to set
     */
    function Speech2Text_Tokenize_Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Speech2Text_Tokenize_Request text.
     * @member {string} text
     * @memberof Speech2Text_Tokenize_Request
     * @instance
     */
    Speech2Text_Tokenize_Request.prototype.text = "";

    /**
     * Creates a new Speech2Text_Tokenize_Request instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {ISpeech2Text_Tokenize_Request=} [properties] Properties to set
     * @returns {Speech2Text_Tokenize_Request} Speech2Text_Tokenize_Request instance
     */
    Speech2Text_Tokenize_Request.create = function create(properties) {
        return new Speech2Text_Tokenize_Request(properties);
    };

    /**
     * Encodes the specified Speech2Text_Tokenize_Request message. Does not implicitly {@link Speech2Text_Tokenize_Request.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {ISpeech2Text_Tokenize_Request} message Speech2Text_Tokenize_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Tokenize_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Tokenize_Request message, length delimited. Does not implicitly {@link Speech2Text_Tokenize_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {ISpeech2Text_Tokenize_Request} message Speech2Text_Tokenize_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Tokenize_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Tokenize_Request message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Tokenize_Request} Speech2Text_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Tokenize_Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Speech2Text_Tokenize_Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.text = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Speech2Text_Tokenize_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Tokenize_Request} Speech2Text_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Tokenize_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Tokenize_Request message.
     * @function verify
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Tokenize_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a Speech2Text_Tokenize_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Tokenize_Request} Speech2Text_Tokenize_Request
     */
    Speech2Text_Tokenize_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Speech2Text_Tokenize_Request)
            return object;
        var message = new $root.Speech2Text_Tokenize_Request();
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Tokenize_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {Speech2Text_Tokenize_Request} message Speech2Text_Tokenize_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Tokenize_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.text = "";
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this Speech2Text_Tokenize_Request to JSON.
     * @function toJSON
     * @memberof Speech2Text_Tokenize_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Tokenize_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Speech2Text_Tokenize_Request
     * @function getTypeUrl
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Speech2Text_Tokenize_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Speech2Text_Tokenize_Request";
    };

    return Speech2Text_Tokenize_Request;
})();

$root.Speech2Text_Tokenize_Reply = (function() {

    /**
     * Properties of a Speech2Text_Tokenize_Reply.
     * @exports ISpeech2Text_Tokenize_Reply
     * @interface ISpeech2Text_Tokenize_Reply
     * @property {Array.<number>|null} [tokens] Speech2Text_Tokenize_Reply tokens
     * @property {number|null} [status] Speech2Text_Tokenize_Reply status
     */

    /**
     * Constructs a new Speech2Text_Tokenize_Reply.
     * @exports Speech2Text_Tokenize_Reply
     * @classdesc Represents a Speech2Text_Tokenize_Reply.
     * @implements ISpeech2Text_Tokenize_Reply
     * @constructor
     * @param {ISpeech2Text_Tokenize_Reply=} [properties] Properties to set
     */
    function Speech2Text_Tokenize_Reply(properties) {
        this.tokens = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Speech2Text_Tokenize_Reply tokens.
     * @member {Array.<number>} tokens
     * @memberof Speech2Text_Tokenize_Reply
     * @instance
     */
    Speech2Text_Tokenize_Reply.prototype.tokens = $util.emptyArray;

    /**
     * Speech2Text_Tokenize_Reply status.
     * @member {number} status
     * @memberof Speech2Text_Tokenize_Reply
     * @instance
     */
    Speech2Text_Tokenize_Reply.prototype.status = 0;

    /**
     * Creates a new Speech2Text_Tokenize_Reply instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {ISpeech2Text_Tokenize_Reply=} [properties] Properties to set
     * @returns {Speech2Text_Tokenize_Reply} Speech2Text_Tokenize_Reply instance
     */
    Speech2Text_Tokenize_Reply.create = function create(properties) {
        return new Speech2Text_Tokenize_Reply(properties);
    };

    /**
     * Encodes the specified Speech2Text_Tokenize_Reply message. Does not implicitly {@link Speech2Text_Tokenize_Reply.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {ISpeech2Text_Tokenize_Reply} message Speech2Text_Tokenize_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Tokenize_Reply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tokens != null && message.tokens.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.tokens.length; ++i)
                writer.int32(message.tokens[i]);
            writer.ldelim();
        }
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Tokenize_Reply message, length delimited. Does not implicitly {@link Speech2Text_Tokenize_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {ISpeech2Text_Tokenize_Reply} message Speech2Text_Tokenize_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Tokenize_Reply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Tokenize_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Tokenize_Reply} Speech2Text_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Tokenize_Reply.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Speech2Text_Tokenize_Reply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tokens.push(reader.int32());
                    } else
                        message.tokens.push(reader.int32());
                    break;
                }
            case 2: {
                    message.status = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Speech2Text_Tokenize_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Tokenize_Reply} Speech2Text_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Tokenize_Reply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Tokenize_Reply message.
     * @function verify
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Tokenize_Reply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tokens != null && message.hasOwnProperty("tokens")) {
            if (!Array.isArray(message.tokens))
                return "tokens: array expected";
            for (var i = 0; i < message.tokens.length; ++i)
                if (!$util.isInteger(message.tokens[i]))
                    return "tokens: integer[] expected";
        }
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a Speech2Text_Tokenize_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Tokenize_Reply} Speech2Text_Tokenize_Reply
     */
    Speech2Text_Tokenize_Reply.fromObject = function fromObject(object) {
        if (object instanceof $root.Speech2Text_Tokenize_Reply)
            return object;
        var message = new $root.Speech2Text_Tokenize_Reply();
        if (object.tokens) {
            if (!Array.isArray(object.tokens))
                throw TypeError(".Speech2Text_Tokenize_Reply.tokens: array expected");
            message.tokens = [];
            for (var i = 0; i < object.tokens.length; ++i)
                message.tokens[i] = object.tokens[i] | 0;
        }
        if (object.status != null)
            message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Tokenize_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {Speech2Text_Tokenize_Reply} message Speech2Text_Tokenize_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Tokenize_Reply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.tokens = [];
        if (options.defaults)
            object.status = 0;
        if (message.tokens && message.tokens.length) {
            object.tokens = [];
            for (var j = 0; j < message.tokens.length; ++j)
                object.tokens[j] = message.tokens[j];
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this Speech2Text_Tokenize_Reply to JSON.
     * @function toJSON
     * @memberof Speech2Text_Tokenize_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Tokenize_Reply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Speech2Text_Tokenize_Reply
     * @function getTypeUrl
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Speech2Text_Tokenize_Reply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Speech2Text_Tokenize_Reply";
    };

    return Speech2Text_Tokenize_Reply;
})();

module.exports = $root;
