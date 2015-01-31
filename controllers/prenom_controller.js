var mongoose = require('mongoose'),
  Prenoms = mongoose.model('prenoms');
exports.getPrenoms = function(req, res) {
    Prenoms.find({}).sort({CategoryName:1, Nominee:1})
      .exec(function(err, series) {
          if (!series) {
              res.json(404, {msg: 'Prenoms Not Found.'});
          } else {
              res.json(series);
          }
      });
};
