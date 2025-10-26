import express from "express";
import { createGastos } from "../server/gastos";
import { deleteGastos } from "../server/gastos";
import { updateGastos } from "../server/gastos";
import { getGastos } from "../server/gastos";

const router = express.Router();

router.post("/create-gastos", async (req, res) => {
  const body = req.body;
  try {
    const results = createGastos(body);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/update-gastos/:gastosId", async (req, res) => {
  const body = req.body;
  const gastosId = req.params.gastosId;

  try {
    const results = await updateGastos(gastosId, body);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete-gastos/:gastosId", async (req, res) => {
  const gastosId = req.params.gastosId;

  try {
    const results = await deleteGastos(gastosId);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/get-gastos", async (req, res) => {
  try {
    const results = await getGastos();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
