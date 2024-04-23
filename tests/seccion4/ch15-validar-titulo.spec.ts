// Feature: validar titulo de una web
import { test, Browser, type Page, expect } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Navegacion en https://www.freerangetesters.com/', () => {
        test('El link de base carga correctamente', async ({ page }) => {
            await test.step('Estando yo en la web principal de FreeRangeTesters', async () => {
                await page.goto("https://www.freerangetesters.com/");
                //Validacion del nombre de la pestaña
                await expect(page).toHaveTitle("Free Range Testers");
            })

            await test.step('Cuando hago click en "Cursos"', async () => {
                page.locator('#page_header').getByRole('link', { name: 'Cursos', exact: true }).click();
                //Esperamos que la url de la web termine con el path indicado
                await page.waitForURL('**/cursos')
            })

            await test.step('Soy redirigido a la seccion de titulo "Cursos"', async  () => {
                //A Expect le entregamos el contexto para la validacion, en este caso la pagina
                await expect(page).toHaveTitle("Cursos");
            })
        })

    })
})();