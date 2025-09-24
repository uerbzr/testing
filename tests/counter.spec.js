import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("increments counter and collects coverage", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const button = page.getByRole("button", { name: /count is/i });
  await expect(button).toBeVisible();
  await button.click();
  await expect(button).toHaveText(/count is 1/i);
});

// ✅ Extract coverage after all tests
test.afterAll(async ({ page }) => {
  const coverage = await page.evaluate(() => window.__coverage__);
  if (coverage) {
    const coverageDir = path.resolve("./coverage");
    fs.mkdirSync(coverageDir, { recursive: true });
    fs.writeFileSync(
      path.join(coverageDir, "coverage.json"),
      JSON.stringify(coverage)
    );
  } else {
    console.warn(
      "⚠️ No coverage data found. Was the app instrumented with vite-plugin-istanbul?"
    );
  }
});
