import http from 'http';
import app from './app';
import { SERVER_PORT } from './config/config';
import connectDB from './config/db';
import logger from './utils/logger';


connectDB().then(() => {
    const server = http.createServer(app);

    server.listen(SERVER_PORT, () => {
        console.log(`Server Running on http://localhost:${SERVER_PORT}/`);
    });

}).catch(error => {
    logger.error('Error connecting to MongoDB: ', error);
    process.exit(1);
})