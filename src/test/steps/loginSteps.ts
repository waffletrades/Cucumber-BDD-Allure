import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { pageFixture  } from "../../hooks/pageFixture";


setDefaultTimeout(60 * 1000 * 2); //2 mins

Given('User navigates to the practice application', async function (){
  await pageFixture.page.goto("https://bookcart.azurewebsites.net/");
});

Given('User click on the my login link', async function (){
 //await page.goto("https://bookcart.azurewebsites.net/login"); OR
 await pageFixture.page.locator("(//span[text()='Login'])[1]").click();
});

Given('User enter the username as {string}', async function (username){
  await pageFixture.page.locator("input[formcontrolname='username']").type(username);
}); 

Given('User enter the password as {string}', async function (password){
  await pageFixture.page.locator("input[formcontrolname='password']").type(password);
}); 

When('User click on the login button', async function(){
  await pageFixture.page.locator("button[color='primary']").click();
  await pageFixture.page.waitForLoadState();
  await pageFixture.page.waitForTimeout(2000); //2 secs

});

Then('Login should be success',async function () {
  const profileName =await pageFixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]");
  await expect(profileName).toBeVisible(); 
});

Then('Login should be fail',async function () {
  const errorMessage = await pageFixture.page.locator("mat-error[role='alert']");
  await expect(errorMessage).toBeVisible();

});