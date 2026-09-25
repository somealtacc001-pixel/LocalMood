import {
    loadModel,
    LLAMA_3_2_1B_INST_Q4_0,
    completion,
    unloadModel
} from "@qvac/sdk";

let modelId;

try {
    console.log("Loading local AI model...");

    modelId = await loadModel({
        modelSrc: LLAMA_3_2_1B_INST_Q4_0,
        modelType: "llm",
        modelConfig: {
            ctx_size: 2048
        },
        onProgress: (p) => {
            console.log(`Downloading: ${p.percentage.toFixed(0)}%`);
        }
    });

    console.log("Model loaded!");
    console.log("Running local AI...\n");

    const result = completion({
        modelId,
        history: [
            {
                role: "user",
                content: "In one short sentence, explain what a journal is."
            }
        ],
        stream: false
    });

    const final = await result.final;

    console.log("AI response:");
    console.log(final.contentText);

} catch (error) {
    console.error("ERROR:", error);
} finally {
    if (modelId) {
        await unloadModel({ modelId });
    }
}