<script>
  import NavTarget from "$lib/nav/NavTarget.svelte";
  import Nav       from "$lib/nav/Nav.svelte";
</script>

<NavTarget id="bz_nt1" itemtext="BZ N T 1">
    <h1>bz_Nav target 1</h1>
</NavTarget>
<p></p>
<p></p>
<NavTarget id="bz_nt2" itemtext="BZ N T 2">
    <h2>bz_Nav target 2</h2>
</NavTarget>
<p></p>
<p></p>
<p></p>
<NavTarget id="bz_nt3" itemtext="BZ N T 3">
    <h2>bz_Nav target 3</h2>
</NavTarget>
<p></p>
<p></p>
<p></p>
<p></p>

<div class="nav-container">
    <Nav></Nav>
</div>

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
                oklch(0.965 0.062 125),
                oklch(0.965 0.062 125) 1em,
                oklch(0.965 0.113 280) 1em,
                oklch(0.965 0.113 280) 1.2em
        );
    }
</style>