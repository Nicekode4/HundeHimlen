import express from "express";
import ProductController from '../controllers/product.controller.js'

const ProductRouter = express.Router()
const controller = new ProductController()

ProductRouter.get('/products', (req,res) => { 
    controller.list(req,res)
 })

 ProductRouter.get('/products/:id([0-9]*)', (req,res) => { 
    controller.details(req,res)
 })

 ProductRouter.post('/products', (req,res) => { 
   controller.create(req,res)
})

ProductRouter.put('/Products', (req,res) => { 
   controller.update(req,res)
})

ProductRouter.delete('/Products', (req,res) => { 
   controller.delete(req,res)
})


export default ProductRouter