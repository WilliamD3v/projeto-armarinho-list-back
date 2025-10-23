import express from "express";
import { login, verifica, gerarSenha } from "../server/user";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const results = await login(req.body);
    res
      .status(200)
      .json({ message: "Login bem-sucedido", token: results.token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.get("/users", (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token não encontrado" });
    }

    const decodedData = verifica(token);

    res.json({ data: decodedData });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro interno do servidor", details: error.message });
  }
});

router.get("/gerar-senha", async (req, res) => {
  try {
    const results = gerarSenha();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
