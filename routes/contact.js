const path= require('path');
const express= require('express');
const router = express.Router();


//import {contactUsController}from '../controllers/contacts';
const contactUsController = require('../controllers/contacts');

router.get('/contactus',contactUsController.getcontactUs);

router.post('/contactus',contactUsController.postcontactUs);

module.exports = router;