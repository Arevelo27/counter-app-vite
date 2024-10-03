import { getSaludo } from "../../base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe retornar "Hola Andres"', () => {
    
    const nombre = 'Andres'
    const message = getSaludo( nombre )
    
    expect( message ).toBe(`Hola ${ nombre } !!!`)
  })
  
})
