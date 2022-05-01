<script lang="ts">
  import Button from "./shared/Button.svelte";

  export let username: string = '';

  function enterUsername(e) {
    username = e.target.firstChild.children[1].value;
  }
</script>

<form class="user-submit" on:submit|preventDefault={enterUsername}>
  <div class="input-group">
    <label for="username-input" class="input-group-prepend">
      <span class="input-group-text" id="basic-addon3">Enter Username:</span>
    </label>
    <input id="username-input" type="text" class="form-control" value={username} required placeholder="Username">
    <div class="input-group-append">
      <Button font-size="11pt" height=100%>Submit</Button>
    </div>
  </div>
</form>

<div class="greeting">
  <p class:hide-greeting={username === ''}>Hello, {username}!</p>
</div>

<style lang="scss">

  @import '../styles/breakpoints.scss';

  .user-submit {
    margin: 1em auto;
    text-align: center;
    width: 45%;
    label, input {
      font-size: 11pt;
    }
    @include tablet-max {
      width: 95%;
      label span {
        padding-left: 3px;
        padding-right: 3px;
      }
    }
  }

  .greeting {
    margin: 0 auto;
    text-align: center;
  }
  .hide-greeting {
    visibility: hidden;
  }
</style>