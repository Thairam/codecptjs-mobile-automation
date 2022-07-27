const { login_page, home_page } = inject()

Given('I fill email', () => {
  login_page.fillEmail()
})

Given('I fill wrong email', () => {
  login_page.fillWrongEmail()
})

Given('I fill password', () => {
  login_page.fillPassword()
})

When('I tap on Entrar', () => {
  login_page.tapButtonEnter()
})

Then('I see the Salvar button', () => {
  home_page.checkLoginSuccess()
})

Then('I see the Login error', () => {
  login_page.checkLoginError()
})

Given("I'm logged in", () => {
  login_page.doLogin()
})
