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

## Project Structure

Here is a bit of an overview of the directory structure of the project:

| Directory | Description |
| :---- | :---- |
| `src/components/` | Stores reusable elements across the site. (e.g. BlogPreview element) |
| `src/pages/` | Stores routes for a user to go to based on each `.js` file and nested folder (e.g. `src/pages/about.js` creates a route `/about` in the web app) |
| `src/helpers` | Stores mock data for the blog or product list and general utility functions. |

### Making content changes to the Header or Footer

The project contains a file named `src/config.json`. Inside of this file describes the content of the header links (`headerLinks`) as well as the footer links (`footerLinks`). For the header, each element in the array has a base structure of:

```json
{
  "menuLabel": "The label that is given to a user",
  "menuLink": "The URL that this should take a user to"
}
```

If you want the menu item to have a dropdown, you can also add a `category` key with the value being an array of the categories and their containing elements, here's what the base could look like:

```json
{
  "menuLabel": "The label that is given to a user",
  "menuLink": "The URL that this should take a user to",
  "category": [
    {
      "categoryLabel": "Label you want the category to have",
      "submenu": [
        {
          "menuLabel": "A label underneath the category",
          "menuLink": "The associated link to this label"
        }
      ]
    }
  ]
}
```

The footer works in a similar way. It assumes each element in the array has a heading and an array of associated links to direct folks to:

```json
"footerLinks": [
    {
      "subTitle": "Label of the column in the footer",
      "links": [
        {
          "text": "Text to display to the user",
          "link": "URL of where to take the user to when clicked"
        },
      ]
    }
]
```

## Next Steps with this theme

This project is intended to be extended by you! We wanted to make possible to replace parts of it with your own tools and data sources. If you're interested on a direction, you may want to consider using [Matter's toolset with their JAMM framework](https://matterdesign.com.au/service/headless-commerce-with-jamm/):
- [BigCommerce](https://bigcommerce.zfrcsk.net/c/2429593/854992/2941) for a headless e-commerce solution
- [Builder](https://www.builder.io) as a CMS for the blog articles or other content creation
- [Klaviyo](https://www.klaviyo.com/) for any email or SMS marketing automation
