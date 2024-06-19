import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('localhost:5000');

  // TODO
  // > set title for app
  // await expect(page).toHaveTitle(/Playwright/);
});

test('shipping text exist', async ({ page }) => {
  await page.goto('localhost:5000');

  const UpperText = "Free shipping worldwide";

  const loc = await page.getByText(UpperText);

  await expect(loc).toBeVisible();
});

test('Brand logo should be present', async ({ page }) => {
  await page.goto('localhost:5000'); 

  // Check if the logo exists
  const brandLogo = page.locator('.Brand-module--root--7bb0e');
  await expect(brandLogo).toBeVisible();
});

test('Header exist', async ({ page }) => {
  await page.goto('localhost:5000');

  const HeaderTextShop = "Shop";
  const HeaderTextJournal = "journal";
  const HeaderTextAbout = "About";

  const HeaderShop = await page.getByText(HeaderTextShop);
  const HeaderJournal = await page.getByText(HeaderTextJournal);
  const HeaderAbout = await page.getByText(HeaderTextAbout);

  await expect(HeaderShop).toBeTruthy();
  await expect(HeaderJournal).toBeTruthy();
  await expect(HeaderAbout).toBeTruthy();
});

test('All header elements should be present', async ({ page }) => {
  await page.goto('localhost:5000'); 

  // brand logo 
  const brandLogo = page.locator('.Brand-module--root--7bb0e');
  await expect(brandLogo).toBeVisible();

  // search button 
  const searchButton = page.locator('.Header-module--iconButton--db197[aria-label="Search"]');
  await expect(searchButton).toBeVisible();

  // favorites link
  const favoritesLink = page.locator('.Header-module--iconContainer--8ecbb[aria-label="Favorites"]');
  await expect(favoritesLink).toBeVisible();

  // orders link
  const ordersLink = page.locator('.Header-module--iconContainer--8ecbb[aria-label="Orders"]');
  await expect(ordersLink).toBeVisible();

  // cart button
  const cartButton = page.locator('.Header-module--iconButton--db197[aria-label="Cart"]');
  await expect(cartButton).toBeVisible();
});

test('Hero section "Essentials for a cold winter" should have a background image', async ({ page }) => {
  await page.goto('localhost:5000');

  // Select the specific hero section by using the text content
  const heroSection = page.locator('.Hero-module--root--39580:has-text("Essentials for a cold winter")');

  // Check if the background image is set correctly
  const backgroundImage = await heroSection.evaluate((element) => {
    return window.getComputedStyle(element).getPropertyValue('background-image');
  });

  expect(backgroundImage).toContain('/banner1.png?imgcdn=true');
});