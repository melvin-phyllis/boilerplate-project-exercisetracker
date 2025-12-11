import { model, Schema } from "mongoose";

const LogShema = new Schema({


    username: { type: String, required: true },
    count: { type: Number, required: true },
    id: { type: String, required: true },
    log: [{
        _id:false,
        description: { type: String },
        duration: { type: Number },
        date: { type: Date },
    }]

})

export const LogCollection = model.Logs || model("Logs", LogShema)
