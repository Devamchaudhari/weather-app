import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			shared: path.resolve(__dirname, 'src/shared'),
			features: path.resolve(__dirname, 'src/features'),
			assets: path.resolve(__dirname, 'src/assets'),
			root: path.resolve(__dirname, 'src/root.tsx')
		}
	}
});
