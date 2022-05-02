import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({
      // fallback: null
      fallback: 'index.html'
    }),
    prerender: {
      // default: true,
      enabled: false
    },
    paths: {
      base: process.env.NODE_ENV === "production" ? "/caucus-svelte" : "",
    },
  },
  preprocess: [preprocess()]
};

export default config;
