import express, { Request,Response } from "express";
import cors from "cors";
import recipeRouter from "./routes/recipeRoutes";
import subscriptionRoutes from "./routes/subscriptionRouter";
import contactRouter from "./routes/contactRoutes"
import { isHttpError } from "http-errors";

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

app.use((error: unknown, req: Request, res: Response)=>{
    console.error(error)
    let errorMessage = "An unexpected error occurred"
    let statusCode = 500
    if(isHttpError(error)){
        statusCode = error.status
        errorMessage = error.message
    }
    res.status(statusCode).json({error: errorMessage})
})
export default app;
