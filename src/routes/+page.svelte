<script>
  import NavTarget from "$lib/nav/NavTarget.svelte";
  import Nav       from "$lib/nav/Nav.svelte";

  let show = true;
</script>

<div class="nav-container">
    <Nav></Nav>
</div>

<NavTarget id="nt1" itemtext="Демо ids-навигации">
    <h1>Демо ids-навигации для svelte 4</h1>
</NavTarget>
<p>Для одного из проектов навигацию необходимо сделать на свелте 4, а сайт у нас работает уже на svelte 5, поэтому я сделал отдельный маленький демо-проект.</p>
<p></p>
<NavTarget id="nt2" itemtext="пункт 2">
    <h2>Nav target 2</h2>
</NavTarget>
<p></p>
<p></p>
<p></p>
{#if show}
    <NavTarget id="nt3" itemtext="пункт 3">
        <h2>Nav target 3</h2>
    </NavTarget>
{/if}
<p><label> <input type="checkbox" bind:checked={show} >Если переключить чекбокс, то пункт 3 пропадет.</label></p>
<p></p>
<p></p>
<p></p>

<style>
    .nav-container {
        position: fixed;
        top: 1em;
        right: 1em;
        width: 300px;
        padding: 0.2em;
        background: #fff;
    }
    p {
        font-size: 2em;
        margin-block: 2em;
        height: 15em;
        background: repeating-linear-gradient(
                oklch(0.965 0.062 25),
                oklch(0.965 0.062 25) 1em,
                oklch(0.965 0.113 280) 1em,
                oklch(0.965 0.113 280) 1.2em
        );
    }
</style>