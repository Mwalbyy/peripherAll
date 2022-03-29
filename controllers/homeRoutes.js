const router = require("express").Router();
const { Category, Product, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({});

    const products = categoryData.map((product) =>
      product.get({ plain: true })
    );
    res.render("homepage", {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
