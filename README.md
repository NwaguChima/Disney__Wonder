# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## About Project.

This is a disney wonder web application built with React/Redux, Typescript, FireBase, and Styled Components.
React routing was used to route between the login page, the signup, and the detail page. Styled components was used throughtout for styling to ensure nested styling and avoid conflict, also to ensure reusability of Wrapper elements created. Firebase google authentication served for login and collecting user data. The movie data was also fetched from firebase storage. Redux was used to manage the state of user and movie data fetched. The userSlice and movieSlice were used to communicate with redux store. A beautiful Carousel was added to the home page using carousel slider. Lastly, the signout functionality was also implemented.
