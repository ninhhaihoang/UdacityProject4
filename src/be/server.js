var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);
app.use(express.static(path.join(__dirname, '../fe/views')));

let analyzeData = {};

app.get('/', function (req, res) {
    res.send(analyzeData);
});

// POST Route
app.post('/analyze', async (req, res) => {
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?";
    const url = req.body.data;
    const apiEndpoint = `${baseUrl}key=${process.env.API_KEY}&url=${url}`;

    const response = await fetch(apiEndpoint);
    const dataRes = await response.json();

    analyzeData = {
        agreement: dataRes.agreement,
        confidence: dataRes.confidence,
        irony: dataRes.irony
    }
    console.log(analyzeData);

    res.send(analyzeData);
});




// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


