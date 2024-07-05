import { test, expect, Page, BrowserContext } from "@playwright/test";

test.describe("Example with trace working with the beforeAll block - workaround", () => {
  let page: Page;
  let context: BrowserContext;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
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

  test.afterAll("Cleanup", async () => {
    await page.close();
    await context.close();
  });
});
