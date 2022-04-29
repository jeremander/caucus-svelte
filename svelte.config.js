import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({
      // default options are shown
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: "/caucus-svelte",
    }

    // If you need to serve your file from a sub directory
    // paths: {
    //     base: '/build',
    // },
  },
  preprocess: [preprocess()]
};

export default config;
