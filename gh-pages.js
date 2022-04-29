import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/jeremander/caucus-svelte',
    user: {
      name: 'Jeremy Silver',
      email: 'jeremys@nessiness.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);