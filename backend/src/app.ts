import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Backend is running");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
