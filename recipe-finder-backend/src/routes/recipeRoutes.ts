import express from 'express';
import { createRecipe, getRecipes, searchRecipeByTitle } from '../controllers/recipeController';

const router = express.Router();

router.post('/addRecipes', createRecipe);
router.get('/getRecipes', getRecipes)
router.get('/getByTitle', searchRecipeByTitle)

export default router;
