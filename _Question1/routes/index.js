const express = require('express');
const router = express.Router();
const User = require('../model/User')

//Home route
router.get('/', (req, res)=>{
    res.render('home')
});

// Registration route
router.get('/register', (req, res)=>{
    res.render('registration');
});

//Post route
router.post('/register', (req, res)=>{
    const registrationData = {
        date_of_birth: req.body.date_of_birth,
        name: req.body.name,
        password: req.body.password,
        address: req.body.address,
        contact: req.body.contact,
        emergency_contact: req.body.emergency_contact,
    }
    User.findOne({name: registrationData.name}).then((user)=>{
        if(user){
            console.log('Sorry there is a patient with that contact please check if your contact is correct');
            return res.redirect('/register')
        } else {
            User.create(registrationData).then((newUser)=>{
                res.redirect('/patiens')
            })
        }
    })
});


router.get('/patients', (req, res)=>{
    User.find({}).then((users)=>{
        res.render('patients', {
            users: users.reverse()
        })
    }).catch((error)=>{
        res.json({
            msg: `Sorrr ${error.message}`
        })
    });
})



module.exports = router;
