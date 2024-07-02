import { test, expect } from '@playwright/test';

test('Login page | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/login');
  
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


test('Login page | Check all elements exist on login page', async ({ page }) => {
    await page.goto('http://localhost:5000/login');
  
    const loginTitle = page.locator('h1.login-module--loginTitle--fd184');
    await expect(loginTitle).toHaveText('Login');
  
    const subtitle = page.locator('span.login-module--subtitle--63321');
    await expect(subtitle).toHaveText('Please enter your e-mail and password');
  
    const emailLabel = page.locator('label[for="email"].FormInputField-module--label--df295');
    await expect(emailLabel).toHaveText('Email');
    const emailInput = page.locator('input#email[name="email"].FormInputField-module--input--8de56');
    await expect(emailInput).toBeVisible();
  
    const passwordLabel = page.locator('label[for="password"].FormInputField-module--label--df295');
    await expect(passwordLabel).toHaveText('Password');
    const passwordInput = page.locator('input#password[name="password"].FormInputField-module--input--8de56');
    await expect(passwordInput).toBeVisible();
  
    const forgotPasswordLink = page.locator('a.login-module--forgotLink--0d638[href="/forgot/"]');
    await expect(forgotPasswordLink).toHaveText('Forgot Password');
  
    const loginButton = page.locator('button.Button-module--button--c17ef.Button-module--primary--2e17d.Button-module--fullWidth--737a0[type="submit"]');
    await expect(loginButton).toHaveText('LOG IN');
  
    const newCustomerText = page.locator('span.login-module--createLink--314d0');
    await expect(newCustomerText).toHaveText('New Customer?');
  
    const createAccountButton = page.locator('button.Button-module--button--c17ef.Button-module--secondary--e788d.Button-module--fullWidth--737a0[type="button"]');
    await expect(createAccountButton).toHaveText('create an account');
  
    await createAccountButton.click();
  
    await page.goto('http://localhost:5000/signup');
  });


  test('Login page | Attribute elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/login');
  
    const freeDeliveryRoot = page.locator('div.Attribute-module--root--d11a4:nth-child(1)');
    const freeDeliveryIcon = freeDeliveryRoot.locator('div.Attribute-module--iconContainer--81ef8 svg');
    const freeDeliveryTitle = freeDeliveryRoot.locator('span.Attribute-module--title--afe18');
    const freeDeliverySubtitle = freeDeliveryRoot.locator('span.Attribute-module--subtitle--6e815');
  
    await expect(freeDeliveryIcon).toBeVisible();
    await expect(freeDeliveryTitle).toHaveText('free delivery worldwide');
    await expect(freeDeliverySubtitle).toHaveText('Click to learn more');
  
    const returnsRoot = page.locator('div.Attribute-module--root--d11a4:nth-child(2)');
    const returnsIcon = returnsRoot.locator('div.Attribute-module--iconContainer--81ef8 svg');
    const returnsTitle = returnsRoot.locator('span.Attribute-module--title--afe18');
    const returnsSubtitle = returnsRoot.locator('span.Attribute-module--subtitle--6e815');
  
    await expect(returnsIcon).toBeVisible();
    await expect(returnsTitle).toHaveText('returns');
    await expect(returnsSubtitle).toHaveText('Return goods in 30 days');
  
    const securedPaymentRoot = page.locator('div.Attribute-module--root--d11a4:nth-child(3)');
    const securedPaymentIcon = securedPaymentRoot.locator('div.Attribute-module--iconContainer--81ef8 svg');
    const securedPaymentTitle = securedPaymentRoot.locator('span.Attribute-module--title--afe18');
    const securedPaymentSubtitle = securedPaymentRoot.locator('span.Attribute-module--subtitle--6e815');
  
    await expect(securedPaymentIcon).toBeVisible();
    await expect(securedPaymentTitle).toHaveText('secured payment');
    await expect(securedPaymentSubtitle).toHaveText('Shop safely');
  });


  test('Login page | Footer exist', async ({ page }) => {
    await page.goto('http://localhost:5000/login/');
   
   const footerContainer = page.locator('.Footer-module--content--2aeb3');
   await expect(footerContainer).toBeVisible({ timeout: 10000 });
 
   const footerContentTop = footerContainer.locator('.Footer-module--contentTop--729c1');
   await expect(footerContentTop).toBeVisible();
 
   const infoSection = footerContentTop.locator('.Footer-module--footerLinkContainer--34ce1').nth(0);
   await expect(infoSection).toBeVisible();
   await expect(infoSection.locator('.Footer-module--linkTitle--fa138')).toHaveText('Info');
 
   const infoLinks = infoSection.locator('.Footer-module--linkList--6f95b li a');
   await expect(infoLinks).toHaveCount(6);
   await expect(infoLinks.nth(0)).toHaveText('About Us');
   await expect(infoLinks.nth(1)).toHaveText('Journal');
   await expect(infoLinks.nth(2)).toHaveText('Privacy Policy');
 
   const supportSection = footerContentTop.locator('.Footer-module--footerLinkContainer--34ce1').nth(1);
   await expect(supportSection).toBeVisible();
   await expect(supportSection.locator('.Footer-module--linkTitle--fa138')).toHaveText('Support');
 
   const supportLinks = supportSection.locator('.Footer-module--linkList--6f95b li a');
   await expect(supportLinks).toHaveCount(8);
   await expect(supportLinks.nth(0)).toHaveText('FAQ');
   await expect(supportLinks.nth(1)).toHaveText('Contact Us');
   await expect(supportLinks.nth(2)).toHaveText('Shipping & Returns');
   await expect(supportLinks.nth(3)).toHaveText('How to use this theme');
 
   const newsletterSection = footerContainer.locator('.Footer-module--newsLetter--91500');
   await expect(newsletterSection).toBeVisible();
   await expect(newsletterSection.locator('.Footer-module--newsLetterContent--e10ad')).toBeVisible();
   await expect(newsletterSection.locator('.Footer-module--linkTitle--fa138')).toHaveText('Newsletter');
   await expect(newsletterSection.locator('.Footer-module--promoMessage--b609e')).toHaveText('Get 15% off your first purchase! Plus, be the first to know about sales, new product launches and exclusive offers!');
 
   await expect(newsletterSection.locator('.Footer-module--newsLetterForm--11787 input[name="newsLetterInput"]')).toBeVisible();
 
   const socialIcons = newsletterSection.locator('.Footer-module--socialIconContainer--ac360');
   await expect(socialIcons).toHaveCount(4);
 });