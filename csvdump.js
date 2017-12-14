const csv = require('csvtojson');
const mongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Mongodb Connection URL 
const url = 'mongodb://localhost:27017/ecommerce';

// Use connect method to connect to the Server
mongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    console.log("Connected correctly to Database");
    insertDocuments(db, function () {
        db.close();
    });
});

const insertDocuments = (db, callback) => {
    // Get the documents collection
    let collection = db.collection('products');
    // CSV File Path
    const csvFilePath = 'Data.csv';
    /**
     * Read csv file and save every row of
     * data on mongodb database
     */
    csv()
        .fromFile(csvFilePath)
        .on('csv', (csvRow) => {
            let element=csvRow;
            // Save data on mongo database
            collection.insertOne({
                sku: element[0],
                name: element[1],
                location: element[2],
                department:element[3],
                category: element[4],
                subcategory: element[5] 
            }, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    callback(result);
                }
            });
            
        })
        .on('done', (error) => {
            console.log('end');
        });
}