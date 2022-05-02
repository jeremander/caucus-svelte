<script lang="ts">
  import { fade } from 'svelte/transition';
  import { goto } from "$app/navigation";
  import NewPoll from '../components/NewPoll.svelte';

  function submitNewPoll(e) {
    let poll = e.detail;
    if (poll !== null) {
      alert('Added new poll.');
      console.log(poll);
    }
    // go to polls view
    goto('/');
  }

  const fadeTime: number = 75;
  const fadeDelay = {delay: 2 * fadeTime};
  const fadeDuration = {duration: fadeTime};
</script>

<section class="new-poll" in:fade={fadeDelay} out:fade={fadeDuration}>
  <NewPoll on:submitNewPoll={submitNewPoll}/>
</section>