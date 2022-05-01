<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';
  import Button from "../shared/Button.svelte";
  import Trash from "svelte-bootstrap-icons/lib/Trash";

  const dispatch = createEventDispatcher();

  export let i: number;
  export let answer: string = '';
  export let disableAdd: boolean = false;

  const fadeDuration = {duration: 200};

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

<div class="poll-answer-label input-group-prepend" transition:fade={fadeDuration}>
  <label class="input-group-text" for="poll-answer-{i}">Answer {i + 1}</label>
</div>
<input type="text" class="poll-answer-input form-control" required bind:value={answer} transition:fade={fadeDuration}>
<div class="poll-answer-controls" transition:fade={fadeDuration}>
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
