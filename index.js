import express from "express";
import dotenv from "dotenv";
import UserRouter from './routes/user.route.js'
import InitRouter from "./routes/init.route.js";
//import ReviewRouter from "./routes/review.route.js";
//import ProductRouter from "./routes/product.route.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true}))

app.use(UserRouter)
//app.use(ReviewRouter)
//app.use(ProductRouter)
app.use(InitRouter)

app.listen(port, () => {
    console.log(`Webserver running on http://localhost:${port}`);
})