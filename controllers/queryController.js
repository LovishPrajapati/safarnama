const Query = require('../models/Queries')

const addQuery = async (req, res) => {
    const {name,email,query } = req.body;
    const queryRes = new Query({ name, email, query })
    if (!query) {
        res.status(409).json({
            success:false,
            error: "Something went wrong"
        })
    }
    await query.save()
    res.status(201).json({
        success: true,
        message: "Created Successfully",
        data:queryRes
    })
}

const getAllQueries = async (req, res, next) => {
    const queries = await Query.find({})
    res.status(200).json({
        success: true,
        message: 'Data sent',
        data:queries
    })
}

module.exports = {getAllQueries,addQuery}