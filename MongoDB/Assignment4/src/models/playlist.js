const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    duration: { type: String, required: true }
});

const PlaylistSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    songs: [SongSchema]
});

module.exports = mongoose.model('Playlist', PlaylistSchema);