import mongoose from "mongoose";

let isConnected = false;

export const databaseConnection = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.URI || "", {
      dbName: "armarinho",
    });

    isConnected = true;
    console.log(`MongoDB conectado em: ${conn.connection.name}`);
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error);
    throw new Error("Falha na conexão com o banco de dados");
  }
};
