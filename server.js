const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 3000;

const genAI = new GoogleGenerativeAI("AIzaSyAANGrHEUNoKvbhqfDiHbfKPzqt8Dc3Olo");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(express.json()); 


app.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    try {
        const result = await model.generateContent(prompt);
        res.json({ response: result.response.text() });
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'Server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
