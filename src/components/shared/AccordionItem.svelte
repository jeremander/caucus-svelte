<script>
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import ChevronUp from "svelte-bootstrap-icons/lib/ChevronUp";
  import ChevronDown from "svelte-bootstrap-icons/lib/ChevronDown";


  const dispatch = createEventDispatcher();

  export let opened = false;
</script>

<div class="item-header" class:closed={!opened} on:click={() => opened = !opened} >
  <div class="item-title">
    <slot name="title"  />
  </div>
  <div class="chevron">
    {#if opened}
      <ChevronUp />
    {:else}
      <ChevronDown />
    {/if}
  </div>
</div>

{#if opened }
  <div class="item-body" transition:slide|local>
      <slot name="body" />
  </div>
{/if}

<style lang="scss">
  @import '../../styles/colors.scss';
  @import '../../styles/global.scss';

  .item-header, .item-body {
    border: 1px solid $accordion-border;
  }
  .item-header {
    // @include disable-select;
    background-color: $accordion-header;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer;
    margin-top: -1px;
    padding: 0.5em;
    position: relative;

    &.closed {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    .item-title {
      display: inline-block;
      // cursor: text;
    }
    .chevron {
      float: right;
    }
  }
  .item-body {
    display: block;
    background-color: white;
    margin-top: -1px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 0.5em;
  }
</style>