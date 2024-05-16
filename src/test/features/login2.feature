Feature: User Authentication tests

  Background:
    Given User navigates to the practice application
    And User click on the my account link

  Scenario: Login should be success
    And User enter the username as "Valid Username"
    And User enter the password as "Valid Password"
    When User click on the login button
    Then Login should be success

    
  Scenario: Login should not be success
    And User enter the username as "Invalid Username"
    And User enter the password as "Invalid Password"
    When User click on the login button
    Then Login should be fail