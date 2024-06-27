import { test, expect } from '@playwright/test';


test('how-to-use page | check all elements in navContainer exist', async ({ page }) => {
    await page.goto('http://localhost:5000/how-to-use/');
  
    // Check that the navContainer exists
    const navContainer = await page.$('.about-module--navContainer--d8791');
    expect(navContainer).not.toBeNull();
  
    const selectors = [
      'a.ThemeLink-module--link--f3867[href="/how-to-use/#builtby"]',
      'a.ThemeLink-module--link--f3867[href="/how-to-use/#tools"]'
    ];
  
    for (const selector of selectors) {
      const element = await page.$(selector);
      expect(element).not.toBeNull();
    }
  });
  
  test('how-to-use page | check elements in #builtBy container exist', async ({ page }) => {
    await page.goto('http://localhost:5000/how-to-use/');
  
    const textContents = [
        "This theme is proudly brought to you by the team at",
        "Matter Design & Digital",
        "The Sydney theme is built for Netlify as an ecommerce theme suitable for JAMStack architecture.",
        "Matter. has pre-built connections to microservices available through its JAMM.™ solution.",
        "Read more about JAMM.™"
      ];
    
      for (const text of textContents) {
        // console.log(`text content: ${text}`);
        const element = await page.locator(`text=${text}`).first();
        expect(element).not.toBeNull();
      }

      const image = await page.locator('img[alt="JAMM Detail"][src="/how-to-use/jamm-sydney-1upd@2x.png?imgcdn=true"]');
      expect(image).not.toBeNull();
  });

  test('how-to-use page | check links in #builtBy container redirect to correct sites', async ({ page, context }) => {
    await page.goto('http://localhost:5000/how-to-use/');

    const links = [
      { selector: 'a[href="https://matterdesign.com.au/"]', url: 'https://matterdesign.com.au/' },
      { selector: 'a[href="https://jamm.matter.design/"]', url: 'https://matterdesign.com.au/news/headless-jamm-framework/' }
    ];
  
    for (const link of links) {
      // capture the redirection
      const newPagePromise = context.waitForEvent('page');
      
      await page.click(link.selector);
  
      const newPage = await newPagePromise;
      await newPage.waitForLoadState();
  
      const url = newPage.url();
    //   console.log(`Checking URL: ${url}`);
      expect(url).toBe(link.url);
  
      await newPage.close();
    }
  });

  test('how-to-use page | check text content in #tools container exist', async ({ page }) => {
    await page.goto('http://localhost:5000/how-to-use/');
  
    const textContents = [
      "Headless architecture enables Composable Commerce. What this means is that you can ‘compose’ a suite of best of breed tools together to create an agile ecommerce system. This approach is the opposite end of the spectrum from a traditional ‘Monolithic’ architecture where all the functionality and data comes from one source.",
      "Why go with Composable Commerce? History has shown, technology innovation comes from new specialised solutions that find better ways to do things. By creating an architecture that taps into this innovation, you are getting a system that is innovating faster than monolithic solutions giving you a competitive advantage.",
      "Matter. has been innovating since 2003, and we have aligned with companies that do it best. The following technologies are either currently available or are on our roadmap for JAMM.™.",
      "BigCommerce",
      "VTEX (roadmap)",
      "Commercetools (roadmap)",
      "Contentful",
      "WordPress",
      "Sanity",
      "Builder.io",
      "Algolia",
      "Searchspring (roadmap)",
      "XO (roadmap)",
      "Syte (roadmap)",
      "Akeneo",
      "Klaviyo",
      "Ortto",
      "Dot Digital",
      "Omnisend",
      "Gorgias",
      "Zendesk",
      "Yotpo",
      "Trustpilot",
      "Reviews.io",
      "Localisr.io",
      "Our team are fanatical about site speed and the agility of a composable commerce approach. If you need help to setup a Headless architecture, we’d love to hear from you.",
      "Contact the team at Matter."
    ];
  
    for (const text of textContents) {
      const element = await page.locator(`text=${text}`).first();
      expect(element).not.toBeNull();
    }
  });


test('how-to-use page | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/how-to-use/');
  
    // Find the main container with a more specific locator
    const mainContainer = page.locator('div.Container-module--container--6761c >> nth=0');
    await expect(mainContainer).toBeVisible();
  
    // Check the header
    const header = mainContainer.locator('div.Header-module--header--aa06a');
    await expect(header).toBeVisible();
  
    // Check the navigation links
    const navLinks = header.locator('nav a.Header-module--navLink--2a5b8');
    await expect(navLinks.nth(0)).toHaveText('Shop');
    await expect(navLinks.nth(1)).toHaveText('journal');
    await expect(navLinks.nth(2)).toHaveText('About');
  
    // Check the burger icon / page resolution
    // const burgerIcon = header.locator('div.Header-module--burgerIcon--813a8');
    // await expect(burgerIcon).toBeVisible();
  
    // Check the brand logo
    const brandLogo = header.locator('div.Brand-module--root--7bb0e');
    await expect(brandLogo).toBeVisible();
  
    // Check the search button
    const searchButton = header.locator('button[aria-label="Search"]');
    await expect(searchButton).toBeVisible();
  
    // Check the favorites link
    const favoritesLink = header.locator('a[aria-label="Favorites"]');
    await expect(favoritesLink).toBeVisible();
  
    // Check the orders link
    const ordersLink = header.locator('a[aria-label="Orders"]');
    await expect(ordersLink).toBeVisible();
  
    // Check the cart button
    const cartButton = header.locator('button[aria-label="Cart"]');
    await expect(cartButton).toBeVisible();
  });


  test('how-to-use page | Check all elements in the footer exist', async ({ page }) => {
    await page.goto('http://localhost:5000/how-to-use/');
   
   // footer container
   const footerContainer = page.locator('.Footer-module--content--2aeb3');
   await expect(footerContainer).toBeVisible({ timeout: 10000 });
 
   //footer content top
   const footerContentTop = footerContainer.locator('.Footer-module--contentTop--729c1');
   await expect(footerContentTop).toBeVisible();
 
   // "Info" section
   const infoSection = footerContentTop.locator('.Footer-module--footerLinkContainer--34ce1').nth(0);
   await expect(infoSection).toBeVisible();
   await expect(infoSection.locator('.Footer-module--linkTitle--fa138')).toHaveText('Info');
 
   //"Info" links
   const infoLinks = infoSection.locator('.Footer-module--linkList--6f95b li a');
   await expect(infoLinks).toHaveCount(6);
   await expect(infoLinks.nth(0)).toHaveText('About Us');
   await expect(infoLinks.nth(1)).toHaveText('Journal');
   await expect(infoLinks.nth(2)).toHaveText('Privacy Policy');
 
   // "Support" section
   const supportSection = footerContentTop.locator('.Footer-module--footerLinkContainer--34ce1').nth(1);
   await expect(supportSection).toBeVisible();
   await expect(supportSection.locator('.Footer-module--linkTitle--fa138')).toHaveText('Support');
 
   // "Support" links
   const supportLinks = supportSection.locator('.Footer-module--linkList--6f95b li a');
   await expect(supportLinks).toHaveCount(8);
   await expect(supportLinks.nth(0)).toHaveText('FAQ');
   await expect(supportLinks.nth(1)).toHaveText('Contact Us');
   await expect(supportLinks.nth(2)).toHaveText('Shipping & Returns');
   await expect(supportLinks.nth(3)).toHaveText('How to use this theme');
 
   // newsletter section
   const newsletterSection = footerContainer.locator('.Footer-module--newsLetter--91500');
   await expect(newsletterSection).toBeVisible();
   await expect(newsletterSection.locator('.Footer-module--newsLetterContent--e10ad')).toBeVisible();
   await expect(newsletterSection.locator('.Footer-module--linkTitle--fa138')).toHaveText('Newsletter');
   await expect(newsletterSection.locator('.Footer-module--promoMessage--b609e')).toHaveText('Get 15% off your first purchase! Plus, be the first to know about sales, new product launches and exclusive offers!');
 
   // newsletter input form
   await expect(newsletterSection.locator('.Footer-module--newsLetterForm--11787 input[name="newsLetterInput"]')).toBeVisible();
 
   // social media icons in the footer
   const socialIcons = newsletterSection.locator('.Footer-module--socialIconContainer--ac360');
   await expect(socialIcons).toHaveCount(4);
 });