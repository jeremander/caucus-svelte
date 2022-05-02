<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  // import SvelteMarkdown from 'svelte-markdown';
  // import { Collapse } from "bootstrap/js/src/Collapse.js";
  // import { Collapse } from "bootstrap";
  // import bootstrapjs from "svelte-bootstrapjs-action";
  import { marked } from 'marked';
  import PencilSquare from "svelte-bootstrap-icons/lib/PencilSquare";

  import Accordion from "./shared/Accordion.svelte";
  import Button from "./shared/Button.svelte";
import { stop_propagation } from 'svelte/internal';

  // // this hackery is needed to ensure Bootstrap only gets imported in the browser
  // let Collapse;

  // let bsConfig = {type: Collapse, config: {toggle: false}};

  // onMount(async () => {
  //     const module = await import('bootstrap');
  //     Collapse = module.default;
  // });

  const dispatch = createEventDispatcher();



  let polls = [{
    question: "Who is the coolest of the three *ta'veren*?",
    answers: ['Rand', '**Mat**', 'Perrin']
  },
  {
    question: "Which came first: the cheddar or the cheese?",
    answers: ['```Cheddar```', '`Cheese`']
  },
  {
    question: "What is the best fruit?",
    answers: ['Apple', 'Banana', 'Pear']
  }
  ];

  let pollData = polls.map((poll) => {
    let body = '<ol>';
    for (let answer of poll.answers) {
      body += '<li>' + marked.parseInline(answer) + '</li>';
    }
    body += '</ol>';
    return {title: marked.parseInline(poll.question), body: body};
  });

  function editPoll(e) {
    e.stopPropagation();
    alert('Editing poll.');
  }

</script>

<h3>My Polls</h3>

<div id="new-poll">
  <Button type="submit" shadow={true} padding="4px 8px" on:click={() => dispatch('createNewPoll')}>New Poll</Button>
</div>

<div id="poll-view">
  {#if polls.length == 0}
    <p>There are no polls to display.</p>
  {:else}
    <Accordion type="html" items="{pollData}">
      <div slot="icon" on:click={editPoll}>
        <PencilSquare />
      </div>
    </Accordion>
  {/if}
</div>

<style lang="scss">

  @import '../styles/colors.scss';

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
    margin: 2em auto;
    width: 60%;

    .edit-poll {
      display: inline;
      float: left;
    }
    :global(code) {
      color: black;
    }
    :global(.item-body ol) {
      margin: 0 auto;
      display: inline-block;
    }
    :global(.item-body li) {
      text-align: left;
    }
  }
</style>