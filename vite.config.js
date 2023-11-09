import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { r3f } from '@react-three/editor/vite';

const root = resolve(__dirname, 'src');

export default defineConfig((env) => ({
	plugins: [env.command === 'build' ? react() : r3f()],
	root,
	build: {
		rollupOptions: {
			input: {
				main: resolve(root, 'index.html'),
			},
		},
	},
}));
