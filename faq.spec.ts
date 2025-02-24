import { test, expect } from '@playwright/test';

test('Faq page | Footer elements', async ({ page }) => {
    await page.goto('http://localhost:5000/faq/');
  
    await expect(page.locator('.Footer-module--footerLinks--1a995 >> a[href="/about/"]')).toBeVisible();
    await expect(page.locator('.Footer-module--footerLinks--1a995 >> a[href="/blog/"]')).toBeVisible();
    await expect(page.locator('.Footer-module--footerLinks--1a995 >> a[href="/support/#policy"]')).toBeVisible();
  
    await expect(page.locator('.Footer-module--footerLinks--1a995 >> a[href="/faq/"]')).toBeVisible();
    await expect(page.locator('.Footer-module--footerLinks--1a995 >> a[href="/support/#contact"]')).toBeVisible();
    await expect(page.locator('.Footer-module--footerLinks--1a995 >> a[href="/support/#returns"]')).toBeVisible();
    await expect(page.locator('.Footer-module--footerLinks--1a995 >> a[href="/how-to-use/"]')).toBeVisible();
  
    // newsletter section
    await expect(page.locator('input[name="newsLetterInput"]')).toBeVisible();
    await expect(page.locator('.Footer-module--promoMessage--b609e')).toBeVisible();
  
    // social media icons
    const socialIcons = page.locator('.Footer-module--socialIconContainer--ac360');
    await expect(socialIcons.nth(0)).toBeVisible(); 
    await expect(socialIcons.nth(1)).toBeVisible(); 
    await expect(socialIcons.nth(2)).toBeVisible(); 
    await expect(socialIcons.nth(3)).toBeVisible();
  });
  

  test('Faq page | FAQ banner', async ({ page }) => {
    await page.goto('http://localhost:5000/faq/');
  
    const timeout = 10000;
  
    const bannerRoot = page.locator('.Banner-module--root--d0b7f');
    await expect(bannerRoot).toBeVisible({ timeout });
  
    const bannerContent = bannerRoot.locator('.Banner-module--content--07f4d');
    await expect(bannerContent).toBeVisible({ timeout });
  
    await expect(bannerContent.locator('h2')).toHaveText('Frequently Asked Questions', { timeout });
  });

test('Shop page | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/faq/');

    const mainContainer = page.locator('div.Container-module--container--6761c >> nth=0');
    await expect(mainContainer).toBeVisible();
  
    const header = mainContainer.locator('div.Header-module--header--aa06a');
    await expect(header).toBeVisible();
  
    const navLinks = header.locator('nav a.Header-module--navLink--2a5b8');
    await expect(navLinks.nth(0)).toHaveText('Shop');
    await expect(navLinks.nth(1)).toHaveText('journal');
    await expect(navLinks.nth(2)).toHaveText('About');
  
    const brandLogo = header.locator('div.Brand-module--root--7bb0e');
    await expect(brandLogo).toBeVisible();
  
    const searchButton = header.locator('button[aria-label="Search"]');
    await expect(searchButton).toBeVisible();
  
    const favoritesLink = header.locator('a[aria-label="Favorites"]');
    await expect(favoritesLink).toBeVisible();
  
    const ordersLink = header.locator('a[aria-label="Orders"]');
    await expect(ordersLink).toBeVisible();
  
    const cartButton = header.locator('button[aria-label="Cart"]');
    await expect(cartButton).toBeVisible();
});
