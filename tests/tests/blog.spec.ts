import { test, expect } from '@playwright/test';

test('Blog page | Header elements exist', async ({ page }) => {
    await page.goto('http://localhost:5000');
  
    // Find the main container with a more specific locator
    const mainContainer = page.locator('div.Container-module--container--6761c >> nth=0');
    await expect(mainContainer).toBeVisible();
  
    // Check the header
    const header = mainContainer.locator('div.Header-module--header--aa06a');
    await expect(header).toBeVisible();
  
    // Check the navigation links
    const navLinks = header.locator('nav a.Header-module--navLink--2a5b8');
    await expect(navLinks.nth(0)).toHaveText('Shop');
    await expect(navLinks.nth(1)).toHaveText('journal');
    await expect(navLinks.nth(2)).toHaveText('About');
  
    // Check the burger icon / page resolution
    // const burgerIcon = header.locator('div.Header-module--burgerIcon--813a8');
    // await expect(burgerIcon).toBeVisible();
  
    // Check the brand logo
    const brandLogo = header.locator('div.Brand-module--root--7bb0e');
    await expect(brandLogo).toBeVisible();
  
    // Check the search button
    const searchButton = header.locator('button[aria-label="Search"]');
    await expect(searchButton).toBeVisible();
  
    // Check the favorites link
    const favoritesLink = header.locator('a[aria-label="Favorites"]');
    await expect(favoritesLink).toBeVisible();
  
    // Check the orders link
    const ordersLink = header.locator('a[aria-label="Orders"]');
    await expect(ordersLink).toBeVisible();
  
    // Check the cart button
    const cartButton = header.locator('button[aria-label="Cart"]');
    await expect(cartButton).toBeVisible();
  });

  test('Blog page | Verify all elements in the nav container exist and are visible', async ({ page }) => {
    await page.goto('http://localhost:5000/blog/'); 

    const navContainerSelector = '.index-module--navContainer--b967e';
    const expectedLinks = [
      'All Posts',
      'Design',
      'Collaboration',
      'Interview',
      'News'
    ];
  
    // Wait for the container to be visible
    const navContainer = page.locator(navContainerSelector);
    await navContainer.waitFor({ state: 'visible' });
  
    // Loop through each expected link text and assert its existence and visibility
    for (const linkText of expectedLinks) {
      const linkLocator = navContainer.locator(`a.ThemeLink-module--link--f3867:has-text("${linkText}")`);
  
      await expect(linkLocator).toBeVisible();
    }
  });


  test('Blog page | Verify all elements in the blog preview grid exist and are visible', async ({ page }) => {
    await page.goto('http://localhost:5000/blog/');
  
    const gridContainerSelector = '.BlogPreviewGrid-module--root--84743';
    
    // Wait for the container to be visible
    const gridContainer = page.locator(gridContainerSelector);
    await gridContainer.waitFor({ state: 'visible' });
  
    // Define the expected blog previews data
    const blogPreviews = [
      {
        imgSrc: '/blogs/blog1.png?imgcdn=true',
        category: 'design',
        title: 'The new standard of Opening and Closing',
        excerpt: 'London-based seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths.'
      },
      {
        imgSrc: '/blogs/blog2.png?imgcdn=true',
        category: 'design',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        excerpt: 'London-based seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths.'
      },
      {
        imgSrc: '/blogs/blog3.png?imgcdn=true',
        category: 'design',
        title: 'It is a long established fact that a reader by the readable',
        excerpt: 'London-basedsonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths.'
      },
      {
        imgSrc: '/blogs/blog3.png?imgcdn=true',
        category: 'design',
        title: 'It is a long establishable',
        excerpt: 'London-based floral designer Flora Fricker champions seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths.'
      },
      {
        imgSrc: '/blogs/blog2.png?imgcdn=true',
        category: 'design',
        title: 'It is a long estab the readable',
        excerpt: 'Loproducers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths.'
      },
      {
        imgSrc: '/blogs/blog1.png?imgcdn=true',
        category: 'design',
        title: 'The new standard of Opening and Closing',
        excerpt: 'London-based floral tish flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths.'
      }
    ];
  
    // Loop through each expected blog preview and assert its existence and visibility
    for (let i = 0; i < blogPreviews.length; i++) {
      const preview = blogPreviews[i];
      const previewSelector = `${gridContainerSelector} > div:nth-child(${i + 1})`;
  
      // Check image
      const imageLocator = page.locator(`${previewSelector} img.BlogPreview-module--blogPreviewImage--3dd51`);
      await expect(imageLocator).toHaveAttribute('src', preview.imgSrc);
      await expect(imageLocator).toBeVisible();
  
      // Check category
      const categoryLocator = page.locator(`${previewSelector} span.BlogPreview-module--category--ad951`);
      await expect(categoryLocator).toHaveText(preview.category);
      await expect(categoryLocator).toBeVisible();
  
      // Check title
      const titleLocator = page.locator(`${previewSelector} h4.BlogPreview-module--title--67522 a`);
      await expect(titleLocator).toHaveText(preview.title);
      await expect(titleLocator).toBeVisible();
  
      // Check excerpt
      const excerptLocator = page.locator(`${previewSelector} p.BlogPreview-module--excerpt--be3c5`);
      await expect(excerptLocator).toHaveText(preview.excerpt);
      await expect(excerptLocator).toBeVisible();
    }
  });