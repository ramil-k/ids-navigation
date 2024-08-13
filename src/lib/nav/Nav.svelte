<script context="module">
  import { writable } from "svelte/store";

  let items = writable([]);
  let current = writable(0);

  export const addItem = (item) =>
    items.update(items => {
      console.log('adding', item, 'to', items)
      let i = items.find(i => i.id === item.id);

      if (!i) {
        return [...items, item]
      }
      i.itemtext = item.itemtext;
      i.topPosition = item.topPosition;
      return items;

    })

  export const removeItem = (itemId) =>
    items.update(items =>
      items.filter(i => i.id !== itemId))
</script>
<script>
  import {onMount} from "svelte";

  const updateCurrent = () => {
    let arr = $items.toSorted((i1,  i2) => i1.topPosition - i2.topPosition);
    let highestTopPosition = 0;
    let highestTopPositionIndex = 0;
    console.log('onscroll', { arr, highestTopPosition, highestTopPositionIndex }, window.scrollY, window.innerHeight )
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].topPosition > highestTopPosition && arr[i].topPosition < window.scrollY + (window.innerHeight / 2)) {
        highestTopPositionIndex = i;
        highestTopPosition = arr[i].topPosition;
      }
    }
    current.set(highestTopPositionIndex);
    console.log('onscroll__res', { arr, highestTopPosition, highestTopPositionIndex } )
  }
  onMount(updateCurrent)
</script>

<svelte:document on:scroll={updateCurrent} />
<ul>
    {#each $items as item, i}
        <li>
            <a class={i === $current ? 'current' : ''} href={`#${item.id}`}>
                {item.itemtext}
            </a>
        </li>
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    li {
        list-style: none;
    }
    a {
        padding: 0.2em;
        border: solid 1px transparent;
    }
    a.current {
        border: solid 1px #999;
    }
</style>