const playlist = require('../models/playlist')

// Retrieve all playlists
const getAllplaylists = async (req, res) => {
    letplaylists = await playlist.find(); // Fetch all playlists from the database

    res.json(playlists); // Send the playlists as a JSON response
}

// Add a new playlist
const addPlaylist = (req, res) => {
    const newPlaylist = new playlist(req.body); // Create a new playlist instance with the request body

    newPlaylist.save() // Save the new playlist to the database
        .then((playlist) => {
            console.log("Playlist created successfully:", playlist); // Log success message
            res.status(201).json(Playlist); // Respond with the created playlist and a 201 status code
        })
        .catch((error) => {
            res.status(500).json({ error: "Error creating playlist" }); // Handle errors and respond with a 500 status code
        });
}

// Retrieve songs in a specific playlist
const retrieveSongs = async (req, res) => {
    Playlist.findById(req.params.id) // Find the playlist by its ID
        .then(async (playlist) => {
            playlist.songs.push(req.body); // Add the song from the request body to the playlist's songs array

            await playlist.save(); // Save the updated playlist

            res.json(playlist); // Respond with the updated playlist
        })
        .catch((error) => {
            res.status(500).json({ error: "Error retrieving songs" }); // Handle errors and respond with a 500 status code
        });
}

const addSong = async (req, res) => {
    Playlist.findById(req.params.id) // Find the playlist by its ID
        .then((playlist) => {

            res.json(playlist.songs); // Respond with the updated playlist
        })
        .catch((error) => {
            res.status(500).json({ error: "Error adding song" }); // Handle errors and respond with a 500 status code
        });
}

// Delete a song from a playlist
const deleteSong = (req, res) => {
    Playlist.findById(req.params.id) // Find the playlist by its ID
        .then(async (playlist) => {
            // Filter out the song to be deleted using its ID
            playlist.song = playlist.songs.filter(song => song._id != reg.params.sondId);

            await play.save(); // Save the updated playlist
            res.json(paylist); // Respond with the updated playlist
        })
        .catch((error) => { 
            res.status(500).json({ error: "Error deleting song" }); // Handle errors and respond with a 500 status code
        });
}