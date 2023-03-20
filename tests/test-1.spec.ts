import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com.do/webhp?source=search_app&gfe_rd=cr&ei=Hf1iVr2WN4qS-AXQpLSgBg&gws_rd=ssl');
  await page.getByRole('combobox', { name: 'Buscar' }).click();
  await page.getByRole('combobox', { name: 'Buscar' }).fill('ins');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');
});