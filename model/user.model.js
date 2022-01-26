//const connection=require('./index.model');
module.exports = (sequelize, Sequelize) => {
  
    const model = sequelize.define("usertbl", {
        
      user_id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      user_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      user_mobileno: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },
      user_password: {
        type: Sequelize.STRING(60),
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
  
    return model;
  };

  