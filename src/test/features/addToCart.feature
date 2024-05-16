Feature: User Add Book To Cart

  Background:
    Given User navigates to the practice application
    And User click on the my login link

  Scenario Outline: Login should be success
    And User enter the username as "<username>"
    And User enter the password as "<password>"
    And User click on the login button
    And User search for a "<bookName>"
    When User add the book to the cart
    Then The cart badge should get updated

 Examples:
    | username | password | bookName  |
    | playwright | validpassword | Before We Were Yours  |
    | testu | validpassword | A Dance with Dragons  |