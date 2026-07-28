import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import clearOutput from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';

export default {
  input: {
    index: 'src/index.ts',
    'button/index': 'src/button/index.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: 'es/[name].js',
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: 'cjs/[name].js',
    },
  ],

  plugins: [
    json(),
    terser(),
    clearOutput({ targets: 'dist' }),
    typescript({ tsconfig: './tsconfig.build.json' }),
  ],
};
