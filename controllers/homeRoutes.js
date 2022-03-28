const router = require("express").Router();
const { Category, Product, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({});

    const projects = categoryData.map((project) =>
      project.get({ plain: true })
    );

    res.render("category", {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;