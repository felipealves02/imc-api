const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();
const port = 3000;

// Configuração do middleware
app.use(bodyParser.json());

// Rota de exemplo para criar um usuário
app.post("/users", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    await db.User.create({firstName, lastName})
    // const user = await User.create({ name, email });
    res.status(201).json({});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.get("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    // const user = await User.create({ name, email });
    res.status(201).json({name: "Felipe Alves"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Iniciar o servidor
app.listen(port, async () => {
  console.log(`Servidor rodando na porta ${port}`);
  // Sincronizando o banco de dados
  // await db.sequelize.sync();
});
