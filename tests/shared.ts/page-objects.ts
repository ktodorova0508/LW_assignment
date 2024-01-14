import { expect, Locator, Page, BrowserContext } from '@playwright/test';
import { token } from './token';
import { baseUrl } from './urls';

export class ElementsPage {
    readonly page: Page;
    readonly TEXT_INPUT: Locator;
    readonly PRIVATE_BUTTON: Locator;
    readonly ABOUT_POPUP: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = this.page;
        this.TEXT_INPUT = page.getByText(`Type your text`);
        this.PRIVATE_BUTTON = page.getByText(`Private`);
        this.ABOUT_POPUP = page.locator(`.ng-star-inserted`)

    }

    async navigateToURL(): Promise<void> {
        await this.page.goto(baseUrl(token));
    }

    async enterText(text: string): Promise<void> {
        await this.TEXT_INPUT.fill(text);
    }

    async clickPrivate(): Promise<void> {
        await this.PRIVATE_BUTTON.click();
    }

    async verifyAboutPopup(): Promise<void> {
        await expect(this.ABOUT_POPUP).toBeVisible(); 
    }


}