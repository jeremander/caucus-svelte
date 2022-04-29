<!-- <script>
  import 'bootstrap/dist/css/bootstrap.min.css';
</script> -->

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/settings">Settings</a>
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