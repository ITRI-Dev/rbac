import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";

const ViteConfig = ({ mode }) => {
  import.meta.env = { ...import.meta.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: { https: false, port: 3000 },
    plugins: [react(), mkcert()],
  });
};

export default ViteConfig;
