const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'olxdb', 'root', '', {
    host: 'localhost',
            dialect: 'mysql'
    });
sequelize.authenticate().then(()=>{

    console.log('connected to database');
}).catch(err => {

    console.log('not connected');
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.usertbl = require('./user.model')(sequelize, Sequelize)
db.producttbl = require('./product.model')(sequelize, Sequelize)
db.usertbl.hasMany(db.producttbl,{foreinKey:'user_id'});
db.producttbl.belongsTo(db.usertbl);
module.exports = db;