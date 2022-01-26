var express = require('express');
var router = express.Router();
const userContoller=require('../controllers/user.controllers')
const productController=require('../controllers/product.controllers')
/* GET users listing. */

//router.get('/allusers',userContoller.getallUsers);

router.post('/createuser',userContoller.createUser);
router.post('/createproduct',productController.createproduct);
module.exports = router;
