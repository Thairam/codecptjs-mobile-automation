@student
Feature: Student
  Eu como usuário
  Gostaria de cadastrar estudante
  Para posteriormente poder acessar o sistema

  @add_student_success
  Scenario: Add student with success
    Given I'm logged in
    When I register a student
    Then I see the student registered