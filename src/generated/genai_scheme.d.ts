import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a GenAIRpcRequest. */
export interface IGenAIRpcRequest {

    /** GenAIRpcRequest llmCreate */
    llmCreate?: (ILLM_Create_Request|null);

    /** GenAIRpcRequest llmGetGeneratorParams */
    llmGetGeneratorParams?: (ILLM_Get_Generator_Params_Request|null);

    /** GenAIRpcRequest llmGeneratorCreate */
    llmGeneratorCreate?: (ILLM_Generator_Create_Request|null);

    /** GenAIRpcRequest llmGeneratorWrite */
    llmGeneratorWrite?: (ILLM_Generator_Write_Request|null);

    /** GenAIRpcRequest llmGeneratorGenerate */
    llmGeneratorGenerate?: (ILLM_Generator_Generate_Request|null);

    /** GenAIRpcRequest llmGeneratorRead */
    llmGeneratorRead?: (ILLM_Generator_Read_Request|null);

    /** GenAIRpcRequest llmGeneratorAbort */
    llmGeneratorAbort?: (ILLM_Generator_Abort_Request|null);

    /** GenAIRpcRequest llmGeneratorRelease */
    llmGeneratorRelease?: (ILLM_Generator_Release_Request|null);

    /** GenAIRpcRequest llmTokenize */
    llmTokenize?: (ILLM_Tokenize_Request|null);

    /** GenAIRpcRequest llmGetContext */
    llmGetContext?: (ILLM_Get_Context_Request|null);

    /** GenAIRpcRequest llmSetContext */
    llmSetContext?: (ILLM_Set_Context_Request|null);

    /** GenAIRpcRequest llmClearContext */
    llmClearContext?: (ILLM_Clear_Context_Request|null);

    /** GenAIRpcRequest llmSetEndOfGenerationSequence */
    llmSetEndOfGenerationSequence?: (ILLM_Set_End_Of_Generation_Sequence_Request|null);

    /** GenAIRpcRequest llmGetEndOfGenerationSequence */
    llmGetEndOfGenerationSequence?: (ILLM_Get_End_Of_Generation_Sequence_Request|null);

    /** GenAIRpcRequest llmRelease */
    llmRelease?: (ILLM_Release_Request|null);

    /** GenAIRpcRequest llmSetStopTokens */
    llmSetStopTokens?: (ILLM_Set_Stop_Tokens_Request|null);

    /** GenAIRpcRequest llmGetStopTokens */
    llmGetStopTokens?: (ILLM_Get_Stop_Tokens_Request|null);

    /** GenAIRpcRequest llmGetContextUsageSize */
    llmGetContextUsageSize?: (ILLM_Get_Context_Usage_Size_Request|null);

    /** GenAIRpcRequest llmGetMaxContextCapacity */
    llmGetMaxContextCapacity?: (ILLM_Get_Max_Context_Capacity_Request|null);

    /** GenAIRpcRequest vlmCreate */
    vlmCreate?: (IVLM_Create_Request|null);

    /** GenAIRpcRequest vlmGeneratorGenerate */
    vlmGeneratorGenerate?: (IVLM_Generator_Generate_Request|null);

    /** GenAIRpcRequest genaiCheckHefExists */
    genaiCheckHefExists?: (IGenAI_Check_Hef_Exists_Request|null);

    /** GenAIRpcRequest speech2textCreate */
    speech2textCreate?: (ISpeech2Text_Create_Request|null);

    /** GenAIRpcRequest speech2textGenerate */
    speech2textGenerate?: (ISpeech2Text_Generate_Request|null);

    /** GenAIRpcRequest speech2textRelease */
    speech2textRelease?: (ISpeech2Text_Release_Request|null);

    /** GenAIRpcRequest speech2textTokenize */
    speech2textTokenize?: (ISpeech2Text_Tokenize_Request|null);
}

/** Represents a GenAIRpcRequest. */
export class GenAIRpcRequest implements IGenAIRpcRequest {

    /**
     * Constructs a new GenAIRpcRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGenAIRpcRequest);

    /** GenAIRpcRequest llmCreate. */
    public llmCreate?: (ILLM_Create_Request|null);

    /** GenAIRpcRequest llmGetGeneratorParams. */
    public llmGetGeneratorParams?: (ILLM_Get_Generator_Params_Request|null);

    /** GenAIRpcRequest llmGeneratorCreate. */
    public llmGeneratorCreate?: (ILLM_Generator_Create_Request|null);

    /** GenAIRpcRequest llmGeneratorWrite. */
    public llmGeneratorWrite?: (ILLM_Generator_Write_Request|null);

    /** GenAIRpcRequest llmGeneratorGenerate. */
    public llmGeneratorGenerate?: (ILLM_Generator_Generate_Request|null);

    /** GenAIRpcRequest llmGeneratorRead. */
    public llmGeneratorRead?: (ILLM_Generator_Read_Request|null);

    /** GenAIRpcRequest llmGeneratorAbort. */
    public llmGeneratorAbort?: (ILLM_Generator_Abort_Request|null);

    /** GenAIRpcRequest llmGeneratorRelease. */
    public llmGeneratorRelease?: (ILLM_Generator_Release_Request|null);

    /** GenAIRpcRequest llmTokenize. */
    public llmTokenize?: (ILLM_Tokenize_Request|null);

    /** GenAIRpcRequest llmGetContext. */
    public llmGetContext?: (ILLM_Get_Context_Request|null);

    /** GenAIRpcRequest llmSetContext. */
    public llmSetContext?: (ILLM_Set_Context_Request|null);

    /** GenAIRpcRequest llmClearContext. */
    public llmClearContext?: (ILLM_Clear_Context_Request|null);

    /** GenAIRpcRequest llmSetEndOfGenerationSequence. */
    public llmSetEndOfGenerationSequence?: (ILLM_Set_End_Of_Generation_Sequence_Request|null);

    /** GenAIRpcRequest llmGetEndOfGenerationSequence. */
    public llmGetEndOfGenerationSequence?: (ILLM_Get_End_Of_Generation_Sequence_Request|null);

    /** GenAIRpcRequest llmRelease. */
    public llmRelease?: (ILLM_Release_Request|null);

    /** GenAIRpcRequest llmSetStopTokens. */
    public llmSetStopTokens?: (ILLM_Set_Stop_Tokens_Request|null);

    /** GenAIRpcRequest llmGetStopTokens. */
    public llmGetStopTokens?: (ILLM_Get_Stop_Tokens_Request|null);

    /** GenAIRpcRequest llmGetContextUsageSize. */
    public llmGetContextUsageSize?: (ILLM_Get_Context_Usage_Size_Request|null);

    /** GenAIRpcRequest llmGetMaxContextCapacity. */
    public llmGetMaxContextCapacity?: (ILLM_Get_Max_Context_Capacity_Request|null);

    /** GenAIRpcRequest vlmCreate. */
    public vlmCreate?: (IVLM_Create_Request|null);

    /** GenAIRpcRequest vlmGeneratorGenerate. */
    public vlmGeneratorGenerate?: (IVLM_Generator_Generate_Request|null);

    /** GenAIRpcRequest genaiCheckHefExists. */
    public genaiCheckHefExists?: (IGenAI_Check_Hef_Exists_Request|null);

    /** GenAIRpcRequest speech2textCreate. */
    public speech2textCreate?: (ISpeech2Text_Create_Request|null);

    /** GenAIRpcRequest speech2textGenerate. */
    public speech2textGenerate?: (ISpeech2Text_Generate_Request|null);

    /** GenAIRpcRequest speech2textRelease. */
    public speech2textRelease?: (ISpeech2Text_Release_Request|null);

    /** GenAIRpcRequest speech2textTokenize. */
    public speech2textTokenize?: (ISpeech2Text_Tokenize_Request|null);

    /** GenAIRpcRequest request. */
    public request?: ("llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize");

    /**
     * Creates a new GenAIRpcRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenAIRpcRequest instance
     */
    public static create(properties?: IGenAIRpcRequest): GenAIRpcRequest;

    /**
     * Encodes the specified GenAIRpcRequest message. Does not implicitly {@link GenAIRpcRequest.verify|verify} messages.
     * @param message GenAIRpcRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGenAIRpcRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenAIRpcRequest message, length delimited. Does not implicitly {@link GenAIRpcRequest.verify|verify} messages.
     * @param message GenAIRpcRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGenAIRpcRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenAIRpcRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GenAIRpcRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenAIRpcRequest;

    /**
     * Decodes a GenAIRpcRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GenAIRpcRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenAIRpcRequest;

    /**
     * Verifies a GenAIRpcRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenAIRpcRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenAIRpcRequest
     */
    public static fromObject(object: { [k: string]: any }): GenAIRpcRequest;

    /**
     * Creates a plain object from a GenAIRpcRequest message. Also converts values to other types if specified.
     * @param message GenAIRpcRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GenAIRpcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenAIRpcRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GenAIRpcRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GenAIRpcReply. */
export interface IGenAIRpcReply {

    /** GenAIRpcReply llmCreate */
    llmCreate?: (ILLM_Create_Reply|null);

    /** GenAIRpcReply llmGetGeneratorParams */
    llmGetGeneratorParams?: (ILLM_Get_Generator_Params_Reply|null);

    /** GenAIRpcReply llmGeneratorCreate */
    llmGeneratorCreate?: (ILLM_Generator_Create_Reply|null);

    /** GenAIRpcReply llmGeneratorWrite */
    llmGeneratorWrite?: (ILLM_Generator_Write_Reply|null);

    /** GenAIRpcReply llmGeneratorGenerate */
    llmGeneratorGenerate?: (ILLM_Generator_Generate_Reply|null);

    /** GenAIRpcReply llmGeneratorRead */
    llmGeneratorRead?: (ILLM_Generator_Read_Reply|null);

    /** GenAIRpcReply llmGeneratorAbort */
    llmGeneratorAbort?: (ILLM_Generator_Abort_Reply|null);

    /** GenAIRpcReply llmGeneratorRelease */
    llmGeneratorRelease?: (ILLM_Generator_Release_Reply|null);

    /** GenAIRpcReply llmTokenize */
    llmTokenize?: (ILLM_Tokenize_Reply|null);

    /** GenAIRpcReply llmGetContext */
    llmGetContext?: (ILLM_Get_Context_Reply|null);

    /** GenAIRpcReply llmSetContext */
    llmSetContext?: (ILLM_Set_Context_Reply|null);

    /** GenAIRpcReply llmClearContext */
    llmClearContext?: (ILLM_Clear_Context_Reply|null);

    /** GenAIRpcReply llmSetEndOfGenerationSequence */
    llmSetEndOfGenerationSequence?: (ILLM_Set_End_Of_Generation_Sequence_Reply|null);

    /** GenAIRpcReply llmGetEndOfGenerationSequence */
    llmGetEndOfGenerationSequence?: (ILLM_Get_End_Of_Generation_Sequence_Reply|null);

    /** GenAIRpcReply llmRelease */
    llmRelease?: (ILLM_Release_Reply|null);

    /** GenAIRpcReply llmSetStopTokens */
    llmSetStopTokens?: (ILLM_Set_Stop_Tokens_Reply|null);

    /** GenAIRpcReply llmGetStopTokens */
    llmGetStopTokens?: (ILLM_Get_Stop_Tokens_Reply|null);

    /** GenAIRpcReply llmGetContextUsageSize */
    llmGetContextUsageSize?: (ILLM_Get_Context_Usage_Size_Reply|null);

    /** GenAIRpcReply llmGetMaxContextCapacity */
    llmGetMaxContextCapacity?: (ILLM_Get_Max_Context_Capacity_Reply|null);

    /** GenAIRpcReply vlmCreate */
    vlmCreate?: (IVLM_Create_Reply|null);

    /** GenAIRpcReply vlmGeneratorGenerate */
    vlmGeneratorGenerate?: (IVLM_Generator_Generate_Reply|null);

    /** GenAIRpcReply genaiCheckHefExists */
    genaiCheckHefExists?: (IGenAI_Check_Hef_Exists_Reply|null);

    /** GenAIRpcReply speech2textCreate */
    speech2textCreate?: (ISpeech2Text_Create_Reply|null);

    /** GenAIRpcReply speech2textGenerate */
    speech2textGenerate?: (ISpeech2Text_Generate_Reply|null);

    /** GenAIRpcReply speech2textRelease */
    speech2textRelease?: (ISpeech2Text_Release_Reply|null);

    /** GenAIRpcReply speech2textTokenize */
    speech2textTokenize?: (ISpeech2Text_Tokenize_Reply|null);
}

/** Represents a GenAIRpcReply. */
export class GenAIRpcReply implements IGenAIRpcReply {

    /**
     * Constructs a new GenAIRpcReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGenAIRpcReply);

    /** GenAIRpcReply llmCreate. */
    public llmCreate?: (ILLM_Create_Reply|null);

    /** GenAIRpcReply llmGetGeneratorParams. */
    public llmGetGeneratorParams?: (ILLM_Get_Generator_Params_Reply|null);

    /** GenAIRpcReply llmGeneratorCreate. */
    public llmGeneratorCreate?: (ILLM_Generator_Create_Reply|null);

    /** GenAIRpcReply llmGeneratorWrite. */
    public llmGeneratorWrite?: (ILLM_Generator_Write_Reply|null);

    /** GenAIRpcReply llmGeneratorGenerate. */
    public llmGeneratorGenerate?: (ILLM_Generator_Generate_Reply|null);

    /** GenAIRpcReply llmGeneratorRead. */
    public llmGeneratorRead?: (ILLM_Generator_Read_Reply|null);

    /** GenAIRpcReply llmGeneratorAbort. */
    public llmGeneratorAbort?: (ILLM_Generator_Abort_Reply|null);

    /** GenAIRpcReply llmGeneratorRelease. */
    public llmGeneratorRelease?: (ILLM_Generator_Release_Reply|null);

    /** GenAIRpcReply llmTokenize. */
    public llmTokenize?: (ILLM_Tokenize_Reply|null);

    /** GenAIRpcReply llmGetContext. */
    public llmGetContext?: (ILLM_Get_Context_Reply|null);

    /** GenAIRpcReply llmSetContext. */
    public llmSetContext?: (ILLM_Set_Context_Reply|null);

    /** GenAIRpcReply llmClearContext. */
    public llmClearContext?: (ILLM_Clear_Context_Reply|null);

    /** GenAIRpcReply llmSetEndOfGenerationSequence. */
    public llmSetEndOfGenerationSequence?: (ILLM_Set_End_Of_Generation_Sequence_Reply|null);

    /** GenAIRpcReply llmGetEndOfGenerationSequence. */
    public llmGetEndOfGenerationSequence?: (ILLM_Get_End_Of_Generation_Sequence_Reply|null);

    /** GenAIRpcReply llmRelease. */
    public llmRelease?: (ILLM_Release_Reply|null);

    /** GenAIRpcReply llmSetStopTokens. */
    public llmSetStopTokens?: (ILLM_Set_Stop_Tokens_Reply|null);

    /** GenAIRpcReply llmGetStopTokens. */
    public llmGetStopTokens?: (ILLM_Get_Stop_Tokens_Reply|null);

    /** GenAIRpcReply llmGetContextUsageSize. */
    public llmGetContextUsageSize?: (ILLM_Get_Context_Usage_Size_Reply|null);

    /** GenAIRpcReply llmGetMaxContextCapacity. */
    public llmGetMaxContextCapacity?: (ILLM_Get_Max_Context_Capacity_Reply|null);

    /** GenAIRpcReply vlmCreate. */
    public vlmCreate?: (IVLM_Create_Reply|null);

    /** GenAIRpcReply vlmGeneratorGenerate. */
    public vlmGeneratorGenerate?: (IVLM_Generator_Generate_Reply|null);

    /** GenAIRpcReply genaiCheckHefExists. */
    public genaiCheckHefExists?: (IGenAI_Check_Hef_Exists_Reply|null);

    /** GenAIRpcReply speech2textCreate. */
    public speech2textCreate?: (ISpeech2Text_Create_Reply|null);

    /** GenAIRpcReply speech2textGenerate. */
    public speech2textGenerate?: (ISpeech2Text_Generate_Reply|null);

    /** GenAIRpcReply speech2textRelease. */
    public speech2textRelease?: (ISpeech2Text_Release_Reply|null);

    /** GenAIRpcReply speech2textTokenize. */
    public speech2textTokenize?: (ISpeech2Text_Tokenize_Reply|null);

    /** GenAIRpcReply reply. */
    public reply?: ("llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize");

    /**
     * Creates a new GenAIRpcReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenAIRpcReply instance
     */
    public static create(properties?: IGenAIRpcReply): GenAIRpcReply;

    /**
     * Encodes the specified GenAIRpcReply message. Does not implicitly {@link GenAIRpcReply.verify|verify} messages.
     * @param message GenAIRpcReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGenAIRpcReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenAIRpcReply message, length delimited. Does not implicitly {@link GenAIRpcReply.verify|verify} messages.
     * @param message GenAIRpcReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGenAIRpcReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenAIRpcReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GenAIRpcReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenAIRpcReply;

    /**
     * Decodes a GenAIRpcReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GenAIRpcReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenAIRpcReply;

    /**
     * Verifies a GenAIRpcReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenAIRpcReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenAIRpcReply
     */
    public static fromObject(object: { [k: string]: any }): GenAIRpcReply;

    /**
     * Creates a plain object from a GenAIRpcReply message. Also converts values to other types if specified.
     * @param message GenAIRpcReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GenAIRpcReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenAIRpcReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GenAIRpcReply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HefChunkInfo. */
export interface IHefChunkInfo {

    /** HefChunkInfo name */
    name?: (string|null);

    /** HefChunkInfo size */
    size?: (number|Long|null);

    /** HefChunkInfo offset */
    offset?: (number|Long|null);
}

/** Represents a HefChunkInfo. */
export class HefChunkInfo implements IHefChunkInfo {

    /**
     * Constructs a new HefChunkInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHefChunkInfo);

    /** HefChunkInfo name. */
    public name: string;

    /** HefChunkInfo size. */
    public size: (number|Long);

    /** HefChunkInfo offset. */
    public offset: (number|Long);

    /**
     * Creates a new HefChunkInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HefChunkInfo instance
     */
    public static create(properties?: IHefChunkInfo): HefChunkInfo;

    /**
     * Encodes the specified HefChunkInfo message. Does not implicitly {@link HefChunkInfo.verify|verify} messages.
     * @param message HefChunkInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHefChunkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HefChunkInfo message, length delimited. Does not implicitly {@link HefChunkInfo.verify|verify} messages.
     * @param message HefChunkInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHefChunkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HefChunkInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HefChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HefChunkInfo;

    /**
     * Decodes a HefChunkInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HefChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HefChunkInfo;

    /**
     * Verifies a HefChunkInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HefChunkInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HefChunkInfo
     */
    public static fromObject(object: { [k: string]: any }): HefChunkInfo;

    /**
     * Creates a plain object from a HefChunkInfo message. Also converts values to other types if specified.
     * @param message HefChunkInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HefChunkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HefChunkInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HefChunkInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Create_Request. */
export interface ILLM_Create_Request {

    /** LLM_Create_Request loraName */
    loraName?: (string|null);

    /** LLM_Create_Request hefPath */
    hefPath?: (string|null);

    /** LLM_Create_Request groupId */
    groupId?: (string|null);

    /** LLM_Create_Request chunksToTransfer */
    chunksToTransfer?: (IHefChunkInfo[]|null);

    /** LLM_Create_Request tokenizerOnHost */
    tokenizerOnHost?: (boolean|null);

    /** LLM_Create_Request totalHefSize */
    totalHefSize?: (number|Long|null);
}

/** Represents a LLM_Create_Request. */
export class LLM_Create_Request implements ILLM_Create_Request {

    /**
     * Constructs a new LLM_Create_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Create_Request);

    /** LLM_Create_Request loraName. */
    public loraName: string;

    /** LLM_Create_Request hefPath. */
    public hefPath: string;

    /** LLM_Create_Request groupId. */
    public groupId: string;

    /** LLM_Create_Request chunksToTransfer. */
    public chunksToTransfer: IHefChunkInfo[];

    /** LLM_Create_Request tokenizerOnHost. */
    public tokenizerOnHost: boolean;

    /** LLM_Create_Request totalHefSize. */
    public totalHefSize: (number|Long);

    /**
     * Creates a new LLM_Create_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Create_Request instance
     */
    public static create(properties?: ILLM_Create_Request): LLM_Create_Request;

    /**
     * Encodes the specified LLM_Create_Request message. Does not implicitly {@link LLM_Create_Request.verify|verify} messages.
     * @param message LLM_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Create_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Create_Request message, length delimited. Does not implicitly {@link LLM_Create_Request.verify|verify} messages.
     * @param message LLM_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Create_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Create_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Create_Request;

    /**
     * Decodes a LLM_Create_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Create_Request;

    /**
     * Verifies a LLM_Create_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Create_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Create_Request;

    /**
     * Creates a plain object from a LLM_Create_Request message. Also converts values to other types if specified.
     * @param message LLM_Create_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Create_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Create_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Create_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Create_Reply. */
export interface ILLM_Create_Reply {

    /** LLM_Create_Reply status */
    status?: (number|null);

    /** LLM_Create_Reply promptTemplate */
    promptTemplate?: (string|null);

    /** LLM_Create_Reply embeddingFeatures */
    embeddingFeatures?: (number|null);
}

/** Represents a LLM_Create_Reply. */
export class LLM_Create_Reply implements ILLM_Create_Reply {

    /**
     * Constructs a new LLM_Create_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Create_Reply);

    /** LLM_Create_Reply status. */
    public status: number;

    /** LLM_Create_Reply promptTemplate. */
    public promptTemplate: string;

    /** LLM_Create_Reply embeddingFeatures. */
    public embeddingFeatures: number;

    /**
     * Creates a new LLM_Create_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Create_Reply instance
     */
    public static create(properties?: ILLM_Create_Reply): LLM_Create_Reply;

    /**
     * Encodes the specified LLM_Create_Reply message. Does not implicitly {@link LLM_Create_Reply.verify|verify} messages.
     * @param message LLM_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Create_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Create_Reply message, length delimited. Does not implicitly {@link LLM_Create_Reply.verify|verify} messages.
     * @param message LLM_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Create_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Create_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Create_Reply;

    /**
     * Decodes a LLM_Create_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Create_Reply;

    /**
     * Verifies a LLM_Create_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Create_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Create_Reply;

    /**
     * Creates a plain object from a LLM_Create_Reply message. Also converts values to other types if specified.
     * @param message LLM_Create_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Create_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Create_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Create_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Generator_Params_Request. */
export interface ILLM_Get_Generator_Params_Request {
}

/** Represents a LLM_Get_Generator_Params_Request. */
export class LLM_Get_Generator_Params_Request implements ILLM_Get_Generator_Params_Request {

    /**
     * Constructs a new LLM_Get_Generator_Params_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Generator_Params_Request);

    /**
     * Creates a new LLM_Get_Generator_Params_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Generator_Params_Request instance
     */
    public static create(properties?: ILLM_Get_Generator_Params_Request): LLM_Get_Generator_Params_Request;

    /**
     * Encodes the specified LLM_Get_Generator_Params_Request message. Does not implicitly {@link LLM_Get_Generator_Params_Request.verify|verify} messages.
     * @param message LLM_Get_Generator_Params_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Generator_Params_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Generator_Params_Request message, length delimited. Does not implicitly {@link LLM_Get_Generator_Params_Request.verify|verify} messages.
     * @param message LLM_Get_Generator_Params_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Generator_Params_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Generator_Params_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Generator_Params_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Generator_Params_Request;

    /**
     * Decodes a LLM_Get_Generator_Params_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Generator_Params_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Generator_Params_Request;

    /**
     * Verifies a LLM_Get_Generator_Params_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Generator_Params_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Generator_Params_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Generator_Params_Request;

    /**
     * Creates a plain object from a LLM_Get_Generator_Params_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Generator_Params_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Generator_Params_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Generator_Params_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Generator_Params_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLMGeneratorParams. */
export interface ILLMGeneratorParams {

    /** LLMGeneratorParams temperature */
    temperature?: (number|null);

    /** LLMGeneratorParams topP */
    topP?: (number|null);

    /** LLMGeneratorParams topK */
    topK?: (number|null);

    /** LLMGeneratorParams frequencyPenalty */
    frequencyPenalty?: (number|null);

    /** LLMGeneratorParams maxGeneratedTokens */
    maxGeneratedTokens?: (number|null);

    /** LLMGeneratorParams doSample */
    doSample?: (boolean|null);

    /** LLMGeneratorParams seed */
    seed?: (number|null);
}

/** Represents a LLMGeneratorParams. */
export class LLMGeneratorParams implements ILLMGeneratorParams {

    /**
     * Constructs a new LLMGeneratorParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLMGeneratorParams);

    /** LLMGeneratorParams temperature. */
    public temperature: number;

    /** LLMGeneratorParams topP. */
    public topP: number;

    /** LLMGeneratorParams topK. */
    public topK: number;

    /** LLMGeneratorParams frequencyPenalty. */
    public frequencyPenalty: number;

    /** LLMGeneratorParams maxGeneratedTokens. */
    public maxGeneratedTokens: number;

    /** LLMGeneratorParams doSample. */
    public doSample: boolean;

    /** LLMGeneratorParams seed. */
    public seed: number;

    /**
     * Creates a new LLMGeneratorParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLMGeneratorParams instance
     */
    public static create(properties?: ILLMGeneratorParams): LLMGeneratorParams;

    /**
     * Encodes the specified LLMGeneratorParams message. Does not implicitly {@link LLMGeneratorParams.verify|verify} messages.
     * @param message LLMGeneratorParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLMGeneratorParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLMGeneratorParams message, length delimited. Does not implicitly {@link LLMGeneratorParams.verify|verify} messages.
     * @param message LLMGeneratorParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLMGeneratorParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLMGeneratorParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLMGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLMGeneratorParams;

    /**
     * Decodes a LLMGeneratorParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLMGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLMGeneratorParams;

    /**
     * Verifies a LLMGeneratorParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLMGeneratorParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLMGeneratorParams
     */
    public static fromObject(object: { [k: string]: any }): LLMGeneratorParams;

    /**
     * Creates a plain object from a LLMGeneratorParams message. Also converts values to other types if specified.
     * @param message LLMGeneratorParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLMGeneratorParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLMGeneratorParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLMGeneratorParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Generator_Params_Reply. */
export interface ILLM_Get_Generator_Params_Reply {

    /** LLM_Get_Generator_Params_Reply generatorParams */
    generatorParams?: (ILLMGeneratorParams|null);

    /** LLM_Get_Generator_Params_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Get_Generator_Params_Reply. */
export class LLM_Get_Generator_Params_Reply implements ILLM_Get_Generator_Params_Reply {

    /**
     * Constructs a new LLM_Get_Generator_Params_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Generator_Params_Reply);

    /** LLM_Get_Generator_Params_Reply generatorParams. */
    public generatorParams?: (ILLMGeneratorParams|null);

    /** LLM_Get_Generator_Params_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Get_Generator_Params_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Generator_Params_Reply instance
     */
    public static create(properties?: ILLM_Get_Generator_Params_Reply): LLM_Get_Generator_Params_Reply;

    /**
     * Encodes the specified LLM_Get_Generator_Params_Reply message. Does not implicitly {@link LLM_Get_Generator_Params_Reply.verify|verify} messages.
     * @param message LLM_Get_Generator_Params_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Generator_Params_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Generator_Params_Reply message, length delimited. Does not implicitly {@link LLM_Get_Generator_Params_Reply.verify|verify} messages.
     * @param message LLM_Get_Generator_Params_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Generator_Params_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Generator_Params_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Generator_Params_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Generator_Params_Reply;

    /**
     * Decodes a LLM_Get_Generator_Params_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Generator_Params_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Generator_Params_Reply;

    /**
     * Verifies a LLM_Get_Generator_Params_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Generator_Params_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Generator_Params_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Generator_Params_Reply;

    /**
     * Creates a plain object from a LLM_Get_Generator_Params_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Generator_Params_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Generator_Params_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Generator_Params_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Generator_Params_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Create_Request. */
export interface ILLM_Generator_Create_Request {

    /** LLM_Generator_Create_Request generatorParams */
    generatorParams?: (ILLMGeneratorParams|null);
}

/** Represents a LLM_Generator_Create_Request. */
export class LLM_Generator_Create_Request implements ILLM_Generator_Create_Request {

    /**
     * Constructs a new LLM_Generator_Create_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Create_Request);

    /** LLM_Generator_Create_Request generatorParams. */
    public generatorParams?: (ILLMGeneratorParams|null);

    /**
     * Creates a new LLM_Generator_Create_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Create_Request instance
     */
    public static create(properties?: ILLM_Generator_Create_Request): LLM_Generator_Create_Request;

    /**
     * Encodes the specified LLM_Generator_Create_Request message. Does not implicitly {@link LLM_Generator_Create_Request.verify|verify} messages.
     * @param message LLM_Generator_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Create_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Create_Request message, length delimited. Does not implicitly {@link LLM_Generator_Create_Request.verify|verify} messages.
     * @param message LLM_Generator_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Create_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Create_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Create_Request;

    /**
     * Decodes a LLM_Generator_Create_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Create_Request;

    /**
     * Verifies a LLM_Generator_Create_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Create_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Create_Request;

    /**
     * Creates a plain object from a LLM_Generator_Create_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Create_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Create_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Create_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Create_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Create_Reply. */
export interface ILLM_Generator_Create_Reply {

    /** LLM_Generator_Create_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Generator_Create_Reply. */
export class LLM_Generator_Create_Reply implements ILLM_Generator_Create_Reply {

    /**
     * Constructs a new LLM_Generator_Create_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Create_Reply);

    /** LLM_Generator_Create_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Generator_Create_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Create_Reply instance
     */
    public static create(properties?: ILLM_Generator_Create_Reply): LLM_Generator_Create_Reply;

    /**
     * Encodes the specified LLM_Generator_Create_Reply message. Does not implicitly {@link LLM_Generator_Create_Reply.verify|verify} messages.
     * @param message LLM_Generator_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Create_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Create_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Create_Reply.verify|verify} messages.
     * @param message LLM_Generator_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Create_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Create_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Create_Reply;

    /**
     * Decodes a LLM_Generator_Create_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Create_Reply;

    /**
     * Verifies a LLM_Generator_Create_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Create_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Create_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Create_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Create_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Create_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Create_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Create_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Write_Request. */
export interface ILLM_Generator_Write_Request {
}

/** Represents a LLM_Generator_Write_Request. */
export class LLM_Generator_Write_Request implements ILLM_Generator_Write_Request {

    /**
     * Constructs a new LLM_Generator_Write_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Write_Request);

    /**
     * Creates a new LLM_Generator_Write_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Write_Request instance
     */
    public static create(properties?: ILLM_Generator_Write_Request): LLM_Generator_Write_Request;

    /**
     * Encodes the specified LLM_Generator_Write_Request message. Does not implicitly {@link LLM_Generator_Write_Request.verify|verify} messages.
     * @param message LLM_Generator_Write_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Write_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Write_Request message, length delimited. Does not implicitly {@link LLM_Generator_Write_Request.verify|verify} messages.
     * @param message LLM_Generator_Write_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Write_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Write_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Write_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Write_Request;

    /**
     * Decodes a LLM_Generator_Write_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Write_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Write_Request;

    /**
     * Verifies a LLM_Generator_Write_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Write_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Write_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Write_Request;

    /**
     * Creates a plain object from a LLM_Generator_Write_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Write_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Write_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Write_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Write_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Write_Reply. */
export interface ILLM_Generator_Write_Reply {

    /** LLM_Generator_Write_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Generator_Write_Reply. */
export class LLM_Generator_Write_Reply implements ILLM_Generator_Write_Reply {

    /**
     * Constructs a new LLM_Generator_Write_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Write_Reply);

    /** LLM_Generator_Write_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Generator_Write_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Write_Reply instance
     */
    public static create(properties?: ILLM_Generator_Write_Reply): LLM_Generator_Write_Reply;

    /**
     * Encodes the specified LLM_Generator_Write_Reply message. Does not implicitly {@link LLM_Generator_Write_Reply.verify|verify} messages.
     * @param message LLM_Generator_Write_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Write_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Write_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Write_Reply.verify|verify} messages.
     * @param message LLM_Generator_Write_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Write_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Write_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Write_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Write_Reply;

    /**
     * Decodes a LLM_Generator_Write_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Write_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Write_Reply;

    /**
     * Verifies a LLM_Generator_Write_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Write_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Write_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Write_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Write_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Write_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Write_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Write_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Write_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Generate_Request. */
export interface ILLM_Generator_Generate_Request {
}

/** Represents a LLM_Generator_Generate_Request. */
export class LLM_Generator_Generate_Request implements ILLM_Generator_Generate_Request {

    /**
     * Constructs a new LLM_Generator_Generate_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Generate_Request);

    /**
     * Creates a new LLM_Generator_Generate_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Generate_Request instance
     */
    public static create(properties?: ILLM_Generator_Generate_Request): LLM_Generator_Generate_Request;

    /**
     * Encodes the specified LLM_Generator_Generate_Request message. Does not implicitly {@link LLM_Generator_Generate_Request.verify|verify} messages.
     * @param message LLM_Generator_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Generate_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Generate_Request message, length delimited. Does not implicitly {@link LLM_Generator_Generate_Request.verify|verify} messages.
     * @param message LLM_Generator_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Generate_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Generate_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Generate_Request;

    /**
     * Decodes a LLM_Generator_Generate_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Generate_Request;

    /**
     * Verifies a LLM_Generator_Generate_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Generate_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Generate_Request;

    /**
     * Creates a plain object from a LLM_Generator_Generate_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Generate_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Generate_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Generate_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Generate_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Generate_Reply. */
export interface ILLM_Generator_Generate_Reply {

    /** LLM_Generator_Generate_Reply status */
    status?: (number|null);

    /** LLM_Generator_Generate_Reply initialPrefixTokens */
    initialPrefixTokens?: (number[]|null);
}

/** Represents a LLM_Generator_Generate_Reply. */
export class LLM_Generator_Generate_Reply implements ILLM_Generator_Generate_Reply {

    /**
     * Constructs a new LLM_Generator_Generate_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Generate_Reply);

    /** LLM_Generator_Generate_Reply status. */
    public status: number;

    /** LLM_Generator_Generate_Reply initialPrefixTokens. */
    public initialPrefixTokens: number[];

    /**
     * Creates a new LLM_Generator_Generate_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Generate_Reply instance
     */
    public static create(properties?: ILLM_Generator_Generate_Reply): LLM_Generator_Generate_Reply;

    /**
     * Encodes the specified LLM_Generator_Generate_Reply message. Does not implicitly {@link LLM_Generator_Generate_Reply.verify|verify} messages.
     * @param message LLM_Generator_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Generate_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Generate_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Generate_Reply.verify|verify} messages.
     * @param message LLM_Generator_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Generate_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Generate_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Generate_Reply;

    /**
     * Decodes a LLM_Generator_Generate_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Generate_Reply;

    /**
     * Verifies a LLM_Generator_Generate_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Generate_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Generate_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Generate_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Generate_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Generate_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Generate_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Generate_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an Embedding. */
export interface IEmbedding {

    /** Embedding type */
    type?: (number|null);

    /** Embedding data */
    data?: (Uint8Array|null);
}

/** Represents an Embedding. */
export class Embedding implements IEmbedding {

    /**
     * Constructs a new Embedding.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmbedding);

    /** Embedding type. */
    public type: number;

    /** Embedding data. */
    public data: Uint8Array;

    /**
     * Creates a new Embedding instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Embedding instance
     */
    public static create(properties?: IEmbedding): Embedding;

    /**
     * Encodes the specified Embedding message. Does not implicitly {@link Embedding.verify|verify} messages.
     * @param message Embedding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmbedding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Embedding message, length delimited. Does not implicitly {@link Embedding.verify|verify} messages.
     * @param message Embedding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmbedding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Embedding message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Embedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Embedding;

    /**
     * Decodes an Embedding message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Embedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Embedding;

    /**
     * Verifies an Embedding message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Embedding message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Embedding
     */
    public static fromObject(object: { [k: string]: any }): Embedding;

    /**
     * Creates a plain object from an Embedding message. Also converts values to other types if specified.
     * @param message Embedding
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Embedding, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Embedding to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Embedding
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TextGenerationInput. */
export interface ITextGenerationInput {

    /** TextGenerationInput initialPrompt */
    initialPrompt?: (string|null);

    /** TextGenerationInput tokens */
    tokens?: (number[]|null);

    /** TextGenerationInput embeddings */
    embeddings?: (IEmbedding[]|null);
}

/** Represents a TextGenerationInput. */
export class TextGenerationInput implements ITextGenerationInput {

    /**
     * Constructs a new TextGenerationInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextGenerationInput);

    /** TextGenerationInput initialPrompt. */
    public initialPrompt: string;

    /** TextGenerationInput tokens. */
    public tokens: number[];

    /** TextGenerationInput embeddings. */
    public embeddings: IEmbedding[];

    /**
     * Creates a new TextGenerationInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextGenerationInput instance
     */
    public static create(properties?: ITextGenerationInput): TextGenerationInput;

    /**
     * Encodes the specified TextGenerationInput message. Does not implicitly {@link TextGenerationInput.verify|verify} messages.
     * @param message TextGenerationInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextGenerationInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextGenerationInput message, length delimited. Does not implicitly {@link TextGenerationInput.verify|verify} messages.
     * @param message TextGenerationInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextGenerationInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextGenerationInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextGenerationInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextGenerationInput;

    /**
     * Decodes a TextGenerationInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextGenerationInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextGenerationInput;

    /**
     * Verifies a TextGenerationInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextGenerationInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextGenerationInput
     */
    public static fromObject(object: { [k: string]: any }): TextGenerationInput;

    /**
     * Creates a plain object from a TextGenerationInput message. Also converts values to other types if specified.
     * @param message TextGenerationInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextGenerationInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextGenerationInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TextGenerationInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TextGenerationOutput. */
export interface ITextGenerationOutput {

    /** TextGenerationOutput outputTokenStr */
    outputTokenStr?: (string|null);

    /** TextGenerationOutput outputTokenId */
    outputTokenId?: (number|null);
}

/** Represents a TextGenerationOutput. */
export class TextGenerationOutput implements ITextGenerationOutput {

    /**
     * Constructs a new TextGenerationOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextGenerationOutput);

    /** TextGenerationOutput outputTokenStr. */
    public outputTokenStr: string;

    /** TextGenerationOutput outputTokenId. */
    public outputTokenId: number;

    /**
     * Creates a new TextGenerationOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextGenerationOutput instance
     */
    public static create(properties?: ITextGenerationOutput): TextGenerationOutput;

    /**
     * Encodes the specified TextGenerationOutput message. Does not implicitly {@link TextGenerationOutput.verify|verify} messages.
     * @param message TextGenerationOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextGenerationOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextGenerationOutput message, length delimited. Does not implicitly {@link TextGenerationOutput.verify|verify} messages.
     * @param message TextGenerationOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextGenerationOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextGenerationOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextGenerationOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextGenerationOutput;

    /**
     * Decodes a TextGenerationOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextGenerationOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextGenerationOutput;

    /**
     * Verifies a TextGenerationOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextGenerationOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextGenerationOutput
     */
    public static fromObject(object: { [k: string]: any }): TextGenerationOutput;

    /**
     * Creates a plain object from a TextGenerationOutput message. Also converts values to other types if specified.
     * @param message TextGenerationOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextGenerationOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextGenerationOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TextGenerationOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Read_Request. */
export interface ILLM_Generator_Read_Request {

    /** LLM_Generator_Read_Request timeoutMs */
    timeoutMs?: (number|null);

    /** LLM_Generator_Read_Request generationInput */
    generationInput?: (ITextGenerationInput|null);
}

/** Represents a LLM_Generator_Read_Request. */
export class LLM_Generator_Read_Request implements ILLM_Generator_Read_Request {

    /**
     * Constructs a new LLM_Generator_Read_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Read_Request);

    /** LLM_Generator_Read_Request timeoutMs. */
    public timeoutMs: number;

    /** LLM_Generator_Read_Request generationInput. */
    public generationInput?: (ITextGenerationInput|null);

    /**
     * Creates a new LLM_Generator_Read_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Read_Request instance
     */
    public static create(properties?: ILLM_Generator_Read_Request): LLM_Generator_Read_Request;

    /**
     * Encodes the specified LLM_Generator_Read_Request message. Does not implicitly {@link LLM_Generator_Read_Request.verify|verify} messages.
     * @param message LLM_Generator_Read_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Read_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Read_Request message, length delimited. Does not implicitly {@link LLM_Generator_Read_Request.verify|verify} messages.
     * @param message LLM_Generator_Read_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Read_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Read_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Read_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Read_Request;

    /**
     * Decodes a LLM_Generator_Read_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Read_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Read_Request;

    /**
     * Verifies a LLM_Generator_Read_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Read_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Read_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Read_Request;

    /**
     * Creates a plain object from a LLM_Generator_Read_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Read_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Read_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Read_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Read_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Read_Reply. */
export interface ILLM_Generator_Read_Reply {

    /** LLM_Generator_Read_Reply generationOutput */
    generationOutput?: (ITextGenerationOutput|null);

    /** LLM_Generator_Read_Reply generationStatus */
    generationStatus?: (number|null);

    /** LLM_Generator_Read_Reply status */
    status?: (number|null);

    /** LLM_Generator_Read_Reply isContextFull */
    isContextFull?: (boolean|null);
}

/** Represents a LLM_Generator_Read_Reply. */
export class LLM_Generator_Read_Reply implements ILLM_Generator_Read_Reply {

    /**
     * Constructs a new LLM_Generator_Read_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Read_Reply);

    /** LLM_Generator_Read_Reply generationOutput. */
    public generationOutput?: (ITextGenerationOutput|null);

    /** LLM_Generator_Read_Reply generationStatus. */
    public generationStatus: number;

    /** LLM_Generator_Read_Reply status. */
    public status: number;

    /** LLM_Generator_Read_Reply isContextFull. */
    public isContextFull: boolean;

    /**
     * Creates a new LLM_Generator_Read_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Read_Reply instance
     */
    public static create(properties?: ILLM_Generator_Read_Reply): LLM_Generator_Read_Reply;

    /**
     * Encodes the specified LLM_Generator_Read_Reply message. Does not implicitly {@link LLM_Generator_Read_Reply.verify|verify} messages.
     * @param message LLM_Generator_Read_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Read_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Read_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Read_Reply.verify|verify} messages.
     * @param message LLM_Generator_Read_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Read_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Read_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Read_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Read_Reply;

    /**
     * Decodes a LLM_Generator_Read_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Read_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Read_Reply;

    /**
     * Verifies a LLM_Generator_Read_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Read_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Read_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Read_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Read_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Read_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Read_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Read_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Read_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Tokenize_Request. */
export interface ILLM_Tokenize_Request {

    /** LLM_Tokenize_Request prompt */
    prompt?: (string|null);
}

/** Represents a LLM_Tokenize_Request. */
export class LLM_Tokenize_Request implements ILLM_Tokenize_Request {

    /**
     * Constructs a new LLM_Tokenize_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Tokenize_Request);

    /** LLM_Tokenize_Request prompt. */
    public prompt: string;

    /**
     * Creates a new LLM_Tokenize_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Tokenize_Request instance
     */
    public static create(properties?: ILLM_Tokenize_Request): LLM_Tokenize_Request;

    /**
     * Encodes the specified LLM_Tokenize_Request message. Does not implicitly {@link LLM_Tokenize_Request.verify|verify} messages.
     * @param message LLM_Tokenize_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Tokenize_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Tokenize_Request message, length delimited. Does not implicitly {@link LLM_Tokenize_Request.verify|verify} messages.
     * @param message LLM_Tokenize_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Tokenize_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Tokenize_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Tokenize_Request;

    /**
     * Decodes a LLM_Tokenize_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Tokenize_Request;

    /**
     * Verifies a LLM_Tokenize_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Tokenize_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Tokenize_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Tokenize_Request;

    /**
     * Creates a plain object from a LLM_Tokenize_Request message. Also converts values to other types if specified.
     * @param message LLM_Tokenize_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Tokenize_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Tokenize_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Tokenize_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Tokenize_Reply. */
export interface ILLM_Tokenize_Reply {

    /** LLM_Tokenize_Reply tokens */
    tokens?: (number[]|null);

    /** LLM_Tokenize_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Tokenize_Reply. */
export class LLM_Tokenize_Reply implements ILLM_Tokenize_Reply {

    /**
     * Constructs a new LLM_Tokenize_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Tokenize_Reply);

    /** LLM_Tokenize_Reply tokens. */
    public tokens: number[];

    /** LLM_Tokenize_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Tokenize_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Tokenize_Reply instance
     */
    public static create(properties?: ILLM_Tokenize_Reply): LLM_Tokenize_Reply;

    /**
     * Encodes the specified LLM_Tokenize_Reply message. Does not implicitly {@link LLM_Tokenize_Reply.verify|verify} messages.
     * @param message LLM_Tokenize_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Tokenize_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Tokenize_Reply message, length delimited. Does not implicitly {@link LLM_Tokenize_Reply.verify|verify} messages.
     * @param message LLM_Tokenize_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Tokenize_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Tokenize_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Tokenize_Reply;

    /**
     * Decodes a LLM_Tokenize_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Tokenize_Reply;

    /**
     * Verifies a LLM_Tokenize_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Tokenize_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Tokenize_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Tokenize_Reply;

    /**
     * Creates a plain object from a LLM_Tokenize_Reply message. Also converts values to other types if specified.
     * @param message LLM_Tokenize_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Tokenize_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Tokenize_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Tokenize_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Context_Request. */
export interface ILLM_Get_Context_Request {
}

/** Represents a LLM_Get_Context_Request. */
export class LLM_Get_Context_Request implements ILLM_Get_Context_Request {

    /**
     * Constructs a new LLM_Get_Context_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Context_Request);

    /**
     * Creates a new LLM_Get_Context_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Context_Request instance
     */
    public static create(properties?: ILLM_Get_Context_Request): LLM_Get_Context_Request;

    /**
     * Encodes the specified LLM_Get_Context_Request message. Does not implicitly {@link LLM_Get_Context_Request.verify|verify} messages.
     * @param message LLM_Get_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Context_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Context_Request message, length delimited. Does not implicitly {@link LLM_Get_Context_Request.verify|verify} messages.
     * @param message LLM_Get_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Context_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Context_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Context_Request;

    /**
     * Decodes a LLM_Get_Context_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Context_Request;

    /**
     * Verifies a LLM_Get_Context_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Context_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Context_Request;

    /**
     * Creates a plain object from a LLM_Get_Context_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Context_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Context_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Context_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Context_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Context_Reply. */
export interface ILLM_Get_Context_Reply {

    /** LLM_Get_Context_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Get_Context_Reply. */
export class LLM_Get_Context_Reply implements ILLM_Get_Context_Reply {

    /**
     * Constructs a new LLM_Get_Context_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Context_Reply);

    /** LLM_Get_Context_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Get_Context_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Context_Reply instance
     */
    public static create(properties?: ILLM_Get_Context_Reply): LLM_Get_Context_Reply;

    /**
     * Encodes the specified LLM_Get_Context_Reply message. Does not implicitly {@link LLM_Get_Context_Reply.verify|verify} messages.
     * @param message LLM_Get_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Context_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Context_Reply message, length delimited. Does not implicitly {@link LLM_Get_Context_Reply.verify|verify} messages.
     * @param message LLM_Get_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Context_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Context_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Context_Reply;

    /**
     * Decodes a LLM_Get_Context_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Context_Reply;

    /**
     * Verifies a LLM_Get_Context_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Context_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Context_Reply;

    /**
     * Creates a plain object from a LLM_Get_Context_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Context_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Context_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Context_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Context_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Set_Context_Request. */
export interface ILLM_Set_Context_Request {
}

/** Represents a LLM_Set_Context_Request. */
export class LLM_Set_Context_Request implements ILLM_Set_Context_Request {

    /**
     * Constructs a new LLM_Set_Context_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Set_Context_Request);

    /**
     * Creates a new LLM_Set_Context_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_Context_Request instance
     */
    public static create(properties?: ILLM_Set_Context_Request): LLM_Set_Context_Request;

    /**
     * Encodes the specified LLM_Set_Context_Request message. Does not implicitly {@link LLM_Set_Context_Request.verify|verify} messages.
     * @param message LLM_Set_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Set_Context_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_Context_Request message, length delimited. Does not implicitly {@link LLM_Set_Context_Request.verify|verify} messages.
     * @param message LLM_Set_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Set_Context_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_Context_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Set_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_Context_Request;

    /**
     * Decodes a LLM_Set_Context_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Set_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_Context_Request;

    /**
     * Verifies a LLM_Set_Context_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_Context_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Set_Context_Request;

    /**
     * Creates a plain object from a LLM_Set_Context_Request message. Also converts values to other types if specified.
     * @param message LLM_Set_Context_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Set_Context_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_Context_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Set_Context_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Set_Context_Reply. */
export interface ILLM_Set_Context_Reply {

    /** LLM_Set_Context_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Set_Context_Reply. */
export class LLM_Set_Context_Reply implements ILLM_Set_Context_Reply {

    /**
     * Constructs a new LLM_Set_Context_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Set_Context_Reply);

    /** LLM_Set_Context_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Set_Context_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_Context_Reply instance
     */
    public static create(properties?: ILLM_Set_Context_Reply): LLM_Set_Context_Reply;

    /**
     * Encodes the specified LLM_Set_Context_Reply message. Does not implicitly {@link LLM_Set_Context_Reply.verify|verify} messages.
     * @param message LLM_Set_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Set_Context_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_Context_Reply message, length delimited. Does not implicitly {@link LLM_Set_Context_Reply.verify|verify} messages.
     * @param message LLM_Set_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Set_Context_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_Context_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Set_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_Context_Reply;

    /**
     * Decodes a LLM_Set_Context_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Set_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_Context_Reply;

    /**
     * Verifies a LLM_Set_Context_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_Context_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Set_Context_Reply;

    /**
     * Creates a plain object from a LLM_Set_Context_Reply message. Also converts values to other types if specified.
     * @param message LLM_Set_Context_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Set_Context_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_Context_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Set_Context_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Clear_Context_Request. */
export interface ILLM_Clear_Context_Request {
}

/** Represents a LLM_Clear_Context_Request. */
export class LLM_Clear_Context_Request implements ILLM_Clear_Context_Request {

    /**
     * Constructs a new LLM_Clear_Context_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Clear_Context_Request);

    /**
     * Creates a new LLM_Clear_Context_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Clear_Context_Request instance
     */
    public static create(properties?: ILLM_Clear_Context_Request): LLM_Clear_Context_Request;

    /**
     * Encodes the specified LLM_Clear_Context_Request message. Does not implicitly {@link LLM_Clear_Context_Request.verify|verify} messages.
     * @param message LLM_Clear_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Clear_Context_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Clear_Context_Request message, length delimited. Does not implicitly {@link LLM_Clear_Context_Request.verify|verify} messages.
     * @param message LLM_Clear_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Clear_Context_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Clear_Context_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Clear_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Clear_Context_Request;

    /**
     * Decodes a LLM_Clear_Context_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Clear_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Clear_Context_Request;

    /**
     * Verifies a LLM_Clear_Context_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Clear_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Clear_Context_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Clear_Context_Request;

    /**
     * Creates a plain object from a LLM_Clear_Context_Request message. Also converts values to other types if specified.
     * @param message LLM_Clear_Context_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Clear_Context_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Clear_Context_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Clear_Context_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Clear_Context_Reply. */
export interface ILLM_Clear_Context_Reply {

    /** LLM_Clear_Context_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Clear_Context_Reply. */
export class LLM_Clear_Context_Reply implements ILLM_Clear_Context_Reply {

    /**
     * Constructs a new LLM_Clear_Context_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Clear_Context_Reply);

    /** LLM_Clear_Context_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Clear_Context_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Clear_Context_Reply instance
     */
    public static create(properties?: ILLM_Clear_Context_Reply): LLM_Clear_Context_Reply;

    /**
     * Encodes the specified LLM_Clear_Context_Reply message. Does not implicitly {@link LLM_Clear_Context_Reply.verify|verify} messages.
     * @param message LLM_Clear_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Clear_Context_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Clear_Context_Reply message, length delimited. Does not implicitly {@link LLM_Clear_Context_Reply.verify|verify} messages.
     * @param message LLM_Clear_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Clear_Context_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Clear_Context_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Clear_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Clear_Context_Reply;

    /**
     * Decodes a LLM_Clear_Context_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Clear_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Clear_Context_Reply;

    /**
     * Verifies a LLM_Clear_Context_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Clear_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Clear_Context_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Clear_Context_Reply;

    /**
     * Creates a plain object from a LLM_Clear_Context_Reply message. Also converts values to other types if specified.
     * @param message LLM_Clear_Context_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Clear_Context_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Clear_Context_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Clear_Context_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Release_Request. */
export interface ILLM_Release_Request {
}

/** Represents a LLM_Release_Request. */
export class LLM_Release_Request implements ILLM_Release_Request {

    /**
     * Constructs a new LLM_Release_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Release_Request);

    /**
     * Creates a new LLM_Release_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Release_Request instance
     */
    public static create(properties?: ILLM_Release_Request): LLM_Release_Request;

    /**
     * Encodes the specified LLM_Release_Request message. Does not implicitly {@link LLM_Release_Request.verify|verify} messages.
     * @param message LLM_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Release_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Release_Request message, length delimited. Does not implicitly {@link LLM_Release_Request.verify|verify} messages.
     * @param message LLM_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Release_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Release_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Release_Request;

    /**
     * Decodes a LLM_Release_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Release_Request;

    /**
     * Verifies a LLM_Release_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Release_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Release_Request;

    /**
     * Creates a plain object from a LLM_Release_Request message. Also converts values to other types if specified.
     * @param message LLM_Release_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Release_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Release_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Release_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Release_Reply. */
export interface ILLM_Release_Reply {

    /** LLM_Release_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Release_Reply. */
export class LLM_Release_Reply implements ILLM_Release_Reply {

    /**
     * Constructs a new LLM_Release_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Release_Reply);

    /** LLM_Release_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Release_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Release_Reply instance
     */
    public static create(properties?: ILLM_Release_Reply): LLM_Release_Reply;

    /**
     * Encodes the specified LLM_Release_Reply message. Does not implicitly {@link LLM_Release_Reply.verify|verify} messages.
     * @param message LLM_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Release_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Release_Reply message, length delimited. Does not implicitly {@link LLM_Release_Reply.verify|verify} messages.
     * @param message LLM_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Release_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Release_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Release_Reply;

    /**
     * Decodes a LLM_Release_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Release_Reply;

    /**
     * Verifies a LLM_Release_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Release_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Release_Reply;

    /**
     * Creates a plain object from a LLM_Release_Reply message. Also converts values to other types if specified.
     * @param message LLM_Release_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Release_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Release_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Release_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Abort_Request. */
export interface ILLM_Generator_Abort_Request {
}

/** Represents a LLM_Generator_Abort_Request. */
export class LLM_Generator_Abort_Request implements ILLM_Generator_Abort_Request {

    /**
     * Constructs a new LLM_Generator_Abort_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Abort_Request);

    /**
     * Creates a new LLM_Generator_Abort_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Abort_Request instance
     */
    public static create(properties?: ILLM_Generator_Abort_Request): LLM_Generator_Abort_Request;

    /**
     * Encodes the specified LLM_Generator_Abort_Request message. Does not implicitly {@link LLM_Generator_Abort_Request.verify|verify} messages.
     * @param message LLM_Generator_Abort_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Abort_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Abort_Request message, length delimited. Does not implicitly {@link LLM_Generator_Abort_Request.verify|verify} messages.
     * @param message LLM_Generator_Abort_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Abort_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Abort_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Abort_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Abort_Request;

    /**
     * Decodes a LLM_Generator_Abort_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Abort_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Abort_Request;

    /**
     * Verifies a LLM_Generator_Abort_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Abort_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Abort_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Abort_Request;

    /**
     * Creates a plain object from a LLM_Generator_Abort_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Abort_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Abort_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Abort_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Abort_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Abort_Reply. */
export interface ILLM_Generator_Abort_Reply {

    /** LLM_Generator_Abort_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Generator_Abort_Reply. */
export class LLM_Generator_Abort_Reply implements ILLM_Generator_Abort_Reply {

    /**
     * Constructs a new LLM_Generator_Abort_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Abort_Reply);

    /** LLM_Generator_Abort_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Generator_Abort_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Abort_Reply instance
     */
    public static create(properties?: ILLM_Generator_Abort_Reply): LLM_Generator_Abort_Reply;

    /**
     * Encodes the specified LLM_Generator_Abort_Reply message. Does not implicitly {@link LLM_Generator_Abort_Reply.verify|verify} messages.
     * @param message LLM_Generator_Abort_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Abort_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Abort_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Abort_Reply.verify|verify} messages.
     * @param message LLM_Generator_Abort_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Abort_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Abort_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Abort_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Abort_Reply;

    /**
     * Decodes a LLM_Generator_Abort_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Abort_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Abort_Reply;

    /**
     * Verifies a LLM_Generator_Abort_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Abort_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Abort_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Abort_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Abort_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Abort_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Abort_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Abort_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Abort_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Set_End_Of_Generation_Sequence_Request. */
export interface ILLM_Set_End_Of_Generation_Sequence_Request {

    /** LLM_Set_End_Of_Generation_Sequence_Request endOfGenerationSequenceTokens */
    endOfGenerationSequenceTokens?: (number[]|null);
}

/** Represents a LLM_Set_End_Of_Generation_Sequence_Request. */
export class LLM_Set_End_Of_Generation_Sequence_Request implements ILLM_Set_End_Of_Generation_Sequence_Request {

    /**
     * Constructs a new LLM_Set_End_Of_Generation_Sequence_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Set_End_Of_Generation_Sequence_Request);

    /** LLM_Set_End_Of_Generation_Sequence_Request endOfGenerationSequenceTokens. */
    public endOfGenerationSequenceTokens: number[];

    /**
     * Creates a new LLM_Set_End_Of_Generation_Sequence_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_End_Of_Generation_Sequence_Request instance
     */
    public static create(properties?: ILLM_Set_End_Of_Generation_Sequence_Request): LLM_Set_End_Of_Generation_Sequence_Request;

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Request message. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @param message LLM_Set_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Set_End_Of_Generation_Sequence_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Request message, length delimited. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @param message LLM_Set_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Set_End_Of_Generation_Sequence_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Set_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_End_Of_Generation_Sequence_Request;

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Set_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_End_Of_Generation_Sequence_Request;

    /**
     * Verifies a LLM_Set_End_Of_Generation_Sequence_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_End_Of_Generation_Sequence_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_End_Of_Generation_Sequence_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Set_End_Of_Generation_Sequence_Request;

    /**
     * Creates a plain object from a LLM_Set_End_Of_Generation_Sequence_Request message. Also converts values to other types if specified.
     * @param message LLM_Set_End_Of_Generation_Sequence_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Set_End_Of_Generation_Sequence_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_End_Of_Generation_Sequence_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Set_End_Of_Generation_Sequence_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Release_Request. */
export interface ILLM_Generator_Release_Request {
}

/** Represents a LLM_Generator_Release_Request. */
export class LLM_Generator_Release_Request implements ILLM_Generator_Release_Request {

    /**
     * Constructs a new LLM_Generator_Release_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Release_Request);

    /**
     * Creates a new LLM_Generator_Release_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Release_Request instance
     */
    public static create(properties?: ILLM_Generator_Release_Request): LLM_Generator_Release_Request;

    /**
     * Encodes the specified LLM_Generator_Release_Request message. Does not implicitly {@link LLM_Generator_Release_Request.verify|verify} messages.
     * @param message LLM_Generator_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Release_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Release_Request message, length delimited. Does not implicitly {@link LLM_Generator_Release_Request.verify|verify} messages.
     * @param message LLM_Generator_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Release_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Release_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Release_Request;

    /**
     * Decodes a LLM_Generator_Release_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Release_Request;

    /**
     * Verifies a LLM_Generator_Release_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Release_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Release_Request;

    /**
     * Creates a plain object from a LLM_Generator_Release_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Release_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Release_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Release_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Release_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Generator_Release_Reply. */
export interface ILLM_Generator_Release_Reply {

    /** LLM_Generator_Release_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Generator_Release_Reply. */
export class LLM_Generator_Release_Reply implements ILLM_Generator_Release_Reply {

    /**
     * Constructs a new LLM_Generator_Release_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Generator_Release_Reply);

    /** LLM_Generator_Release_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Generator_Release_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Release_Reply instance
     */
    public static create(properties?: ILLM_Generator_Release_Reply): LLM_Generator_Release_Reply;

    /**
     * Encodes the specified LLM_Generator_Release_Reply message. Does not implicitly {@link LLM_Generator_Release_Reply.verify|verify} messages.
     * @param message LLM_Generator_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Generator_Release_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Release_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Release_Reply.verify|verify} messages.
     * @param message LLM_Generator_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Generator_Release_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Release_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Generator_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Release_Reply;

    /**
     * Decodes a LLM_Generator_Release_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Generator_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Release_Reply;

    /**
     * Verifies a LLM_Generator_Release_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Release_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Generator_Release_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Release_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Release_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Generator_Release_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Release_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Generator_Release_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Set_End_Of_Generation_Sequence_Reply. */
export interface ILLM_Set_End_Of_Generation_Sequence_Reply {

    /** LLM_Set_End_Of_Generation_Sequence_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Set_End_Of_Generation_Sequence_Reply. */
export class LLM_Set_End_Of_Generation_Sequence_Reply implements ILLM_Set_End_Of_Generation_Sequence_Reply {

    /**
     * Constructs a new LLM_Set_End_Of_Generation_Sequence_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Set_End_Of_Generation_Sequence_Reply);

    /** LLM_Set_End_Of_Generation_Sequence_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Set_End_Of_Generation_Sequence_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_End_Of_Generation_Sequence_Reply instance
     */
    public static create(properties?: ILLM_Set_End_Of_Generation_Sequence_Reply): LLM_Set_End_Of_Generation_Sequence_Reply;

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Reply message. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @param message LLM_Set_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Set_End_Of_Generation_Sequence_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Reply message, length delimited. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @param message LLM_Set_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Set_End_Of_Generation_Sequence_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Set_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_End_Of_Generation_Sequence_Reply;

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Set_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_End_Of_Generation_Sequence_Reply;

    /**
     * Verifies a LLM_Set_End_Of_Generation_Sequence_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_End_Of_Generation_Sequence_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_End_Of_Generation_Sequence_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Set_End_Of_Generation_Sequence_Reply;

    /**
     * Creates a plain object from a LLM_Set_End_Of_Generation_Sequence_Reply message. Also converts values to other types if specified.
     * @param message LLM_Set_End_Of_Generation_Sequence_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Set_End_Of_Generation_Sequence_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_End_Of_Generation_Sequence_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Set_End_Of_Generation_Sequence_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_End_Of_Generation_Sequence_Request. */
export interface ILLM_Get_End_Of_Generation_Sequence_Request {
}

/** Represents a LLM_Get_End_Of_Generation_Sequence_Request. */
export class LLM_Get_End_Of_Generation_Sequence_Request implements ILLM_Get_End_Of_Generation_Sequence_Request {

    /**
     * Constructs a new LLM_Get_End_Of_Generation_Sequence_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_End_Of_Generation_Sequence_Request);

    /**
     * Creates a new LLM_Get_End_Of_Generation_Sequence_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_End_Of_Generation_Sequence_Request instance
     */
    public static create(properties?: ILLM_Get_End_Of_Generation_Sequence_Request): LLM_Get_End_Of_Generation_Sequence_Request;

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Request message. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @param message LLM_Get_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_End_Of_Generation_Sequence_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Request message, length delimited. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @param message LLM_Get_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_End_Of_Generation_Sequence_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_End_Of_Generation_Sequence_Request;

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_End_Of_Generation_Sequence_Request;

    /**
     * Verifies a LLM_Get_End_Of_Generation_Sequence_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_End_Of_Generation_Sequence_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_End_Of_Generation_Sequence_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_End_Of_Generation_Sequence_Request;

    /**
     * Creates a plain object from a LLM_Get_End_Of_Generation_Sequence_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_End_Of_Generation_Sequence_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_End_Of_Generation_Sequence_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_End_Of_Generation_Sequence_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_End_Of_Generation_Sequence_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_End_Of_Generation_Sequence_Reply. */
export interface ILLM_Get_End_Of_Generation_Sequence_Reply {

    /** LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequence */
    endOfGenerationSequence?: (string|null);

    /** LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequenceTokens */
    endOfGenerationSequenceTokens?: (number[]|null);

    /** LLM_Get_End_Of_Generation_Sequence_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Get_End_Of_Generation_Sequence_Reply. */
export class LLM_Get_End_Of_Generation_Sequence_Reply implements ILLM_Get_End_Of_Generation_Sequence_Reply {

    /**
     * Constructs a new LLM_Get_End_Of_Generation_Sequence_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_End_Of_Generation_Sequence_Reply);

    /** LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequence. */
    public endOfGenerationSequence: string;

    /** LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequenceTokens. */
    public endOfGenerationSequenceTokens: number[];

    /** LLM_Get_End_Of_Generation_Sequence_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Get_End_Of_Generation_Sequence_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_End_Of_Generation_Sequence_Reply instance
     */
    public static create(properties?: ILLM_Get_End_Of_Generation_Sequence_Reply): LLM_Get_End_Of_Generation_Sequence_Reply;

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Reply message. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @param message LLM_Get_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_End_Of_Generation_Sequence_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Reply message, length delimited. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @param message LLM_Get_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_End_Of_Generation_Sequence_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_End_Of_Generation_Sequence_Reply;

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_End_Of_Generation_Sequence_Reply;

    /**
     * Verifies a LLM_Get_End_Of_Generation_Sequence_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_End_Of_Generation_Sequence_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_End_Of_Generation_Sequence_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_End_Of_Generation_Sequence_Reply;

    /**
     * Creates a plain object from a LLM_Get_End_Of_Generation_Sequence_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_End_Of_Generation_Sequence_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_End_Of_Generation_Sequence_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_End_Of_Generation_Sequence_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_End_Of_Generation_Sequence_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Set_Stop_Tokens_Request. */
export interface ILLM_Set_Stop_Tokens_Request {

    /** LLM_Set_Stop_Tokens_Request tokenizedStopTokens */
    tokenizedStopTokens?: (ITokenizedSequence[]|null);
}

/** Represents a LLM_Set_Stop_Tokens_Request. */
export class LLM_Set_Stop_Tokens_Request implements ILLM_Set_Stop_Tokens_Request {

    /**
     * Constructs a new LLM_Set_Stop_Tokens_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Set_Stop_Tokens_Request);

    /** LLM_Set_Stop_Tokens_Request tokenizedStopTokens. */
    public tokenizedStopTokens: ITokenizedSequence[];

    /**
     * Creates a new LLM_Set_Stop_Tokens_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_Stop_Tokens_Request instance
     */
    public static create(properties?: ILLM_Set_Stop_Tokens_Request): LLM_Set_Stop_Tokens_Request;

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Request message. Does not implicitly {@link LLM_Set_Stop_Tokens_Request.verify|verify} messages.
     * @param message LLM_Set_Stop_Tokens_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Set_Stop_Tokens_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Request message, length delimited. Does not implicitly {@link LLM_Set_Stop_Tokens_Request.verify|verify} messages.
     * @param message LLM_Set_Stop_Tokens_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Set_Stop_Tokens_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_Stop_Tokens_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Set_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_Stop_Tokens_Request;

    /**
     * Decodes a LLM_Set_Stop_Tokens_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Set_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_Stop_Tokens_Request;

    /**
     * Verifies a LLM_Set_Stop_Tokens_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_Stop_Tokens_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_Stop_Tokens_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Set_Stop_Tokens_Request;

    /**
     * Creates a plain object from a LLM_Set_Stop_Tokens_Request message. Also converts values to other types if specified.
     * @param message LLM_Set_Stop_Tokens_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Set_Stop_Tokens_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_Stop_Tokens_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Set_Stop_Tokens_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TokenizedSequence. */
export interface ITokenizedSequence {

    /** TokenizedSequence tokens */
    tokens?: (number[]|null);
}

/** Represents a TokenizedSequence. */
export class TokenizedSequence implements ITokenizedSequence {

    /**
     * Constructs a new TokenizedSequence.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITokenizedSequence);

    /** TokenizedSequence tokens. */
    public tokens: number[];

    /**
     * Creates a new TokenizedSequence instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TokenizedSequence instance
     */
    public static create(properties?: ITokenizedSequence): TokenizedSequence;

    /**
     * Encodes the specified TokenizedSequence message. Does not implicitly {@link TokenizedSequence.verify|verify} messages.
     * @param message TokenizedSequence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITokenizedSequence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TokenizedSequence message, length delimited. Does not implicitly {@link TokenizedSequence.verify|verify} messages.
     * @param message TokenizedSequence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITokenizedSequence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TokenizedSequence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TokenizedSequence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TokenizedSequence;

    /**
     * Decodes a TokenizedSequence message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TokenizedSequence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TokenizedSequence;

    /**
     * Verifies a TokenizedSequence message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TokenizedSequence message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TokenizedSequence
     */
    public static fromObject(object: { [k: string]: any }): TokenizedSequence;

    /**
     * Creates a plain object from a TokenizedSequence message. Also converts values to other types if specified.
     * @param message TokenizedSequence
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TokenizedSequence, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TokenizedSequence to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TokenizedSequence
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Set_Stop_Tokens_Reply. */
export interface ILLM_Set_Stop_Tokens_Reply {

    /** LLM_Set_Stop_Tokens_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Set_Stop_Tokens_Reply. */
export class LLM_Set_Stop_Tokens_Reply implements ILLM_Set_Stop_Tokens_Reply {

    /**
     * Constructs a new LLM_Set_Stop_Tokens_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Set_Stop_Tokens_Reply);

    /** LLM_Set_Stop_Tokens_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Set_Stop_Tokens_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_Stop_Tokens_Reply instance
     */
    public static create(properties?: ILLM_Set_Stop_Tokens_Reply): LLM_Set_Stop_Tokens_Reply;

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Reply message. Does not implicitly {@link LLM_Set_Stop_Tokens_Reply.verify|verify} messages.
     * @param message LLM_Set_Stop_Tokens_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Set_Stop_Tokens_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Reply message, length delimited. Does not implicitly {@link LLM_Set_Stop_Tokens_Reply.verify|verify} messages.
     * @param message LLM_Set_Stop_Tokens_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Set_Stop_Tokens_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_Stop_Tokens_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Set_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_Stop_Tokens_Reply;

    /**
     * Decodes a LLM_Set_Stop_Tokens_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Set_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_Stop_Tokens_Reply;

    /**
     * Verifies a LLM_Set_Stop_Tokens_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_Stop_Tokens_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_Stop_Tokens_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Set_Stop_Tokens_Reply;

    /**
     * Creates a plain object from a LLM_Set_Stop_Tokens_Reply message. Also converts values to other types if specified.
     * @param message LLM_Set_Stop_Tokens_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Set_Stop_Tokens_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_Stop_Tokens_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Set_Stop_Tokens_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Stop_Tokens_Request. */
export interface ILLM_Get_Stop_Tokens_Request {
}

/** Represents a LLM_Get_Stop_Tokens_Request. */
export class LLM_Get_Stop_Tokens_Request implements ILLM_Get_Stop_Tokens_Request {

    /**
     * Constructs a new LLM_Get_Stop_Tokens_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Stop_Tokens_Request);

    /**
     * Creates a new LLM_Get_Stop_Tokens_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Stop_Tokens_Request instance
     */
    public static create(properties?: ILLM_Get_Stop_Tokens_Request): LLM_Get_Stop_Tokens_Request;

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Request message. Does not implicitly {@link LLM_Get_Stop_Tokens_Request.verify|verify} messages.
     * @param message LLM_Get_Stop_Tokens_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Stop_Tokens_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Request message, length delimited. Does not implicitly {@link LLM_Get_Stop_Tokens_Request.verify|verify} messages.
     * @param message LLM_Get_Stop_Tokens_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Stop_Tokens_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Stop_Tokens_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Stop_Tokens_Request;

    /**
     * Decodes a LLM_Get_Stop_Tokens_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Stop_Tokens_Request;

    /**
     * Verifies a LLM_Get_Stop_Tokens_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Stop_Tokens_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Stop_Tokens_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Stop_Tokens_Request;

    /**
     * Creates a plain object from a LLM_Get_Stop_Tokens_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Stop_Tokens_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Stop_Tokens_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Stop_Tokens_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Stop_Tokens_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Stop_Tokens_Reply. */
export interface ILLM_Get_Stop_Tokens_Reply {

    /** LLM_Get_Stop_Tokens_Reply stopTokens */
    stopTokens?: (string[]|null);

    /** LLM_Get_Stop_Tokens_Reply tokenizedStopTokens */
    tokenizedStopTokens?: (ITokenizedSequence[]|null);

    /** LLM_Get_Stop_Tokens_Reply status */
    status?: (number|null);
}

/** Represents a LLM_Get_Stop_Tokens_Reply. */
export class LLM_Get_Stop_Tokens_Reply implements ILLM_Get_Stop_Tokens_Reply {

    /**
     * Constructs a new LLM_Get_Stop_Tokens_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Stop_Tokens_Reply);

    /** LLM_Get_Stop_Tokens_Reply stopTokens. */
    public stopTokens: string[];

    /** LLM_Get_Stop_Tokens_Reply tokenizedStopTokens. */
    public tokenizedStopTokens: ITokenizedSequence[];

    /** LLM_Get_Stop_Tokens_Reply status. */
    public status: number;

    /**
     * Creates a new LLM_Get_Stop_Tokens_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Stop_Tokens_Reply instance
     */
    public static create(properties?: ILLM_Get_Stop_Tokens_Reply): LLM_Get_Stop_Tokens_Reply;

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Reply message. Does not implicitly {@link LLM_Get_Stop_Tokens_Reply.verify|verify} messages.
     * @param message LLM_Get_Stop_Tokens_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Stop_Tokens_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Reply message, length delimited. Does not implicitly {@link LLM_Get_Stop_Tokens_Reply.verify|verify} messages.
     * @param message LLM_Get_Stop_Tokens_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Stop_Tokens_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Stop_Tokens_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Stop_Tokens_Reply;

    /**
     * Decodes a LLM_Get_Stop_Tokens_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Stop_Tokens_Reply;

    /**
     * Verifies a LLM_Get_Stop_Tokens_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Stop_Tokens_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Stop_Tokens_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Stop_Tokens_Reply;

    /**
     * Creates a plain object from a LLM_Get_Stop_Tokens_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Stop_Tokens_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Stop_Tokens_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Stop_Tokens_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Stop_Tokens_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Context_Usage_Size_Request. */
export interface ILLM_Get_Context_Usage_Size_Request {
}

/** Represents a LLM_Get_Context_Usage_Size_Request. */
export class LLM_Get_Context_Usage_Size_Request implements ILLM_Get_Context_Usage_Size_Request {

    /**
     * Constructs a new LLM_Get_Context_Usage_Size_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Context_Usage_Size_Request);

    /**
     * Creates a new LLM_Get_Context_Usage_Size_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Context_Usage_Size_Request instance
     */
    public static create(properties?: ILLM_Get_Context_Usage_Size_Request): LLM_Get_Context_Usage_Size_Request;

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Request message. Does not implicitly {@link LLM_Get_Context_Usage_Size_Request.verify|verify} messages.
     * @param message LLM_Get_Context_Usage_Size_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Context_Usage_Size_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Request message, length delimited. Does not implicitly {@link LLM_Get_Context_Usage_Size_Request.verify|verify} messages.
     * @param message LLM_Get_Context_Usage_Size_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Context_Usage_Size_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Context_Usage_Size_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Context_Usage_Size_Request;

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Context_Usage_Size_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Context_Usage_Size_Request;

    /**
     * Verifies a LLM_Get_Context_Usage_Size_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Context_Usage_Size_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Context_Usage_Size_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Context_Usage_Size_Request;

    /**
     * Creates a plain object from a LLM_Get_Context_Usage_Size_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Context_Usage_Size_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Context_Usage_Size_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Context_Usage_Size_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Context_Usage_Size_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Context_Usage_Size_Reply. */
export interface ILLM_Get_Context_Usage_Size_Reply {

    /** LLM_Get_Context_Usage_Size_Reply status */
    status?: (number|null);

    /** LLM_Get_Context_Usage_Size_Reply contextUsage */
    contextUsage?: (number|null);
}

/** Represents a LLM_Get_Context_Usage_Size_Reply. */
export class LLM_Get_Context_Usage_Size_Reply implements ILLM_Get_Context_Usage_Size_Reply {

    /**
     * Constructs a new LLM_Get_Context_Usage_Size_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Context_Usage_Size_Reply);

    /** LLM_Get_Context_Usage_Size_Reply status. */
    public status: number;

    /** LLM_Get_Context_Usage_Size_Reply contextUsage. */
    public contextUsage: number;

    /**
     * Creates a new LLM_Get_Context_Usage_Size_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Context_Usage_Size_Reply instance
     */
    public static create(properties?: ILLM_Get_Context_Usage_Size_Reply): LLM_Get_Context_Usage_Size_Reply;

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Reply message. Does not implicitly {@link LLM_Get_Context_Usage_Size_Reply.verify|verify} messages.
     * @param message LLM_Get_Context_Usage_Size_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Context_Usage_Size_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Reply message, length delimited. Does not implicitly {@link LLM_Get_Context_Usage_Size_Reply.verify|verify} messages.
     * @param message LLM_Get_Context_Usage_Size_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Context_Usage_Size_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Context_Usage_Size_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Context_Usage_Size_Reply;

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Context_Usage_Size_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Context_Usage_Size_Reply;

    /**
     * Verifies a LLM_Get_Context_Usage_Size_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Context_Usage_Size_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Context_Usage_Size_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Context_Usage_Size_Reply;

    /**
     * Creates a plain object from a LLM_Get_Context_Usage_Size_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Context_Usage_Size_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Context_Usage_Size_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Context_Usage_Size_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Context_Usage_Size_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Max_Context_Capacity_Request. */
export interface ILLM_Get_Max_Context_Capacity_Request {
}

/** Represents a LLM_Get_Max_Context_Capacity_Request. */
export class LLM_Get_Max_Context_Capacity_Request implements ILLM_Get_Max_Context_Capacity_Request {

    /**
     * Constructs a new LLM_Get_Max_Context_Capacity_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Max_Context_Capacity_Request);

    /**
     * Creates a new LLM_Get_Max_Context_Capacity_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Max_Context_Capacity_Request instance
     */
    public static create(properties?: ILLM_Get_Max_Context_Capacity_Request): LLM_Get_Max_Context_Capacity_Request;

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Request message. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Request.verify|verify} messages.
     * @param message LLM_Get_Max_Context_Capacity_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Max_Context_Capacity_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Request message, length delimited. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Request.verify|verify} messages.
     * @param message LLM_Get_Max_Context_Capacity_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Max_Context_Capacity_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Max_Context_Capacity_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Max_Context_Capacity_Request;

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Max_Context_Capacity_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Max_Context_Capacity_Request;

    /**
     * Verifies a LLM_Get_Max_Context_Capacity_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Max_Context_Capacity_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Max_Context_Capacity_Request
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Max_Context_Capacity_Request;

    /**
     * Creates a plain object from a LLM_Get_Max_Context_Capacity_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Max_Context_Capacity_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Max_Context_Capacity_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Max_Context_Capacity_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Max_Context_Capacity_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LLM_Get_Max_Context_Capacity_Reply. */
export interface ILLM_Get_Max_Context_Capacity_Reply {

    /** LLM_Get_Max_Context_Capacity_Reply status */
    status?: (number|null);

    /** LLM_Get_Max_Context_Capacity_Reply maxContextCapacity */
    maxContextCapacity?: (number|null);
}

/** Represents a LLM_Get_Max_Context_Capacity_Reply. */
export class LLM_Get_Max_Context_Capacity_Reply implements ILLM_Get_Max_Context_Capacity_Reply {

    /**
     * Constructs a new LLM_Get_Max_Context_Capacity_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILLM_Get_Max_Context_Capacity_Reply);

    /** LLM_Get_Max_Context_Capacity_Reply status. */
    public status: number;

    /** LLM_Get_Max_Context_Capacity_Reply maxContextCapacity. */
    public maxContextCapacity: number;

    /**
     * Creates a new LLM_Get_Max_Context_Capacity_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Max_Context_Capacity_Reply instance
     */
    public static create(properties?: ILLM_Get_Max_Context_Capacity_Reply): LLM_Get_Max_Context_Capacity_Reply;

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Reply message. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Reply.verify|verify} messages.
     * @param message LLM_Get_Max_Context_Capacity_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILLM_Get_Max_Context_Capacity_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Reply message, length delimited. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Reply.verify|verify} messages.
     * @param message LLM_Get_Max_Context_Capacity_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILLM_Get_Max_Context_Capacity_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LLM_Get_Max_Context_Capacity_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Max_Context_Capacity_Reply;

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LLM_Get_Max_Context_Capacity_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Max_Context_Capacity_Reply;

    /**
     * Verifies a LLM_Get_Max_Context_Capacity_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Max_Context_Capacity_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Max_Context_Capacity_Reply
     */
    public static fromObject(object: { [k: string]: any }): LLM_Get_Max_Context_Capacity_Reply;

    /**
     * Creates a plain object from a LLM_Get_Max_Context_Capacity_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Max_Context_Capacity_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LLM_Get_Max_Context_Capacity_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Max_Context_Capacity_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LLM_Get_Max_Context_Capacity_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VLM_Create_Request. */
export interface IVLM_Create_Request {

    /** VLM_Create_Request groupId */
    groupId?: (string|null);

    /** VLM_Create_Request hefPath */
    hefPath?: (string|null);

    /** VLM_Create_Request chunksToTransfer */
    chunksToTransfer?: (IHefChunkInfo[]|null);

    /** VLM_Create_Request tokenizerOnHost */
    tokenizerOnHost?: (boolean|null);

    /** VLM_Create_Request totalHefSize */
    totalHefSize?: (number|Long|null);
}

/** Represents a VLM_Create_Request. */
export class VLM_Create_Request implements IVLM_Create_Request {

    /**
     * Constructs a new VLM_Create_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVLM_Create_Request);

    /** VLM_Create_Request groupId. */
    public groupId: string;

    /** VLM_Create_Request hefPath. */
    public hefPath: string;

    /** VLM_Create_Request chunksToTransfer. */
    public chunksToTransfer: IHefChunkInfo[];

    /** VLM_Create_Request tokenizerOnHost. */
    public tokenizerOnHost: boolean;

    /** VLM_Create_Request totalHefSize. */
    public totalHefSize: (number|Long);

    /**
     * Creates a new VLM_Create_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VLM_Create_Request instance
     */
    public static create(properties?: IVLM_Create_Request): VLM_Create_Request;

    /**
     * Encodes the specified VLM_Create_Request message. Does not implicitly {@link VLM_Create_Request.verify|verify} messages.
     * @param message VLM_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVLM_Create_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VLM_Create_Request message, length delimited. Does not implicitly {@link VLM_Create_Request.verify|verify} messages.
     * @param message VLM_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVLM_Create_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VLM_Create_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VLM_Create_Request;

    /**
     * Decodes a VLM_Create_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VLM_Create_Request;

    /**
     * Verifies a VLM_Create_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VLM_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VLM_Create_Request
     */
    public static fromObject(object: { [k: string]: any }): VLM_Create_Request;

    /**
     * Creates a plain object from a VLM_Create_Request message. Also converts values to other types if specified.
     * @param message VLM_Create_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VLM_Create_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VLM_Create_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VLM_Create_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FrameFormat. */
export interface IFrameFormat {

    /** FrameFormat formatOrder */
    formatOrder?: (number|null);

    /** FrameFormat formatType */
    formatType?: (number|null);
}

/** Represents a FrameFormat. */
export class FrameFormat implements IFrameFormat {

    /**
     * Constructs a new FrameFormat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrameFormat);

    /** FrameFormat formatOrder. */
    public formatOrder: number;

    /** FrameFormat formatType. */
    public formatType: number;

    /**
     * Creates a new FrameFormat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameFormat instance
     */
    public static create(properties?: IFrameFormat): FrameFormat;

    /**
     * Encodes the specified FrameFormat message. Does not implicitly {@link FrameFormat.verify|verify} messages.
     * @param message FrameFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFrameFormat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameFormat message, length delimited. Does not implicitly {@link FrameFormat.verify|verify} messages.
     * @param message FrameFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFrameFormat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameFormat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FrameFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameFormat;

    /**
     * Decodes a FrameFormat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FrameFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameFormat;

    /**
     * Verifies a FrameFormat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FrameFormat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameFormat
     */
    public static fromObject(object: { [k: string]: any }): FrameFormat;

    /**
     * Creates a plain object from a FrameFormat message. Also converts values to other types if specified.
     * @param message FrameFormat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FrameFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FrameFormat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FrameFormat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FrameShape. */
export interface IFrameShape {

    /** FrameShape height */
    height?: (number|null);

    /** FrameShape width */
    width?: (number|null);

    /** FrameShape features */
    features?: (number|null);
}

/** Represents a FrameShape. */
export class FrameShape implements IFrameShape {

    /**
     * Constructs a new FrameShape.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrameShape);

    /** FrameShape height. */
    public height: number;

    /** FrameShape width. */
    public width: number;

    /** FrameShape features. */
    public features: number;

    /**
     * Creates a new FrameShape instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameShape instance
     */
    public static create(properties?: IFrameShape): FrameShape;

    /**
     * Encodes the specified FrameShape message. Does not implicitly {@link FrameShape.verify|verify} messages.
     * @param message FrameShape message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFrameShape, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameShape message, length delimited. Does not implicitly {@link FrameShape.verify|verify} messages.
     * @param message FrameShape message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFrameShape, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameShape message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FrameShape
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameShape;

    /**
     * Decodes a FrameShape message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FrameShape
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameShape;

    /**
     * Verifies a FrameShape message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FrameShape message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameShape
     */
    public static fromObject(object: { [k: string]: any }): FrameShape;

    /**
     * Creates a plain object from a FrameShape message. Also converts values to other types if specified.
     * @param message FrameShape
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FrameShape, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FrameShape to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FrameShape
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VLM_Create_Reply. */
export interface IVLM_Create_Reply {

    /** VLM_Create_Reply status */
    status?: (number|null);

    /** VLM_Create_Reply frameFormat */
    frameFormat?: (IFrameFormat|null);

    /** VLM_Create_Reply frameShape */
    frameShape?: (IFrameShape|null);

    /** VLM_Create_Reply promptTemplate */
    promptTemplate?: (string|null);

    /** VLM_Create_Reply embeddingFeatures */
    embeddingFeatures?: (number|null);

    /** VLM_Create_Reply imagePadTokenId */
    imagePadTokenId?: (number|null);

    /** VLM_Create_Reply videoPadTokenId */
    videoPadTokenId?: (number|null);

    /** VLM_Create_Reply embeddingsPerFrame */
    embeddingsPerFrame?: (number|null);
}

/** Represents a VLM_Create_Reply. */
export class VLM_Create_Reply implements IVLM_Create_Reply {

    /**
     * Constructs a new VLM_Create_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVLM_Create_Reply);

    /** VLM_Create_Reply status. */
    public status: number;

    /** VLM_Create_Reply frameFormat. */
    public frameFormat?: (IFrameFormat|null);

    /** VLM_Create_Reply frameShape. */
    public frameShape?: (IFrameShape|null);

    /** VLM_Create_Reply promptTemplate. */
    public promptTemplate: string;

    /** VLM_Create_Reply embeddingFeatures. */
    public embeddingFeatures: number;

    /** VLM_Create_Reply imagePadTokenId. */
    public imagePadTokenId: number;

    /** VLM_Create_Reply videoPadTokenId. */
    public videoPadTokenId: number;

    /** VLM_Create_Reply embeddingsPerFrame. */
    public embeddingsPerFrame: number;

    /**
     * Creates a new VLM_Create_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VLM_Create_Reply instance
     */
    public static create(properties?: IVLM_Create_Reply): VLM_Create_Reply;

    /**
     * Encodes the specified VLM_Create_Reply message. Does not implicitly {@link VLM_Create_Reply.verify|verify} messages.
     * @param message VLM_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVLM_Create_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VLM_Create_Reply message, length delimited. Does not implicitly {@link VLM_Create_Reply.verify|verify} messages.
     * @param message VLM_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVLM_Create_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VLM_Create_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VLM_Create_Reply;

    /**
     * Decodes a VLM_Create_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VLM_Create_Reply;

    /**
     * Verifies a VLM_Create_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VLM_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VLM_Create_Reply
     */
    public static fromObject(object: { [k: string]: any }): VLM_Create_Reply;

    /**
     * Creates a plain object from a VLM_Create_Reply message. Also converts values to other types if specified.
     * @param message VLM_Create_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VLM_Create_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VLM_Create_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VLM_Create_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VLM_Generator_Generate_Request. */
export interface IVLM_Generator_Generate_Request {

    /** VLM_Generator_Generate_Request numberOfFrames */
    numberOfFrames?: (number|null);

    /** VLM_Generator_Generate_Request videoFramesCountPerVideo */
    videoFramesCountPerVideo?: (number[]|null);
}

/** Represents a VLM_Generator_Generate_Request. */
export class VLM_Generator_Generate_Request implements IVLM_Generator_Generate_Request {

    /**
     * Constructs a new VLM_Generator_Generate_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVLM_Generator_Generate_Request);

    /** VLM_Generator_Generate_Request numberOfFrames. */
    public numberOfFrames: number;

    /** VLM_Generator_Generate_Request videoFramesCountPerVideo. */
    public videoFramesCountPerVideo: number[];

    /**
     * Creates a new VLM_Generator_Generate_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VLM_Generator_Generate_Request instance
     */
    public static create(properties?: IVLM_Generator_Generate_Request): VLM_Generator_Generate_Request;

    /**
     * Encodes the specified VLM_Generator_Generate_Request message. Does not implicitly {@link VLM_Generator_Generate_Request.verify|verify} messages.
     * @param message VLM_Generator_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVLM_Generator_Generate_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VLM_Generator_Generate_Request message, length delimited. Does not implicitly {@link VLM_Generator_Generate_Request.verify|verify} messages.
     * @param message VLM_Generator_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVLM_Generator_Generate_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VLM_Generator_Generate_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VLM_Generator_Generate_Request;

    /**
     * Decodes a VLM_Generator_Generate_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VLM_Generator_Generate_Request;

    /**
     * Verifies a VLM_Generator_Generate_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VLM_Generator_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VLM_Generator_Generate_Request
     */
    public static fromObject(object: { [k: string]: any }): VLM_Generator_Generate_Request;

    /**
     * Creates a plain object from a VLM_Generator_Generate_Request message. Also converts values to other types if specified.
     * @param message VLM_Generator_Generate_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VLM_Generator_Generate_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VLM_Generator_Generate_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VLM_Generator_Generate_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VLM_Generator_Generate_Reply. */
export interface IVLM_Generator_Generate_Reply {

    /** VLM_Generator_Generate_Reply status */
    status?: (number|null);
}

/** Represents a VLM_Generator_Generate_Reply. */
export class VLM_Generator_Generate_Reply implements IVLM_Generator_Generate_Reply {

    /**
     * Constructs a new VLM_Generator_Generate_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVLM_Generator_Generate_Reply);

    /** VLM_Generator_Generate_Reply status. */
    public status: number;

    /**
     * Creates a new VLM_Generator_Generate_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VLM_Generator_Generate_Reply instance
     */
    public static create(properties?: IVLM_Generator_Generate_Reply): VLM_Generator_Generate_Reply;

    /**
     * Encodes the specified VLM_Generator_Generate_Reply message. Does not implicitly {@link VLM_Generator_Generate_Reply.verify|verify} messages.
     * @param message VLM_Generator_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVLM_Generator_Generate_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VLM_Generator_Generate_Reply message, length delimited. Does not implicitly {@link VLM_Generator_Generate_Reply.verify|verify} messages.
     * @param message VLM_Generator_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVLM_Generator_Generate_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VLM_Generator_Generate_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VLM_Generator_Generate_Reply;

    /**
     * Decodes a VLM_Generator_Generate_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VLM_Generator_Generate_Reply;

    /**
     * Verifies a VLM_Generator_Generate_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VLM_Generator_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VLM_Generator_Generate_Reply
     */
    public static fromObject(object: { [k: string]: any }): VLM_Generator_Generate_Reply;

    /**
     * Creates a plain object from a VLM_Generator_Generate_Reply message. Also converts values to other types if specified.
     * @param message VLM_Generator_Generate_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VLM_Generator_Generate_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VLM_Generator_Generate_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VLM_Generator_Generate_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GenAI_Check_Hef_Exists_Request. */
export interface IGenAI_Check_Hef_Exists_Request {

    /** GenAI_Check_Hef_Exists_Request hefPath */
    hefPath?: (string|null);

    /** GenAI_Check_Hef_Exists_Request hash */
    hash?: (string|null);
}

/** Represents a GenAI_Check_Hef_Exists_Request. */
export class GenAI_Check_Hef_Exists_Request implements IGenAI_Check_Hef_Exists_Request {

    /**
     * Constructs a new GenAI_Check_Hef_Exists_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGenAI_Check_Hef_Exists_Request);

    /** GenAI_Check_Hef_Exists_Request hefPath. */
    public hefPath: string;

    /** GenAI_Check_Hef_Exists_Request hash. */
    public hash: string;

    /**
     * Creates a new GenAI_Check_Hef_Exists_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenAI_Check_Hef_Exists_Request instance
     */
    public static create(properties?: IGenAI_Check_Hef_Exists_Request): GenAI_Check_Hef_Exists_Request;

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Request message. Does not implicitly {@link GenAI_Check_Hef_Exists_Request.verify|verify} messages.
     * @param message GenAI_Check_Hef_Exists_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGenAI_Check_Hef_Exists_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Request message, length delimited. Does not implicitly {@link GenAI_Check_Hef_Exists_Request.verify|verify} messages.
     * @param message GenAI_Check_Hef_Exists_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGenAI_Check_Hef_Exists_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenAI_Check_Hef_Exists_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GenAI_Check_Hef_Exists_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenAI_Check_Hef_Exists_Request;

    /**
     * Decodes a GenAI_Check_Hef_Exists_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GenAI_Check_Hef_Exists_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenAI_Check_Hef_Exists_Request;

    /**
     * Verifies a GenAI_Check_Hef_Exists_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenAI_Check_Hef_Exists_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenAI_Check_Hef_Exists_Request
     */
    public static fromObject(object: { [k: string]: any }): GenAI_Check_Hef_Exists_Request;

    /**
     * Creates a plain object from a GenAI_Check_Hef_Exists_Request message. Also converts values to other types if specified.
     * @param message GenAI_Check_Hef_Exists_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GenAI_Check_Hef_Exists_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenAI_Check_Hef_Exists_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GenAI_Check_Hef_Exists_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GenAI_Check_Hef_Exists_Reply. */
export interface IGenAI_Check_Hef_Exists_Reply {

    /** GenAI_Check_Hef_Exists_Reply status */
    status?: (number|null);

    /** GenAI_Check_Hef_Exists_Reply hefExists */
    hefExists?: (boolean|null);
}

/** Represents a GenAI_Check_Hef_Exists_Reply. */
export class GenAI_Check_Hef_Exists_Reply implements IGenAI_Check_Hef_Exists_Reply {

    /**
     * Constructs a new GenAI_Check_Hef_Exists_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGenAI_Check_Hef_Exists_Reply);

    /** GenAI_Check_Hef_Exists_Reply status. */
    public status: number;

    /** GenAI_Check_Hef_Exists_Reply hefExists. */
    public hefExists: boolean;

    /**
     * Creates a new GenAI_Check_Hef_Exists_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenAI_Check_Hef_Exists_Reply instance
     */
    public static create(properties?: IGenAI_Check_Hef_Exists_Reply): GenAI_Check_Hef_Exists_Reply;

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Reply message. Does not implicitly {@link GenAI_Check_Hef_Exists_Reply.verify|verify} messages.
     * @param message GenAI_Check_Hef_Exists_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGenAI_Check_Hef_Exists_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Reply message, length delimited. Does not implicitly {@link GenAI_Check_Hef_Exists_Reply.verify|verify} messages.
     * @param message GenAI_Check_Hef_Exists_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGenAI_Check_Hef_Exists_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenAI_Check_Hef_Exists_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GenAI_Check_Hef_Exists_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenAI_Check_Hef_Exists_Reply;

    /**
     * Decodes a GenAI_Check_Hef_Exists_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GenAI_Check_Hef_Exists_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenAI_Check_Hef_Exists_Reply;

    /**
     * Verifies a GenAI_Check_Hef_Exists_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenAI_Check_Hef_Exists_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenAI_Check_Hef_Exists_Reply
     */
    public static fromObject(object: { [k: string]: any }): GenAI_Check_Hef_Exists_Reply;

    /**
     * Creates a plain object from a GenAI_Check_Hef_Exists_Reply message. Also converts values to other types if specified.
     * @param message GenAI_Check_Hef_Exists_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GenAI_Check_Hef_Exists_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenAI_Check_Hef_Exists_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GenAI_Check_Hef_Exists_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Speech2Text_Create_Request. */
export interface ISpeech2Text_Create_Request {

    /** Speech2Text_Create_Request groupId */
    groupId?: (string|null);
}

/** Represents a Speech2Text_Create_Request. */
export class Speech2Text_Create_Request implements ISpeech2Text_Create_Request {

    /**
     * Constructs a new Speech2Text_Create_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeech2Text_Create_Request);

    /** Speech2Text_Create_Request groupId. */
    public groupId: string;

    /**
     * Creates a new Speech2Text_Create_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Create_Request instance
     */
    public static create(properties?: ISpeech2Text_Create_Request): Speech2Text_Create_Request;

    /**
     * Encodes the specified Speech2Text_Create_Request message. Does not implicitly {@link Speech2Text_Create_Request.verify|verify} messages.
     * @param message Speech2Text_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeech2Text_Create_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Create_Request message, length delimited. Does not implicitly {@link Speech2Text_Create_Request.verify|verify} messages.
     * @param message Speech2Text_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeech2Text_Create_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Create_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Speech2Text_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Create_Request;

    /**
     * Decodes a Speech2Text_Create_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Speech2Text_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Create_Request;

    /**
     * Verifies a Speech2Text_Create_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Create_Request
     */
    public static fromObject(object: { [k: string]: any }): Speech2Text_Create_Request;

    /**
     * Creates a plain object from a Speech2Text_Create_Request message. Also converts values to other types if specified.
     * @param message Speech2Text_Create_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Speech2Text_Create_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Create_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Speech2Text_Create_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Speech2Text_Create_Reply. */
export interface ISpeech2Text_Create_Reply {

    /** Speech2Text_Create_Reply status */
    status?: (number|null);

    /** Speech2Text_Create_Reply generatorParams */
    generatorParams?: (ISpeech2TextGeneratorParams|null);
}

/** Represents a Speech2Text_Create_Reply. */
export class Speech2Text_Create_Reply implements ISpeech2Text_Create_Reply {

    /**
     * Constructs a new Speech2Text_Create_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeech2Text_Create_Reply);

    /** Speech2Text_Create_Reply status. */
    public status: number;

    /** Speech2Text_Create_Reply generatorParams. */
    public generatorParams?: (ISpeech2TextGeneratorParams|null);

    /**
     * Creates a new Speech2Text_Create_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Create_Reply instance
     */
    public static create(properties?: ISpeech2Text_Create_Reply): Speech2Text_Create_Reply;

    /**
     * Encodes the specified Speech2Text_Create_Reply message. Does not implicitly {@link Speech2Text_Create_Reply.verify|verify} messages.
     * @param message Speech2Text_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeech2Text_Create_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Create_Reply message, length delimited. Does not implicitly {@link Speech2Text_Create_Reply.verify|verify} messages.
     * @param message Speech2Text_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeech2Text_Create_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Create_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Speech2Text_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Create_Reply;

    /**
     * Decodes a Speech2Text_Create_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Speech2Text_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Create_Reply;

    /**
     * Verifies a Speech2Text_Create_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Create_Reply
     */
    public static fromObject(object: { [k: string]: any }): Speech2Text_Create_Reply;

    /**
     * Creates a plain object from a Speech2Text_Create_Reply message. Also converts values to other types if specified.
     * @param message Speech2Text_Create_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Speech2Text_Create_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Create_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Speech2Text_Create_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Speech2TextGeneratorParams. */
export interface ISpeech2TextGeneratorParams {

    /** Speech2TextGeneratorParams taskType */
    taskType?: (number|null);

    /** Speech2TextGeneratorParams language */
    language?: (string|null);

    /** Speech2TextGeneratorParams repetitionPenalty */
    repetitionPenalty?: (number|null);
}

/** Represents a Speech2TextGeneratorParams. */
export class Speech2TextGeneratorParams implements ISpeech2TextGeneratorParams {

    /**
     * Constructs a new Speech2TextGeneratorParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeech2TextGeneratorParams);

    /** Speech2TextGeneratorParams taskType. */
    public taskType: number;

    /** Speech2TextGeneratorParams language. */
    public language: string;

    /** Speech2TextGeneratorParams repetitionPenalty. */
    public repetitionPenalty: number;

    /**
     * Creates a new Speech2TextGeneratorParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2TextGeneratorParams instance
     */
    public static create(properties?: ISpeech2TextGeneratorParams): Speech2TextGeneratorParams;

    /**
     * Encodes the specified Speech2TextGeneratorParams message. Does not implicitly {@link Speech2TextGeneratorParams.verify|verify} messages.
     * @param message Speech2TextGeneratorParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeech2TextGeneratorParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2TextGeneratorParams message, length delimited. Does not implicitly {@link Speech2TextGeneratorParams.verify|verify} messages.
     * @param message Speech2TextGeneratorParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeech2TextGeneratorParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2TextGeneratorParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Speech2TextGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2TextGeneratorParams;

    /**
     * Decodes a Speech2TextGeneratorParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Speech2TextGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2TextGeneratorParams;

    /**
     * Verifies a Speech2TextGeneratorParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2TextGeneratorParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2TextGeneratorParams
     */
    public static fromObject(object: { [k: string]: any }): Speech2TextGeneratorParams;

    /**
     * Creates a plain object from a Speech2TextGeneratorParams message. Also converts values to other types if specified.
     * @param message Speech2TextGeneratorParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Speech2TextGeneratorParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2TextGeneratorParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Speech2TextGeneratorParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Speech2Text_Generate_Request. */
export interface ISpeech2Text_Generate_Request {

    /** Speech2Text_Generate_Request generatorParams */
    generatorParams?: (ISpeech2TextGeneratorParams|null);
}

/** Represents a Speech2Text_Generate_Request. */
export class Speech2Text_Generate_Request implements ISpeech2Text_Generate_Request {

    /**
     * Constructs a new Speech2Text_Generate_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeech2Text_Generate_Request);

    /** Speech2Text_Generate_Request generatorParams. */
    public generatorParams?: (ISpeech2TextGeneratorParams|null);

    /**
     * Creates a new Speech2Text_Generate_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Generate_Request instance
     */
    public static create(properties?: ISpeech2Text_Generate_Request): Speech2Text_Generate_Request;

    /**
     * Encodes the specified Speech2Text_Generate_Request message. Does not implicitly {@link Speech2Text_Generate_Request.verify|verify} messages.
     * @param message Speech2Text_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeech2Text_Generate_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Generate_Request message, length delimited. Does not implicitly {@link Speech2Text_Generate_Request.verify|verify} messages.
     * @param message Speech2Text_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeech2Text_Generate_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Generate_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Speech2Text_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Generate_Request;

    /**
     * Decodes a Speech2Text_Generate_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Speech2Text_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Generate_Request;

    /**
     * Verifies a Speech2Text_Generate_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Generate_Request
     */
    public static fromObject(object: { [k: string]: any }): Speech2Text_Generate_Request;

    /**
     * Creates a plain object from a Speech2Text_Generate_Request message. Also converts values to other types if specified.
     * @param message Speech2Text_Generate_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Speech2Text_Generate_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Generate_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Speech2Text_Generate_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoSpeech2TextSegmentInfo. */
export interface IProtoSpeech2TextSegmentInfo {

    /** ProtoSpeech2TextSegmentInfo startSec */
    startSec?: (number|null);

    /** ProtoSpeech2TextSegmentInfo endSec */
    endSec?: (number|null);

    /** ProtoSpeech2TextSegmentInfo text */
    text?: (string|null);
}

/** Represents a ProtoSpeech2TextSegmentInfo. */
export class ProtoSpeech2TextSegmentInfo implements IProtoSpeech2TextSegmentInfo {

    /**
     * Constructs a new ProtoSpeech2TextSegmentInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoSpeech2TextSegmentInfo);

    /** ProtoSpeech2TextSegmentInfo startSec. */
    public startSec: number;

    /** ProtoSpeech2TextSegmentInfo endSec. */
    public endSec: number;

    /** ProtoSpeech2TextSegmentInfo text. */
    public text: string;

    /**
     * Creates a new ProtoSpeech2TextSegmentInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoSpeech2TextSegmentInfo instance
     */
    public static create(properties?: IProtoSpeech2TextSegmentInfo): ProtoSpeech2TextSegmentInfo;

    /**
     * Encodes the specified ProtoSpeech2TextSegmentInfo message. Does not implicitly {@link ProtoSpeech2TextSegmentInfo.verify|verify} messages.
     * @param message ProtoSpeech2TextSegmentInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoSpeech2TextSegmentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoSpeech2TextSegmentInfo message, length delimited. Does not implicitly {@link ProtoSpeech2TextSegmentInfo.verify|verify} messages.
     * @param message ProtoSpeech2TextSegmentInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoSpeech2TextSegmentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoSpeech2TextSegmentInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoSpeech2TextSegmentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoSpeech2TextSegmentInfo;

    /**
     * Decodes a ProtoSpeech2TextSegmentInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoSpeech2TextSegmentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoSpeech2TextSegmentInfo;

    /**
     * Verifies a ProtoSpeech2TextSegmentInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoSpeech2TextSegmentInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoSpeech2TextSegmentInfo
     */
    public static fromObject(object: { [k: string]: any }): ProtoSpeech2TextSegmentInfo;

    /**
     * Creates a plain object from a ProtoSpeech2TextSegmentInfo message. Also converts values to other types if specified.
     * @param message ProtoSpeech2TextSegmentInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoSpeech2TextSegmentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoSpeech2TextSegmentInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoSpeech2TextSegmentInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Speech2Text_Generate_Reply. */
export interface ISpeech2Text_Generate_Reply {

    /** Speech2Text_Generate_Reply status */
    status?: (number|null);

    /** Speech2Text_Generate_Reply segmentsInfos */
    segmentsInfos?: (IProtoSpeech2TextSegmentInfo[]|null);
}

/** Represents a Speech2Text_Generate_Reply. */
export class Speech2Text_Generate_Reply implements ISpeech2Text_Generate_Reply {

    /**
     * Constructs a new Speech2Text_Generate_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeech2Text_Generate_Reply);

    /** Speech2Text_Generate_Reply status. */
    public status: number;

    /** Speech2Text_Generate_Reply segmentsInfos. */
    public segmentsInfos: IProtoSpeech2TextSegmentInfo[];

    /**
     * Creates a new Speech2Text_Generate_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Generate_Reply instance
     */
    public static create(properties?: ISpeech2Text_Generate_Reply): Speech2Text_Generate_Reply;

    /**
     * Encodes the specified Speech2Text_Generate_Reply message. Does not implicitly {@link Speech2Text_Generate_Reply.verify|verify} messages.
     * @param message Speech2Text_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeech2Text_Generate_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Generate_Reply message, length delimited. Does not implicitly {@link Speech2Text_Generate_Reply.verify|verify} messages.
     * @param message Speech2Text_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeech2Text_Generate_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Generate_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Speech2Text_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Generate_Reply;

    /**
     * Decodes a Speech2Text_Generate_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Speech2Text_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Generate_Reply;

    /**
     * Verifies a Speech2Text_Generate_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Generate_Reply
     */
    public static fromObject(object: { [k: string]: any }): Speech2Text_Generate_Reply;

    /**
     * Creates a plain object from a Speech2Text_Generate_Reply message. Also converts values to other types if specified.
     * @param message Speech2Text_Generate_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Speech2Text_Generate_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Generate_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Speech2Text_Generate_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Speech2Text_Release_Request. */
export interface ISpeech2Text_Release_Request {
}

/** Represents a Speech2Text_Release_Request. */
export class Speech2Text_Release_Request implements ISpeech2Text_Release_Request {

    /**
     * Constructs a new Speech2Text_Release_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeech2Text_Release_Request);

    /**
     * Creates a new Speech2Text_Release_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Release_Request instance
     */
    public static create(properties?: ISpeech2Text_Release_Request): Speech2Text_Release_Request;

    /**
     * Encodes the specified Speech2Text_Release_Request message. Does not implicitly {@link Speech2Text_Release_Request.verify|verify} messages.
     * @param message Speech2Text_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeech2Text_Release_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Release_Request message, length delimited. Does not implicitly {@link Speech2Text_Release_Request.verify|verify} messages.
     * @param message Speech2Text_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeech2Text_Release_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Release_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Speech2Text_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Release_Request;

    /**
     * Decodes a Speech2Text_Release_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Speech2Text_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Release_Request;

    /**
     * Verifies a Speech2Text_Release_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Release_Request
     */
    public static fromObject(object: { [k: string]: any }): Speech2Text_Release_Request;

    /**
     * Creates a plain object from a Speech2Text_Release_Request message. Also converts values to other types if specified.
     * @param message Speech2Text_Release_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Speech2Text_Release_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Release_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Speech2Text_Release_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Speech2Text_Release_Reply. */
export interface ISpeech2Text_Release_Reply {

    /** Speech2Text_Release_Reply status */
    status?: (number|null);
}

/** Represents a Speech2Text_Release_Reply. */
export class Speech2Text_Release_Reply implements ISpeech2Text_Release_Reply {

    /**
     * Constructs a new Speech2Text_Release_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeech2Text_Release_Reply);

    /** Speech2Text_Release_Reply status. */
    public status: number;

    /**
     * Creates a new Speech2Text_Release_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Release_Reply instance
     */
    public static create(properties?: ISpeech2Text_Release_Reply): Speech2Text_Release_Reply;

    /**
     * Encodes the specified Speech2Text_Release_Reply message. Does not implicitly {@link Speech2Text_Release_Reply.verify|verify} messages.
     * @param message Speech2Text_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeech2Text_Release_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Release_Reply message, length delimited. Does not implicitly {@link Speech2Text_Release_Reply.verify|verify} messages.
     * @param message Speech2Text_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeech2Text_Release_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Release_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Speech2Text_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Release_Reply;

    /**
     * Decodes a Speech2Text_Release_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Speech2Text_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Release_Reply;

    /**
     * Verifies a Speech2Text_Release_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Release_Reply
     */
    public static fromObject(object: { [k: string]: any }): Speech2Text_Release_Reply;

    /**
     * Creates a plain object from a Speech2Text_Release_Reply message. Also converts values to other types if specified.
     * @param message Speech2Text_Release_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Speech2Text_Release_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Release_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Speech2Text_Release_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Speech2Text_Tokenize_Request. */
export interface ISpeech2Text_Tokenize_Request {

    /** Speech2Text_Tokenize_Request text */
    text?: (string|null);
}

/** Represents a Speech2Text_Tokenize_Request. */
export class Speech2Text_Tokenize_Request implements ISpeech2Text_Tokenize_Request {

    /**
     * Constructs a new Speech2Text_Tokenize_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeech2Text_Tokenize_Request);

    /** Speech2Text_Tokenize_Request text. */
    public text: string;

    /**
     * Creates a new Speech2Text_Tokenize_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Tokenize_Request instance
     */
    public static create(properties?: ISpeech2Text_Tokenize_Request): Speech2Text_Tokenize_Request;

    /**
     * Encodes the specified Speech2Text_Tokenize_Request message. Does not implicitly {@link Speech2Text_Tokenize_Request.verify|verify} messages.
     * @param message Speech2Text_Tokenize_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeech2Text_Tokenize_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Tokenize_Request message, length delimited. Does not implicitly {@link Speech2Text_Tokenize_Request.verify|verify} messages.
     * @param message Speech2Text_Tokenize_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeech2Text_Tokenize_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Tokenize_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Speech2Text_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Tokenize_Request;

    /**
     * Decodes a Speech2Text_Tokenize_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Speech2Text_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Tokenize_Request;

    /**
     * Verifies a Speech2Text_Tokenize_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Tokenize_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Tokenize_Request
     */
    public static fromObject(object: { [k: string]: any }): Speech2Text_Tokenize_Request;

    /**
     * Creates a plain object from a Speech2Text_Tokenize_Request message. Also converts values to other types if specified.
     * @param message Speech2Text_Tokenize_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Speech2Text_Tokenize_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Tokenize_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Speech2Text_Tokenize_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Speech2Text_Tokenize_Reply. */
export interface ISpeech2Text_Tokenize_Reply {

    /** Speech2Text_Tokenize_Reply tokens */
    tokens?: (number[]|null);

    /** Speech2Text_Tokenize_Reply status */
    status?: (number|null);
}

/** Represents a Speech2Text_Tokenize_Reply. */
export class Speech2Text_Tokenize_Reply implements ISpeech2Text_Tokenize_Reply {

    /**
     * Constructs a new Speech2Text_Tokenize_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISpeech2Text_Tokenize_Reply);

    /** Speech2Text_Tokenize_Reply tokens. */
    public tokens: number[];

    /** Speech2Text_Tokenize_Reply status. */
    public status: number;

    /**
     * Creates a new Speech2Text_Tokenize_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Tokenize_Reply instance
     */
    public static create(properties?: ISpeech2Text_Tokenize_Reply): Speech2Text_Tokenize_Reply;

    /**
     * Encodes the specified Speech2Text_Tokenize_Reply message. Does not implicitly {@link Speech2Text_Tokenize_Reply.verify|verify} messages.
     * @param message Speech2Text_Tokenize_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISpeech2Text_Tokenize_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Tokenize_Reply message, length delimited. Does not implicitly {@link Speech2Text_Tokenize_Reply.verify|verify} messages.
     * @param message Speech2Text_Tokenize_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISpeech2Text_Tokenize_Reply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Tokenize_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Speech2Text_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Tokenize_Reply;

    /**
     * Decodes a Speech2Text_Tokenize_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Speech2Text_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Tokenize_Reply;

    /**
     * Verifies a Speech2Text_Tokenize_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Tokenize_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Tokenize_Reply
     */
    public static fromObject(object: { [k: string]: any }): Speech2Text_Tokenize_Reply;

    /**
     * Creates a plain object from a Speech2Text_Tokenize_Reply message. Also converts values to other types if specified.
     * @param message Speech2Text_Tokenize_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Speech2Text_Tokenize_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Tokenize_Reply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Speech2Text_Tokenize_Reply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
