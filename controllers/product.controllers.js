const db = require('../model/index.model')

const producttbl = db.producttbl;
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

module.exports = {
    getallproduct: (req, res, next) => {

        sequelize.query('select * from producttbl', {
            replacements: [],
            type: Sequelize.SELECT
        }).then((data) => {
            res.send({ error: false, data: data[0] });
        }).catch((err) => {
            res.send({ error: true, err: err });
        })
    },
    createproduct: (req, res, next) => {
        const product = {
            Prod_name: req.body.product_name,
            Prod_price: req.body.product_price,
            Prod_qty: req.body.product_qty
        }
        console.log(product);
        producttbl.create(product).then((data) => {
            res.send({ error: false, data: data, message: "product inserted" });
        }).catch((err) => {
            res.send({ error: true, err: err });
        })
    },
    updateproduct: (req, res) => {
        let Prod_id = req.body.product_id;
        usertbl.update({ isActive: false }, { where: { id: Prod_id } }).then((data) => {
            if (data > 0) {
                res.send({ error: false, message: "product updated" });
            } else {
                res.send({ error: false, message: "product not updated" });
            }
        }).catch((err) => {
            res.send({ error: true, err: err });
        })
    },
    deleteproduct: (req, res, next) => {
        let Prod_id = req.body.product_id;
        usertbl.destroy({ where: { id: Prod_id }, truncate: false }).then((data) => {
            if (data > 0) {
                res.send({ error: false, message: "product deleted" });
            } else {
                res.send({ error: false, message: "product not deleted" });
            }

        }).catch((err) => {
            res.send({ error: true, err: err });
        })
    }
}