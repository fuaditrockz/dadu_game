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

const print = wording => {
  console.log(wording)
}

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
      print(errorColor(`(!) Answer of ${reference} not found: ${err}`))
      print(errorColor(`    Please fill with number and not alphabet`))
      print('---------------------------------------------')
    })
}

const close = () => {
  rlInterface.close()
}

const cli = {
  createQuestion,
  close,
  print
}

module.exports = cli