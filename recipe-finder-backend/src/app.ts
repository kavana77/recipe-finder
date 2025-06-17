import express from "express";
import cors from "cors";
import recipeRouter from "./routes/recipeRoutes";
import subscriptionRoutes from "./routes/subscriptionRouter";
import contactRouter from "./routes/contactRoutes"

const app = express();

app.use(express.json());
app.use(cors({
    origin:" http://localhost:5173",
    methods: ["GET", "POST", "PUT","DELETE"],
    credentials: true
}));

app.use("/recipes", recipeRouter);
app.use("/subscription", subscriptionRoutes);
app.use("/api", contactRouter)

export default app;
