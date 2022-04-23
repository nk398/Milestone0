const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

/**
 * App Routes 
*/
router.get('/', Controller.homepage);


router.get('/submit-Thoughts', Controller.submitThoughts);
router.post('/submit-Thoughts', Controller.submitThoughtsOnPost);

 
module.exports = router;
