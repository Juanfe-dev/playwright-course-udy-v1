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

/**
 * Ch36: Checkboxes y Radio Buttons: Cómo trabajar con ellos?
 * Aqui vamos a seleccionar opciones de un checkbox y un radiobutton mediante check();
 * Y a des-seleccionarlos los CHECKBOX mediante uncheck();
 * El RadioButton no permite des-seleccionar
 */

/**
 * Ch37: Dropdowns
 * Vamos a ver dos tipos de DropDowns
 * Usando selectOption para Dropdowns de tipo select en el DOM
 * Usando clicks para Butones que se comportan como Dropdowns (no tipo select, tipo boton)
 */

/**
 * Ch38: BONUS: Type, simular teclas
 * Vamos a simular que presionamos Enter
 * O alguna combinacion de tecla como Shift+Enter
 */

import { test, expect, Browser, Page } from '@playwright/test';
(
    async () => {
        let browser: Browser;
        let page: Page;
        let textoAEscribir: string = 'Estoy aprendiendo Playwright ✅';

        test.describe('Acciones en el automation Sandbox', () => {

            //Ch35
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


            //Ch36
            test('Puedo seleccionar Checkboxes', async ({ page }) => {
                await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                })
                await test.step('Puedo seleccionar el checkbox para Pasta', async () => {
                    await page.getByLabel('Pasta 🍝').check();
                })
                await test.step('Puedo des-seleccionar el checkbox para Pasta', async () => {
                    await page.getByLabel('Pasta 🍝').uncheck();
                })

            })

            test('Puedo seleccionar Radio Buttons', async ({ page }) => {
                await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                })

                await test.step('Puedo seleccionar el Radio Button para No', async () => {
                    await page.getByLabel('No').check();
                })
                //El radiobutton no se des-selecciona porque no lo permite
            })

            //Ch37
            test('Puedo seleccionar un item del Dropdown', async ({ page }) => {
                await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                })

                await test.step('Selecicono un deporte del dropdown', async () => {
                    await page.getByLabel('Dropdown').selectOption('Fútbol');
                })
            })

            test('Puedo seleccionar un dia del dropdown Dias de la Semana', async ({ page }) => {
                await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                })

                await test.step('Selecciono un dia de la semana', async () => {
                    await page.getByRole('button', { name: 'Día de la semana' }).click();
                    await page.getByRole('link', { name: 'Martes' }).click();
                })
            })

            //Ch38
            test('Lleno un campo de texto en Automation Sandbox con type', async ({ page }) => {
                await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                    await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                })
                //Uso del type
                await test.step('Puedo ingresar texto en el campo Un Aburrido Texto', async () => {
                    //Esta deprecado
                    await page.getByPlaceholder('Ingresá texto').type(textoAEscribir);
                })

                //Presionar una tecla
                await test.step('Puedo ingresar texto en el campo Un Aburrido Texto y dar Enter', async () => {
                    await page.getByPlaceholder('Ingresá texto').fill(textoAEscribir);
                    await page.getByPlaceholder('Ingresá texto').press('Enter');

                    //Se pueden hacer combinaciones de teclas tambien
                    //wait page.getByPlaceholder('Ingresá texto').press('Shift+ArrowLeft');
                })
            })
        })
    }
)();


