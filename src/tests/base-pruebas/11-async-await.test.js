import { getImage } from "../../base-pruebas/11-async-await";

describe('Prueba en 11-async-await', () => {

    test('getImagen debe retornar un URL de la imagen', async () => {
        const url = await getImage();
        // expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);
        expect(url === 'No se pudo cargar la imagen').toBe(false);
    })
})
