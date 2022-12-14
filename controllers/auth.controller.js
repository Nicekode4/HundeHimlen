import AuthModel from '../models/auth.model.js'
import UserModel from '../models/user.model.js'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

class AuthController {
    login = async (req, res) => {
        const { username, password } = req.body
        console.log(req.body);
        if (username && password) {
            const userdata = await UserModel.findOne({
                attributes: ['id', 'password', 'firstname'],
                where: { email: username}
            })
            if (!userdata) {
                res.sendStatus(401)
            } else {
                 bcrypt.compare(password, userdata.password, (err, result) => {
                 if (result) {
                     const token = jwt.sign(userdata.id, process.env.PRIVATE_KEY)
                     res.writeHead(301, {
                        Location: `http://localhost:3000/`
                      }).end();
                 } else {
                     console.log(result);
                     res.sendStatus(401)
                 }
                

             })
            } 
            }else {
            
            res.sendStatus(403)
        }
            
    }
    protected = async (req, res) => {
        res.sendStatus(200)
    }
}

export default AuthController