<script>
  // needed for static serving with GH Pages
  import { base } from '$app/paths';
</script>

<nav>
  <a href="{base}/">Home</a>
  <a href="{base}/about">About</a>
  <!-- <a href="{base}/settings">Settings</a> -->
</nav>

<slot></slot>

<style global lang="scss">
  @import 'bootstrap/dist/css/bootstrap.min.css';

  body {
    background-color: #e0e0e0;
    padding: 1em;

    h1 {
      color: red;
    }
  }

</style>