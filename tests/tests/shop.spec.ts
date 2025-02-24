import { test, expect } from '@playwright/test';


test('Shop page | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/shop');
  
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

test('Shop page | check elements existence', async ({ page }) => {
    await page.goto('localhost:5000/shop/');
  
    // Check for the span with class 'shop-module--itemCount--b09b3'
    const itemCount = await page.locator('span.shop-module--itemCount--b09b3');
    await expect(itemCount).toHaveText('476 items');
  
    // Check for the div with class 'shop-module--controllerContainer--a756d'
    const controllerContainer = await page.locator('div.shop-module--controllerContainer--a756d');
    await expect(controllerContainer).toBeVisible();
  
    // Check for the first div with class 'shop-module--iconContainer--4dc3e' containing the Filters text
    const filtersIconContainer = await page.locator('div.shop-module--iconContainer--4dc3e >> text=Filters');
    await expect(filtersIconContainer).toBeVisible();
  
    // Check for the second div with class 'shop-module--iconContainer--4dc3e shop-module--sortContainer--b6d9e' containing the Sort by text
    const sortByIconContainer = await page.locator('div.shop-module--iconContainer--4dc3e.shop-module--sortContainer--b6d9e >> text=Sort by');
    await expect(sortByIconContainer).toBeVisible();
  });


  test.describe('Chip Module Elements Existence Tests', () => {
    test('check chip XS element existence', async ({ page }) => {
      await page.goto('localhost:5000/shop/'); 
  
      //'Chip-module--root--b4116' containing the XS text
      const chipXS = await page.locator('div.Chip-module--root--b4116').filter({ hasText: 'XS' });
      await expect(chipXS).toBeVisible();
    });
  
    test('check chip S element existence', async ({ page }) => {
      await page.goto('localhost:5000/shop/');
  
      //'Chip-module--root--b4116' containing the S text
      const chipS = await page.locator('div.Chip-module--root--b4116').filter({ hasText: /^S$/ });
      await expect(chipS).toBeVisible();
    });
  });

  test('Shop page | Check for ProductCard elements', async ({ page }) => {
    await page.goto('localhost:5000/shop/'); 
  
    const imageContainer = page.locator('.ProductCard-module--imageContainer--00924').first();
    await expect(imageContainer).toBeVisible();
  
    const bagContainer = imageContainer.locator('.ProductCard-module--bagContainer--39254');
    await expect(bagContainer).toBeVisible();
  
    const heartContainer = imageContainer.locator('.ProductCard-module--heartContainer--f2a71');
    await expect(heartContainer).toBeVisible();
  
    // first product name
    const productName = page.locator('.ProductCard-module--productName--e6c17').first();
    await expect(productName).toBeVisible();
    await expect(productName).toHaveText('Relaxed-fit graphic T-shirt');
  
    // product price
    const productPrice = page.locator('.ProductCard-module--prices--cd435').first();
    await expect(productPrice).toBeVisible();
    await expect(productPrice).toHaveText('$13.90');
  
    // information
    const metaInfo = page.locator('.ProductCard-module--meta--07643').first();
    await expect(metaInfo).toBeVisible();
    await expect(metaInfo).toHaveText('+ 2 colors');
  });

  test('Shop page | Check all elements in the footer exist', async ({ page }) => {
    await page.goto('http://localhost:5000/shop/');
   
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