import { Request, Response } from "express";
import Recipe from "../models/Recipe";

export const createRecipe = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, author, image } = req.body;
    const newRecipe = await Recipe.create({ title, author, image });
    res.status(201).json({ message: "Recipe created successfully", newRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create recipe" });
  }
};

export const getRecipes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ message: "Recipes: ", recipes });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};
export const searchRecipeByTitle = async (req: Request, res: Response) => {
  try {
    const title = req.query.title as string;
    const recipes = await Recipe.find({
      title: { $regex: title, $options: "i" },
    });
    res.status(201).json({ message: "Recipes", recipes });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes by title" });
  }
};
