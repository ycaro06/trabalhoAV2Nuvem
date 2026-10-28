const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("<h1>Pagina itrabalho</h1>");
});
app.get("/produtos", (req, res) => {
    res.send("<h1>Produtos</h1><p>Teclado e mouse</p>");
});
app.get("/sobre", (req, res) => {
    res.send("<h1>Sobre o projeto</h1>");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});