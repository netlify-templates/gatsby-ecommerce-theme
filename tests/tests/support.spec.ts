import { test, expect } from '@playwright/test';


test('Support page | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/support/');

 // banner
 const bannerRoot = await page.$('.Banner-module--root--d0b7f');
 expect(bannerRoot).not.toBeNull();

 if (bannerRoot) {
   const bannerContent = await bannerRoot.$('.Banner-module--content--07f4d');
   expect(bannerContent).not.toBeNull();

   if (bannerContent) {
     const bannerHeading = await bannerContent.$('h2');
     expect(bannerHeading).not.toBeNull();

     if (bannerHeading) {
       expect(await bannerHeading.textContent()).toBe('Contact Us');
     }
   }
 }
});

test('Support page | All policy general text', async ({ page }) => {
    await page.goto('http://localhost:5000/support/');
  
    const policyRoot = await page.$('.Policy-module--root--be247');
    expect(policyRoot).not.toBeNull();
  
    if (policyRoot) {
      const section1 = await policyRoot.$('.Policy-module--section--8f61b:nth-child(1)');
      expect(section1).not.toBeNull();
  
      if (section1) {
        const heading1 = await section1.$('h3');
        expect(heading1).not.toBeNull();
        if (heading1) {
          expect(await heading1.textContent()).toBe('1. Lorem Ipsum');
        }
  
        const paragraphs1 = await section1.$$('p');
        expect(paragraphs1.length).toBe(3);
      }
  
      const section2 = await policyRoot.$('.Policy-module--section--8f61b:nth-child(2)');
      expect(section2).not.toBeNull();
  
      if (section2) {
        const heading2 = await section2.$('h3');
        expect(heading2).not.toBeNull();
        if (heading2) {
          expect(await heading2.textContent()).toBe('2. Lorem Ipsum');
        }
  
        const paragraphs2 = await section2.$$('p');
        expect(paragraphs2.length).toBe(3);
      }
  
      const section3 = await policyRoot.$('.Policy-module--section--8f61b:nth-child(3)');
      expect(section3).not.toBeNull();
  
      if (section3) {
        const heading3 = await section3.$('h3');
        expect(heading3).not.toBeNull();
        if (heading3) {
          expect(await heading3.textContent()).toBe('3. Lorem Ipsum');
        }
  
        const paragraphs3 = await section3.$$('p');
        expect(paragraphs3.length).toBe(8);
      }
    }
  });

test('Support page | Header elements', async ({ page }) => {
    await page.goto('http://localhost:5000/support/');

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