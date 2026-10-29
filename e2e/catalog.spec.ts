import { expect, test } from '@playwright/test';

import projects from '../projects.json' with { type: 'json' };

for (const width of [320, 390, 768, 1440]) {
  test(`catalog width ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: 'Проекты vtkndrew', exact: true }),
    ).toBeVisible();
    await expect(page.getByRole('article')).toHaveCount(projects.length);
    await expect(page.getByRole('link', { name: 'Открыть приложение' }).first()).toHaveAttribute(
      'href',
      'https://vtkndrew.github.io/pyramids/',
    );
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    expect(
      await page.evaluate(async () => (await navigator.serviceWorker.getRegistrations()).length),
    ).toBe(0);

    for (const img of await page.locator('img').all()) {
      expect(await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(
        true,
      );
    }
  });
}
