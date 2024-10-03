import { retornarArreglo } from "../../base-pruebas/07-desest-arr";

describe('Pruebas en 06-desest-arr', () => {

    test('Debe retornar un arreglo', () => {
        const arr = retornarArreglo();      

        expect(arr).toEqual(['ABC', 123]);
    })

    test('Debe retornar un arreglo de un string y un numero', () => {
        const [ letters, numbers ] = retornarArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect( letters ).toEqual(expect.any(String));
    })

})
