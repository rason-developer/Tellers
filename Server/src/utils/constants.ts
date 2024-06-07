import dotenv from "dotenv";

dotenv.config();

export const SERVER_PORT = process.env.PORT || 0
export const MONGO_URI = process.env.MONGO_URI || "";
export const JWT_SECRET = process.env.JWT_SECRET || '';
