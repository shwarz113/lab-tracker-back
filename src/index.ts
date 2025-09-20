import "dotenv/config";
import express from "express";
import cors from "cors";
import healthRouter from "./routes/health";

const app = express();
const PORT = process.env.PORT || 4000;

// базовые миддлвары
app.use(cors());
app.use(express.json());

// префикс для api
app.use("/api/health", healthRouter);

// корневой ping (по желанию)
app.get("/", (_req, res) => {
  res.send("API is running");
});

// обработка 404
app.use((_req, res) => {
  res.status(404).json({ ok: false, error: "Not Found" });
});

// старт
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
