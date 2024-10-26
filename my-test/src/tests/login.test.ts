import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import percySnapshot from '@percy/playwright';

test('User can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Calling all the functions declared in LoginPage.ts
  await loginPage.navigateTo('https://www.saucedemo.com/');
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();

  //Validating URL and Page title after login
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
  const title =await page.title();
  expect(title).toEqual('Swag Labs');

  //Capturing snapshot
  await page.screenshot({path:  './Screenshots/HomePage.png'});

  //Implemented percy snapshot
  await percySnapshot(page, 'HomePageSnapshot');
  
});
 