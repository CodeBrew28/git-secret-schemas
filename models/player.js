const { Schema } = require('mongoose');

const PlayerSchema = new Schema({
    email: { type: String, required: true, unique: true }
})
  
module.exports = m => m.model('Player', PlayerSchema)
