# react-silver-bullet App
This is a React App with basic Jest settings. And I use it to study. I decided to keep this repository public to help others with an interest in studying React and testing.

But remember, maybe this is not a good example to follow. Anyway, I will always be evolving this project.

## How did I get to this result
### Step 1:
 - Create react app and enter in project folder

```bash
yarn create vite react-silver-bullet --template react
cd react-silver-bullet
```

### Step 2:
 - Install dependencies

```bash 
yarn install
```

### Step 3:
 - Install and config Jest
 
```bash 
yarn add --dev jest
yarn jest --init
```
When I runned `yarn jest --init`, 
I typed the following answers for each config:

| Config | Answers |
| --- | --- |
| Would you like to use Jest when running "test" script in "package.json"? | Y |
| Would you like to use Typescript for the configuration file? | N |
| Choose the test environment that will be used for testing | jsdom (browser-like) |
| Do you want Jest to add coverage reports? | Y |
| Which provider should be used to instrument code for coverage? | V8 |
| Automatically clear mock calls, instances, contexts and results before every test? | Y |

### Step 4
- Install another necessary libraries
```bash
yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```
- Create `babel.config.cjs` file in root path (`react-silver-bullet/babel.config.cjs`) and to write:
```javascript
module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', { 'runtime': 'automatic' }]]
};
```
### Step 5
- Create the `tests` folder in root path (`react-silver-bullet/tests`)

```bash
mkdir tests
```

Now, you can to write your tests file in `react-silver-bullet/tests`, [like this example](tests/App.test.jsx).

## References
- https://jestjs.io/pt-BR/docs/getting-started
- https://testing-library.com/docs/ecosystem-jest-dom/
- https://testing-library.com/docs/react-testing-library/intro/
- https://testing-library.com/docs/queries/byrole/
- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library