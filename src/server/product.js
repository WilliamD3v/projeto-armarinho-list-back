import { databaseConnection } from "../utils/database";
import productSchema from "../models/product";

export const createProduct = async (body) => {
  await databaseConnection();
  try {
    const product = await productSchema.create(body);
    return product;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    throw new Error(error.message || "Erro no servidor ao criar produto.");
  }
};

export const updateProduct = async (productId, updatedData) => {
  await databaseConnection();
  try {
    const product = await productSchema.findByIdAndUpdate(
      productId,
      { $set: updatedData },
      { new: true, runValidators: true }
    );

    if (!product) {
      return { success: false, message: "Produto não encontrado" };
    }

    return { success: true, data: product };
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    return { success: false, message: "Erro ao atualizar produto" };
  }
};

export const deleteProduct = async (productId) => {
  await databaseConnection();

  try {
    const product = await productSchema.findById(productId);

    if (!product) {
      return { success: false, message: "Produto não encontrado" };
    }

    await productSchema.findByIdAndDelete(productId);

    return { success: true, message: "Produto deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    return { success: false, message: "Erro interno ao deletar produto" };
  }
};

export const getProduct = async () => {
  await databaseConnection();
  try {
    const product = await productSchema.find();

    if (!product) {
      throw new Error("Nao foi encontrado nenhum produtos");
    }

    return product;
  } catch (error) {
    throw new Error("Error interno no servidor", error);
  }
};
