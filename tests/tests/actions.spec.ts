import { test, expect } from '@playwright/test';

test('Header cart button open menu', async ({ page }) => {
    await page.goto('http://localhost:5000');

    const cartButton = await page.locator('button[aria-label="Cart"]');

    // cart button exists
    await expect(cartButton).toBeVisible();
  
    await cartButton.click();

    const miniCartPanel = page.locator('.MiniCart-module--root--1956d');

    await expect(miniCartPanel).toBeVisible();

    const quantityInput = page.locator('.AdjustItem-module--inputContainer--9d8ec input');

    // Check the initial value
    await expect(quantityInput).toHaveValue('1');
  
    // Locate the increment and decrement buttons
    const incrementButton = page.locator('.AdjustItem-module--iconContainer--a2f36').nth(1);
    const decrementButton = page.locator('.AdjustItem-module--iconContainer--a2f36').nth(0);
  
    // Click the increment button
    await incrementButton.click();
    await expect(quantityInput).toHaveValue('2');
  
    // Click the decrement button
    await decrementButton.click();
    await expect(quantityInput).toHaveValue('1');


    const checkoutButton = page.locator('button').filter({ hasText: 'checkout' })

    await expect(checkoutButton).toBeVisible();
  
    // Click the checkout button
    await checkoutButton.click();
  
    await page.waitForNavigation();
  
    // Verify that the page URL has changed
    await expect(page).toHaveURL('http://localhost:5000/cart/');
});

test('Check click edit button actions', async ({ page }) => {
    await page.goto('http://localhost:5000/cart/');

    const editButton = page.locator('div').filter({ hasText: /^Edit$/ }).first()

    // edit button is visible
    await expect(editButton).toBeVisible();
  
    await editButton.click();
  
    await page.waitForSelector('.QuickView-module--root--41109');

    // Verify the content within the Quick View panel
    const quickViewPanel = page.getByText('Select OptionsLambswool Crew').first()

    // Quick View panel is visible
    await expect(quickViewPanel).toBeVisible();
  
    const titleElement = await quickViewPanel.locator('h4');
    const titleText = await titleElement.innerText();
    expect(titleText).toContain('Select Options');

    // product name inside the Quick View panel
    const productNameElement = await quickViewPanel.locator('.QuickView-module--productName--d8aac');
    const productNameText = await productNameElement.innerText();
    expect(productNameText).toContain('Lambswool Crew Neck Jumper');

    //price inside the Quick View panel
    const priceElement = await quickViewPanel.locator('.QuickView-module--price--6d140');
    const priceText = await priceElement.innerText();
    expect(priceText).toContain('$75');   
});


test('Check button for change colors', async ({ page }) => {
    await page.goto('http://localhost:5000/cart/');

    const editButton = page.locator('div').filter({ hasText: /^Edit$/ }).first()

    await expect(editButton).toBeVisible();
  
    await editButton.click();
    const colorButton = await page.locator('button:nth-child(2)').first()
    await colorButton.click();

    // Wait for the color title to update
    await page.waitForSelector('.SwatchList-module--label--b12be');

    // Verify the updated color title
    const colorTitleElement = await page.getByText('Select Colour: Pale Purple')

    const colorTitleText = await colorTitleElement.innerText();
    
    expect(colorTitleText).toContain('Pale Purple');
});