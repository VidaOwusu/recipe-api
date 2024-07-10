import { toJSON } from "@reis/mongoose-to-json";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, unique:true, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, unique: true, required:true},
    password: {type: String, required: true}
}, {
    timestamps:true
})

userSchema.plugin(toJSON)

export const UserModel = model('User', userSchema);