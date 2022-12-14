import express from "express";
import dotenv from "dotenv";
import ejs from 'ejs'
import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session'
import cookieParser from 'cookie-parser' 


import UserRouter from './routes/user.route.js'
import InitRouter from "./routes/init.route.js";
import ReviewRouter from "./routes/review.route.js";
import ProductRouter from "./routes/product.route.js";
import AuthRouter from "./routes/auth.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cookieParser())
app.use(session({secret: 'its a secret!'}))
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/views'));

app.use(UserRouter)
app.use(ReviewRouter)
app.use(ProductRouter)
app.use(InitRouter)
app.use(AuthRouter)

app.get('/a', function(req, res){
    if(req.session.page_views){
       req.session.page_views++;
       res.send("You visited this page " + req.session.page_views + " times");
    } else {
       req.session.page_views = 1;
       res.send("Welcome to this page for the first time!");
    }
 });
app.get('/', (req,res) => { 
    fs.readFile('./views/index.ejs', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
 })

 app.get('/about', (req,res) => { 
    fs.readFile('./views/about.ejs', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
 })

 app.get('/login', (req,res) => { 
    fs.readFile('./views/login.ejs', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
 })
 app.get('/register', (req,res) => { 
    fs.readFile('./views/register.ejs', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
 })
app.listen(port, () => {
    console.log(`Webserver running on http://localhost:${port}`);
})