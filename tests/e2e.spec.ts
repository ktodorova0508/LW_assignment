import { test, expect } from '@playwright/test';

test('desktop and mobile views work as expected', async ({page}) => {

await page.goto(baseUrl(token))

})