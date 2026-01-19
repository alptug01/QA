import { test } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { PortfolioPage } from '../pages/portfolio.page';

test.describe('Portfolio - job comments', () => {
  test('shows comments for first job', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const portfolio = new PortfolioPage(page);

    await test.step('Go to Portfolio from Dashboard', async () => {
      await dashboard.goto();
      await dashboard.openFirstPortfolio();
    });

    await test.step('Check job list is loaded', async () => {
      await portfolio.expectJobsLoaded();
    });

    await test.step('Click show comments for first job', async () => {
      await portfolio.showCommentsForFirstJob();
    });

    await test.step('Check comments are visible for first job', async () => {
      await portfolio.expectCommentsVisibleForFirstJob();
    });
  });
});
