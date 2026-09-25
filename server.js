import express from "express";
import {
    loadModel,
    LLAMA_3_2_1B_INST_Q4_0,
    completion,
    unloadModel
} from "@qvac/sdk";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let modelId = null;

async function startModel() {
    console.log("Loading LocalMood AI model...");

    modelId = await loadModel({
        modelSrc: LLAMA_3_2_1B_INST_Q4_0,
        modelConfig: {
            ctx_size: 2048
        }
    });

    console.log("LocalMood AI model loaded!");
}

app.post("/analyze", async (req, res) => {
    try {
        const { journal } = req.body;

        if (!journal || journal.trim().length === 0) {
            return res.status(400).json({
                error: "Please write something in your journal."
            });
        }

const prompt = `
You are LocalMood, a private journaling reflection assistant.

Analyze the journal entry and respond using exactly these three sections:

MOOD
Give one short word describing the overall mood.

POSSIBLE EMOTIONS
Give 2 to 4 possible emotions, separated by commas.

REFLECTION
Give EXACTLY 2 short sentences. Do not write anything else.

Your entire response MUST contain only:
1. MOOD
2. POSSIBLE EMOTIONS
3. REFLECTION

Do not add advice, disclaimers, introductions, conclusions, or extra paragraphs.

Do not diagnose any mental health condition.
Do not make medical claims.
Treat emotions as possibilities, not facts.

Journal entry:
${journal}
`;        const result = completion({
            modelId,
            history: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            stream: false
        });

        const final = await result.final;

        res.json({
            result: final.contentText
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Something went wrong while analyzing the journal."
        });
    }
});

startModel().catch((error) => {
    console.error("Failed to load QVAC model:", error);
    process.exit(1);
});

process.on("SIGINT", async () => {
    if (modelId) {
        await unloadModel({ modelId });
    }

    process.exit(0);
});

app.listen(PORT, () => {
    console.log(`LocalMood is running at http://localhost:${PORT}`);
});