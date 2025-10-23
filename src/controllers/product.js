import express from "express";

import { createProduct } from "../server/product";
import { updateProduct } from "../server/product";
import { deleteProduct } from "../server/product";
import { getProduct } from "../server/product";

const router = express.Router();

router.post("/create-product", async (req, res) => {
  const body = req.body;
  const admId = req.params.admId;

  try {
    const results = await createProduct(body, admId);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/update-product/:productId", async (req, res) => {
  const productId = req.params.productId;
  const updatedData = req.body;

  const result = await updateProduct(productId, updatedData);

  if (result.success) {
    res.status(200).json(result.data);
  } else {
    res.status(400).json({ message: result.message });
  }
});

router.delete("/delete/product/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    const results = await deleteProduct(productId);
    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/get/product", async (req, res) => {
  try {
    const results = await getProduct();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
