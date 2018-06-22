const Player = require('./models/player')

module.exports = mongoose => ({
  Player: Player(mongoose),
})