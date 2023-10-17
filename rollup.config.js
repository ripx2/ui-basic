import typescript from "rollup-plugin-typescript";
//import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist/cjs",
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    {
      dir: "dist/esm",
      format: "es",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
  ],
  plugins: [typescript()],
};
