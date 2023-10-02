const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect("mongodb://localhost:27017/Shlok", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successfull"))
    .catch((err)=> console.log(err));

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minlength: 2,
        maxlength:30,
    },

    ctype: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["frontend", "backend", "database"]
    },
    videos: {
        type: Number,
        validate(value) {
            if (value < 0)
            {
                throw new Error("error no cannot be negative")
                }
        }
    },
    author: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
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
            name: "js ",
         ctype:"Database",
            videos: 8,
            author: "shlok",
            email:"shlok@gmail.com",
            active: true,

        })
        const result = await Playlist.insertMany([ mongoosePlaylist]);
        console.log(result)
    } catch (err) {
        console.log(err);
}
  
    
}
createDocument();
const getDocument = async () => {
    const result = await Playlist.find
        ({ author: "shlok" })
        .select({ name: 1 })
        .sort({name:1});
        // .countDocuments();
    
    // console.log(result)
}
// getDocument();
const updateDocument = async (_id) => {
    try {
        const result = await Playlist.findByIdAndUpdate({ _id }, {
            $set: {
                author: "Shlok Jagtap"
            }, 
                new:true,
        })
        console.log(result)
        
    } catch (err) {
        console.log(err)
        
    }
  
}
// updateDocument("651a8f5605bffd7e9e7fb1a9")
const deleteDocument = async (_id) => {
    try {
        const result = await Playlist.deleteOne({ _id });
        console.log(result)

    } catch (err) {
        console.log(err)
    }
    
}

// deleteDocument("651a8f5605bffd7e9e7fb1a9")

