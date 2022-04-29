import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    /*
    If you need to serve your file from a sub directory
    paths: {
        base: '/your-sub-dir',
    },
    */
  },
  preprocess: [preprocess()]
};

export default config;
