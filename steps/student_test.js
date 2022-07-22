Feature('Students')

const { I, login_page, home_page } = inject()

Scenario('Add student with success', (I) => {
  const code = '9090'
  const name = 'Thairam Michel'

  login_page.doLogin('teste@teste.com', '123456')
  home_page.registerStudent(code, name)
  home_page.searchStudent(name, code)
})
