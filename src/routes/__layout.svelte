<script lang="ts">
  // needed for static serving with GH Pages
  import { base } from '$app/paths';
  import { APP_TITLE } from '../constants';
</script>

<!-- <nav> -->
  <!-- <a href="{base}/new_poll">New Poll</a> -->
  <!-- <a href="{base}/about">About</a> -->
  <!-- <a href="{base}/settings">Settings</a> -->
<!-- </nav> -->

<header>
  <h1>{APP_TITLE}</h1>
</header>

<slot></slot>

<style lang="scss">

  @import '../styles/colors.scss';
  @import 'bootstrap/dist/css/bootstrap.min.css';

  :global {
    body {
      padding: 2em 1em;
      // background-color: #ecf4ff;
      // background-color: lavender;
      background-color: $background;
      font-family: 'Trebuchet MS';
    }
    h1, h2, h3 {
      text-align: center;
      color: #333333;
    }
    h1 {
      padding-bottom: 0.75em;
    }
  }

  // nav {
  //   text-align: center;
  //   margin: 0 auto;
  // }

</style>