import { test, expect } from '@playwright/test';

test('Cart page | All elements in header exist', async ({ page }) => {
    await page.goto('http://localhost:5000/cart/');
  
    const headerContainer = page.locator('div.cart-module--headerContainer--33826');
    await expect(headerContainer).toBeVisible();
  
    const shoppingContainer = headerContainer.locator('div.cart-module--shoppingContainer--cdac8');
    await expect(shoppingContainer).toBeVisible();
  
    const shopLink = shoppingContainer.locator('a.cart-module--shopLink--a0151');
    await expect(shopLink).toBeVisible();
    await expect(shopLink).toHaveAttribute('href', '/shop/');
  
    const shopLinkSvg = shopLink.locator('svg');
    await expect(shopLinkSvg).toBeVisible();
    await expect(shopLinkSvg).toHaveAttribute('width', '15');
    await expect(shopLinkSvg).toHaveAttribute('height', '15');
  
    const continueShoppingSpan = shopLink.locator('span.cart-module--continueShopping--f2529');
    await expect(continueShoppingSpan).toBeVisible();
    await expect(continueShoppingSpan).toHaveText('Continue Shopping');
  
    const brandContainer = headerContainer.locator('div.Brand-module--root--7bb0e');
    await expect(brandContainer).toBeVisible();
    await expect(brandContainer).toHaveAttribute('role', 'presentation');
  
    const brandSvg = brandContainer.locator('svg');
    await expect(brandSvg).toBeVisible();
    await expect(brandSvg).toHaveAttribute('width', '127');
    await expect(brandSvg).toHaveAttribute('height', '24');
  
    const loginContainer = headerContainer.locator('div.cart-module--loginContainer--120bb');
    await expect(loginContainer).toBeVisible();
  
    // Check for the login link
    const loginLink = loginContainer.locator('a');
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveAttribute('href', '/login/');
    await expect(loginLink).toHaveText('Login');
  });

  test('Cart page | Order Summary', async ({ page }) => {
    await page.goto('http://localhost:5000/cart/');

    const orderSummary = page.locator('div.OrderSummary-module--orderSummary--2151a');
    await expect(orderSummary).toBeVisible();
  
    const orderSummaryTitle = orderSummary.locator('span.OrderSummary-module--title--ac4fb');
    await expect(orderSummaryTitle).toBeVisible();
    await expect(orderSummaryTitle).toHaveText('order summary');
  
    const calculationContainer = orderSummary.locator('div.OrderSummary-module--calculationContainer--0cca1');
    await expect(calculationContainer).toBeVisible();
  
    const labelContainers = calculationContainer.locator('div.OrderSummary-module--labelContainer--bdd63');
    await expect(labelContainers).toHaveCount(3);
  
    await expect(labelContainers.nth(0).locator('span').first()).toHaveText('Subtotal');
    await expect(labelContainers.nth(0).locator('span').nth(1)).toHaveText('$440.00');
  
    await expect(labelContainers.nth(1).locator('span').first()).toHaveText('Shipping');
    await expect(labelContainers.nth(1).locator('span').nth(1)).toHaveText('---');
  
    await expect(labelContainers.nth(2).locator('span').first()).toHaveText('Tax');
    await expect(labelContainers.nth(2).locator('span').nth(1)).toHaveText('$0.00');
  
    const couponContainer = orderSummary.locator('div.OrderSummary-module--couponContainer--13bed');
    await expect(couponContainer).toBeVisible();
  
    const couponCodeLabel = couponContainer.locator('span').nth(0);
    await expect(couponCodeLabel).toBeVisible();
    await expect(couponCodeLabel).toHaveText('Coupon Code');
  
    const couponInputField = couponContainer.locator('input#couponInput').nth(0);
    await expect(couponInputField).toBeVisible();
    await expect(couponInputField).toHaveAttribute('name', 'couponInput');
  
    const couponInputIcon = couponContainer.locator('div.FormInputField-module--iconContainer--9d2a4').nth(0).locator('svg');
    await expect(couponInputIcon).toBeVisible();
    await expect(couponInputIcon).toHaveAttribute('width', '15');
    await expect(couponInputIcon).toHaveAttribute('height', '15');
  
    const giftCardLabel = couponContainer.locator('span').nth(1);
    await expect(giftCardLabel).toBeVisible();
    await expect(giftCardLabel).toHaveText('Gift Card');
  
    const giftCardInputField = couponContainer.locator('input#couponInput').nth(1);
    await expect(giftCardInputField).toBeVisible();
    await expect(giftCardInputField).toHaveAttribute('name', 'couponInput');
  
    const giftCardInputIcon = couponContainer.locator('div.FormInputField-module--iconContainer--9d2a4').nth(1).locator('svg');
    await expect(giftCardInputIcon).toBeVisible();
    await expect(giftCardInputIcon).toHaveAttribute('width', '15');
    await expect(giftCardInputIcon).toHaveAttribute('height', '15');
  
    const totalContainer = orderSummary.locator('div.OrderSummary-module--totalContainer--491aa');
    await expect(totalContainer).toBeVisible();
  
    const totalAmount = totalContainer.locator('span').nth(1);
    await expect(totalAmount).toBeVisible();
    await expect(totalAmount).toHaveText('$440.00');
  });


  test('Cart page | checkout button redirect to confirm page', async ({ page }) => {
    await page.goto('http://localhost:5000/cart/');
  
    // Check for the checkout button
    const checkoutButton = page.getByRole('button', { name: 'checkout' })
    await expect(checkoutButton).toBeVisible();
  
    await Promise.all([
      page.waitForNavigation(),
      checkoutButton.click()  
    ]);
  
    await page.goto('http://localhost:5000/orderConfirm/');
  });