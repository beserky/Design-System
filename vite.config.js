import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
   build: {
      lib: {
         entry: resolve(__dirname, 'src/index.js'),
         name: 'Design System',
         fileName: (format) => `ds-library.${format}.js`,
         formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
         output: {
            // controla o nome dos assets (css, imagens, etc.)
            assetFileNames: (assetInfo) => {
               if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                  return 'ds-library.css'; // nome fixo pro CSS
               }
               return '[name][extname]'; // padrão pros outros assets
            },
         },
      }
   }
})