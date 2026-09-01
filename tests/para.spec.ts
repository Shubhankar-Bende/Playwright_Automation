import {test, expect} from "@playwright/test";

test ("To verify Parabank title", async ({page}) => {

await page.goto("https://parabank.parasoft.com/");
await expect(page).toHaveTitle ("ParaBank | Welcome | Online Banking");
});