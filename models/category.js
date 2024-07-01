import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json"; //this will remove the _id to id when displaying 

const categorySchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
}, {
    timestamps:true
})

categorySchema.plugin(toJSON);

export const CategoryModel = model('Category', categorySchema);