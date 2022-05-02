<script lang="ts">
  import { getCssVars } from "../../utils";

  export let type: string = '';
  export let shadow: boolean = true;
  export let disabled: boolean = false;
  const types = ['add-item', 'discard-item', 'submit', 'cancel'];
  let cssVars = getCssVars($$restProps);

  function getBtnClass(type: string) {
    if (types.includes(type)) {
      return 'btn-' + type;
    }
    return 'btn-std';
  }

  $: customClass = getBtnClass(type);
</script>

<button class="btn btn-primary {customClass}" class:btn-shadow={shadow} style={cssVars} {disabled} on:click>
  <slot />
</button>

<style lang="scss">

  @import '../../styles/colors.scss';

  /* Create button classes of different colors */
  @mixin btnType($name, $color, $textColor: white, $borderColor: $color) {
    .btn-#{$name} {
      background-color: $color;
      border-color: $borderColor;
      color: $textColor;
      &:hover {
        background-color: darken($color, 10%);
        border-color: darken($color, 10%);
      }
    }
  }

  @include btnType("add-item", $add-item);
  @include btnType("discard-item", $discard-item);
  @include btnType("submit", $submit);
  @include btnType("cancel", $cancel);

  .btn-shadow {
    box-shadow: 2px 2px 2px rgba(0,0,0,0.15);
  }
</style>
