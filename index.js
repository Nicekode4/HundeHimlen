import express from "express";
import dotenv from "dotenv";
import UserRouter from './routes/user.route.js'
import InitRouter from "./routes/init.route.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(UserRouter)
app.use(InitRouter)

app.listen(port, () => {
    console.log(`Webserver running on http://localhost:${port}`);
})