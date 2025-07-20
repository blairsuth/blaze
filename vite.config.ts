import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "BlazeDesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => `blaze-designsystem.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        // ✅ This sets the CSS filename to index.css, not style.css
        assetFileNames: "index.css",
      },
    },
  },
});
