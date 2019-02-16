import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

let pkg = require("./package.json");
let external = Object.keys(pkg.dependencies);
let plugins = [
  resolve(),
  babel(),
  commonjs(),
  terser({
    sourcemap: true
  })
];

export default [
  {
    input: "src/index.js",
    plugins,
    external,
    output: [
      {
        file: "dist/things-scene-half-roundrect.js",
        name: "things-scene-half-roundrect",
        format: "umd",
        globals: {
          "@hatiolab/things-scene": "scene"
        }
      }
    ]
  },
  {
    input: "src/index.js",
    plugins,
    external,
    output: [
      {
        file: pkg.module,
        format: "esm"
      }
    ]
  }
];
