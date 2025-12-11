import { model, Schema } from "mongoose";

const UserShema = new Schema({
    username: { type: String, required: true }
})

export const UserCollection = model.Users || model("Users", UserShema)
