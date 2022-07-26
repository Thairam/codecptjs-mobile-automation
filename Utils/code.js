const { faker } = require('@faker-js/faker')

const getCode = () => {
  return faker.random.numeric(4)
}

exports.getCode = getCode