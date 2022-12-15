import ProductModel from "../models/product.model.js";
import CategoryModel from "../models/category.model.js";
import express from "express";

CategoryModel.hasMany(ProductModel);
//CategoryModel.belongsTo(ProductModel);
class ProductController {
     test = async (req, res) => {
        const result = await CategoryIdModel.findAll({
            attributes: ['id', 'title'],
            order: ['categoryId'],
            limit: 100
        })
        res.json(result)
    }
    list = async (req, res) => {
        const result = await ProductModel.findAll({
            attributes: ['id', 'title', 'disc','rating', 'prize', 'categoryId', 'image', 'createdAt', 'updatedAt'],
            order: ['categoryId'],
            limit: 100
        })
        res.json(result)
    }
    details = async (req, res) => {
        const idss = req.query.id;
        console.log(idss);
        const { id } = req.params || 0
        const result = await ProductModel.findOne({
            attributes: ['id', 'title', 'rating', 'prize', 'categoryId'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { id, title, disc, rating, prize, categoryId } = req.body;
        console.log(title);
        if (title && disc && prize && categoryId) {
            const model = await ProductModel.create(req.body)
            return res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id, title, disc, rating, prize, categoryId } = req.body;
        ProductModel.update(
            { title: title,  disc: disc, rating: rating, prize: prize, categoryId: categoryId},
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