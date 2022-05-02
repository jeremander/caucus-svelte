<script>
  import AccordionItem from './AccordionItem.svelte';

  export let items = [];
  export let type = "text";
</script>

<div class="accordion">
  {#each items as item, i}
    <AccordionItem>
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