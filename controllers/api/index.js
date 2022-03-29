const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');
const reviewRoutes = require('./reviewRoutes');


router.use('/category', categoryRoutes);
router.use('/review', reviewRoutes);
router.use('/users', userRoutes);
router.use('/product', productRoutes);

module.exports = router;
