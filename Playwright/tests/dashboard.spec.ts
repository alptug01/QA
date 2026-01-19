import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('Dashboard - Finished Jobs with Live Search', () => {
  test('Should filter freelancers by finished jobs range', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await test.step('Go to Dashboard', async () => {
      await dashboard.goto();
    });

    let initialCount = 0;

    await test.step('Get initial freelancer count', async () => {
      initialCount = await dashboard.getFreelancerCount();
      expect(initialCount).toBeGreaterThan(0);
    });

    await test.step('Type finished jobs range (5 - 10)', async () => {
      await dashboard.typeFinishedJobRange(5, 10);
    });

    await test.step('Check all results are in range (5-10)', async () => {
      await dashboard.expectAllJobsInRange(5, 10);
    });
  });
});
