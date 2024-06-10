import express from 'express'

import storyRoutes from './storyRoutes';
import authRoutes from './authRoutes';

const router = express.Router();

export default():express.Router => {
    storyRoutes(router);
    authRoutes(router);
    return router;
}
