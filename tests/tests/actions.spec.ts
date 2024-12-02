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


test('Check navigation links and breadcrumbs existence', async ({ page }) => {
    await page.goto('http://localhost:5000/account/orders/');
  
    await expect(page.locator('a.AccountNav-module--webLink--22ce5[href="/account/orders/"]')).toBeVisible();  
    await expect(page.locator('a.AccountNav-module--webLink--22ce5[href="/account/address/"]')).toBeVisible();
    await expect(page.locator('a.AccountNav-module--webLink--22ce5[href="/account/settings/"]')).toBeVisible();
    await expect(page.locator('a.AccountNav-module--webLink--22ce5[href="/account/viewed/"]')).toBeVisible();
    await expect(page.locator('span.AccountNav-module--webLink--22ce5:has-text("Logout")')).toBeVisible();
  
    await expect(page.locator('div[data-breadcrumbs="true"]')).toBeVisible();
});

  
test('check that Filters panel is visible and contains expected elements', async ({ page }) => {
    await page.goto('http://localhost:5000/shop/');
  
    // Click the button to open the Filters panel
    const filtersButton = page.locator('div').filter({ hasText: /^Filters$/ });
    await expect(filtersButton).toBeVisible();
    await filtersButton.click();
  
    // Filters panel is visible
    const filterPanel = page.locator('div.CardController-module--filterContainer--601b9');
    await expect(filterPanel).toBeVisible();
  
    // Verify the presence of categories and checkboxes within the Filters panel
  
    // Check 'colour' category
    await expect(filterPanel.getByText('colour').first()).toBeVisible();
    await expect(filterPanel.locator('input#Black')).toBeVisible();
    await expect(filterPanel.locator('input#Green')).toBeVisible();
    await expect(filterPanel.locator('input#Blue')).toBeVisible();
    await expect(filterPanel.locator('input#Grey')).toBeVisible();
    await expect(filterPanel.locator('input#Red')).toBeVisible();
  
    // Check 'size' category
    await expect(filterPanel.getByText('size', { exact: true }).first()).toBeVisible();
    await expect(filterPanel.locator('input#XXS')).toBeVisible();
    await expect(filterPanel.locator('input#XS')).toBeVisible();
    await expect(filterPanel.locator('input#S')).toBeVisible();
    await expect(filterPanel.locator('input#M')).toBeVisible();
    await expect(filterPanel.locator('input#L')).toBeVisible();
    await expect(filterPanel.locator('input#XL')).toBeVisible();
    await expect(filterPanel.locator('input#XXL')).toBeVisible();
    await expect(filterPanel.locator('input#Onesize')).toBeVisible();
  
    // Check 'gender' category
    await expect(filterPanel.getByText('gender').first()).toBeVisible();
    await expect(filterPanel.locator('input#Male')).toBeVisible();
    await expect(filterPanel.locator('input#Female')).toBeVisible();
    await expect(filterPanel.locator('input#Unisex')).toBeVisible();
  });


  test('click accordion button and check visibility of content', async ({ page }) => {
    await page.goto('http://localhost:5000/product/sample/');
  
    const accordionButton = page.locator('div').filter({ hasText: /^composition & care$/ });
    await expect(accordionButton).toBeVisible(); 
  
    await accordionButton.click();
  

    const accordionContent = page.locator('div.Accordion-module--accordionContent--d4d65.Accordion-module--show--96114');
    await expect(accordionContent).toBeVisible();
  
    await expect(accordionContent.locator('p.sample-module--information--29ab5')).toHaveText('This soft lambswool jumper is knitted in Scotland, using yarn from one of the world\'s oldest spinners based in Fife. Once knitted, the garment is washed in Scottish spring water to make it beautifully soft.');
  });


  test('check accordion section for "delivery & returns"', async ({ page }) => {
    await page.goto('http://localhost:5000/product/sample/');
  
    const accordionHeader = page.locator('div.Accordion-module--accordionHeader--fb950 >> text=delivery & returns');
    await expect(accordionHeader).toBeVisible(); 
    await accordionHeader.click(); 
  
    const accordionContent = page.locator('div.Accordion-module--accordionContent--d4d65.Accordion-module--show--96114');
    await expect(accordionContent).toBeVisible(); 
  
    await expect(accordionContent.locator('p.sample-module--information--29ab5')).toHaveText('This soft lambswool jumper is knitted in Scotland, using yarn from one of the world\'s oldest spinners based in Fife. Once knitted, the garment is washed in Scottish spring water to make it beautifully soft.');
  });

  test('check accordion section for "help"', async ({ page }) => {
    await page.goto('http://localhost:5000/product/sample/');
  
    const accordionHeader = page.locator('div.Accordion-module--accordionHeader--fb950 >> text=help');
    await expect(accordionHeader).toBeVisible(); 
    await accordionHeader.click(); 
  
    const accordionContent = page.locator('div.Accordion-module--accordionContent--d4d65.Accordion-module--show--96114');
    await expect(accordionContent).toBeVisible(); 
  
    await expect(accordionContent.locator('p.sample-module--information--29ab5')).toHaveText('This soft lambswool jumper is knitted in Scotland, using yarn from one of the world\'s oldest spinners based in Fife. Once knitted, the garment is washed in Scottish spring water to make it beautifully soft.');
  });