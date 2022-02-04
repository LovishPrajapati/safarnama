const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
        },
        
        description: {
            type: String,
			required: true,
        },

		price: {
			type: Number,
			required: true,
        },
        
        imageURl: {
            type: String,
			required: true,
        }
		
	},
	{ timeStamp: true }
);



module.exports = mongoose.model("Product", productSchema);
