import async from 'async'
import Word from './models/word.js'
import config from './environment.js'
import mongoose from 'mongoose';


mongoose.connect(config.mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var words = []

function wordCreate(word, first_letter, cb) {
    let worddetail = { word:word , first_letter: first_letter }
    
    var word = new Word(worddetail);
         
    word.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New Word: ' + word);
      words.push(word)
      cb(null, word)
    }  );
  }

  function createWords(cb) {
    async.parallel([
        function(callback) {
          wordCreate('paralelepípedo',  'p', callback);
        },
        function(callback) {
          wordCreate('poste',  'p', callback);
        },
        function(callback) {
          wordCreate('tábua',  'p', callback);
        },
        function(callback) {
            wordCreate('tijolo',  't', callback);
        }
    ],
    cb);
}

async.series([
    createWords
],
function(err, results) {
    if (err) {
        console.log('FiNAL ERR: '+err);
    } else {
        console.log('Word Instances: '+words)
    }
    mongoose.connection.close(); 
});