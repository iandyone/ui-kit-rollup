import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import clearOutput from 'rollup-plugin-delete';

export default {
  input: {
    index: 'src/index.js',
    'button/index': 'src/button/index.js',
  },
  output: [
    {
      dir: 'dist/es',
      format: 'es',
      entryFileNames: '[name].js',
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      entryFileNames: '[name].js',
    },
  ],

  plugins: [json(), terser(), clearOutput({ targets: 'dist' })],
};
