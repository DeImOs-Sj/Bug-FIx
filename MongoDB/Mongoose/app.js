const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/Shlok", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successfull"))
    .catch((err)=> console.log(err));

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default:Date.now
    }
})

const Playlist = new mongoose.model("Playlist", playlistSchema)

const createDocument = async () => {
    try {
        const reactPlaylist = Playlist({
            name: "React.js",
            ctype: "Frontend",
            videos: 80,
            author: "shlok",
            active: true,

        })
        const jsPlaylist = Playlist({
            name: "React.js",
            ctype: "Frontend",
            videos: 180,
            author: "shlok",
            active: true,

        })
        const mongodbPlaylist = Playlist({
            name: "Database",
            ctype: "Backend",
            videos: 80,
            author: "shlok",
            active: true,

        })
        const mongoosePlaylist = Playlist({
            name: "mongoose",
            ctype: "Backend",
            videos: 88,
            author: "shlok",
            active: true,

        })
        const result = await Playlist.insertMany([reactPlaylist, jsPlaylist, mongodbPlaylist, mongoosePlaylist]);
        console.log(result)
    } catch (err) {
        console.log(err);
}
  
    
}
// createDocument();
const getDocument = async () => {
    const result = await Playlist.find({videos:{$gte:80}}); 
    console.log(result)
}
getDocument();

