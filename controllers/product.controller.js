import ProductModel from "../models/product.model.js";
import express from "express";

class ProductController {
    list = async (req, res) => {
        const result = await ProductModel.findAll({
            attributes: ['id', 'title', 'disc','rating', 'prize', 'category', 'image', 'createdAt', 'updatedAt'],
            order: ['category'],
            limit: 100
        })
        res.json(result)
    }
    details = async (req, res) => {
        const idss = req.query.id;
        console.log(idss);
        const { id } = req.params || 0
        const result = await ProductModel.findOne({
            attributes: ['id', 'title', 'rating', 'prize', 'category'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { id, title, disc, rating, prize, category } = req.body;
        console.log(title);
        if (title && disc && prize && category) {
            const model = await ProductModel.create(req.body)
            return res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id, title} = req.body;
        ProductModel.update(
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
        ProductModel.destroy({
            where: {
                id: id
            }
            
        })
        res.sendStatus(200)
    }
}
export default ProductController