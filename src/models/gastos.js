import mongoose from "mongoose";

const gastosSchema = new mongoose.Schema({
  name: { type: String },
  enterprise: { type: String },
  price: { type: String },
});

export default mongoose.model.Gastos || mongoose.model("Gastos", gastosSchema);
