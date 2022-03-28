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
        text: {
            type: DataTypes.STRING,
            allowNull: false,
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
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
    }
);

module.exports = Review;