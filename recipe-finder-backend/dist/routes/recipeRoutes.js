"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipeController_1 = require("../controllers/recipeController");
const router = express_1.default.Router();
router.post('/addRecipes', recipeController_1.createRecipe);
router.get('/getRecipes', recipeController_1.getRecipes);
router.get('/getByTitle', recipeController_1.searchRecipeByTitle);
exports.default = router;
