import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const input = "src/index.ts";
const external = ["react", "styled-components"];

const output = {
  sourcemap: false,
  preserveModules: true,
  preserveModulesRoot: "src",
};

const plugins = [
  commonjs(),
  nodeResolve(),
  babel({ 
    babelHelpers: 'bundled',
  }),
  postcss({
    plugins: [autoprefixer()],
    sourceMap: false,
    extract: true,
    minimize: true,
    modules: {
      generateScopedName: "[hash:base64:8]",
    },
    autoModules: true,
  }),
  terser(),
];

export default [
  {
    input,
    external,
    output: {
      ...output,
      dir: "esm",
      format: "es"
    },
    plugins: [
      ...plugins,
      typescript({
        outputToFilesystem: false,
        declaration: true,
        declarationDir: "esm"
      })
    ],
  }
];
