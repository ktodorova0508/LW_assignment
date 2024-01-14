# LW_assignment
A test automation project with Playwright and Typescript. 

# Installation
1. Clone the repo using below URL
https://github.com/akshayp7/playwright-typescipt-playwright-test.git
2. Navigate to folder and install npm packages using:
npm install
3. For first time installation run below command to download required browsers
npx playwright install

# Run the tests
To run the tests use `npm run test`




## Answears to additional questions
1. This is a JWT token which is used to let the server know who is the user and what is the user authorized to see/do. One should contain 3 parts - header, payload and signature. Although the provided one doesn't seem to have signature.

2. I am not getting any error if I try to login through the authorization if the provided value is wrong. Also am able to login in all types of authorization concurrently.