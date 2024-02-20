import copy from "rollup-plugin-copy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default () => ({
  input: "src/module/your-module-name.ts",
  output: {
    dir: "dist/module",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    nodeResolve(),
    copy({
      targets: [{ src: "*.md", dest: "dist" }],
    }),
  ],
});
