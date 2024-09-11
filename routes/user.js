const express = require('express');
const usercontroller = require('../controllers/usercontroller')
const router = express.Router();
router.use(express.json());

router.get('/users',(req,res)=>{
   usercontroller.getAllUsers(req,res)
})
router.get('/user/:id',(req,res)=>{
   usercontroller.getParticularUsers(req,res)
})
router.post('/add/user',(req,res)=>{
    usercontroller.AddUser(req,res)
})
module.exports = router;