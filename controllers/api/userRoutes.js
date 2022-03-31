const router = require('express').Router();
const { User } = require('../../models');
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
try {

    const {name, email, password} = req.body;
    
    const newUser = await User.create({
      
      user_name: name,
      email: email,
      password: password
    });
    console.log(newUser)
    res.json(newUser);
    
} catch (err) {
    res.status(400).json(err);
  }
});

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
  
      }
        catch (err) {
        res.status(400).json(err);
      }
    })
  
  module.exports = router;
  