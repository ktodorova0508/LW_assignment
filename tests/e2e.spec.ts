import test from '../lib/base-test';
import { token } from '../lib/shared.ts/token';
import { baseUrl } from '../lib/shared.ts/urls';

test('desktop and mobile views work as expected', async ({elementsPage}) => {

const text = 'Котка'
await elementsPage.navigateToURL();

await elementsPage.enterText(text);

await elementsPage.clickPrivate();

await elementsPage.verifyAboutPopup();

})