<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';
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

  const fadeDuration = {duration: 200};

  const controlBtnProps = {
    'padding': '0.3em 0.6em'
  };

</script>

<h3>New Poll</h3>

<form id="new-poll-form" on:submit|preventDefault={submitNewPoll}>
  <!-- Question -->
  <div class="poll-question form-group">
    <label for="poll-question"><b>Poll Question</b></label>
    <textarea class="form-control" id="poll-question" required bind:value={poll.question}></textarea>
  </div>

  <!-- Answers -->
  {#each [...Array(numAnswers).keys()] as i (i)}
    <div transition:fade={fadeDuration}>
      <PollAnswer {i} disableAdd={numAnswers >= maxAnswers} bind:answer={poll.answers[i]} on:deleteAnswer={deleteAnswer} on:addAnswer={addAnswer}/>
    </div>
  {/each}

  <!-- Buttons -->
  <div class="btn-row">
    <div class="poll-form-buttons">
      <span><Button type="submit">Submit</Button></span>
      <span><Button type="cancel" on:click={cancelNewPoll}>Cancel</Button></span>
    </div>
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
    div {
      display: block;
      margin: 0 auto;
      text-align: center;
      // background-color: red;
    }
    .poll-question {
      width: 50%;
      textarea {
        border-radius: 4px;
        height: 4em;
      }
    }
    .btn-row {
      margin: 1em auto;
      // .poll-form-buttons {
        // background-color: green;
        // display: inline-block;
      // }
      span {
        margin: 0 0.5em;
      }
    }
  }
</style>