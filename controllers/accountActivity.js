const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, Review, Category } = require('../models');
const withAuth = require('../utils/auth')