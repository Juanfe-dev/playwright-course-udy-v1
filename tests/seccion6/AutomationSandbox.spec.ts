/**
 * Ch34: El click: Nuestro fiel amigo
 * Aqui vamos a poner en practica como hacer click en un elemento
 * Y tambien trabajar otros tipos de click o situaciones con los clicks
 * Doble click
 * Force Click
 * Click Derecho
 * Control click
 * Alt click
 * Hover (pasar el mouse sobre el elemento)
 * etc...
 */

/**
 * Ch35: El Fill: Llenando textos
 * Aqui vamos a encontrar como llenar campos de texto con fill
 */

import { test, expect, Browser, Page } from '@playwright/test';
(
    async () => {
        let browser: Browser;
        let page: Page;
        let textoAEscribir : string = 'Estoy aprendiendo Playwright ✅';

        test.describe('Acciones en el automation Sandbox', () => {

            // test('Click en Boton ID Dinamico', async ({ page }) => {
            //     page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            // })

            // Es mejor usar el step ya que es mejor a nivel de reporteria, mas estructurado
            //Los steps ya deben ir dentro de un test

            test('Click en Boton ID Dinamico', async ({ page }) => {
                await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                })

                //Forma tradicional de hacer click (la mas sencilla)
                await test.step('', async () => {
                    await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
                })
                //Otras opciones de click
                /**
                 * Otra forma de hacer click en el boton (usar a necesidad)
                        const bottonIDDinamico = page.getByRole('button', { name: 'Hacé click para generar un ID' });
                        await bottonIDDinamico.click();

                 *  Otras opciones interesantes
                        Podemos usar el force:true en ocaciones que toca forzar el click
                        await bottonIDDinamico.click({force:true});

                        Doble click:
                        await bottonIDDinamico.dblclick();

                        Click derecho
                        await bottonIDDinamico.click({button:'right'})

                        Ctrl click
                        await bottonIDDinamico.click({modifiers:['Control']});

                        Alt click
                        await bottonIDDinamico.click({modifiers:['Alt']});

                        Hover (pasar el mouse sobre el elemento)
                        await bottonIDDinamico.hover(); 
                 */   
            })

            test('Lleno un campo de texto en Automation Sandbox', async ({ page }) => {
                await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                })

                await test.step('Puedo ingresar texto en el campo Un Aburrido Texto', async () => {
                    await page.getByPlaceholder('Ingresá texto').fill(textoAEscribir);
                })
            })
        })
    }
)();


