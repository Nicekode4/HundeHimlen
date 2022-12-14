import { sequelize } from "../config/sequelize.config.js";
import { DataTypes, Model } from "sequelize";
class AuthModel extends Model{}

AuthModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
sequelize,
modelName: 'users',
freezeTableName: true
})

export default AuthModel
