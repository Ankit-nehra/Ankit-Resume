import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import certificateRoutes from "./routes/certificateRoutes.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://ankit-resume-teal.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err.message);
  });

// Routes
app.use("/api/certificates", certificateRoutes);

// Test Routes
app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Certificate API Working",
  });
});

app.post("/api/verify-upload", (req, res) => {
  const { key } = req.body;

  console.log("Received key:", key);

  if (key === process.env.UPLOAD_SECRET) {
    return res.json({
      success: true,
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Secret Key",
  });
});

// Server Start
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
