import express from "express";
import logger from "../utils/logger";

// Middleware for logging HTTP requests
export const requestLogger = (req:express.Request, res:express.Response, next:express.NextFunction) => {
    logger.info(`${req.method} ${req.url}`);
    next();
};

// Middleware for logging errors
export const errorLogger = (err:any, req:express.Request, res:express.Response, next:express.NextFunction) => {
    logger.error(err.stack);
    next(err);
};
