const Booking = require('../models/Booking')

const add = async (req, res) => {
    const {source,destination,date,type,user } = req.body;
    const BookRes = new Booking({ source,destination,date,type,user })
    if (!BookRes) {
        res.status(409).json({
            success:false,
            error: "Something went wrong"
        })
    }
    await BookRes.save()
    res.status(201).json({
        success: true,
        message: "Created Successfully",
        data:BookRes
    })
}

const getAllBookings = async (req, res, next) => {
    const queries = await (await Booking.find({})).populate("user")
    res.status(200).json({
        success: true,
        message: 'Data sent',
        data:queries
    })
}

module.exports = {getAllBookings,add}