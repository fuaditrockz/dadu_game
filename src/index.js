const cli = require('./modules/cli')
const Table = require('cli-table3');

var table = new Table({
  head: ['No.', 'Players Name']
, colWidths: [5, 20]
});

let totalPlayers
let totalDices
let players = []

const printQuestions = async () => {
  const getPlayers = await cli.createQuestion('Player', 'How many players will be play?')
  const getDices = await cli.createQuestion('Dice', 'How many dices you will play?')
  
  if (!getDices || !getPlayers) {
    console.log('Please answer all question correctly.')
    printQuestions()
  } else {
    totalPlayers = getPlayers
    totalDices = getDices
    console.log('---------------------------------------------')
    console.log(`Total: ${totalPlayers} players & and each players have ${totalDices} dices`)
  }
}

const insertPlayerName = async () => {
  const playerName = await cli.createQuestion('Player Name', `Please insert players username`)
  players.push(playerName)
  const playerIndexPosition = players.indexOf(playerName)
  table.push([playerIndexPosition + 1, playerName])
  players.length < totalPlayers ? insertPlayerName() : console.log(table.toString())
}

const dadu_game = async () => {
  await printQuestions()
  await insertPlayerName()
}

module.exports = dadu_game