import ReviewModel from "../models/review.model.js";
import ProductModel from "../models/product.model.js";
import UserModel from "../models/user.model.js";
import express from "express";

ProductModel.hasMany(ReviewModel);
UserModel.hasMany(ReviewModel);

class ReviewController {
    list = async (req, res) => {
        const result = await ReviewModel.findAll({
            attributes: ['id', 'title', 'productId', 'rating'],
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
            attributes: ['id', 'title', 'productId', 'userId', 'rating', 'comment', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { id, title, productId, userId, rating, comment } = req.body;
        if (title && productId && userId && comment && rating) {
            const model = await ReviewModel.create(req.body)
            return res.json({ newId: model.id})
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id, title} = req.body;
        ReviewModel.update(
            { title: title },
            { where: { id: id } }
          )
          if (title) {
            console.log(title, id);
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