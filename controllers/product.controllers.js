const db=require('../model/index.model')

const producttbl=db.producttbl;
const sequelize=db.sequelize;
const Sequelize=db.Sequelize;
const req = require('express/lib/request');
module.exports={
    getallproduct:(req, res, next) =>{
       
        sequelize.query('select * from producttbl',{
            replacements: [],
            type: Sequelize.SELECT
          }).then((data)=>{
            res.send({error:false, data:data[0]});
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    createproduct:(req, res, next) =>{
                const product ={
                    product_name:req.body.product_name,
                    product_price:req.body.product_price,
                    product_qty:req.body.product_qty                 
                            }
        console.log(product);
        producttbl.create(product).then((data)=>{
            res.send({error:false, data:data,message:"product inserted"});
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    updateproduct:(req,res) =>{
        let userid=req.body.id;
        usertbl.update({isActive:false},{where:{id:userid}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"product updated"});
            }else{
                res.send({error:false, message:"product not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    deleteproduct:(req,res, next) =>{
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