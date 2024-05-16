import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { pageFixture  } from "../../hooks/pageFixture";
import { Page } from "@playwright/test";
import { allure } from "allure-playwright";
import * as library from "../../main/elementActions"; // Adjusted path for the reusable library

setDefaultTimeout(60 * 1000 * 2); // 2 mins

Given('User navigates to the practice application', async function (){
  await library.navigate(pageFixture.page, "https://bookcart.azurewebsites.net/");
});

Given('User click on the my login link', async function (){
  await library.clickByIndex(pageFixture.page, "(//span[text()='Login'])[1]", 0, "login link");
});

Given('User enter the username as {string}', async function (username){
  await library.sendKeys(pageFixture.page, "input[formcontrolname='username']", username, "username field");
}); 

Given('User enter the password as {string}', async function (password){
  await library.sendKeys(pageFixture.page, "input[formcontrolname='password']", password, "password field");
}); 

When('User click on the login button', async function(){
  await library.click(pageFixture.page, "button[color='primary']", "login button");
  await pageFixture.page.waitForLoadState();
  await pageFixture.page.waitForTimeout(2000); // 2 secs
});

Then('Login should be success',async function () {
  const profileName = await library.captureText(pageFixture.page, "//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]", "profile name");
  await expect(profileName).toBeVisible(); 
});

Then('Login should be fail',async function () {
  const errorMessage = await pageFixture.page.locator("mat-error[role='alert']");
  await expect(errorMessage).toBeVisible();
});
