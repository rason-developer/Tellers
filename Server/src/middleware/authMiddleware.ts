import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";
import express from "express";
import User from "../models/UserModel";
import logger from "../utils/logger";


export const authenticateJWT = (req:express.Request, res:express.Response, next: express.NextFunction) => {
    const token = req.header("Authorization")?.split(' ')[1];
    if(!token) {
        return res.status(403).send('Access Denied. No token provided.');
    }
    try {
        jwt.verify(token, JWT_SECRET);
        next();
    }catch(err) {
        return res.status(403).send("Invalid token.");
    }
}

export const authorizeRoles = (...roles: string[]) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const token = req.header('Authorization')?.split(' ')[1];
        if (!token) {
            return res.status(403).send('Access denied. No token provided.');
        }

        try {
            const decodedToken = jwt.verify(token, JWT_SECRET) as { roles: string[] };
            const userRoles = decodedToken.roles;

            if (!userRoles || !roles.some(role => userRoles.includes(role))) {
                logger.info("verified!");
                return res.status(403).send('Access denied. Insufficient privileges.');
            }

            next();
        } catch (error) {
            logger.error(`JWT verification failed: ${error}`);
            return res.status(403).send('Invalid token.');
        }
    };
};