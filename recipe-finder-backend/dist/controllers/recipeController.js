"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRecipeByTitle = exports.getRecipes = exports.createRecipe = void 0;
const Recipe_1 = __importDefault(require("../models/Recipe"));
const createRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, image } = req.body;
        const newRecipe = yield Recipe_1.default.create({ title, author, image });
        res.status(200).json({ message: "Recipe created successfully", newRecipe });
    }
    catch (error) {
        next(error);
    }
});
exports.createRecipe = createRecipe;
const getRecipes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield Recipe_1.default.find();
        res.status(200).json({ message: "Recipes: ", recipes });
    }
    catch (error) {
        next(error);
    }
});
exports.getRecipes = getRecipes;
const searchRecipeByTitle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.query.title;
        const recipes = yield Recipe_1.default.find({
            title: { $regex: title, $options: "i" },
        });
        res.status(200).json({ message: "Recipes", recipes });
    }
    catch (error) {
        next(error);
    }
});
exports.searchRecipeByTitle = searchRecipeByTitle;
