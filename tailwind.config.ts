import type { Config } from 'tailwindcss';
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['lucide']),
    }),
  ],
} satisfies Config;
