
import { TestInfo, test as baseTest } from '@playwright/test';
import { ElementsPage } from '../tests/shared.ts/page-objects';



const test = baseTest.extend<{elementsPage: ElementsPage}>({
    elementsPage: async ({ page, context }, use) => {
        await use(new ElementsPage(page, context));
    }
})

export default test;