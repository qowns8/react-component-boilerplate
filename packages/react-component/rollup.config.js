import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss';
import cssimport from 'postcss-import'
import autoprefixer from 'autoprefixer'
// import sass from 'rollup-plugin-sass'

const packageJson = require("./package.json");

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      exports: 'named',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      plugins: [ cssimport(), autoprefixer() ],
      sourceMap: true,
      extract: false,
      minimize: true
    }),
    // sass(),
    terser()
  ],
};