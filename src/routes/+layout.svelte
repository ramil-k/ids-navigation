<script>
  import { base } from "$app/paths";
</script>

<nav>
    <ul>
        <li><a href="{base}/">main page</a></li>
        <li><a href="{base}/page-2">second page</a></li>
    </ul>
</nav>
<slot></slot>

<style>
    nav {
        position: sticky;
        top: 0;
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