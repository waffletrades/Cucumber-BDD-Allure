import { Locator, Page } from "@playwright/test";
import {allure} from "allure-playwright"


//create a method for typing data on user value
export async function sendKeys(page:Page, xpath:string, userValue:string, elementName:string) {
    await allure.step("Enter a value '" + userValue + "' on " + elementName, async() => {
        await page.locator(xpath).fill(userValue)
    })
}

//create a method for clicking by index
export async function click(page:Page, xpath:string, elementName:string) {
    await allure.step("Click on " + elementName, async() => {
        await page.locator(xpath).click()
    })
}

//create a method for clicking by index
export async function clickByIndex(page:Page, xpath:string, index:number, elementName:string) {
    await allure.step("Click on " + elementName, async() => {
        await page.locator(xpath).nth(index).click({force:true})
    })
}
//create a method for capturing text
export async function captureText(page:Page, xpath:string, elementName:string) {
    let result
    await allure.step("Capture text " + elementName, async() => {
        result = await page.locator(xpath).textContent()
    })
    return result
}

//create a method to navige to an url
export async function navigate(page:Page, url:string) {
    await allure.step("Navigate to " + url, async() => {
        await page.goto(url)
    })
}

//create a method to press enter on a search field
export async function keyboardEnter(page:Page) {
    await allure.step("Pressing Enter on a page", async() => {
        await page.waitForTimeout(1000)
        await page.keyboard.press("Enter")
    })
}
