var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var PrenomSchema = new Schema({
  CategoryName: String,
  Nominee: String
}, {_id : true});
mongoose.model('prenoms', PrenomSchema);