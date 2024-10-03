import heroes from '../../data/heroes';
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual(heroes.filter(heroe => heroe.id === id)[0]);
                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un error si heroe no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el heroe ${id}`);
                done();
            });
    });
  
})
