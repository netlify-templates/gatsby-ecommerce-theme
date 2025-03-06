import { test, expect } from '@playwright/test';

test('Signup page | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/signup');
  
    const mainContainer = page.locator('div.Container-module--container--6761c >> nth=0');
    await expect(mainContainer).toBeVisible();
  
    // Header
    const header = mainContainer.locator('div.Header-module--header--aa06a');
    await expect(header).toBeVisible();
  
    // Navigation links
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

test('Signup page | Elements on the signup page exists', async ({ page }) => {
    await page.goto('http://localhost:5000/signup');
  
    // title
    const title = page.locator('h1.signup-module--title--8132f');
    await expect(title).toHaveText('Create Account');
  
    //  subtitle
    const subtitle = page.locator('span.signup-module--subtitle--d1f2c');
    await expect(subtitle).toHaveText('Please enter your the information below:');
  
    // first name input field
    const firstNameLabel = page.locator('label[for="firstName"]');
    const firstNameInput = page.locator('input#firstName');
    await expect(firstNameLabel).toHaveText('First Name ');
    await expect(firstNameInput).toBeVisible();
  
    // last name input field
    const lastNameLabel = page.locator('label[for="lastName"]');
    const lastNameInput = page.locator('input#lastName');
    await expect(lastNameLabel).toHaveText('Last Name ');
    await expect(lastNameInput).toBeVisible();
  
    // email input field
    const emailLabel = page.locator('label[for="email"]');
    const emailInput = page.locator('input#email');
    await expect(emailLabel).toHaveText('Email ');
    await expect(emailInput).toBeVisible();
  
    // password input field
    const passwordLabel = page.locator('label[for="password"]');
    const passwordInput = page.locator('input#password');
    await expect(passwordLabel).toHaveText('Password ');
    await expect(passwordInput).toBeVisible();
  
    //create account button
    const createAccountButton = page.locator('button[type="submit"]');
    await expect(createAccountButton).toHaveText('create account');
  
    // reminder text
    const reminderText = page.locator('span.signup-module--reminder--9f649');
    await expect(reminderText).toHaveText('Have an account?');
  
    // log in button
    const logInButton = page.locator('button', { hasText: 'log in' });
    await expect(logInButton).toHaveText('log in');
});


test('Signup page | log in button redirects to login page', async ({ page }) => {
    await page.goto('http://localhost:5000/signup/');
  
    await page.click('button.Button-module--button--c17ef.Button-module--secondary--e788d.Button-module--fullWidth--737a0');
  
    await page.waitForURL('**/login/');
  
    await expect(page).toHaveURL(/\/login\/$/);
});

test('Signup page | Footer elements', async ({ page }) => {
    await page.goto('http://localhost:5000/signup/');

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
