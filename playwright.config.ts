import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  reporter: [["list"], ["html", { outputFolder: "./reports/pw_reg" }]],
  //Fail the build on CI if you accidentally left test.only in the source code.
  timeout: 120000,
  workers: 3,
  use: {
    headless: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions: {
      args: ["--disable-gpu"],
    },
  },
};

export default config;
