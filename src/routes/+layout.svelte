<script>
  import { resolveRoute } from "$app/paths";
</script>

<nav>
    <ul>
        <li><a href={"/"}>main page</a></li>
        <li><a href={"/page-2/"}>second page</a></li>
        <li><a href={"/instruction-page/"}>Пример Ids с меню</a></li>
<!--        <li><a href={"/ids-navigation/"}>main page</a></li>-->
<!--        <li><a href={"/ids-navigation/page-2/"}>second page</a></li>-->
<!--        <li><a href={"/ids-navigation/instruction-page/"}>Пример Ids с меню</a></li>-->
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