const express = require('express');
const router = express.Router();
const {addplaylist, getAllplaylist, getplaylistById, updateplaylist, deleteplaylist} = require('../controllers/recipescontroller.js');
const {addSongToPlaylist, removeSongFromPlaylist, getSongsInPlaylist} = require('../controllers/playlistscontroller.js');

router.get('/playlists', getAllplaylists); // Retrieve all playlists
router.get('/playlists/:id', getplaylistById); // Retrieve a specific playlist by ID
router.post('/addplaylists', addplaylist); // Add a new playist
router.put('/playlists/:id', updateplaylists); // Update an existing playlist by ID
router.delete('/playlists/:id', deleteplaylist); // Delete a playlist by ID

// Song routes for playlists
router.get('/playlists/:id/songs', getSongsInPlaylist); // Retrieve a list of songs in a specific playlist
router.post('/playlists/:id/songs', addSongToPlaylist); // Add a new song to a playlist
router.delete('/playlists/:id/songs/:songId', removeSongFromPlaylist); // Remove a song from a playlist


module.exports = router; // Export the router to be used in other files