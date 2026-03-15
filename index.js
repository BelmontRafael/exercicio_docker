const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const logDir = fs.existsSync('/logs') ? '/logs' : path.join(__dirname, 'logs');
const logPath = path.join(logDir, 'app.log');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

app.get('/', (req, res) => {
    const nome = process.env.NOME || 'visitante';
    const modo = process.env.APP_MODE || 'dev';

    const logMessage = `[${new Date().toISOString()}] Requisição de: ${nome}\n`;
    fs.appendFileSync(logPath, logMessage);

    res.send(`Olá ${nome}\nModo: ${modo}\n`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});