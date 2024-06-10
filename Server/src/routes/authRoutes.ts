import express from 'express';

import { register, login, recoverPassword } from '../controllers/authController';

export default (router:express.Router) => {
    router.post("/api/auth/signup", register);
    router.post("/api/auth/login",login);
    router.post("/api/auth/recover",recoverPassword);
}