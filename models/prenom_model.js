var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var PrenomSchema = new Schema({
  CategoryName: String,
  Nominee: String,
  NominatedFilm: String,
  Chances: String
}, {_id : true});
mongoose.model('prenoms', PrenomSchema);