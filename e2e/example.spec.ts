import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');

  // Check if the page title is correct
  await expect(page).toHaveTitle(/BeExpertly/i);

  // Check if the main heading is visible
  const heading = page.getByRole('heading', { name: /BeExpertly/i });
  await expect(heading).toBeVisible();
});
