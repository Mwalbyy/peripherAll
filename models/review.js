const sequelize = require('../config/connection');
const {Model, DataTypes} = require('sequelize');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // product_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     references: {
        //         model: 'product',
        //         key: 'name',
        //     }
        // },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'product',
                key: 'id',
            }
        },
        date_created: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
            max: 5,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
    }
);

module.exports = Review;