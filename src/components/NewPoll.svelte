<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Trash from "svelte-bootstrap-icons/lib/Trash";
  import Button from "./shared/Button.svelte";

  const dispatch = createEventDispatcher();

  let poll = {
    question: '',
    answers: ['', '']
  };

  $: numAnswers = poll.answers.length;

  function submitNewPoll() {
    dispatch('submitNewPoll', poll);
  }

  function cancelNewPoll(e) {
    e.preventDefault();
    dispatch('submitNewPoll', null);
  }

  const controlBtnProps = {
    'margin-top': '3px',
    'margin-bottom': '3px',
    'padding-left': '0.6em',
    'padding-right': '0.6em'
  };

</script>

<h3>New Poll</h3>

<form id="new-poll-form" on:submit|preventDefault={submitNewPoll}>

  <div class="form-group">
    <label for="poll-question"><b>Poll Question</b></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" required bind:value={poll.question}></textarea>
  </div>

  {#each [...Array(numAnswers).keys()] as i}
    <div class="poll-answer input-group">
      <div class="input-group-prepend">
        <label class="input-group-text" for="poll-answer-{i + 1}">Answer {i + 1}</label>
      </div>
      <input type="text" class="form-control" id="poll-answer-{i + 1}" required bind:value={poll.answers[i]}>
      <div class="input-group-append">
        <Button type="discard-item" {...controlBtnProps}>
            <Trash />
        </Button>
      </div>
      <div class="input-group-append">
        <Button type="add-item" {...controlBtnProps}>
          <div class="btn-add-poll">&#xFF0B;</div>
        </Button>
      </div>
    </div>
  {/each}

  <div class="btn-row">
    <span><Button type="submit">Submit</Button></span>
    <span><Button type="cancel" on:click={cancelNewPoll}>Cancel</Button></span>
  </div>
</form>

<style lang="scss">
  h3 {
    font-weight: bold;
    margin-bottom: 1em;
  }
  #new-poll-form {
    width: 25em;
    margin: 0 auto;
    text-align: center;
    .form-group, .input-group {
      margin: 0.75em 0;
    }
    .form-group {
      textarea {
        border-radius: 4px;
        height: 4em;
        margin-bottom: 1.25em;
      }
    }
    .input-group-append {
      margin-left: 0.5em;
    }
    .btn-add-poll {
      font-weight: bold;
    }
    .btn-row {
      margin: 1.5em 0;
    }
    .btn-row span {
      margin: 0 0.75em;
    }
  }
</style>