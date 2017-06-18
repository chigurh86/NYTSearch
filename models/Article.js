var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ArtSchema = new Schema ({
  title: {
    type: String
  },
  date: {
    type: String
  },
  url: {
    type: String
  }
});

var Article = mongoose.model('Article', ArtSchema);
module.exports = Article;
