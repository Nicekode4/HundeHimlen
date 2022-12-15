import CategoryModel from "../models/category.model.js";
import ProductModel from "../models/product.model.js"
import express from "express";



class CategoryController {
   

    list = async (req, res) => {
        const result = await CategoryModel.findAll({
            attributes: ['id', 'title'],
            order: ['category'],
            limit: 100
        })
        res.json(result)
    }
    details = async (req, res) => {
        const idss = req.query.id;
        console.log(idss);
        const { id } = req.params || 0
        const result = await CategoryModel.findOne({
            attributes: ['id', 'title', 'rating', 'prize', 'category'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { id, title, disc, rating, prize, category } = req.body;
        console.log(title);
        if (title && disc && prize && category) {
            const model = await CategoryModel.create(req.body)
            return res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id, title, disc, rating, prize, category } = req.body;
        CategoryModel.update(
            { title: title,  disc: disc, rating: rating, prize: prize, category: category},
            { where: { id: id } }
          )
          if (title) {
            console.log(title, id);
            res.sendStatus(200)
          }
    }

    delete = async (req,res) => {
        const { id } = req.body;
        CategoryModel.destroy({
            where: {
                id: id
            }
            
        })
        res.sendStatus(200)
    }
}
export default CategoryController