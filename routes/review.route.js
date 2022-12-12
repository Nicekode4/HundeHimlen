import express from "express";
import ReviewController from '../controllers/review.controller.js'

const ReviewRouter = express.Router()
const controller = new ReviewController()

ReviewRouter.get('/reviews', (req,res) => { 
    controller.list(req,res)
 })

 ReviewRouter.get('/reviews/:id([0-9]*)', (req,res) => { 
    controller.details(req,res)
 })

 ReviewRouter.post('/reviews', (req,res) => { 
   controller.create(req,res)
})

ReviewRouter.put('/Reviews', (req,res) => { 
   controller.update(req,res)
})

ReviewRouter.delete('/Reviews', (req,res) => { 
   controller.delete(req,res)
})


export default ReviewRouter