
# 03. React and VSCode

With Solidity and Remix, we can create smart contracts. But in order to wrap the contracts into a Dapp and show its functionality more explicitly, we will need **React** to construct a web page as an interface. The [Project Interface Demo](https://dududududulu.github.io/InterfaceDemo/) you have seen before is an easy example and also a framework for you to work on. The source code can be found at [here](https://github.com/dududududulu/InterfaceDemo.git), but let's save it for later and set up the environment to use React first. 

We use **VSCode** (Visual Studio Code) as the tool for coding and in the context below we follow the steps to set up a web3 Dapp project with React in VSCode. 


### VSCode
First you have to download and install VSCode. 
  - Free download at https://code.visualstudio.com/download. 
  - VSCode is a lightweight but powerful source code editor which runs on your desktop available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes. 
  

### Set up web3 React project in VSCode
**React** is a popular JavaScript library developed by Facebook for building user interfaces. Basic JavaScript skills are required to use React. Tutorials on React can be found [here](https://reactjs.org/tutorial/tutorial.html). In this instruction we give the steps to set up a React project of web3 Dapp in VSCode. 

There is actually an official tutorial to use [React in VSCode](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial). But the latest version of React packages does not include NodeJS polyfills that are necessary for building web3 Dapps, while the official tutorial did not mention it. So it is recommended that you follow the steps listed below here instead of the official tutorial. 

- **Install necessary packages**
  - Install [Node.js](https://nodejs.org/en/), in which npm should be included. 
  - To verify that you have Node.js installed correctly on your computer, open a terminal or command prompt and type ```node --version``` or ```npm --version``` to check the version. 
  - If installed correctly, you will see ```v20.17.0``` on the screen. 

- **Create the React project**
  - You can now create a new React application by typing the following command:
    ```
    npx create-react-app project-name
    ```
    where ```project-name``` is the name of the folder of your application. This may take a few minutes so please wait patiently until it is done:
    ![react-create](https://i.postimg.cc/28VqNvpM/react-create.png)

  - Run your React application by navigating to your project folder in the terminal and type ```npm start``` to start the web server:
    ```
    cd project-name
    npm start
    ```
    Wait until a webpage (http://localhost:3000/project-name) pop up and then you should be able to see the following page. Note that you have to **keep the terminal window open** for the page to keep updated. 
    ![react-localhost](https://i.postimg.cc/RVyWSF4F/react-localhost.png)

  - To open your application folder in VSCode, open another terminal or comman prompt window and type:
    ```
    cd project-name
    code .
    ```
    You should be able to see the project files in VSCode window
    ![react-vscode](https://i.postimg.cc/tgtJNNPZ/react-vscode.png)

  - Open file ```App.js``` in the folder ```project-name/src``` in VSCode, replace the tenth line with the following sentence and save the changes:
    ```
    Hello world!
    ```
    You will see updates at http://localhost:3000/project-name as below
    ![react-helloworld](https://i.postimg.cc/DwG88Twc/react-helloworld.png)
  
- **Add Web3 to your app**
  - To build a web3 application, we have to add the web3 dependency at the first line of ```App.js```:
    ```javascript
    import Web3 from "web3";
    ```
    However, this is not naturally installed with node.js, so we have to install it in terminal:
    ```
    npm install web3
    ```
    After that, you may receive the following warnings, but your dapp will still be compiled successfully. 
    Thus, we can just ignore these warnings about vulnerabilities since they will not affect your projects. 
    More information on this issue can be found [here](https://github.com/facebook/create-react-app/issues/11174). 
    ```
    added 42 packages, and audited 1585 packages in 14s

    268 packages are looking for funding
      run `npm fund` for details

    8 vulnerabilities (2 moderate, 6 high)

    To address all issues (including breaking changes), run:
      npm audit fix --force

    Run `npm audit` for details.
    ```
    
    <!-- However, the latest version of ```create-react-app``` (>=5) does not include **NodeJS polyfills** necessary for web3 applications, so errors will occur if we add web3 to the app. So there are some more things we have to do. 
    ![web3-error](https://i.postimg.cc/XJjJHBc2/web3-error.png)

  - Go to your app folder and install ```react-app-rewired``` and other missing modules:
    ```
    cd project-name
    npm install --save-dev react-app-rewired crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url buffer process
    ```

  - Create file ```config-overrides.js``` in the root of your project folder, i.e. ```project-name/config-overrides.js```. Paste the following content into the file:
    ```javascript
    const webpack = require("webpack");
    module.exports = function override(config) {
        const fallback = config.resolve.fallback || {};
        Object.assign(fallback, {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            assert: require.resolve("assert"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify"),
            url: require.resolve("url"),
        });
        config.resolve.fallback = fallback;
        config.plugins = (config.plugins || []).concat([
            new webpack.ProvidePlugin({
                process: "process/browser",
                Buffer: ["buffer", "Buffer"],
            }),
        ]);
        return config;
    };
    ```
    
  - In the file ```package.json```, change the ```scrpits``` field for start, build and test. 
    ***before***:
    ```
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
    }
    ```
    ***after***:
    ```
    "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
    }
    ```
    To this end, missing Nodejs polyfills should be included and your app should be doing well with web3. To see this, add the following command to the first line of ```project-name/src/App.js``` and re-run ```npm start``` in your project folder. You should be able to see your app running instead of errors. 
    ```javascript
    import Web3 from "web3";
    ``` -->

- **Other information you can turn to**
  - Tutorial to use React in VSCode: https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
  - Troubleshooting for web3 probelm in latest version of ```create-react-app```: https://github.com/web3/web3.js#web3-and-create-react-app
