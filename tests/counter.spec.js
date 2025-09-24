import { test, expect } from "@playwright/test";
import fs from "fs";

test("increments counter and collects coverage", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const button = page.getByRole("button", { name: /count is/i });
  await expect(button).toBeVisible();
  await button.click();
  await expect(button).toHaveText(/count is 1/i);

  const coverage = await page.evaluate(() => window.__coverage__);
  fs.writeFileSync("./coverage/coverage.json", JSON.stringify(coverage));
});
