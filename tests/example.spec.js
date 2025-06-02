import { test, expect } from '@playwright/test';

test('login flow with login button click', async ({ page }) => {
  // 1. Go to your web app's homepage
  await page.goto('https://dashboard.staging.swagup.com/dashboard/');

  // 2. Click the login button to open login form
  await page.click('text=Log-in to your Account');  

  // 3. Fill username and password fields
  await page.fill('#okta-signin-username', 'monisha.s@swagup.com');  
  await page.fill('#okta-signin-password', 'Romerome@211');  

  // 4. Click the submit/login button
  await page.click('#okta-signin-submit');  

  // 5. Verify successful login 
  await expect(page).toHaveURL(/dashboard/);   
  await expect(page.locator('h2')).toContainText('Dashboard');  // Adjust selector and text as needed
});