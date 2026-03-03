import { resolve } from 'path';

export default {
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                productPage: resolve(__dirname, 'src/pages/productPage.html'),
            }
        }
    },
    base: '/EcommerceProject/',
}