This is a simple setup where we’re testing a registration form using Cypress and some test data from a JSON file.


📂 Project Structure
Here's how things are laid out:

/cypress
  ├── /fixtures
  │   └── registration-test-data.json   // Test data (users with valid/invalid info)
  ├── /e2e
  │   └── registration.cy.js           // Our main test file
  └── /support
      └── commands.js                  // Custom Cypress command

🚀 Getting Started
Prerequisites
Make sure you have these installed:
Node.js
Cypress (installed via npm)


Install Dependencies
First, install the Cypress dependencies:
npm install

Run Cypress
To open Cypress and start running the tests:
npx cypress open
Or, if you want to run the tests headlessly:
npx cypress run


🛠️ Test Workflow
What’s Being Tested?
We’re testing the registration flow with both:
Valid User Data: Ensures the user gets registered successfully and navigates to the dashboard.
Invalid User Data: Checks if error messages are displayed properly for invalid inputs.

Features
Tests form fields like First Name, Last Name, Username, Password, and Gender.
Automatically clears fields and resets the form after each test case.

Test Data
We’re using a JSON file for test data (cypress/fixtures/registration-test-data.json). It includes:
Valid User: A user with proper data for successful registration.
Invalid Users: Test cases with missing or incorrect data and the expected error messages.

Clearing Fields
For invalid test cases, the form inputs and selected radio buttons are cleared/reset after each registration attempt using .clear() and custom logic for radio buttons.

🛑 Common Issues
1. Cannot Read Properties of Undefined
This usually happens if the JSON keys don’t match what’s used in the test code. Double-check your test data file (invalidUsers is correct, not invalidUserData).
2. clear() Not Working
If .clear() isn’t working for certain fields, ensure you’re targeting the actual <input> element, not a wrapper or container element.
3. Error for Missing Dependencies
Run npm install to ensure all dependencies are properly installed.

