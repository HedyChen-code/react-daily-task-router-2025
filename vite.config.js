import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: "/react-daily-task-router-2025/",
  plugins: [react()],
}));
