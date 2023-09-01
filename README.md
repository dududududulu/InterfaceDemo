
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


---

# D. GitHub and GitHub Pages

In previous sections, we opened project folder in VSCode and real-time changes will be compiled and run at http://localhost:3000/project-name. However, the web page can only work locally on your computer and when running ```npm start``` in terminal. In order to keep the application alive on any computer on the Internet and after your own computer is shut down, you have to publish your application on a server. Among all others, we recommend **GitHub Pages** as it is free and easy to play with. 

In this instruction we follow steps to set up a GitHub account, connect it to the local project on our computer, and publish the application to **GitHub Pages** for anyone's access. 


### Set up for GitHub Pages
**GitHub** is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. **GitHub Pages** are public webpages hosted and published through GitHub. 

- Sign up for a GitHub account if you do not have one. Follow steps in **Part 1** in [here](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account). 
- Set up your website with GitHub Pages
  - To publish your web3 application on GitHub Pages, you have to create **TWO** repositories. One for your own website and one for your application to run on your website. 
  - Set up your website with a repository following [this guide](https://docs.github.com/en/pages/quickstart). Note that the repository name must be in the form of ```username.github.io```. In following context we refer to this repository as the **website repository**. 
  - Create a second repository named after your project following [this guide](https://docs.github.com/en/get-started/quickstart/create-a-repo). In following context we refer to this repository as the **project repository**. 


### Connect VSCode and GitHub
The GitHub repository can be connected to a local folder and we can sync any changes on one side to the other side. In group project, members can connect their local folders to the same GitHub repository so that the code in the repository can be updated by several people at the same time. 

- Set up Git. 
  - Git is an open source version control system and is responsible for everything GitHub-related that happens locally on your computer. 
  - Download and install [Git](https://git-scm.com/downloads) to your computer. 
  - Set your username in Git following [this guide](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git). 
  - Set your email address in Git following [this guide](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address). 
  - More Git-related configurations are available at https://docs.github.com/en/get-started/quickstart/set-up-git, but is not required. 

- Connect project folder to the **project repository**. 
  - Open your project folder, right click and select ```Git Bash Here```. 
  - If your default branch is ```master```, then type the following command to switch to ```main```:
    ```
    git branch -m master main
    ```
    ![Git-Bash-main](https://i.postimg.cc/g094Zmqc/Git-Bash-main.png)
  - Go to your **project repository** in the browser, copy the url of your repository (note that your newly created repository should be empty except ```README.md```):
    ![Git-https](https://i.postimg.cc/1tsHvBjL/Git-https.png)
  - Type the following command line in Git Bash (# means comments only for illustration):
    ```
    # Initialize the local directory as a Git repository.
    git init

    # Add files
    git add .

    # Commit your changes
    git commit -m "First commit"

    # Add remote origin
    git remote add origin <Remote repository URL>

    # Verifies the new remote URL
    git remote -v

    # Push your changes
    git push origin main --force
    ```
    where ```<Remote repository URL>``` is replaced by the url you have copied in the last step. 
  - Your local folder should already be connected to your **project repository**. Refresh your repository in browser and you will see your local files have been updated to it:
    ![GIt-commit](https://i.postimg.cc/0jH02sys/Git-commit.png)
    
- To use Git and update changes to your repository in VSCode, more information can be found at
  - Use version control in VSCode: https://code.visualstudio.com/docs/editor/versioncontrol. 
  - Work with GitHub in VSCode: https://code.visualstudio.com/docs/editor/github. 

### Deploy and Post 
Once you have finished your project, you have to publish the application to GitHub Pages instead of just running it locally at http://localhost:3000/. 

- Source code of your application cannot directly be compiled and run on GitHub Pages. Follow steps listed [here](https://github.com/gitname/react-gh-pages) to deploy your React Dapp to GitHub Pages. 
- After that, you have to config your GitHub Pages to show your application. 
  - Go to your **project repository** and check if there is a branch named ```gh-pages```. 
    ![Git-gh-pages](https://i.postimg.cc/TPr0jFCV/Git-gh-pages.png)
  - Go to **Settngs** of your repository and click on **Pages** in the menu to the left. 
  - Under **Build and deployment**, under **Source**, select **Deploy from a branch**.  
  - Under **Build and deployment**, under **Branch**, select **gh-pages** as the publishing source. 
    ![Git-source](https://i.postimg.cc/854b9W8s/Git-source.png)
  - Wait for a few minutes and refresh the page, you will see your application already published at https://username.github.io/project-name/. 
    ![Git-visit-site](https://i.postimg.cc/C5K4g1Y7/Git-vist-site.png)


---

# E. Project Demo

Now that you have gone through all steps of preparation, and you can start working on your project. But in order to reduce your workload, the source code of the [project demo](https://dududududulu.github.io/InterfaceDemo/) is provided [here](https://github.com/dududududulu/InterfaceDemo). As many key points of the application have already been implemented in the demo such as connecting the Dapp to MetaMask, you can design your application based on the demo code instead of building a web page from zero. 

This instruction describes the structure of the [project demo](https://github.com/dududududulu/InterfaceDemo.git), and how to work on your own project based on the demo. 

### Work with the demo
This part gives the steps to clone the [demo code](https://github.com/dududududulu/InterfaceDemo) on GitHub to local folders and configurations before you can actually start working on it. 

- Clone project demo to local folder.  
  - Open ```Git Bash``` in the local project folder, and paste the following command to clone the code to your local folder:
    ```
    git clone https://github.com/dududududulu/InterfaceDemo.git
    ```
  - You will see a new folder named ```InterfaceDemo``` in your project folder. Replace the ```src``` folder in your project folder with the ```src``` folder in ```InterfaceDemo```. 
  - Open a terminal or command prompt window, type the following commands to install necessary packages
    ```
    cd project-name
    npm install react-router-dom
    ```
  - Type ```npm start``` to run the application demo, and go to http://localhost:3000/InterfaceDemo/ to view the page. 
    ![demo-login](https://i.postimg.cc/7YjzVsvL/demo-login.png)
  - Now you can design your own application based on the framework of this demo! 


### Structure of the demo
This part introduces the key points of code structure of the demo. 

- The web page is defined in ```src/index.js```, which renders the page defined in ```src/App.js```. The ```src/App.js``` file defines the main function of the application and connects all pages together. 
  
- To design your application, you only have to work in the ```src``` folder. 
  - ```src/component``` contains files that define different pages of your application. 
  - ```src/contracts``` contains your Solidity contracts and configuration files. 
  - ```src/images``` contains images and icons. 
  - ```src/global.js``` and ```src/global.css``` define global variables and functions. 
  - ```src/App.js``` defines the main function of the application and connects all pages together. ```src/App.css``` defines styles in ```src/App.js```. 
  - For all other files that are not mentioned above, you can just leave them as they are. 
  
- Four pages are included in this demo, namely ```login```, ```profile```, ```storage``` and ```history```. 
  - The url of each page is indicated in ```src/App.js```:
  ![demo-router](https://i.postimg.cc/nL9dMTsm/demo-router.png)
  - These pages are defined in the ```src/component/``` folder, i.e. four sub-folders named ```login```, ```profile```, ```storage``` and ```history```. In every sub-folder, there is one ```.js``` file and one ```.css``` file defining the layout and style of the page. 
  - The ```src/component/storage``` folder contains files that define the functionality of this application. Your work will mainly be focused on this part. 

- Interact with solidity contracts in React
  - To integrate your solidity contract into your React project, put the contracts in ```src/contracts``` folder. 
  - Previously, you have compiled and deployed contracts on Remix. To use them in React, you have to get contract address and ABI for all your contracts. Follow steps [here](https://ethereum.stackexchange.com/questions/3149/how-do-you-get-a-json-file-abi-from-a-known-contract-address) to get the ABI with contract address. 
  - Copy contract address and ABI and paste them into file ```src/contracts/config.js``` by adding the following line:
    ```javascript
    export const CONTRACT_NAME_ADDRESS = <your-contract-address>
    export const CONTRACT_NAME_ABI = <your-contract-ABI>
    ```
    where ```CONTRACT_NAME``` should be replaced by the name of your contract. <span style = "color: #EE2222">Note that the ABI should only have one pair of square brackets. </span>
  - Add the following line to ```src/App.js``` (see line 5 and 12 in demo code ```src/App.js```):
    ```javascript
    import Web3 from "web3";
    import { CONTRACT_NAME_ADDRESS, CONTRACT_NAME_ABI } from "./contracts/config";
    ```
  - Now you can define contract variables in your project with the following code (see line 33, 34 in demo code ```src/App.js```):
    ```javascript
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const contract = new web3.eth.Contract(CONTRACT_NAME_ABI, CONTRACT_NAME_ADDRESS);
    ```
  - You should be able to call functions defined in the contracts (see line 84-92 in demo code ```src/App.js```). Refer to [here](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-call) for more information. 

- More on developing web3 React Dapp:
  - How to connect a Dapp with MetaMask (already done in demo): https://dev.to/olawanle_joel/how-to-connect-a-react-dapp-to-metamask-2gdh. 
  - web3.eth.Contract: https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html. 
