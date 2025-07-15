import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import pageRoutes from "../routes/index.routes.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

// Configuration
const app = express();

const corsConfiguration = {
  origin: [
    "http://localhost:5173",
    "https://5db5-190-25-164-252.ngrok-free.app",
  ],
  credentials: true,
};
app.use(cors(corsConfiguration));
app.use(cookieParser());
app.use(express.json());

app.use("/api", pageRoutes);

// Maneja las rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({
    message: "Escribe bien mono estupido",
  });
});

// Server running
app.listen(PORT);
console.log(`Hello world, i am listening on port ${PORT}`);
