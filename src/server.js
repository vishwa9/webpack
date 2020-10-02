const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/hello-world/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.get('/Kiwi/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/Kiwi.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, () => {
    console.log('started');
});