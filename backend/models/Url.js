const mongoose = require("mongoose")
const {Schema} = mongoose

const urlSchema = new Schema({
  longURL: {
    type: String,
    required: true 
  },
  shortURL:{
    type: String,
    required: true,
    unique: true
  }

})

const URL = mongoose.model("URL", urlSchema)

module.exports = {URL, urlSchema}