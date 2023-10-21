import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import terser from '@rollup/plugin-terser';

const input = "src/index.ts";
const external = ["react"];

const output = {
  preserveModules: true,
  preserveModulesRoot: "src",
  sourcemap: true,
};

const plugins = [
  babel({ babelHelpers: 'bundled' }),
  postcss({
    plugins: [autoprefixer()],
    sourceMap: true,
    extract: true,
    minimize: true
  }),
  terser(),
];

export default [
  {
    input, external,
    output: { ...output, dir: "dist/esm", format: "es" },
    plugins: [...plugins, typescript({ outputToFilesystem: false, declaration: true, declarationDir: "dist/esm" })],
  },
  {
    input, external,
    output: { ...output, dir: "dist/cjs", format: "cjs" },
    plugins: [...plugins, typescript({ outputToFilesystem: false })],
  }
];
