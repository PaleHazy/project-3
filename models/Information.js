const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let InformationSchema = new Schema({
  
    name: {
      type: String
    },
    language: {
      type: String
    }
  
});

let Information = mongoose.model("Information", InformationSchema);
module.exports = Information;
