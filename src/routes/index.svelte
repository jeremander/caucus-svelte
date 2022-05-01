<script lang="ts">
  import { fade } from 'svelte/transition';
  import MyPolls from '../components/MyPolls.svelte';
  import NewPoll from '../components/NewPoll.svelte';
  import LoginForm from '../components/LoginForm.svelte';

  // let page: string = 'My Polls';
  let page: string = 'New Poll';

  function createNewPoll() {
    // switch to new poll form view
    page = 'New Poll';
  }

  function submitNewPoll(e) {
    let poll = e.detail;
    if (poll !== null) {
      alert('Added new poll.');
    }
    // switch to polls view
    page = 'My Polls';
  }

  const fadeTime: number = 75;
  const fadeDelay = {delay: fadeTime};
  const fadeDuration = {duration: fadeTime};


</script>

<LoginForm />

{#if page === 'My Polls'}
  <section class="poll-section" in:fade={fadeDelay} out:fade={fadeDuration}>
    <MyPolls on:createNewPoll={createNewPoll}/>
  </section>
{:else}

  <section class="poll-section" in:fade={fadeDelay} out:fade={fadeDuration}>
    <NewPoll on:submitNewPoll={submitNewPoll}/>
  </section>
{/if}

<style>
  .poll-section {
    margin-top: 1.5em;
  }
</style>

