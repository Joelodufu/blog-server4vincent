const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = "mongodb+srv://vindahs:school3school3@cluster0.sufm3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// Connect MongoDB at default port 27017.
let mong = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB COnnected to vincents database.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
