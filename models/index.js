var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.exports.Album = require("./albums.js");
// these are both the same
// varAlbum = require('./album.js');
// module.exports = {
// 	Album: AlbumModel
// }