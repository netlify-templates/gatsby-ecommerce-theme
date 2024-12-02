import { test, expect } from '@playwright/test';


test('account/favorites/ | My Bag element', async ({ page }) => {
    await page.goto('http://localhost:5000/account/favorites/');

    // Click the cart button
    const cartButton = await page.locator('button[aria-label="Cart"]');
    await cartButton.click();
      
    const myBagElement = await page.locator('h4:has-text("My Bag")');
    await expect(myBagElement).toBeVisible();
});
      

test('account/favorites/ | click the cart button and check all Mini Cart item elements exist', async ({ page }) => {
        
    await page.goto('http://localhost:5000/account/favorites/');
      
    // cart button
    const cartButton = await page.locator('button[aria-label="Cart"]');
    await cartButton.click();
      
    // Cart item elements exist
  const miniCartItemRoot    = await page.locator('.MiniCartItem-module--root--9bda7');
  const imageContainer      = await page.locator('.MiniCartItem-module--imageContainer--3cdb5');
  const productImage        = await page.locator('.MiniCartItem-module--imageContainer--3cdb5 img');
  const detailsContainer    = await page.locator('.MiniCartItem-module--detailsContainer--ad9e6');
  const productName         = await page.locator('.MiniCartItem-module--name--e5c89');
  const priceContainer      = await page.locator('.MiniCartItem-module--priceContainer--64de1');
  const priceSymbol         = await page.locator('.MiniCartItem-module--priceContainer--64de1 span').nth(0);
  const priceValue          = await page.locator('.MiniCartItem-module--priceContainer--64de1 span').nth(1);
  const productMetaColor    = await page.locator('.MiniCartItem-module--meta--12c6d:has-text("Color: Anthracite Melange")');
  const productMetaSize     = await page.locator('.MiniCartItem-module--meta--12c6d:has-text("Size:")');
  const productSize         = await page.locator('.MiniCartItem-module--size--7489d');
  const adjustItemContainer = await page.locator('.MiniCartItem-module--adjustItemContainer--ff32a');
  const adjustItemRoot      = await page.locator('.AdjustItem-module--root--c19b7');
  const minusIconContainer  = await page.locator('.AdjustItem-module--iconContainer--a2f36').nth(0);
  const quantityInput       = await page.locator('.AdjustItem-module--inputContainer--9d8ec input');
  const plusIconContainer   = await page.locator('.AdjustItem-module--iconContainer--a2f36').nth(1);
  const closeContainer      = await page.locator('.MiniCartItem-module--closeContainer--1dcaa');
  const removeItemRoot      = await page.locator('.RemoveItem-module--root--ed714');

  await expect(miniCartItemRoot).toBeVisible();
  await expect(imageContainer).toBeVisible();
  await expect(productImage).toBeVisible();
  await expect(detailsContainer).toBeVisible();
  await expect(productName).toBeVisible();
  await expect(priceContainer).toBeVisible();
  await expect(priceSymbol).toBeVisible();
  await expect(priceValue).toBeVisible();
  await expect(productMetaColor).toBeVisible();
  await expect(productMetaSize).toBeVisible();
  await expect(productSize).toBeVisible();
  await expect(adjustItemContainer).toBeVisible();
  await expect(adjustItemRoot).toBeVisible();
  await expect(minusIconContainer).toBeVisible();
  await expect(quantityInput).toBeVisible();
  await expect(plusIconContainer).toBeVisible();
  await expect(closeContainer).toBeVisible();
  await expect(removeItemRoot).toBeVisible();
});


test('account/favorites/ | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/account/favorites/');
  
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