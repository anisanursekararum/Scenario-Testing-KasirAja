Feature: Login
    In order to login application
    As a User
    I need to enter the Valid name and password
    So that successfully login

    Background: 
        Given user navigate to the KasirAja login website

    Scenario: In order to login KasirAja
        Given email already registered
        When user enters the "Valid" email "Valid" password
        Then user should "be" successfully loggedin to the application

    Scenario: In order to login KasirAja with invalid login
        Given email not registered
        When user enters the "InValid" email "InValid" password
        Then user should "not" successfully loggedin to the application
     
 