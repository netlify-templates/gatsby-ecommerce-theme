import { test, expect } from '@playwright/test';

test('Product page | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/product/sample/');
  
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


test('Product page | Check links', async ({ page }) => {
    await page.goto('http://localhost:5000/product/sample/');

  const homeLink = page.locator('a.BreadCrumbs-module--crumb--3257d', { hasText: 'Home' });
  await expect(homeLink).toBeVisible();
  await homeLink.click();
  await expect(page).toHaveURL('http://localhost:5000/');

  await page.goto('http://localhost:5000/product/sample/');

  const menLink = page.locator('a.BreadCrumbs-module--crumb--3257d', { hasText: 'Men' });
  await expect(menLink).toBeVisible();
  await menLink.click();
  await expect(page).toHaveURL(/http:\/\/localhost:5000\/shop\/?/);

  await page.goto('http://localhost:5000/product/sample/');

  const sweaterLink = page.locator('a.BreadCrumbs-module--crumb--3257d', { hasText: 'Sweater' });
  await expect(sweaterLink).toBeVisible();
  await sweaterLink.click();
  await expect(page).toHaveURL(/http:\/\/localhost:5000\/shop\/?/);

  await page.goto('http://localhost:5000/product/sample/');

  const jumperText = page.locator('span.BreadCrumbs-module--crumb--3257d');
  await expect(jumperText).toBeVisible();
  await expect(jumperText).toHaveText('Lambswool Crew Neck Jumper');
  });


  test('Product page | Check product images exist', async ({ page }) => {
    await page.goto('http://localhost:5000/product/sample/');

    const img1 = page.locator('div.Gallery-module--imageContainer--ae68e img[alt="pdp description 1"]').first();
    await expect(img1).toBeVisible();
    await expect(img1).toHaveAttribute('src', '/products/pdp1.jpeg?imgcdn=true');
  
    const img2 = page.locator('div.Gallery-module--imageContainer--ae68e img[alt="pdp description 2"]').first();
    await expect(img2).toBeVisible();
    await expect(img2).toHaveAttribute('src', '/products/pdp2.jpeg?imgcdn=true');
  
    const img3 = page.locator('div.Gallery-module--imageContainer--ae68e img[alt="pdp description 3"]').first();
    await expect(img3).toBeVisible();
    await expect(img3).toHaveAttribute('src', '/products/pdp3.jpeg?imgcdn=true');
  
    const img4 = page.locator('div.Gallery-module--imageContainer--ae68e img[alt="pdp description 4"]').first();
    await expect(img4).toBeVisible();
    await expect(img4).toHaveAttribute('src', '/products/pdp4.jpeg?imgcdn=true');
  });


test('Check product page elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000/product/sample/');
  
    const vendorName = page.locator('span.sample-module--vendor--de5dc', { hasText: 'by Sunspel' });
    await expect(vendorName).toBeVisible();
  
    const priceContainer = page.locator('div.sample-module--priceContainer--eeab5');
    await expect(priceContainer).toBeVisible();
    await expect(priceContainer.locator('span').first()).toHaveText('$');
    await expect(priceContainer.locator('span').nth(1)).toHaveText('75.00');
  
    const colorSwatchSection = page.locator('div.SwatchList-module--root--8d12e');
    const colorSwatchLabel = colorSwatchSection.locator('span.SwatchList-module--label--b12be').nth(0);
    await expect(colorSwatchLabel).toBeVisible();
    const colorSwatches = colorSwatchSection.locator('div.SwatchList-module--swatchSelection--a95b1 button');
    await expect(colorSwatches).toHaveCount(6);
    await expect(colorSwatches.nth(0)).toHaveClass(/Swatch-module--isActive--3d559/);
    await expect(colorSwatches.nth(1)).toHaveClass(/Swatch-module--root--b289f/);
    await expect(colorSwatches.nth(2)).toHaveClass(/Swatch-module--root--b289f/);
  
  const sizeContainer = page.locator('div.SizeList-module--root--d1877');
  const sizeLabel = sizeContainer.locator('span.SizeList-module--label--44881').nth(0);
  await expect(sizeLabel).toBeVisible();

  const sizeOptions = sizeContainer.locator('div.SizeList-module--sizeSelection--45655 div.BoxOption-module--root--49993');
  await expect(sizeOptions).toHaveCount(10);
  await expect(sizeOptions.nth(0)).toHaveText('xs');
  await expect(sizeOptions.nth(1)).toHaveText('s');
  await expect(sizeOptions.nth(2)).toHaveText('m');
  await expect(sizeOptions.nth(3)).toHaveText('l');
  await expect(sizeOptions.nth(4)).toHaveText('xl');
});