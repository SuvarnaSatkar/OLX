const db=require('../model/index.model')

const usertbl=db.usertbl;
const producttbl=db.producttbl;
const sequelize=db.sequelize;
const Sequelize=db.Sequelize;
const bcrypt=require('bcrypt');
const req = require('express/lib/request');
module.exports={
    getallUsers:(req, res, next) =>{
        // usertbl.findAll({})
        // sequelize.query('select * from usertbl',{
        //     replacements: [],
        //     type: Sequelize.SELECT
        //   })
        usertbl.findAll({include:producttbl}).then((data)=>{
            res.send({error:false, data:data});
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    createUser:(req, res, next) =>{
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.user_password,salt)
        const user ={
            user_name:req.body.user_name,
            user_mobileno:req.body.user_mobileno,
            user_email:req.body.user_email,
         
            user_password:hash
        }
        console.log(user);
        usertbl.create(user).then((data)=>{
            res.send({error:false, data:data,message:"user created"});
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    updateUser:(req,res) =>{
        let userid=req.body.id;
        usertbl.update({isActive:false},{where:{id:userid}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"User updated"});
            }else{
                res.send({error:false, message:"User not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    deleteUser:(req,res, next) =>{
        let userid=req.body.id;
        usertbl.destroy({where:{id:userid},truncate:false}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"User deleted"});
            }else{
                res.send({error:false, message:"User not deleted"}); 
            }
            
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
}