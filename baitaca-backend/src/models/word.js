import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: { type: String, required: true, maxLength: 100 }
});


// Export model
var words = mongoose.model('words', wordSchema)
export default words;

