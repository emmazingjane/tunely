var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

var Schema = mongoose.Schema

var AlbumSchema = new Schema({
	name: String,
	artistName: String,
	releaseDate: String,
	genres: [ String ]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;