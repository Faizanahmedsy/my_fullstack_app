import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({}, { timestamps: true });

// this will be stored as categories weader you write Category or categories by mongo db
export const Category = mongoose.model("Category", categorySchema);
