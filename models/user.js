import { Schema, model, models } from "mongoose";
import { useSession } from "next-auth/react";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is Required!"],
        unique: [true, "Email Already Exists!"]
    },
    username: {
        type: String,
        required: [true, "UserName is Required!"],
        unique: [true, "UserName Already Exists!"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User",UserSchema);

export default User;


