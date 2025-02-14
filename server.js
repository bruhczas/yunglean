const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const genAI = new GoogleGenerativeAI("AIzaSyAANGrHEUNoKvbhqfDiHbfKPzqt8Dc3Olo"); 
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

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

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
