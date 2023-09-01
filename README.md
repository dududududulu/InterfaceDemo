
This project is presented as the interface demo for EE4032 Blockchain Engineering of NUS, and this document serves as the instructions for students to start their own projects. 

---

# A. MetaMask

This is an instruction on how to create an Ethereum wallet with your MetaMask account and try transactions on it. 

MetaMask is an extension for accessing Ethereum enabled distributed applications, or "Dapps" in your browser. MetaMask is the easiest way to create an Ethereum wallet. For Chrome users, you can find the extension [here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en). (It might very well also be available for your preferred browser, but we will follow steps for Chrome in this instruction). 


### Set up your MetaMask account
1. Install MetaMask to your browser. 
![MetaMask](https://i.postimg.cc/sxNhbKvw/MetaMask.png)

1. Open MetaMask and create a new wallet. Secure it with a password of your choice and note down the secret backup phrase. (<span style = "color: #EE2222">You will not use actual money in this class, so you don’t need to be extra careful when creating the password and storing the phrase. However, never use this wallet to buy real Ethereum if you are not!</span>)
You should be able to see your account on top right side of your browser. 
<img src="https://i.postimg.cc/L53YnKHL/Meta-Mask-installed.png" height="400"/>

1. Click on the button to the top left corner and switch your network from **Ethereum Mainnet** to **Sepolia Test Network**. 
<img src="https://i.postimg.cc/Vsqb7Mjv/Meta-Mask-Sepolia.png" height="400"/>

1. Next we have to put some Ethereum (ETH) in your account. Go to [Sepolia testnet faucet](https://sepoliafaucet.com/) to get some ETH for free (needs free sign up). You may need a Sepolia address to proceed, which is the address of your MetaMask account that can be copied from your account page. 

2. You should be able to see your ETH in your account after a short time. You can employ transactions between you and your friends with that. Go to [Etherscan](https://sepolia.etherscan.io/) and you can see your transaction history with your address (should be empty for a new account). 


### Connect to Dapps and try transactions
With your MetaMask account and ETH, you can now connect to web3 Dapps and employ transactions on them!

1. Go to [Project Interface Demo](https://dududududulu.github.io/InterfaceDemo/) and connect the page with your MetaMask account. As the name suggests, this is an easy demo for your group projects. But for now you can just play with it and find out how the transactions are employed with your account. Note that this page will be blank if you have not installed MetaMask on your browser. 
![demo-login](https://i.postimg.cc/hjrpTG1t/demo-login.png)

1. Click on the blue link below and confirm on your connection to the page. Your profile will be displayed with your address, network and ETH. Click on **Storage** in the menu below to proceed. 
![demo-profile](https://i.postimg.cc/DwX656PD/demo-profile.png)

1. This is the function page of this Dapp. You can ignore the instructions on the left side, as we will come back to this later. There is a contract employed behind this Dapp, that allows you to store a input number to it at a cost of ETH and view the value currently stored. 
![demo-storage](https://i.postimg.cc/xd2zrX1D/demo-storage.png)

1. Input a number in the box and click on 'store' button (Note that the number in the box will disappear after clicking 'store'). MetaMask will start a transaction to the contract and ask for your confirmation. Of course you are free to choose **Confirm** or **Reject**. The transaction will take quite a few seconds so please be patient when waiting for it to complete. 
![demo-transaction](https://i.postimg.cc/7LnTqq5C/demo-transaction.png)

1. After several operations of storing or getting values, you can view your operation history by clicking on **History** in the menu below. Green in status stands for 'approved', while red means 'rejected' and yellow means 'invalid', which appears when no value is typed before clicking on 'store' button. 
![demo-history](https://i.postimg.cc/dthdGMxX/demo-history.png)


---

# B. Solidity and Remix

MetaMask is sufficient to use ETH as a cryptocurrency - you can send and receive ETH. But to develop smart contracts and Dapps, you need more than that. 


### Solidity
We will use the programming language Solidity. You are asked to acquire the required knowledge of it on your own, and many free resources for this are available online. 
  - Solidity descriptions: https://docs.soliditylang.org/en/latest/. 
  - Look under “Solidity by Example” for some examples that will allow you to get started quickly with your project. 

### Remix
To write and deploy smart contracts on the Ethereum blockchain we will use Remix. 
(You can in principle use other tools, but we will not be able to support you if you do. )
  - Remix official: https://remix-project.org/
  - Remix docs: https://remix-ide.readthedocs.io/en/latest/
  - Remix online IDE: https://remix.ethereum.org/
  - Deploying and interacting with a smart contract is slightly nontrivial. You can however essentially follow the instructions here: https://remix-ide.readthedocs.io/en/latest/create_deploy.html
  - **Important**: Make sure that MetaMask is running in your Browser and choose "Injected Web3" as your environment for deployment. The website will then use MetaMask and your address on Sepolia to generate the necessary blockchain transactions. 
  - **Important**: <span style = "color:#EE2222">In case you also have Ethereum on the main net, make sure that MetaMask is using your Sepolia address. Deploying contracts on the main net can be expensive.<span>
  - How to reuse old/deployed smart contracts: https://www.youtube.com/watch?v=_bPAEltRhrE
  - You can then use [Etherscan](https://sepolia.etherscan.io/) to visit both your contract and your own address and see all the transactions that have taken place. 


---

# C. React and VSCode

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
  - Install [Node.js](https://nodejs.org/en/download/) JavaScript runtime, in which [npm](https://www.npmjs.com/) is included. 
  - To test that you have Node.js installed correctly on your computer, open a terminal or command prompt and type ```node --version``` or ```npm --version``` to check the version. 
  - If installed correctly, you will see the following result:
  ![node-version](https://i.postimg.cc/fybVLSV3/node-version.png)

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
    Wait until it says ```webpack compiled successfully``` and open the application in the browser at http://localhost:3000/. You should be able to see the following page. Note that you have to **keep the terminal window open** for the page to keep updated. 
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
    You will see updates at http://localhost:3000/ as below
    ![react-helloworld](https://i.postimg.cc/DwG88Twc/react-helloworld.png)
  
- **Add missing Nodejs polyfills to app**
  - To build a web3 application, we have to add the web3 dependency at the first line of ```App.js```:
    ```javascript
    import Web3 from "web3";
    ```
    However, the latest version of ```create-react-app``` (>=5) does not include **NodeJS polyfills** necessary for web3 applications, so errors will occur if we add web3 to the app. So there are some more things we have to do. 
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
    ```

- **Other information you can turn to**
  - Tutorial to use React in VSCode: https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
  - Troubleshooting for web3 probelm in latest version of ```create-react-app```: https://github.com/web3/web3.js#web3-and-create-react-app