# Github Profile App

## Description

With this app, you can see profile information and repository information of any github user.\
In first page, you can enter github username.\
And if you submit, it'll show you information of that github user.

## Technologies Used

- React.js with [Create React App](https://github.com/facebook/create-react-app)
- TypeScript
- Apollo GraphQL

## Environment

Please make sure to set `REACT_APP_GITHUB_TOKEN`(a access token of github) in your .env file.\
Access Token should involve following permissions:
- repo\
  public_repo
- user\
  read:user\
  user:email

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn eject`

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `yarn codegen`

Generates GraphQL Schema, GraphQL Documents, and hooks for APIs.
