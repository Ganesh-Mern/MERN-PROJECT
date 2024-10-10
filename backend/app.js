import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import mongodbConnect from "./src/config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/user.routes.js";

config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, (req, res) => {
  mongodbConnect();
  console.log(`server start at port ${PORT}`);
});
