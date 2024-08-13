<script>
  import {onDestroy, onMount} from "svelte";
  import {addItem, removeItem} from "$lib/nav/Nav.svelte";

  export let id;
  export let itemtext;
  export let style;
  export let className = '';

  let target;

  addItem({id, itemtext});

  let updateTopPosition = () => {
    if (!window) {
      return;
    }
    let topPosition = target.getBoundingClientRect().top + window.scrollY;
    console.log(topPosition, target.getBoundingClientRect().top, window.scrollY)
    addItem({id, itemtext, topPosition: topPosition});
  };
  onMount(updateTopPosition);

  onDestroy(() => {
    removeItem(id)
  });
</script>

<svelte:window on:resize={updateTopPosition}/>

<div bind:this={target} class={`nav-target ${className}`} {id} {style}>
    <slot></slot>
</div>

<style>
    @property --ids-nav-margin-top {
        initial-value: 3em;
        inherits: true;
        syntax: "<length>";
    }

    .nav-target {
        margin-top: calc(0px - var(--ids-nav-margin-top, 3em));
        padding-top: var(--ids-nav-margin-top, 3em);
    }

    .nav-target:active {
        background: #eee;
    }

</style>