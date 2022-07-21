Feature('login');

const { I, login_page, home_page } = inject()

BeforeSuite(() => {
  console.log('Before all tests')
})

Before(() => {
  console.log('Before each test')
})

AfterSuite(() => {
  console.log('After all tests')
})

After(() => {
  console.log('After each test')
})

Scenario('login with success', () => {
  login_page.doLogin('teste@teste.com', '123456')
  home_page.checkLoginSuccess()
});

Scenario('login with error', () => {
  login_page.doLogin('wrong_email@email.com', '123456')
  login_page.checkLoginError()
});
