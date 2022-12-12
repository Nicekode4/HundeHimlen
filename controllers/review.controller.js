import ReviewModel from "../models/review.model.js";
import express from "express";

class ReviewController {
    list = async (req, res) => {
        const result = await ReviewModel.findAll({
            attributes: ['id', 'firstname', 'lastname'],
            order: ['lastname'],
            limit: 10
        })
        res.json(result)
    }
    details = async (req, res) => {
        const idss = req.query.id;
        console.log(idss);
        const { id } = req.params || 0
        const result = await ReviewModel.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { id, firstname, lastname, email, password } = req.body;
        console.log(firstname);
        if (firstname && lastname && email && password) {
            const model = await ReviewModel.create(req.body)
            return res.json({ newId: model.id, NewName: model.firstname, NewLastName: model.lastname })
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id, firstname} = req.body;
        ReviewModel.update(
            { firstname: firstname },
            { where: { id: id } }
          )
          if (firstname) {
            console.log(firstname, id);
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