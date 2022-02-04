const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
	{
		source: {
			type: String,
			required: true,
        },
        
        destination: {
            type: String,
			required: true,
        },

		date: {
			type: Date,
			required: true,
        },
        
        type: {
            type: String,
			required: true,
        },

        user: {
            ref: "User",
            type:mongoose.Schema.Types.ObjectId
        }
		
	},
	{ timeStamp: true }
);



module.exports = mongoose.model("Booking", bookingSchema);
