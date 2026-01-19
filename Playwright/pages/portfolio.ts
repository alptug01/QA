import { Page, Locator, expect } from '@playwright/test';

export class PortfolioPage {
  readonly page: Page;
  readonly jobItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jobItems = page.locator('.job-item');
  }

  async expectJobsLoaded() {
    const count = await this.jobItems.count();
    expect(count).toBeGreaterThan(0);
  }

  private getFirstJob() {
    return this.jobItems.first();
  }

  async showCommentsForFirstJob() {
    const firstJob = this.getFirstJob();
    
    const showButton = firstJob.getByRole('button', {
      name: /show comments/i,
    });

    await showButton.click();
  }

  async expectCommentsVisibleForFirstJob() {
    const firstJob = this.getFirstJob();
    
    const comments = firstJob.locator('.comment-item');
    const count = await comments.count();

    expect(count).toBeGreaterThan(0);
  }
}
