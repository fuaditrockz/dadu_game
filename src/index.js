const cli = require('./modules/cli')

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
  players.length < totalPlayers && insertPlayerName()
}

const dadu_game = async () => {
  await printQuestions()
  await insertPlayerName()
}

module.exports = dadu_game