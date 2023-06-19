# PortOne Global Automation Script with Cypress
Welcome to the PortOne Global Automation Script project! This repository contains the automation script written using Cypress, a powerful end-to-end testing framework. The script aims to automate the testing of various functionalities and scenarios within the PortOne Global fintech application. Additionally, this project includes integration with Jenkins, a popular automation server, to enable continuous integration and automated testing.
## About PortOne Global
PortOne Global is a fintech company that provides innovative financial solutions to individuals and businesses. The company's mission is to simplify financial processes and empower users to manage their money effectively. The automation script for PortOne Global has been developed to ensure the reliability and quality of the application through automated testing.
## Features
The PortOne Global Automation Script offers the following features:
- **End-to-End Testing**: Automate the testing of critical workflows and user journeys in the PortOne Global fintech application.
- **Cross-Browser Testing**: Execute tests across different web browsers to ensure compatibility and consistency.
- **UI and Functional Testing**: Validate the application's user interface elements and functionalities.
- **Data-Driven Testing**: Perform tests with different datasets to cover a wide range of scenarios.
- **Reporting and Analysis**: Generate comprehensive test reports to identify issues and track test coverage.
## Prerequisites
Before running the automation script, ensure that you have the following software installed:
- [Node.js](https://nodejs.org) - JavaScript runtime environment
- [Cypress](https://www.cypress.io) - End-to-End testing framework
## Installation
To install and set up the PortOne Global Automation Script locally, follow these steps:
1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/ChaiFinance_QA.git
   ```
2. Navigate to the project directory:
   ```shell
   cd ChaiFinance_QA

   ```
3. Install the dependencies:
   ```shell
   npm install
   ```
## Configuration
Before running the automation script, make sure to configure the necessary settings. Update the configuration files as follows:
1. Open `cypress.json` and modify the URL to match the address of the PortOne Global application.
2. Adjust other Cypress configuration options, such as browser preferences or viewport settings, as required.
## Running Tests
To run the automation tests, use the following command:
```shell
npx cypress run
```
This command executes the tests headlessly, and the results will be displayed in the command line.
To run tests interactively using the Cypress Test Runner, use the following command instead:
```shell
npx cypress open
```
This command opens the Cypress Test Runner, where you can select and run individual test cases or the entire suite.
## Jenkins Integration
To integrate the PortOne Global Automation Script with Jenkins, follow these steps:
1. Set up Jenkins on your preferred environment.
2. Create a new Jenkins job for the automation script.
3. Configure the Jenkins job to fetch the project from your repository.
4. Specify the necessary build steps, which typically include installing dependencies and executing the automation script.
5. Configure triggers to run the Jenkins job automatically, such as on a schedule or when changes are pushed to the repository.
6. Save the Jenkins job configuration and start the job.
7. Monitor the Jenkins job for test execution results
 and access the generated test reports.
## Writing Tests
The automation tests are written in JavaScript using the Cypress framework. The tests are located in the `cypress/integration` directory. Feel free to modify or add new tests according to your requirements.
For more information on writing tests with Cypress, refer to the [official Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress).
## License
The PortOne Global Automation Script project is licensed under the
 [MIT License](LICENSE).
## Contact
For any inquiries or feedback regarding the PortOne Global Automation Script project, please contact our support team at ajay.dhakad2020@gmail.com.
Thank you for your interest in the PortOne Global Automation Script! We hope this automated testing solution helps maintain the reliability and quality of our fintech application.
