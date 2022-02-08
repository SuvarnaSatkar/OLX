var express = require('express');
var router = express.Router();
const userContoller=require('../controllers/user.controllers')
const productController=require('../controllers/product.controllers')
const accountcontoller=require('../controllers/account.controllers');

/* GET users listing. */

//router.get('/allusers',userContoller.getallUsers);

router.post('/createuser',userContoller.createUser);
router.post('/displayalluser',userContoller.getallUsers)
router.post('/createproduct',productController.createproduct);
router.post('/displayallproduct',productController.getallproduct)
//router.post('/sendwelcomemail',accountcontoller)
module.exports = router;
