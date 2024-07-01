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