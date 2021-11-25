import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'iife'
  },
  preserveModules: true,
  plugins: [
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),
    typescript({
      tsconfig: 'tsconfig.json'
    })
    // babel({ babelHelpers: "bundled" }),
  ]
};
