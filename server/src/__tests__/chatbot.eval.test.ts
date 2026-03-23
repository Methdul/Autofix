import 'dotenv/config';
import { generateChatbotReply } from '../modules/chatbot/chatbot.service';

/**
 * Natural Language Processing (NLP) Evaluation Metrics
 * We measure the F1-Score of our assistant's ability to remain on-topic.
 * 
 * Positive Class (1): Providing assistance with AutoFix
 * Negative Class (0): Refusing to answer an unrelated question
 */

interface EvalCase {
    prompt: string;
    expectedClass: 1 | 0; // 1 = AutoFix related, 0 = Unrelated
}

const testDataset: EvalCase[] = [
    { prompt: "How do I book a vehicle service?", expectedClass: 1 },
    { prompt: "Can I register as a service provider?", expectedClass: 1 },
    { prompt: "What is the capital of France?", expectedClass: 0 },
    { prompt: "Tell me a joke.", expectedClass: 0 },
];

describe('Chatbot ML Evaluation (F1-Score)', () => {
    // Increase timeout since we are hitting a real API
    jest.setTimeout(30000);

    it('should calculate classification metrics across the test dataset', async () => {
        let truePositives = 0;
        let falsePositives = 0;
        let trueNegatives = 0;
        let falseNegatives = 0;

        for (const testCase of testDataset) {
            const reply = await generateChatbotReply(testCase.prompt);
            
            // Simple heuristic to classify the LLM's response
            // If the model politely refuses, it usually says something like "only help with AutoFix", "cannot assist", etc.
            const isRefusal = reply.toLowerCase().includes('only help') || 
                              reply.toLowerCase().includes('cannot') ||
                              reply.toLowerCase().includes('sorry');

            const predictedClass = isRefusal ? 0 : 1;

            if (predictedClass === 1 && testCase.expectedClass === 1) truePositives++;
            else if (predictedClass === 1 && testCase.expectedClass === 0) falsePositives++;
            else if (predictedClass === 0 && testCase.expectedClass === 0) trueNegatives++;
            else if (predictedClass === 0 && testCase.expectedClass === 1) falseNegatives++;
        }

        const accuracy = (truePositives + trueNegatives) / testDataset.length;
        const precision = truePositives / (truePositives + falsePositives || 1);
        const recall = truePositives / (truePositives + falseNegatives || 1);
        const f1Score = 2 * ((precision * recall) / ((precision + recall) || 1));

        console.log(`
            --- ML Evaluation Report ---
            Accuracy:  ${accuracy * 100}%
            Precision: ${precision.toFixed(2)}
            Recall:    ${recall.toFixed(2)}
            F1-Score:  ${f1Score.toFixed(2)}
        `);

        // We assert that the model performs adequately
        expect(f1Score).toBeGreaterThan(0.5);
    });
});
