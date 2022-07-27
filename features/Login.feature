@login
Feature: Login
  Eu como usuário
  Gostaria de fazer Login
  Para acessar o sistema

  @login_success
  Scenario: Login with success
    Given I fill email
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button

  @login_error
  Scenario: Login with error
    Given I fill wrong email
    And I fill password
    When I tap on Entrar
    Then I see the Login error
