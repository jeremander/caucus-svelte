<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Button from "../shared/Button.svelte";
  import Trash from "svelte-bootstrap-icons/lib/Trash";

  const dispatch = createEventDispatcher();

  export let i: number;
  export let answer: string = '';
  export let disableAdd: boolean = false;

  const controlBtnProps = {
    'padding': '0.3em 0.6em'
  };

  function addAnswer(e) {
    e.preventDefault();
    dispatch('addAnswer', i);
  }

  function deleteAnswer(e) {
    e.preventDefault();
    dispatch('deleteAnswer', i);
  }
</script>

<div class="poll-answer-row">
  <div class="poll-answer-label input-group-prepend">
    <label class="input-group-text" for="poll-answer-{i}">Answer {i + 1}</label>
  </div>
  <input type="text" class="poll-answer-input form-control" required bind:value={answer}>
  <div class="poll-answer-controls">
    <span class="poll-answer-control">
      <Button type="add-item" {...controlBtnProps} disabled={disableAdd} on:click={addAnswer}>
        <div class="btn-add-poll">&#xFF0B;</div>
      </Button>
    </span>
    {#if i >= 2}
      <span class="poll-answer-control">
        <Button type="discard-item" {...controlBtnProps} on:click={deleteAnswer}>
          <Trash />
        </Button>
      </span>
    {/if}
  </div>
</div>

<style lang="scss">
  .poll-answer-row {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    margin-top: 1em;
  }
  .poll-answer-label {
    > label {
      height: 100%;
      float: right;
      font-size: 11pt;
    }
  }
  .poll-answer-controls {
    padding-top: 3px;
    padding-bottom: 3px;
    margin-left: 1em;
    .poll-answer-control {
      margin-right: 3px;
      float: left;
    }
    .btn-add-poll {
      font-weight: bold;
    }
  }
</style>
