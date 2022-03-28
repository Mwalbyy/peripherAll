const router = require('express').Router();
const { Category } = require('../../models');
// /-route to get all categories
// /category/:id-route to get category and all its products

router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll()
        const category = categoryData.map((selection) => selection.get({plain: true}))
        res.render()
    } catch (err) {
        res.status(400).json(err);
      }
})

module.exports = router;

