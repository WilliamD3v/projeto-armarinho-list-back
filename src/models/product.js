import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String },
  cod: { type: String },
  qnt: { type: String },
  value: { type: String },
  enterprise: { type: String },
  description: { type: String },
});

export default mongoose.model.Product ||
  mongoose.model("Product", productSchema);
