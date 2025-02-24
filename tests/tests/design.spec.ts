import { test, expect } from '@playwright/test';



test('blog/sample/ | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/blog/sample/');
  
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

  test('blog/sample/ | Check all elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/blog/sample/');
  
    //  root element
    await expect(page.locator('.Blog-module--root--35094')).toBeVisible();
  
    // category span
    await expect(page.locator('.Blog-module--category--6dcd0')).toHaveText('design');
  
    // the title
    await expect(page.locator('.Blog-module--title--0f7d6')).toHaveText('Friends of Sydney: Flora Fricker');
  
    // the image container and the image
    await expect(page.locator('.Blog-module--imageContainer--3e280 img')).toHaveAttribute('src', '/blogFeatured.png?imgcdn=true');
  
    // first content div 
    await expect(page.locator('.sample-module--content--ec8b1').first()).toBeVisible();
  
    // all paragraphs within the content
    await expect(page.locator('.sample-module--excerpt--53842')).toBeVisible();
    await expect(page.locator('.sample-module--blogParagraph--54e81')).toHaveCount(6);
  
    // the images container
    await expect(page.locator('.sample-module--imagesContainer--f1361')).toBeVisible();
  
    // two images within the images container
    await expect(page.locator('.sample-module--imageContainer--78ea7 img')).toHaveCount(2);
    await expect(page.locator('.sample-module--imageContainer--78ea7 img').first()).toHaveAttribute('src', '/cloth.png?imgcdn=true');
    await expect(page.locator('.sample-module--imageContainer--78ea7 img').nth(1)).toHaveAttribute('src', '/collections/collection1.png?imgcdn=true');
  
    // the blog subheader
    await expect(page.locator('.sample-module--blogSubHeader--e3d3b')).toHaveText('2. Lorem ipsum');
  
    await expect(page.locator('.sample-module--content--ec8b1').nth(1)).toBeVisible();
  
    // the footer container
    await expect(page.locator('.Blog-module--footerContainer--4a957')).toBeVisible();
  
    // the "Share with:" text
    await expect(page.locator('.Blog-module--footerContainer--4a957 span')).toHaveText('Share with:');
  
    // social media icons
    await expect(page.locator('.Blog-module--socialMediaIconContainer--32487')).toHaveCount(3);
  
    // "back to blog" button
    await expect(page.locator('text=back to blog')).toBeVisible();
  });


  test('blog/sample/ | Check all elements in the footer exist', async ({ page }) => {
    await page.goto('http://localhost:5000/blog/sample/');
   
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