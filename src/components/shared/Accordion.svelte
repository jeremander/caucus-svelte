<script>
  import AccordionItem from './AccordionItem.svelte';

  export let items = [];
  export let type = "text";
</script>

<div class="accordion">
  {#each items as item, i}
    <AccordionItem>
      <!-- insert icon without wrapping in a div -->
      <svelte:fragment slot="icon">
        <slot name="icon" />
      </svelte:fragment>
      <div slot="title">
        {#if type == "html"}
          {@html item.title}
        {:else}
          {item.title}
        {/if}
      </div>

      <div slot="body">
        {#if type == "html"}
          {@html item.body}
        {:else}
          {item.body}
        {/if}
      </div>
    </AccordionItem>
  {/each}

</div>

<style lang="scss">

  @import '../../styles/colors.scss';

  :global(div[slot="icon"]) {
    position: absolute;
    left: 1em;
    color: $accordion-icon;
    &:hover {
      color: $accordion-icon-hover;
    }
  }
</style>