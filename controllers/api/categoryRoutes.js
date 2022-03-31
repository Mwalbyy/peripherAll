const router = require('express').Router();
const { Category, Product } = require('../../models');
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
});
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'image'],
        },
      ],
    });

    const categories = categoryData.get({ plain: true });
    res.render("homepage", {
      categories
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
