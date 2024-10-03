import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import eslintPlugin from 'vite-plugin-eslint';
// import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // checker({ eslint: { files: ['./src'], extensions: ['.js', '.jsx'] } }),
    // eslintPlugin({
    //   // Opciones adicionales si es necesario
    //   include: ['src/**/*.js', 'src/**/*.jsx'], // Asegúrate de que las rutas sean correctas
    // }),
  ],
})