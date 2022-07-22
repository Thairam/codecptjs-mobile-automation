const { I } = inject();

module.exports = {
  buttons: {
    save: '~salvar'
  },

  fieds: {
    code: { ios: '', android: '~codigo' },
    name: { ios: '', android: '~aluno' },
    search: { ios: '', android: '~search' },
    studentAndroid: (check) => '//android.view.ViewGroup[@content-desc="' + check + '"]',
    studentIOS: (check) => ''
  },

  registerStudent(code, name) {
    I.fillField(this.fieds.code, code)
    I.fillField(this.fieds.name, name)
    I.tap(this.buttons.save)
  },

  searchStudent(search, check) {
    I.fillField(this.fieds.search, search)
    I.runOnAndroid(() => I.seeElement(this.fieds.studentAndroid(check)))
    I.runOnIOS(() => I.seeElement(this.fieds.studentIOS(check)))
  },

  checkLoginSuccess() {
    I.waitForElement(this.buttons.save, 5)
    I.seeElement(this.buttons.save)
  }
}
