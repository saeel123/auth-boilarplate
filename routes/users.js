const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req, res) => res.render('login'));

//register page
router.get('/register', (req, res) => res.render('register'));

//register page
router.get('/dashboard', (req, res) => res.render('dashboard'));


//Register handle
router.post('/register', (req, res)=> {
    console.log(req.body);

    const {name, email, password, password2} = req.body;
    let errors = [];

    // Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fields.'})
    }
    
    //Check password match
    if (password !== password2) {
        errors.push({msg: 'Password do not match'})        
    }

    //check pass length
    if (password.length < 6) {
        errors.push({msg: 'Password should be atleast 6 character.'})                
    }

});


module.exports = router; 