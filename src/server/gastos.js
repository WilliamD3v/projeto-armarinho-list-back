import { databaseConnection } from "../utils/database";
import gastosSchema from "../models/gastos";

export const createGastos = async (body) => {
  await databaseConnection();
  try {
    const gastos = await gastosSchema.create(body);

    return gastos;
  } catch (error) {
    console.error("Erro ao criar gastos:", error);
    throw new Error(error.message || "Erro no servidor ao criar gastos.");
  }
};

export const updateGastos = async (productId, data) => {
  await databaseConnection();

  try {
    const findGastos = await gastosSchema.findById(productId);

    if (!findGastos) {
      throw new Error("Produto não encontrado no BD");
    }

    const updatedGasto = await gastosSchema.findByIdAndUpdate(productId, data, {
      new: true,
    });

    return {
      message: "Gasto atualizado com sucesso!",
      updatedGasto,
    };
  } catch (error) {
    console.error("Erro ao atualizar gasto:", error);
    throw new Error("Erro ao atualizar gasto");
  }
};

export const deleteGastos = async (productId) => {
  await databaseConnection();

  try {
    const findGastos = await gastosSchema.findById(productId);

    if (!findGastos) {
      throw new Error("Produto nao encontrado no BD");
    }

    await gastosSchema.findByIdAndDelete(productId);

    return { message: "Gasto deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar gasto:", error);
    throw new Error("Erro ao deletar gasto");
  }
};

export const getGastos = async () => {
  await databaseConnection();

  try {
    const gastos = await gastosSchema.find();

    return gastos;
  } catch (error) {
    console.error("Erro ao criar gastos:", error);
    throw new Error(error.message || "Erro no servidor ao criar gastos.");
  }
};
