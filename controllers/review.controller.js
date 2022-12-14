import ReviewModel from "../models/review.model.js";
import express from "express";

class ReviewController {
    list = async (req, res) => {
        const result = await ReviewModel.findAll({
            attributes: ['id', 'productName', 'prodId', 'rating'],
            order: ['id'],
            limit: 10
        })
        res.json(result)
    }
    details = async (req, res) => {
        const idss = req.query.id;
        console.log(idss);
        const { id } = req.params || 0
        const result = await ReviewModel.findOne({
            attributes: ['id', 'productName', 'prodId', 'user', 'rating', 'comment', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { id, productName, prodId, user, rating, comment } = req.body;
        if (productName && prodId && user && comment && rating) {
            const model = await ReviewModel.create(req.body)
            return res.json({ newId: model.id})
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id, productName} = req.body;
        ReviewModel.update(
            { productName: productName },
            { where: { id: id } }
          )
          if (productName) {
            console.log(productName, id);
            res.sendStatus(200)
          }
    }

    delete = async (req,res) => {
        const { id } = req.body;
        ReviewModel.destroy({
            where: {
                id: id
            }
            
        })
        res.sendStatus(200)
    }
}
export default ReviewController