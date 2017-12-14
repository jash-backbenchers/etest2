var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var productSchema=new Schema(
{
	sku:{type:String,required:true,unique:true},
	name:{type: String},
	location:{type: String},
	department:{type:String},
	category:{type:String},
	subcategory:{type:String}
});

var Product=mongoose.model('Product', productSchema);

module.exports=Product;