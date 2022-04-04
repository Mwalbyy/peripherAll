const router = require("express").Router();
const { User } = require("../../models");
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({
      user_name: name,
      email: email,
      password: password,
    });
    res.json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        // find a user from the DB
        const existingUser = await User.findOne({ email: email});
        
        // if no user is found
        if(!existingUser) return res.json({ msg: `data did not match` })

        // if the user is found in the DB, compare password with hashed password
        const doesPasswordMatch = bcrypt.compareSync(password, existingUser.password);

        // if the password does not match
        if(!doesPasswordMatch) return res.json({ msg: `data did not match` });

        // if it matches this sends them back to front end
        res.json(existingUser);

        req.session.save(() => {
          req.session.email = existingUser.email;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
      }
        catch (err) {
        res.status(400).json(err);
      }
    })
  
  module.exports = router;
  
=======
router.post("/login", async (req, res) => {
  try {

    const userData = await User.findOne({ where: { email: req.body.email }});
    if (userData === null) {
      console.log('Not found!');
    } else {
      console.log(userData instanceof User);
      console.log(userData.email); 
    }
    console.log(userData)
    
    if (!userData) {
      res.status(400).json({ message: 'data did not match' });
      return;
    }
    
    const doesPasswordMatch = bcrypt.compareSync(
      req.body.password,
      userData.password
      );
      
      if (!doesPasswordMatch) {res.json({ msg: `data did not match` }); return};
      
      req.session.save(() => {
        req.session.email = userData.email;
        req.session.logged_in = true;
        console.log(userData);
        
        res.json({ user: userData, message: "You are now logged in!" });
      });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
>>>>>>> 6b7580e35012700b0b9787a890a437f74fe66c07
