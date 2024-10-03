const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
      calle: 'Primera',
      pais: 'Estados Unidos',
      ciudad: 'New York'
    }
  }
  
  console.log({persona})
  
  const persona2 = { ...persona };
  persona2.nombre = 'Peter';
  
  console.log({persona2})