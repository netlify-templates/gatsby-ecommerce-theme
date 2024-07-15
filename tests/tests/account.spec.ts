import { test, expect } from '@playwright/test';

test('Account orders | Orders elements', async ({ page }) => {
    await page.goto('http://localhost:5000/account/orders/');

    const orderDetailsSelector = '.OrderItem-module--orderHeader--56952';
    const orderDetails = await page.$(orderDetailsSelector);
    expect(orderDetails).not.toBeNull();

    if (orderDetails) {
        const orderId = await orderDetails.$('.OrderItem-module--orderId--a589c');
        const orderTotal = await orderDetails.$('.OrderItem-module--total--3ff20');
        const orderDate = await orderDetails.$('.OrderItem-module--orderDate--117f4');
        const orderStatus = await orderDetails.$('.OrderItem-module--status--d134a');

        expect(orderId).not.toBeNull();
        expect(orderTotal).not.toBeNull();
        expect(orderDate).not.toBeNull();
        expect(orderStatus).not.toBeNull();

        if (orderId) {
            const orderIdText = await orderId.textContent();
            expect(orderIdText).toMatch(/Order #\d+/);
        }
    }
});

test('Check footer elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/account/orders/');

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