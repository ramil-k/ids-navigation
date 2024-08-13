<script>
  import { resolveRoute } from "$app/paths";
</script>

<nav>
    <ul>
<!--        <li><a href={"/"}>main page</a></li>-->
<!--        <li><a href={"/page-2/"}>second page</a></li>-->
        <li><a href={"/ids-navigation/"}>main page</a></li>
        <li><a href={"/ids-navigation/page-2/"}>second page</a></li>
    </ul>
</nav>
<slot></slot>

<style>
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