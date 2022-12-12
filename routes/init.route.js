import { sequelize } from "../config/sequelize.config.js";
import express, { response } from "express";

const InitRouter = express.Router()

InitRouter.get('/init', (req, res) => {
    try {
        console.log('Sequelize syncc');
        sequelize.sync()
        response.statusCode(200)
    } catch (err) {
        res.send(err)
    }
})

export default InitRouter