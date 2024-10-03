import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'

test('test', async ({ page }) => {

const Login = new LoginPage(page)

await Login.gotoLoginPage()
await page.pause();
await Login.login('Jdsz','10@Pearls')


  
  // await page.goto('https://demoqa.com/login', { waitUntil: 'load', timeout: 60000 });
  // await page.pause();
  // await page.getByPlaceholder('UserName').click();
  // await page.getByPlaceholder('UserName').fill('Jdsz');
  // await page.pause();
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('10@Pearls');
  // await page.pause();
  // await page.getByRole('button', { name: 'Login' }).click();
});

