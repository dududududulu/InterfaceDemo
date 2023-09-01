# MetaMask

This is an instruction on how to create an Ethereum wallet with your MetaMask account and try transactions on it. 

MetaMask is an extension for accessing Ethereum enabled distributed applications, or "Dapps" in your browser. MetaMask is the easiest way to create an Ethereum wallet. For Chrome users, you can find the extension [here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en). (It might very well also be available for your preferred browser, but we will follow steps for Chrome in this instruction). 

---

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
![demo-login](https://i.postimg.cc/7YjzVsvL/demo-login.png)

1. Click on the blue link below and confirm on your connection to the page. Your profile will be displayed with your address, network and ETH. Click on **Storage** in the menu below to proceed. 
![demo-profile](https://i.postimg.cc/vB8xBCn0/demo-profile.png)

1. This is the function page of this Dapp. You can ignore the instructions on the left side, as we will come back to this later. There is a contract employed behind this Dapp, that allows you to store a input number to it at a cost of ETH and view the value currently stored. 
![demo-storage](https://i.postimg.cc/xd2zrX1D/demo-storage.png)

1. Input a number in the box and click on 'store' button (Note that the number in the box will disappear after clicking 'store'). MetaMask will start a transaction to the contract and ask for your confirmation. Of course you are free to choose **Confirm** or **Reject**. The transaction will take quite a few seconds so please be patient when waiting for it to complete. 
![demo-transaction](https://i.postimg.cc/7LnTqq5C/demo-transaction.png)

1. After several operations of storing or getting values, you can view your operation history by clicking on **History** in the menu below. Green in status stands for 'approved', while red means 'rejected' and yellow means 'invalid', which appears when no value is typed before clicking on 'store' button. 
![demo-history](https://i.postimg.cc/dthdGMxX/demo-history.png)