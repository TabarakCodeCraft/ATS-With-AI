import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // Disable server-side rendering
  prerender: ["/"], // Pre-render routes
} satisfies Config;