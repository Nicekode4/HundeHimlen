import UserModel from "../models/user.model.js";
import express from "express";

class UserController {
    list = async (req, res) => {
        const result = await UserModel.findAll({
            order: ['lastname'],
            limit: 10
        })
        res.json(result)
    }
    details = async (req, res) => {
        const idss = req.query.id;
        console.log(idss);
        const { id } = req.params || 0
        const result = await UserModel.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        
         const { id, firstname, lastname, email, password } = req.body;
         console.log(firstname);
         if (firstname && lastname && email && password) {
             const model = await UserModel.create(req.body)
             res.send('Du er nu oprettet og kan gå til forsiden.')
             res.end()
         } else {
             res.sendStatus(418)
         }
    }

    update = async (req, res) => {
        
        const { id, firstname} = req.body;
        UserModel.update(
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
        UserModel.destroy({
            where: {
                id: id
            }
            
        })
        res.sendStatus(200)
    }
}
export default UserController