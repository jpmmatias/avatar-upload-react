import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['**/*.{test,spec}.{tsx,ts, js, jsx}'],
		exclude: ['**/*.d.ts', 'dist', 'node_modules', '.git', '.cache', '.idea'],
		setupFiles: './src/__test__/setup.js',
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
};

export default defineConfig({
	plugins: [react()],
	// @ts-expect-error
	test: vitestConfig.test,
	build: {
		outDir: '../dist',
	},
});
