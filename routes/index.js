const express = require('express');
const router  = express.Router();
const axios = require('axios');
const moment = require('moment');
const math = require('math');
const User = require("../controller/models/User");

const {ensureAuthenticated} = require('../config/auth')

router.get('/', async(req,res) => {
    res.render('landing' )
})





router.get('/dashboard/home',ensureAuthenticated, async(req,res)=>{ // changed the rroute /dashboard/home
const art = []
    
            res.status(200).render('home',{articles:art, user: req.user, id: req.user._id})
                
        
});

module.exports = router; 
