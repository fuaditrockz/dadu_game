const cli = require('./modules/cli')

const printQuestions = async () => {
  const getPlayers = await cli.createQuestion('How many players will be play?', 'Player')
  const getDices = await cli.createQuestion('How many dices you will play?', 'Dice')
  
  if (!getDices || !getPlayers) {
    cli.print('Please answer all question correctly.')
    printQuestions()
  } else {
    cli.print(getPlayers + ' ' + getDices)
    cli.close()
  }
}

const dadu_game = async () => {
  await printQuestions()
}

module.exports = dadu_game