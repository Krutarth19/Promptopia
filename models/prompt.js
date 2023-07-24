import mongoose, { Schema, model, models } from "mongoose";
import { useSession } from "next-auth/react";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref:'User',
    },
    prompt: {
        type: String,
        required: [true, "Prompt is Required!"],
    },
    tag: {
        type: String,
        required: [true, "Tag is Required!"],
    }, 
})

const Prompt = models.Prompt || model("Prompt",PromptSchema);

export default Prompt;


