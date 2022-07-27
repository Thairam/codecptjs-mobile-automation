Feature('Students')

const { login_page, home_page } = inject()
const name = require('../Utils/name')
const code = require('../Utils/code')

Scenario('Add student with success', ({ I }) => {
  const getCode = code.getCode()
  const getName = name.getName()

  login_page.doLogin('teste@teste.com', '123456')
  home_page.registerStudent(getCode, getName)
  home_page.searchStudent(getName, getCode)
})
