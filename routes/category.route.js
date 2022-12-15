import express from "express";
import CategoryController from '../controllers/category.controller.js'

const CategoryRouter = express.Router()
const controller = new CategoryController()



CategoryRouter.get('/category', (req,res) => { 
    controller.list(req,res)
 })

 CategoryRouter.get('/category/:id([0-9]*)', (req,res) => { 
    controller.details(req,res)
 })

 CategoryRouter.post('/category', (req,res) => { 
   controller.create(req,res)
})

CategoryRouter.put('/category', (req,res) => { 
   controller.update(req,res)
})

CategoryRouter.delete('/category', (req,res) => { 
   controller.delete(req,res)
})


export default CategoryRouter