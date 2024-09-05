import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update the base path to match your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/E-Commerce/',  // This should match your repository name
});
