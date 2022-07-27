const { I } = inject();

module.exports = {
  fields: {
    email: '~email',
    password: '~senha'
  },

  buttons: {
    enter: '~entrar'
  },

  messages: {
    login_error: '~lognFail'
  },

  fillEmail() {
    I.fillField(this.fields.email, 'teste@teste.com')
  },

  fillWrongEmail() {
    I.fillField(this.fields.email, 'wrong_email@teste.com')
  },

  fillPassword() {
    I.fillField(this.fields.password, '123456')
  },

  tapButtonEnter() {
    I.tap(this.buttons.enter)
  },

  checkLoginError() {
    I.waitForElement(this.messages.login_error, 5)
    I.seeElement(this.messages.login_error)
  },

  doLogin() {
    I.fillField(this.fields.email, 'teste@teste.com')
    I.fillField(this.fields.password, '123456')
    I.tap(this.buttons.enter)
  },
}
