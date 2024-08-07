import { test, expect, Page } from "@playwright/test";

test.describe("Example with trace no longer working", () => {
  let page: Page;

  //This used to work just fine
  test.beforeAll(async ({ browser }) => {
    // Same thing - no longer works as well
    // const context = await browser.newContext();
    // page = await context.newPage();

    page = await (await browser.newContext()).newPage();
  });

  test("has title", async () => {
    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("get started link", async () => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installationnn" })
    ).toBeVisible();
  });

  test.afterAll(async () => {
    //Doesn't actually impact anything
    await page.close();
  });
});
