import { test, expect } from '@playwright/test'

// test.describe("Top画面", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("./");
//     await expect(true);
//   });
// });

test('ホーム画面から新規登録画面へ遷移できる', async ({ page }) => {
  console.log('basic test')
  await page.goto('http://localhost:3000/')
  const nextjs = page.getByText('Next.js!')
  await expect(nextjs).toHaveAttribute('href', 'https://nextjs.org')

  const signup = page.getByText('Sign Up')
  await signup.click()
  await expect(page).toHaveURL(/.*signup/)
})
