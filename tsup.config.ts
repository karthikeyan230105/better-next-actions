import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: {
    index: 'src/index.ts',
    'hooks/index': 'src/use-action.ts',
  },
  format: ['esm'],
  dts: true,
  splitting: false,
  sourcemap: !!options.watch,
  clean: true,
  minify: !options.watch,
}));
