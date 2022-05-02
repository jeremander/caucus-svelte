<script lang="ts">
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import MyPolls from '../components/MyPolls.svelte';
  import NewPoll from '../components/NewPoll.svelte';
  import LoginForm from '../components/LoginForm.svelte';

  function createNewPoll() {
    // switch to new poll form view
    goto('/new-poll');
  }


  const fadeTime: number = 75;
  const fadeDelay = {delay: 2 * fadeTime};
  const fadeDuration = {duration: fadeTime};
</script>

<div class="polls-view" in:fade={fadeDelay} out:fade={fadeDuration}>
  <LoginForm />
  <section class="my-polls">
    <MyPolls on:createNewPoll={createNewPoll}/>
  </section>
</div>

<style>
  .my-polls {
    margin-top: 2em;
  }
</style>

