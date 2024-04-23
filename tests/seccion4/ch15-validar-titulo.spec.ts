/** 
 * Feature: validar titulo de una web
 * Estas validaciones estan usando trabajando en un localizador que se 
 * encuentre en el header! page.locator('#page_header')
 */
import { test, Browser, type Page, expect } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Navegacion en https://www.freerangetesters.com/', () => {

        const secciones = [
            { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
            { nombre: 'Udemy', url: '/udemy', tituloEsperado: 'Udemy' },
            { nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' }
            //Agregar mas secciones si es necesario
        ];

        //Este for nos permite iterar en las diferentes paginas que esta en el arreglo 'secciones'
        for (const seccion of secciones) {
             test(`Validar redireccion a la seccion "${seccion.nombre}"`, async ({ page }) => {

                await test.step('Estando yo en la web principal de FreeRangeTesters', async () => {
                    await page.goto("https://www.freerangetesters.com/");
                    //Validacion del nombre de la pestaña
                    await expect(page).toHaveTitle("Free Range Testers");
                })

                await test.step(`Cuando hago click en "${seccion.nombre}"`, async () => {
                    page.locator('#page_header').getByRole('link', { name: seccion.nombre, exact: true }).click();
                    //Esperamos que la url de la web termine con el path indicado
                    await page.waitForURL(`**${seccion.url}`)
                })

                await test.step(`Soy redirigido a la seccion de titulo "${seccion.tituloEsperado}"`, async () => {
                    //A Expect le entregamos el contexto para la validacion, en este caso la pagina
                    await expect(page).toHaveTitle(seccion.tituloEsperado);
                })
            })
        }
    })
})();