import { test, expect } from '@playwright/test';


test('About page | Header elements exist', async ({ page }) => {
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

test('About page | Header text exists', async ({ page }) => {
    await page.goto('localhost:5000/about/');
  
    const HeaderText = `Sydney \n    A British brand since 1860`;
  
    const Header = await page.getByText(HeaderText);
  
    await expect(Header).toBeVisible();
});

test('About page | page navigate buttons exists', async ({ page }) => {
    await page.goto('http://localhost:5000/about/');

    const HistoryButtonText = "History";
    const ValuesButtonText = "Values";
    const SustainabilityButtonText = "Sustainability";

    // specify the exact element type and text
    const HistoryButton = await page.getByRole('link', { name: HistoryButtonText });
    const ValuesButton = await page.getByRole('link', { name: ValuesButtonText });
    const SustainabilityButton = await page.getByRole('link', { name: SustainabilityButtonText });

    await expect(HistoryButton).toBeVisible();
    await expect(ValuesButton).toBeVisible();
    await expect(SustainabilityButton).toBeVisible();
});


test('About page | History text exists', async ({ page }) => {
    await page.goto('http://localhost:5000/about/');

    const Text1 = "Founded in 1860, Sydney is an innovative British brand with a contemporary edge. We make timeless everyday luxury clothing.";
    const Text2 = "We created some of the world's first T-shirts and spent decades perfecting the feel of the cotton. Today we are the only brand that makes T-shirts in its own factory in the UK. And we do this in the same factory we have occupied since 1937.";
    
    const ExtractText1 = await page.getByText(Text1);
    const ExtractText2 = await page.getByText(Text2);

    await expect(ExtractText1).toBeVisible();
    await expect(ExtractText2).toBeVisible();
});


test('About page | Check if Values image and text exists', async ({ page }) => {
    await page.goto('http://localhost:5000/about/');

    const imageSelector = '.about-module--imageContainer--42d10 img';
    const imgAltText = 'founder'; 
    const imgSrc = '/about2.png?imgcdn=true';
    const imageSelectorBottom = `img[alt="${imgAltText}"][src="${imgSrc}"]`;

    const ValuesText = `Sunspel produced some of the world's earliest T-shirts. In the late 1800s the business made luxury tunics and undershirts from lightweight Sea Island cotton for export to the Far East and other warm climates. While these garments initially had silk buttoned plackets, these were removed in the early 1900s and replaced with simple bound necks to reduce manufacturing costs - creating the T-shirt. We've supplied the world as the T-shirt has evolved from underwear to outerwear, from symbol of youthful rebellion to everyday wardrobe staple, and we've spent decades refining its every last aspect.`;
    const TextEcowear = "Be an ecowear";
    const TextSophisticated = "Sophisticated and not mass-produced";
    const TextMaterials = "Only natural materials";

    const imageElement = await page.$(imageSelector);
    const imageElementBottom = await page.$(imageSelectorBottom);

    const ExtractValuesText = await page.getByText(ValuesText);
    const ExtractEcowearText = await page.getByText(TextEcowear);
    const ExtractSophisticated = await page.getByText(TextSophisticated);
    const ExtractMaterials = await page.getByText(TextMaterials);

    await expect(imageElement).not.toBeNull(); 
    await expect(imageElementBottom).not.toBeNull(); 

    await expect(ExtractValuesText).toBeVisible();
    await expect(ExtractEcowearText).toBeVisible();
    await expect(ExtractSophisticated).toBeVisible();
    await expect(ExtractMaterials).toBeVisible();
});

test('About page | Check if Sustainability image and text exists', async ({ page }) => {
    await page.goto('http://localhost:5000/about/');

    const imageContainerClass = '.about-module--imageContainer--42d10';

    const imgAltText = 'shirt backwards'; 
    const imgSrc = '/about3.png?imgcdn=true';
    
    const imageSelector = `${imageContainerClass} img[alt="${imgAltText}"][src="${imgSrc}"]`;
    const imageElement = await page.$(imageSelector);


    const Text1 = "Our founder, Thomas Hill, had both an eye for quality and a desire to innovate. As well as using the finest fibres such as Sea Island cotton, cashmere and silk, he invented his own fabrics. Sunspel continues this commitment to innovation today and our unique fabrics include: Q100 Sea Island cotton, Q82 Supima cotton, Q75 warp knit mesh cotton and Q14 warp knit cellular cotton. The technology behind these fabrics remains unchanged today and all Sunspel products use the finest cottons, wools and fibres.";
    const Text2 = "Made in Long Eaton, England and crafted from our luxurious long staple Supima cotton for unparalleled softness, comfort and durability, the Sunspel T-shirt has a classic fit and only the most essential details.";
    const Text3 = "With over 100 years spent perfecting fabric, fit and style, the Sunspel Classic T-shirt is recognised as the finest in the world.";
    
    const ExtractText1 = await page.getByText(Text1);
    const ExtractText2 = await page.getByText(Text2);
    const ExtractText3 = await page.getByText(Text3);

    await expect(imageElement).not.toBeNull();
    await expect(ExtractText1).toBeVisible();
    await expect(ExtractText2).toBeVisible();
    await expect(ExtractText3).toBeVisible();
});


test('Check if clicking on link changes URL to specific section', async ({ page }) => {
    await page.goto('http://localhost:5000/about');

    // link element
    const linkSelectorHistory = 'div[role="presentation"] .ThemeLink-module--link--f3867[href="/about/#history"]';
    const linkSelectorValues = 'div[role="presentation"] .ThemeLink-module--link--f3867[href="/about/#values"]';
    const linkSelectorSustainability = 'div[role="presentation"] .ThemeLink-module--link--f3867[href="/about/#sustainability"]';
    
    // Verify that the URL changes to the specific section
    await page.click(linkSelectorHistory);
    await expect(page).toHaveURL('http://localhost:5000/about/#history');

    await page.click(linkSelectorValues);
    await expect(page).toHaveURL('http://localhost:5000/about/#values');

    await page.click(linkSelectorSustainability);
    await expect(page).toHaveURL('http://localhost:5000/about/#sustainability');
});