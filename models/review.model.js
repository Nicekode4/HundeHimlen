import { sequelize } from "../config/sequelize.config.js";
import { DataTypes, Model  } from "sequelize";

class ReviewModel extends Model{}

ReviewModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    productName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    prodId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },    
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Reviews',
    freezeTableName: true
})

export default ReviewModel