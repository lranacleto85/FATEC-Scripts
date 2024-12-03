const express = require('express');
const app = express();

// Rota raiz
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bem-vindo ao Nosso Café</title>
        </head>
        <body>
            <h1>Bem-vindo ao Nosso Café</h1>
            <nav>
                <a href="/about">Sobre</a>
                <a href="/contact">Contato</a>
            </nav>
            <p>Desfrute de nossos cafés frescos e deliciosos, preparados com grãos selecionados.</p>
        </body>
        </html>
    `);
});

// Rota /about
app.get('/about', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sobre Nós</title>
        </head>
        <body>
            <h1>Sobre Nós</h1>
            <nav>
                <a href="/">Início</a>
                <a href="/contact">Contato</a>
            </nav>
            <p>Nosso café é conhecido por sua atmosfera acolhedora e grãos de alta qualidade. Venha e experimente o melhor café da cidade!</p>
        </body>
        </html>
    `);
});

// Rota /contact
app.get('/contact', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contato</title>
        </head>
        <body>
            <h1>Contato</h1>
            <nav>
                <a href="/">Início</a>
                <a href="/about">Sobre</a>
            </nav>
            <p>Tem alguma dúvida? Entre em contato conosco pelo e-mail: contato@cafeexemplo.com.</p>
        </body>
        </html>
    `);
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
