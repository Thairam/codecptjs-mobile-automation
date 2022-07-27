const { home_page } = inject()

When('I register a student', () => {
  home_page.registerStudent()
})

Then('I see the student registered', () => {
  home_page.validateStudentBeenRegistered()
})
