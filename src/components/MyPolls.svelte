<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from "./shared/Button.svelte";

  const dispatch = createEventDispatcher();

  let polls = [];
</script>

<h3>My Polls</h3>

<div id="new-poll">
  <Button color="green" shadow={true} padding="4px 8px" on:click={() => dispatch('createNewPoll')}>New Poll</Button>
</div>

<div id="poll-view">
  {#if polls.length == 0}
    <p>There are no polls to display.</p>
  {/if}
</div>

<style lang="scss">
  * {
    text-align: center;
  }
  h3 {
    font-weight: bold;
    margin-bottom: 1em;
  }
  #new-poll {
    margin: 1.5em auto;
  }
  #poll-view {
    margin-top: 2em;
  }
</style>