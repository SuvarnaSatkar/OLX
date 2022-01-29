//const connection=require('./index.model');
module.exports = (sequelize, Sequelize) => {
  
    const pmodel = sequelize.define("producttbl", {
        
      Prod_id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      Prod_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      Prod_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Prod_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
      },
           isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
    },
    {
      freezeTableName: true
    });
  
    return pmodel;
  };

  