import { getHeroeById } from '../base-pruebas/08-imp-exp';

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject(`No se pudo encontrar el heroe ${id}`);
      }
    }, 1000)
  })
}