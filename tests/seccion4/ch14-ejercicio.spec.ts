// Ejercicio: hacer un test de abrir una pagina
// Solucion:

// no importamos expect porque no necesitamos hacer assetions
import { test, type Page } from '@playwright/test';

(async () => {
  let page: Page;

  test.describe('Navegacion en https://www.google.com.co', () => {
    test('El link de base carga correctamente', async ({ page }) =>
      await test.step('Estando yo en la web principal de google', async () => {
        await page.goto("https://www.google.com.co");
      })
    )
  })
})();