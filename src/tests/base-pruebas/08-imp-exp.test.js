import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeTest = {
            id: 1,  
            name: 'Batman',
            owner: 'DC'
        }

        expect(heroe).toEqual(heroeTest)
    });

    test('getHeroeById debe retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar solo heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesTest = [
            { id: 1, name: 'Batman', owner: 'DC' }, 
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroesTest);
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));


    });

    test('getHeroesByOwner debe retornar solo heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner); 

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));

    });

})
