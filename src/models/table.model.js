import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["available", "unavailable"],
    default: "available",
  },
  customer: [
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    }
  ],
  shopkeeper: [
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    }
  ],
})

const Table = mongoose.model("Table", tableSchema);

export default Table;