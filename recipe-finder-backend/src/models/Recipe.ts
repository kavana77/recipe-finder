import mongoose, {Document, Schema} from "mongoose";
import { IRecipe } from "../types/recipe";

interface IRecipeModel extends IRecipe, Document {}

const recipeSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
},{
    timestamps: true
})

const Recipe = mongoose.model<IRecipeModel>("Recipe", recipeSchema)
export default Recipe