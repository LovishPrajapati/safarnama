const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
			unique: true,
        },
        
        query: {
            type: String,
			required: true,
        }
		
	},
	{ timeStamp: true }
);



module.exports = mongoose.model("Query", querySchema);
