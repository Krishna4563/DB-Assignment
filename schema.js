const mongoose = require("mongoose");

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  SKU: { type: String, required: true },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ProductCategory",
  },
  inventory_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ProductInventory",
  },
  price: { type: Number, required: true },
  discount_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Discount",
  },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

// Product Category Schema
const productCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

// Product Inventory Schema
const productInventorySchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

// Discount Schema
const discountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  discount_percent: { type: Number, required: true },
  active: { type: Boolean, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

// Models based on the schemas
const Product = mongoose.model("Product", productSchema);
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
const ProductInventory = mongoose.model(
  "ProductInventory",
  productInventorySchema
);
const Discount = mongoose.model("Discount", discountSchema);

module.exports = { Product, ProductCategory, ProductInventory, Discount };
