import { RequestHandler} from "express";
import Recipe from "../models/Recipe";

export const createRecipe: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { title, author, image } = req.body;
    const newRecipe = await Recipe.create({ title, author, image });
    res.status(201).json({ message: "Recipe created successfully", newRecipe });
  } catch (error) {
    next(error);
}
};

export const getRecipes: RequestHandler = async (
  req,
  res,
  next
)=> {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ message: "Recipes: ", recipes });
  } catch (error) {
    next(error);
}
};
export const searchRecipeByTitle: RequestHandler = async (req, res,next) => {
  try {
    const title = req.query.title as string;
    const recipes = await Recipe.find({
      title: { $regex: title, $options: "i" },
    });
    res.status(201).json({ message: "Recipes", recipes });
  } catch (error) {
    next(error);
}
};
