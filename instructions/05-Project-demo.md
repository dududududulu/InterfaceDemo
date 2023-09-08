
# 05. Project Demo

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
    ![demo-login](https://i.postimg.cc/hjrpTG1t/demo-login.png)
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
