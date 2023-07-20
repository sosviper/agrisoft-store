import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes";
import activityRoutes from "./routes/activities.routes";
import morgan from "morgan";

import config from "./config";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", productRoutes);
app.use("/api", activityRoutes);

export default app;