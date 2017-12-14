var mongoose = require("mongoose");
var csv = require('csvtojson');
var fs = require("fs");
mongoose.connect('mongodb://localhost/products', {
    useMongoClient: true
});

var ProductSchema = mongoose.Schema({
    sku: String,
    location: String,
    department: String,
    category: String,
    subcategory: String
});
var Product = mongoose.model("Product", ProductSchema);

var productFile = fs.readFileSync('Data.csv', 'utf8');



csv()
    .fromFile(productFile)
    .on('csv', (csvRow) => {
        csvRow.forEach(function (element) {
            // Save data on mongo database
            console.log(element);
            Product.save({

                sku: element.SKU,
                location: element.LOCATION,
                department: element.DEPARTMENT,
                category: element.CATEGORY,
                subcategory: element.SUBCATEGORY

            }, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    callback(result);
                }
            });
        }, this);
    })
    .on('done', (error) => {
        console.log('end')
    });