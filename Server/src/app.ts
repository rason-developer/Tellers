import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import router from "./routes";
import { errorLogger, requestLogger } from "./middleware/loggerMiddleware";

const app = express();

app.use(cors());
app.use(morgan("dev"));
// Middleware for logging HTTP requests
app.use(requestLogger);

// Middleware for parsing JSON request bodies
app.use (express.json());

// Routes
app.use('/', router());

// Middleware for logging errors
app.use(errorLogger);

export default app;

