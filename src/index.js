const cli = require('./modules/cli')

let totalPlayers
let totalDices

const printQuestions = async () => {
  const getPlayers = await cli.createQuestion('How many players will be play?', 'Player')
  const getDices = await cli.createQuestion('How many dices you will play?', 'Dice')
  
  if (!getDices || !getPlayers) {
    console.log('Please answer all question correctly.')
    printQuestions()
  } else {
    totalPlayers = getPlayers
    totalDices = getDices
  }
}

const dadu_game = async () => {
  await printQuestions()
  console.log(`Total: ${totalPlayers} Players & ${totalDices} Dices`)
}

module.exports = dadu_game