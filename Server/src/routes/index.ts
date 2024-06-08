import express from 'express'

import storyRoutes from './storyRoutes';

const router = express.Router();

export default():express.Router => {
    storyRoutes(router);

    return router;
}
