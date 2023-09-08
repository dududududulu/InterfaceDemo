
# 04. GitHub and GitHub Pages

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

- Source code of your application cannot directly be compiled and run on GitHub Pages. Follow steps listed [here](https://github.com/gitname/react-gh-pages) to deploy your React Dapp to GitHub Pages. If you have already opened a repository, start from step 3; if you have deployed your project before, start from step 7. 
- After that, you have to config your GitHub Pages to show your application. 
  - Go to your **project repository** and check if there is a branch named ```gh-pages```. 
    ![Git-gh-pages](https://i.postimg.cc/TPr0jFCV/Git-gh-pages.png)
  - Go to **Settngs** of your repository and click on **Pages** in the menu to the left. 
  - Under **Build and deployment**, under **Source**, select **Deploy from a branch**.  
  - Under **Build and deployment**, under **Branch**, select **gh-pages** as the publishing source. 
    ![Git-source](https://i.postimg.cc/854b9W8s/Git-source.png)
  - Wait for a few minutes and refresh the page, you will see your application already published at https://username.github.io/project-name/. 
    ![Git-visit-site](https://i.postimg.cc/C5K4g1Y7/Git-vist-site.png)

