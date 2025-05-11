import path, { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import cssInject from "vite-plugin-css-injected-by-js";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cssInject()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/App.tsx"),
      preserveEntrySignatures: "exports-only",
      external: [
        "react",
        "react-dom",
        // "@radix-ui/react-avatar",
        // "@radix-ui/react-slot",
        "lucide-react",
        "clsx",
        "class-variance-authority",
        "tailwind-merge",
      ], // Evita incluir essas libs no bundle
      output: {
        entryFileNames: "bundle.js",
        format: "esm", // Formato de saída do bundle
      },
    },
  },
});
