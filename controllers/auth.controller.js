import AuthModel from '../models/auth.model.js'
import UserModel from '../models/user.model.js'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import session from 'express-session'
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
                     req.session.user = userdata.firstname
                     res.send(`<!DOCTYPE html>
                     <html lang="en">
                     <head>
                         <meta charset="UTF-8">
                         <meta http-equiv="X-UA-Compatible" content="IE=edge">
                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
                         <link rel="stylesheet" href="./styles/forside.css" type="text/css">
                         <script src="./js/forside.js" defer></script>
                         <title>Logged in</title>
                     </head>
                     <body>
                         <header>
                             <div><img src="./assets/dogLogo.png" alt=""><h3>Welcome ${userdata.firstname} </h3></div>
                             
                             <nav>
                                 <li><a href="#">Forside</a></li>
                                 <li><a href="/about">Om os</a></li>
                                 <li><a href="/login">Login</a></li>
                                 <li><a href="/register">Registrer</a></li>
                             </nav>
                     
                         </header>
                         <main>
                             <section id="category">
                     
                             <button type="button" onclick="NewCat(this)">Foder</button>
                             <button type="button" onclick="NewCat(this)">Snacks</button>
                             <button type="button" onclick="NewCat(this)">Legetøj</button>
                             <button type="button" onclick="NewCat(this)">Udstyr</button>
                             </section>
                             <select name="" id="">
                                 <option value="">Pris - faldende</option>
                                 <option value="">Pris - stigende</option>
                             </select>
                             <section id="products">
                             </section>
                         </main>
                     </body>
                     </html>`)
                     
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