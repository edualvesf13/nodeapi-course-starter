const mongoose = require('mongoose')
const { Date } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema)