const readline = require('readline')

const {
  questionColor,
  errorColor
} = require('./colors')

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const createQuestion = (question, reference) => {
  const questionPromise = () => new Promise((resolve, reject) => {
    rlInterface.question(questionColor(`> ${question} -> `), answer => {
      const answerToInt = parseInt(answer)
      !answer || isNaN(answerToInt) ? reject() : resolve(answer)
    })
  })

  return questionPromise()
    .then(result => result)
    .catch(err => {
      console.log(errorColor(`(!) Answer of ${reference} not found: ${err}`))
      console.log(errorColor(`    Please fill with number and not alphabet`))
      console.log('----------------------------------------')
    })
}

const close = () => {
  rlInterface.close()
}

const cli = {
  createQuestion,
  close
}

module.exports = cli