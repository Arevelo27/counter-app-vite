// Desestructuración de Objetos

const usContext = ({ nombre, apellido, rango = 'Capitan', clave }) => {
  return {
    nombreClave: clave,
    anios: 45,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

// eslint-disable-next-line no-undef, react-hooks/rules-of-hooks
const { nombreClave, anios, latlng: { lat, lng } } = usContext(persona)