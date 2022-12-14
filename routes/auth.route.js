import express from "express";
import AuthController from '../controllers/auth.controller.js'
import verifyToken from "../middleware/verifyToken.js";
const AuthRouter = express.Router()
const controller = new AuthController()

AuthRouter.post('/login2', (req, res) => {
    controller.login(req,res)
})

AuthRouter.get('/protected', verifyToken, (req,res) => {
    controller.protected(req,res)
})

export default AuthRouter