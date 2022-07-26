const { faker } = require('@faker-js/faker')

const getName = () => {
  return faker.internet.userName()
}

exports.getName = getName