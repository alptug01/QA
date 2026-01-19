import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly finishedJobMin: Locator;
  readonly finishedJobMax: Locator;
  readonly freelancerCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishedJobMin = page.getByLabel('Finished jobs (min)');
    this.finishedJobMax = page.getByLabel('Finished jobs (max)');
    this.freelancerCards = page.locator('.freelancer-card');
  }

  async goto() {
    await this.page.goto('/');
  }

  async getFreelancerCount() {
    return this.freelancerCards.count();
  }
  
  //live typing so there is no search button
  async applyFinishedJobFilter(min: number, max: number) {
    await this.finishedJobMin.fill(String(min));
    await this.finishedJobMax.fill(String(max));
  }

  async openFirstPortfolio() {
    const firstCard = this.freelancerCards.first();

    const portfolioButton = firstCard.getByRole('button', {
      name: /view portfolio/i,
    });

    await portfolioButton.click();
  }

  async expectAllJobsInRange(min: number, max: number) {
  const cards = await this.freelancerCards.allTextContents();
  //I assume format is "Finished Jobs: 5"
  for (const card of cards) {
    const line = card.split('Finished Jobs:')[1];
    const value = Number(line?.trim());

    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
  }
 }

}
