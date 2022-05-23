![github-banner](https://user-images.githubusercontent.com/3611928/169144953-49223b21-1e00-4607-971a-4f870468a986.svg)

## ⚡️ Quick Setup + Deploy Option

Click the button below and it will help you create a new repo, create a new Netlify project, and deploy this Theme!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/gatsby-sydney-ecommerce-theme&utm_source=github&utm_medium=gatsbysydneyecomm-cs&utm_campaign=devex-cs)

## 💫 Regular Setup

 ### Cloning + Install Packages
 
  - Clone this repo with one of these options:

    - Click the 'Use this template' button at the top of the page
    - Via the command line:
       ```shell
       git clone https://github.com/netlify-templates/gatsby-ecommerce-theme/
       ```
    - Or you can clone the theme straight from the Netlify CLI, using the `netlify sites:create-template` command in your terminal ([learn more about this command here](https://www.netlify.com/blog/create-a-site-from-a-template-using-the-netlify-cli)) to do the entire flow for you.

  From there, you can install the project's dependencies by running:

  ```shell
  npm install or yarn install
  ```

  Finally, you can run your project locally with:

  ```shell
  cd gatsby-sydney-ecommerce-theme/
  npm start or yarn start
  ```
  
  or, run it using the Netlify CLI with:
  
  ```shell
  netlify run dev
  ```
  
  Open your browser and visit <http://localhost:5000>, your project should now be running!
  
  ## 🚀 Deploying
 
  After installing and customizing your new eCommerce theme it's now time to deploy! 
  
   -  You can Deploy using the [Netlify CLI](https://cli.netlify.com/):

      ```bash
      netlify init # initialize a new Netlify project & deploy
      ```

   It will use the information from the included Netlify configuration file, [`netlify.toml`](./netlify.toml), to set up the build command as `gatsby build` to create a static project and locate the build project in the `public` directory.

   The `init` process will also set up continuous deployment for your project so that a new build will be triggered & deployed when you push code to the repo (you can change this from your project dashboard: Site Settings/Build & deploy/Continuous Deployment).

   You can also use `netlify deploy (--prod)` to manually deploy and `netlify open` to open your project dashboard.

  > 💡 we only have so many keystrokes to give, use `ntl` shorthand for `netlify` or make [an alias of your own](https://www.netlify.com/blog/2020/04/12/speed-up-productivity-with-terminal-aliases/) to save hours...of accumulated milliseconds

  - You can deploy within the Netlify site by connecting to git, this [video](https://www.youtube.com/watch?v=4h8B080Mv4U&t=107s) will walk you through that process. 
  - Or, you can use the Deploy to Netlify button which will walk you through the process of spinning up a repo, creating a new project in Netlify, AND deploying it :)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/gatsby-sydney-ecommerce-theme&utm_source=github&utm_medium=gatsbysydneyecomm-cs&utm_campaign=devex-cs)
