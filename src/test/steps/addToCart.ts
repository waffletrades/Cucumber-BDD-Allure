import { Given, When, Then , setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { pageFixture  } from "../../hooks/pageFixture";



setDefaultTimeout(60 * 1000 * 2);

  Given('User search for a {string}', async function (bookName) {   
    await pageFixture.page.locator("input[type='search']").type(bookName);
    await pageFixture.page.waitForTimeout(2000); //2 secs
    await pageFixture.page.locator("mat-option[role='option'] span").click();
  });

  When('User add the book to the cart', async function () {
    await pageFixture.page.locator("button[color='primary']").click();
  });

  Then('The cart badge should get updated', async function () {   
   const cartBadgeCount = await pageFixture.page.locator("#mat-badge-content-0").textContent();    
   await pageFixture.page.waitForTimeout(2000);
   expect(Number(cartBadgeCount)).toBeGreaterThan(0);
  });