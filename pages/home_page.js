const { I } = inject()
const name = require('../utils/name')
const code = require('../utils/code')

const getCode = code.getCode()
const getName = name.getName()

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

  registerStudent() {
    I.fillField(this.fieds.code, getCode)
    I.fillField(this.fieds.name, getName)
    I.tap(this.buttons.save)
  },

  validateStudentBeenRegistered() {
    I.fillField(this.fieds.search, getName)
    I.runOnAndroid(() => I.seeElement(this.fieds.studentAndroid(getCode)))
    I.runOnIOS(() => I.seeElement(this.fieds.studentIOS(getCode)))    
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
