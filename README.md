# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Config regla react/prop-types

Pasos para Configurar ESLint con react/prop-types

1. **Instalar ESLint y el Plugin de React**

    Primero, asegúrate de tener ESLint y el plugin de React instalados:

    bash
        npm install eslint eslint-plugin-react --save-dev
  
2. **Crear o Modificar el Archivo de Configuración de ESLint**

   Si no tienes un archivo de configuración de ESLint, crea uno llamado .eslintrc.js en la raíz de tu proyecto. Si ya lo tienes, simplemente agrégale la configuración.

        javascript
            module.exports = {
                extends: [
                    'eslint:recommended',
                    'plugin:react/recommended',
                ],
                plugins: [
                    'react',
                ],
                rules: {
                    'react/prop-types': [2, { ignore: [], customValidators: [], skipUndeclared: false }],
                },
                settings: {
                    react: {
                        version: 'detect',
                    },
                },
            };
  
   En la regla react/prop-types:
    - 2 habilita la regla y la establece como un error. Puedes usar 1 para advertencias o 0 para deshabilitarla.
    - ignore: Lista de nombres de props que deseas ignorar.
    - customValidators: Lista de validadores personalizados si tienes alguno.
    - skipUndeclared: Si es true, omite las comprobaciones en componentes sin propTypes declarados.

3. **Configurar ESLint en Vite**

    Asegúrate de tener ESLint configurado para funcionar con Vite. Puedes usar el plugin de ESLint para Vite:

    bash
        npm install vite-plugin-eslint --save-dev
  
    Luego, modifica tu archivo de configuración de Vite (vite.config.js) para incluir el plugin:

    javascript
        import { defineConfig } from 'vite';
        import react from '@vitejs/plugin-react';
        import eslintPlugin from 'vite-plugin-eslint';

        export default defineConfig({
            plugins: [
            react(),
            eslintPlugin(),
            ],
        });
  
4. **Ejecutar ESLint**

    Puedes ejecutar ESLint manualmente con:

        bash
            npx eslint src --ext .js,.jsx
  
    O configurarlo para que se ejecute automáticamente durante el desarrollo o en tu pipeline de CI/CD.

### Conclusión

Con estos pasos, habrás configurado ESLint para que valide prop-types en tu proyecto React con Vite. Esto te ayudará a asegurar que tus componentes React reciban las props correctas y mejorará la calidad del código.
