import { sequelize } from "../config/sequelize.config.js";
import { DataTypes, Model  } from "sequelize";

class CategoryModel extends Model{}

CategoryModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'category',
    freezeTableName: true
})

export default CategoryModel