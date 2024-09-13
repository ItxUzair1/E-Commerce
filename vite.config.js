import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update the base path to match your GitHub repository name
export default defineConfig({
   base: '/e-commerce/',
  plugins: [react()],
  // This should match your repository name
});
