import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import clearOutput from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';

export default {
  input: {
    index: 'src/index.ts',
    'button/index': 'src/button/index.ts',
    'input/index': 'src/input/index.ts',
    'typography/index': 'src/typography/index.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: 'es/[name].js',
      chunkFileNames: 'es/chunks/[name]-[hash].js',
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: 'cjs/[name].cjs',
      chunkFileNames: 'cjs/chunks/[name]-[hash].cjs',
    },
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime', 'classnames'],
  plugins: [
    json(),
    terser(),
    clearOutput({ targets: 'dist' }),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      extract: 'assets/styles.css',
      minimize: true,
      modules: true,
    }),
  ],
};
