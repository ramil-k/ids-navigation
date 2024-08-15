<script context="module">
  import {writable} from "svelte/store";

  let items = writable([]);
  let current = writable(0);

  export const addItem = (item) =>
    items.update(items => {
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
  import {pushState} from "$app/navigation";
  import {browser} from '$app/environment';
  import {onMount} from "svelte";

  const updateCurrent = () => {
    if (!browser) {
      return;
    }
    let arr = $items.toSorted((i1, i2) => i1.topPosition - i2.topPosition);
    let highestTopPosition = 0;
    let highestTopPositionIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].topPosition > highestTopPosition &&
        arr[i].topPosition < window.scrollY + (window.innerHeight / 2) &&
        highestTopPosition < window.scrollY
      ) {
        highestTopPositionIndex = i;
        highestTopPosition = arr[i].topPosition;
      }
    }
    current.set(highestTopPositionIndex);
  }
  onMount(() => {
    let unsubscriber = current.subscribe(current => {
      if (browser && document?.body && $items[current]?.id) {
        try {
            pushState(`#${$items[current].id}`, {});
        } catch (e) {
          console.error(e);
        }
      }
    })
    updateCurrent();
    return unsubscriber;
  });
  items.subscribe(updateCurrent);
</script>

<svelte:document on:scroll={updateCurrent}/>
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
        gap: 1em;
        padding: 1em 2em;
    }

    li {
        list-style: none;
    }

    a {
        padding: 0.4em;
        border: solid 0.1em transparent;
    }

    a.current {
        border: solid 1px #999;
    }
</style>