const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let playlists = [
    {
        id: 1,
        title: 'Epic Adventure',
        description: 'Songs for an epic fantasy journey.',
        creator: 'Link',
        songs: [
            {
                id: 1,
                title: 'Song of Storms',
                artist: 'Koji Kondo',
                duration: '3:00'
            },
            {
                id: 2,
                title: 'Gerudo Valley',
                artist: 'Koji Kondo',
                duration: '3:30'
            }
        ]
    },
    {
        id: 2,
        title: 'Classic Rock',
        description: 'Best of 70s and 80s rock.',
        creator: 'Freddie',
        songs: [
            {
                id: 1,
                title: 'Bohemian Rhapsody',
                artist: 'Queen',
                duration: '5:55'
            },
            {
                id: 2,
                title: 'Stairway to Heaven',
                artist: 'Led Zeppelin',
                duration: '8:02'
            }
        ]
    }
];

// Get all playlists
app.get("/playlists", (req, res) => {
    let allPlaylists = playlists;
    res.send(allPlaylists);
});

// Get a specific playlist by ID
app.get("/playlists/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let playlist = playlists.find(p => p.id === id);
    if (!playlist) {
        return res.status(404).send({ error: "Playlist not found" });
    }
    res.send(playlist);
});

// Add a new playlist
app.post("/playlists", (req, res) => {
    let { title, description, creator } = req.body;
    let newPlaylist = {
        id: playlists.length + 1,
        title,
        description,
        creator,
        songs: []
    };
    playlists.push(newPlaylist);
    res.send(newPlaylist);
});

// Update a playlist by ID
app.put("/playlists/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let playlist = playlists.find(p => p.id === id);
    if (!playlist) {
        return res.status(404).send({ error: "Playlist not found" });
    }

    let { title, description, creator } = req.body;
    if (title) playlist.title = title;
    if (description) playlist.description = description;
    if (creator) playlist.creator = creator;

    res.send(playlist);
});

// Delete a playlist by ID
app.delete("/playlists/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let index = playlists.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).send({ error: "Playlist not found" });
    }
    playlists.splice(index, 1);
    res.send({ message: "Playlist deleted successfully" });
});

// Get all songs in a specific playlist
app.get("/playlists/:id/songs", (req, res) => {
    let id = parseInt(req.params.id);
    let playlist = playlists.find(p => p.id === id);
    if (!playlist) {
        return res.status(404).send({ error: "Playlist not found" });
    }
    res.send(playlist.songs);
});

// Add a new song to a playlist
app.post("/playlists/:id/songs", (req, res) => {
    let id = parseInt(req.params.id);
    let playlist = playlists.find(p => p.id === id);
    if (!playlist) {
        return res.status(404).send({ error: "Playlist not found" });
    }
    
    let { title, artist, duration } = req.body;
    let newSong = {
        id: playlist.songs.length + 1,
        title,
        artist,
        duration
    };
    playlist.songs.push(newSong);
    res.send(newSong);
});

// Delete a song from a playlist
app.delete("/playlists/:id/songs/:songId", (req, res) => {
    let playlistId = parseInt(req.params.id);
    let songId = parseInt(req.params.songId);

    let playlist = playlists.find(p => p.id === playlistId);
    if (!playlist) {
        return res.status(404).send({ error: "Playlist not found" });
    }

    let songIndex = playlist.songs.findIndex(s => s.id === songId);
    if (songIndex === -1) {
        return res.status(404).send({ error: "Song not found in playlist" });
    }

    playlist.songs.splice(songIndex, 1);
    res.send({ message: "Song deleted successfully" });
});

// Server start
let port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



