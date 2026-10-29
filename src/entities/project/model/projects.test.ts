import { expect, it } from 'vitest';

import { projects } from './projects';

it('contains an explicit unique list with HTTPS links and local icons', () => {
  expect(projects[0].id).toBe('pyramids');
  expect(new Set(projects.map((p) => p.id)).size).toBe(projects.length);

  for (const project of projects) {
    expect(new URL(project.url).protocol).toBe('https:');
    expect(new URL(project.repository).hostname).toBe('github.com');
    expect(project.icon).toMatch(/^\/icons\/[a-z-]+\.svg$/);
  }
});
