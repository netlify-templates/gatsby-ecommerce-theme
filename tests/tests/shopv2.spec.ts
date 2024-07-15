import { test, expect } from '@playwright/test';

test('ShopV2 api | Check main elements', async ({ page }) => {
    await page.goto('http://localhost:5000/shopV2/');

    const productCards = await page.$$('.ProductCard-module--root--d7fcc');

    for (const card of productCards) {
        const productNameElement = await card.$('.ProductCard-module--productName--e6c17');
        const pricesElement = await card.$('.ProductCard-module--prices--cd435');
        
        if (productNameElement) {
            const productName = await productNameElement.innerText();
           // console.log(`Product Name: ${productName}`);
        } else {
            console.log('Product Name element is null');
        }

        if (pricesElement) {
            const priceText = await pricesElement.innerText();
            // console.log(`Price: ${priceText}`);
        } else {
            console.log('Prices element is null');
        }
    }
});

test('Click on Product Card and check redirect', async ({ page }) => {
    await page.goto('http://localhost:5000/shopV2/');

    const productCardSelector = '.ProductCard-module--root--d7fcc';
    const productCard = await page.$(productCardSelector);
    
    expect(productCard).not.toBeNull();

    if (productCard) {
        await productCard.click();

        await page.waitForNavigation();

        expect(page.url()).toBe('http://localhost:5000/product/sample/');
    } else {
        console.error('Product card not found!');
    }
});

test('Check footer elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/shopV2/');

    const footerSelector = '.Footer-module--content--2aeb3';
    const footer = await page.$(footerSelector);
    expect(footer).not.toBeNull();

    // Check for specific elements within the footer
    const footerLinks = await page.$$('.Footer-module--footerLinkContainer--34ce1');
    // at least one footer link container exists
    expect(footerLinks.length).toBeGreaterThan(0);

    const newsletterSection = await page.$('.Footer-module--newsLetter--91500');
    expect(newsletterSection).not.toBeNull();

    const socialIcons = await page.$$('.Footer-module--socialIconContainer--ac360');
    expect(socialIcons.length).toBeGreaterThan(0);
});