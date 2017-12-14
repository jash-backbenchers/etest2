var config = require('../../config');
var Product = require('../models/product');

var middleware = require('../middleware/middleware');

module.exports = function (app, express) {
    var api = express.Router();

    api.get('/categories', function (req, res) {
        
        const aggregatorOpts = {
            $group: {
                _id: "$department",
                count: {
                    $sum: 1
                }
            }
        }

        var categories = Product.aggregate(aggregatorOpts).exec(function (err, categories) {
            res.json(categories);
        });

    });

    api.post('/products', function (req, res) {

        let q = {
            sku: req.body.sku,
            location: req.body.location,
            department: req.body.department,
            category: req.body.category,
            subcategory: req.body.subcategory
        }

        Object.keys(q).forEach(k => (q[k] === undefined) && delete q[k]);

        Product.find(q, function (err, products) {
            res.json(products);
        })

    });

    api.get('/product/:id', function (req, res) {
        Product.findById(req.params.id, function (err, product) {
            res.json(product);
        })

    });

    api.post('/product', function (req, res) {

        let product = new Product({
            sku: req.body.product.sku,
            name: req.body.product.name,
            location: req.body.product.location,
            department: req.body.product.department,
            category: req.body.product.category,
            subcategory: req.body.product.subcategory
        })

        product.save(function (err, product) {
            res.json(product);
        })

    });


    api.put('/product', function (req, res) {

        let data = {
            sku: req.body.product.sku,
            name: req.body.product.name,
            location: req.body.product.location,
            department: req.body.product.department,
            category: req.body.product.category,
            subcategory: req.body.product.subcategory
        }

        console.log(data);
        
        Product.findByIdAndUpdate(req.body.product._id, data, {new: true}, function (err, product) {
            res.json(product);
        })
    });

    api.delete('/product/:id', function (req, res) {
        
        Product.findByIdAndRemove(req.params.id, function (err, product) {
            res.json(product);
        })

    });

    api.post('/login', function (req, res) {});

    return api;
}