import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  output: "static",
  adapter: vercel({ webAnalytics: true }),
  redirects: {
    "/blog/shellhacks":
      "https://www.linkedin.com/posts/jacklafond_shellhacks-hackathon-cybersecurity-activity-7246530359977197568-ezD8",
  },
});
