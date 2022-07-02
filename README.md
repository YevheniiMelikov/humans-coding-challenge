# humans-coding-challange

Simple frontend-only clone of https://humans.io. Coding challenge assignment url is [here](https://github.com/strata-kk/coding-challenges/tree/master/frontend-react). Assignment has a time limit of 6 hours, so project was started from boilerplate that I had laying around. It has basic tech stack preconfigured. I prefer project with configured lint, prettier and other quality of life features than using create-react-app dirrectly.

# How to start

- Make sure git, node and npm are installed
- Checkout the project by runing this script in a terminal:

```
git clone https://github.com/YevheniiMelikov/humans-coding-challange.git
```

- In a terminal navigate to the project folder and run next script:

```
npm i
```

- Then project can be started using script:

```
npm start
```

- App should open in a default browser at http://localhost:3000 automatically

# Tech used

- React
- Create react app
- Typescript
- Styled components
- Redux
- Eslint
- Prettier
- Husky

# Available Scripts

In the project directory, you can run:

## npm start

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## npm run build

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. If necessary, classnames and function names can be enabled for profiling purposes. See the production build section for more information.

Your app is ready to be deployed! See the section about deployment for more information about deploying your application to popular hosting providers.

## npm run eject

Disconnecs app from react-scripts. For more info check [official documentation](https://create-react-app.dev/docs/available-scripts#npm-run-eject)

## lint

Runs eslint with configured rules against js files to check that code and formatting is all according to guidelines.

## lint:fix

Same as `lint` but also fixes all issues that can be auto resolved.

## pretty

Runs prettier agains all files in a project. It formats all files according to prettier config.

## prepare

Script used by Husky to attach git hooks. There is no need to run it manually.
