"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const recipeRoutes_1 = __importDefault(require("./routes/recipeRoutes"));
const subscriptionRouter_1 = __importDefault(require("./routes/subscriptionRouter"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const http_errors_1 = require("http-errors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use("/recipes", recipeRoutes_1.default);
app.use("/subscription", subscriptionRouter_1.default);
app.use("/api", contactRoutes_1.default);
app.use((error, req, res) => {
    console.error(error);
    let errorMessage = "An unexpected error occurred";
    let statusCode = 500;
    if ((0, http_errors_1.isHttpError)(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
});
exports.default = app;
