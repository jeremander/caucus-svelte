<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import Trash from "svelte-bootstrap-icons/lib/Trash";
  import Button from "./shared/Button.svelte";
  import PollAnswer from "./NewPoll/PollAnswer.svelte";

  const dispatch = createEventDispatcher();
  // max number of answers allowed in a single poll
  const maxAnswers: number = 25;

  let poll = {
    question: '',
    answers: ['', '']
  };

  $: numAnswers = poll.answers.length;

  function addAnswer(e) {
    e.preventDefault();
    let i = e.detail;
    poll.answers = poll.answers.slice(0, i + 1).concat(['']).concat(poll.answers.slice(i + 1, numAnswers));
  }

  function deleteAnswer(e) {
    e.preventDefault();
    let i = e.detail;
    poll.answers = poll.answers.slice(0, i).concat(poll.answers.slice(i + 1, numAnswers));
  }

  function submitNewPoll() {
    dispatch('submitNewPoll', poll);
  }

  function cancelNewPoll(e) {
    e.preventDefault();
    dispatch('submitNewPoll', null);
  }

  const controlBtnProps = {
    'padding': '0.3em 0.6em'
  };

</script>

<h3>New Poll</h3>

<form id="new-poll-form" on:submit|preventDefault={submitNewPoll}>
  <div class="poll-form-grid">

    <!-- Question -->
    <div class="poll-question form-group">
      <label for="poll-question"><b>Poll Question</b></label>
      <textarea class="form-control" id="poll-question" required bind:value={poll.question}></textarea>
    </div>

    <!-- Answers -->
    {#each [...Array(numAnswers).keys()] as i}
      <PollAnswer {i} disableAdd={numAnswers >= maxAnswers} bind:answer={poll.answers[i]} on:deleteAnswer={deleteAnswer} on:addAnswer={addAnswer}/>
    {/each}
  </div>

  <!-- Buttons -->
  <div class="btn-row">
    <span><Button type="submit">Submit</Button></span>
    <span><Button type="cancel" on:click={cancelNewPoll}>Cancel</Button></span>
  </div>

</form>


<style lang="scss">

  @import '../styles/breakpoints.scss';

  h3 {
    font-weight: bold;
    margin-bottom: 1em;
  }
  #new-poll-form {
    width: 37em;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;

    .poll-form-grid {
      display: grid;
      grid-row-gap: 1em;
      grid-template-columns: [label] 20% [input] auto [controls] 20%;
      grid-template-rows: repeat(auto-fill, [main-row] 1fr);

      @include tablet-max {
        grid-template-columns: [label] 30% [input] auto [controls] 30%;
      }
    }
    .poll-question {
      grid-column-start: input;
      textarea {
        border-radius: 4px;
        height: 4em;
      }
    }
    :global {
      .poll-answer-label {
        grid-column-start: label;
        position: relative;
        > label {
          height: 100%;
          float: right;
          font-size: 11pt;
        }
      }
      .poll-answer-input {
        grid-column-start: input;
      }
      .poll-answer-controls {
        grid-column-start: controls;
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
    }
    .btn-row {
      margin: 1em 0;
      grid-column-start: input;
      > span {
        margin: 0 0.5em;
      }
    }
  }
</style>