import copy from "rollup-plugin-copy";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default () => ({
  input: "src/module/your-module-name.js",
  output: {
    dir: "dist/module",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    copy({
      targets: [{ src: "*.md", dest: "dist" }],
    }),
  ],
});
