import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";

import indexRouter from "#api/routes/index";
// services
import { MongoConnect } from "#api/services/mongo";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

MongoConnect();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

export default app;
