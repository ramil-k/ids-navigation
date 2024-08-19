<script>
  import { base } from "$app/paths";
</script>

<nav>
    <ul>
        <li><a href="{base}/">main page</a></li>
        <li><a href="{base}/page-2">second page</a></li>
        <li><a href="{base}/instruction-page">Пример Ids с меню</a></li>
    </ul>
</nav>
<div class="content">
    <slot></slot>
</div>

<style>
    :global(a) {
        text-decoration: underline;
        text-decoration-thickness: 0.005em;
        text-underline-offset: 0.3em;
    }
    nav {
        position: sticky;
        top: 1em;
        width: max-content;
        padding: 0.2em;
        background: #fff;
    }
    ul {
        display: flex;
    }
    li {
        margin-right: 2em;
    }
</style>