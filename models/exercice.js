import { model, Schema } from "mongoose";

const ExerciceShema = new Schema({
    id: { type: String, required: true },
    username: { type: String, required: true },
    date: { type: Date },
    duration: { type: Number, required: true },
    description: { type: String, required: true }
})



export const ExerciceCollection = model.Exercices || model("Exercices", ExerciceShema)
