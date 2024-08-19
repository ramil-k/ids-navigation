<script>
  import NavTarget from "$lib/nav/NavTarget.svelte";
  import Nav       from "$lib/nav/Nav.svelte";
</script>

<div class="ids__wrapper">
    <div class="section" id="intro">
        <div class="ids__space XL"></div>
        <div class="ids__text-width">
            <NavTarget id="_ids" itemtext=".ids">
                <h1>.ids</h1>
            </NavTarget>
            <p>Intuition Design System, IDS — дизайн-система для вёрстки нарративов.</p>
            <p>Она упрощает создание лендингов, онлайн-изданий и любых цифровых продуктов для веба, в основе которых лежит история, объяснение, текст. Технически IDS — это набор CSS-классов, JS-компонентов и всяких секретных приёмчиков.</p>
            <aside>
                <p>Публичный репозиторий: <code><a href="https://github.com/intuition-tech/ids">github.com/intuition-tech/ids</a></code></p>
                <p>Превью: <code><a href="https://intuition-tech.github.io/ids">intuition-tech.github.io/ids</a></code></p>
            </aside>
            <p>Сама эта страница, <code>index.html</code>, служит образцом вёрстки. Вы можете скачать гит-репозиторий, открыть файл в редакторе кода и делать в этой копии что-то своё.
            <p>IDS — это не библиотека, а шаблон. Вы не подключаете её в проект как зависимость, не расширяете классы, не переопределяете свойства. Вместо этого вы тупо копируете к себе код и меняете, как захочется. Без совместимости версий, без апдейтов. </p>


        </div>
    </div>

    <div class="section">
        <div class="ids__space L"></div>
        <div class="ids__text-width">
            <NavTarget id="setup" itemtext="Настройка">
                <h2>Настройка</h2>
            </NavTarget>
            <p>Базовые параметры дизайн-системы задаются в файле <code>settings.css</code>. Кроме того, в IDS включён <code><a href="https://necolas.github.io/normalize.css/">normalize.css</a></code> — набор корректировок, устраняющих неконсистентность реализации стилей в разных браузерах — с ним не надо ничего делать, он просто есть. </p>
        </div>
    </div>

    <div class="section" id="font">
        <div class="ids__space"></div>
        <div class="ids__text-width">
            <NavTarget id="font" itemtext="Шрифт">
                <h3>Шрифт</h3>
            </NavTarget>
            <p>В IDS по умолчанию используется шрифт <a href="https://www.paratype.com/fonts/pt/pt-root-ui" target="_BLANK">PT Root UI</a>, вариативная веб-версия. Он классный! Но дизайн-система не завязана на конкретный шрифт, вы можете подключить любой, достаточно положить шрифт в папку <code>/fonts</code> и отредактировать раздел Fonts в файле <code>settings.css</code>.</p>
            <p>TODO: Написать кусок об использовании числовых значений для font-weight

        </div>
    </div>

    <div class="section" id="density">
        <div class="ids__space"></div>
        <div class="ids__text-width">
            <NavTarget id="density" itemtext="Плотность">
                <h3>Плотность</h3>
            </NavTarget>
            <p>Разным шрифтам подходит разная плотность вёрстки. Кроме того, плотность это эстетический выбор — иногда хочется тесные поля, иногда нужна воздушность.</p>
            <p>В IDS есть переменная <code>--ids__density</code>, которая влияет на интерлиньяж текста, а также на поля и отступы всех текстовых элементов. Чтобы настроить плотность вёрстки, попробуйте сначала найти оптимальное значение этой переменной, а потом уже редактировать отдельные стили.</p>


        </div>
    </div>

    <div class="section" id="fluid">
        <div class="ids__space"></div>
        <div class="ids__text-width">
            <NavTarget id="adaptivity" itemtext="Адаптивность">
                <h3>Адаптивность</h3>
            </NavTarget>
            <p>IDS поддерживает два типа устройств: <code>mobile</code> и <code>desktop</code>. Разница только в ширине вьюпорта: если меньше 768 px, значит мобила, если больше — десктоп. Идея в том, чтобы иметь как можно более одинаковый сайт на разных устройствах — как можно меньше менять элементы, сделать адаптацию как можно незаметнее.</p>
            <p>Fluid Typography — это когда для разной ширины окна рассчитывается разной значение font-size для body, и это значение наследуется всеми элементами страницы.  Выходит, что с изменением ширины вьюпорта, меняется не только ширина элементов, заданная в процентах, но и масштаб всей страницы. Если использовать емы не только для типографики, но и для габаритов элементов — можно настроить все пропорции в одной ширине, и знать, что они сохранятся при любой </p>

            <p><code>--mobile-font-size-min</code></p>
            <p><code>--mobile-font-size-max</code></p>

            <p><code>--desktop-font-size-min</code></p>
            <p><code>--desktop-font-size-max</code></p>

            <aside>
                <p>Основная размерность в IDS — это em. В этих единицах задаются не только параметры текста, но и отступы, поля, радиусы. Поэтому </p>

                <p>Мы рекомендуем использовать em или rem для любых свойств, которые уместно масштабировать вместе с текстом. Тогда, получив удачные пропорции при одной ширине, вы автоматически получите их при любой ширине, и отладка дизайна для разных экранов сильно упростится.</p>
                <p>Разумеется, для толщин обводок уместнее абсолютные значения (в общем-то это пиксели, px) а для размеров, высчитываемых относительно габаритов родительских контейнеров, подойдут только %, vh и vw.</p>
            </aside>
        </div>

    </div>




    <div class="section" id="color">
        <div class="ids__space"></div>
        <div class="ids__text-width">
            <NavTarget id="color" itemtext="Цвет">
                <h3>Цвет</h3>
            </NavTarget>
            <p>IDS хранит цветовые палитры в переменных, именование цветов функциональное: для чего используется, так и называется. Вот эти палитры: </p>


        </div>
        <style>
            .guide-color-plate {
                height: 6em;
                font-size: 0.8em;
                padding: 0.6em 0.8em;
            }
        </style>

        <div class="ids__space"></div>
        <div class="ids__grid">
            <div class="ids__grid-cell">
                <div class="guide-color-plate" style="background-color: rgba(var(--ids__text-RGB), 1); color: rgba(var(--ids__background-RGB), 1)">
                    <p>--ids__text-RGB</p>
                </div>
            </div>

            <div class="ids__grid-cell">
                <div class="guide-color-plate" style="background-color: rgba(var(--ids__link-RGB), 1); color: rgba(var(--ids__background-RGB), 1)">
                    <p>--ids__link-RGB</p>
                </div>
            </div>
            <div class="ids__grid-cell">
                <div class="guide-color-plate" style="background-color: rgba(var(--ids__hover-RGB), 1); color: rgba(var(--ids__background-RGB), 1)">
                    <p>--ids__hover-RGB</p>
                </div>
            </div>
            <div class="ids__grid-cell">
                <div class="guide-color-plate" style="background-color: rgba(var(--ids__mark-RGB), 1)">
                    <p>--ids__mark-RGB</p>
                </div>
            </div>

            <div class="ids__grid-cell">
                <div class="guide-color-plate" style="background-color: rgba(var(--ids__code-RGB), 1); color: rgba(var(--ids__background-RGB), 1)">
                    <p>--ids__code-RGB</p>
                </div>
            </div>
            <div class="ids__grid-cell">
                <div class="guide-color-plate" style="background-color: rgba(var(--ids__accent-RGB), 1); color: rgba(var(--ids__background-RGB), 1)">
                    <p>--ids__accent-RGB</p>
                </div>
            </div>
            <div class="ids__grid-cell">
                <div class="guide-color-plate" style="background-color: rgba(var(--ids__surface-RGB), 1)">
                    <p>--ids__surface-RGB</p>
                </div>
            </div>
            <div class="ids__grid-cell">
                <div class="guide-color-plate" style="background-color: rgba(var(--ids__background-RGB), 1)">
                    <p>--ids__background-RGB</p>
                </div>
            </div>
        </div>

        <div class="ids__space"></div>
        <div class="ids__text-width">
            <p>Все цветовые палитры — в файле <code>color-palettes.css</code>.
            <p>В переменных хранятся строки из трёх значений в пространстве RGB, например, <code>253, 47, 75</code>. Для стилизации компонентов часто нужен цвет с прозрачностью, но информацию об альфа-канале удобнее хранить не в переменной, а в свойстве конкретного селектора, писать что-то вроде <code>color: rgba(var(--ids__accent-RGB), 0.5)</code>, чтобы получить цвет с прозрачностью 0.5.</p>
        </div>
    </div>

    <div class="section">
        <div class="ids__space L"></div>
        <div class="ids__text-width">
            <NavTarget id="layout" itemtext="Каркас страницы">
                <h2>Каркас страницы</h2>
            </NavTarget>
            <p>IDS создана для дизайна нарративов, поэтому мы отталкиваемся от идеи, что типичная страница состоит из шапки (хедера) в начале, длинной многоэтажной колбасы контента в середине, и подвала (футера) в конце.</p>
            <p>IDS не использует модульные сетки или колонки для организации пространства страницы. У нас всё намного проще: страница состоит из этажей, они идут сверху вниз друг за другом, каждый занимает всю доступную ширину и может быть любой высоты. Такой подход не мешает внутри этажа создавать модульные сетки и сложные композиции, но изолированность этажей позволяет легко менять их местами и избавляет от какой-либо взаимозависимости. </p>
        </div>
    </div>

    <div class="section">
        <div class="ids__space"></div>
        <div class="ids__text-width">
            <NavTarget id="wrappers" itemtext="Обёртки">
                <h3>Обёртки</h3>
            </NavTarget>
            <p><code>.ids__wrapper</code> — стандартный этажа c большими полями на десктопе и с минимальными на мобиле. </p>
        </div>
    </div>
</div>

<div style="background-color: rgba(var(--ids__accent-RGB), 0.1);">
    <div class="ids__wrapper">
        <div style="background-color: rgba(var(--ids__accent-RGB), 0.1);">
            <div class="ids__space XL"></div>
            <div class="ids__space XL"></div>
        </div>
    </div>
</div>

<div class="ids__wrapper">
    <div class="section">
        <div class="ids__space M"></div>
        <p><code>.ids__wrapper.wide</code> — этаж на всю ширину с минимальными полями</p>
    </div>
</div>

<div style="background-color: rgba(var(--ids__accent-RGB), 0.1);">
    <div class="ids__wrapper wide">
        <div style="background-color: rgba(var(--ids__accent-RGB), 0.1);">
            <div class="ids__space XL"></div>
            <div class="ids__space XL"></div>
        </div>
    </div>
</div>

<div class="ids__wrapper">
    <div class="section" id="">
        <div class="ids__space M"></div>
        <p><code>.ids__wrapper.edge</code> — этаж на всю ширину без полей</p>
    </div>
</div>

<div style="background-color: rgba(var(--ids__accent-RGB), 0.1);">
    <div class="ids__wrapper edge">
        <div style="background-color: rgba(var(--ids__accent-RGB), 0.1);">
            <div class="ids__space XL"></div>
            <div class="ids__space XL"></div>
        </div>
    </div>
</div>

<div class="ids__wrapper">

    <div class="section">
        <div class="ids__space M"></div>
        <p>Внутри этажей используется обёртка для создания «текстовой ширины»</p>
        <p><code>.ids__text-width</code></p>
        <div style="background-color: rgba(var(--ids__accent-RGB), 0.1);">
            <div class="ids__text-width">
                <div style="background-color: rgba(var(--ids__accent-RGB), 0.1);">
                    <div class="ids__space XL"></div>
                    <div class="ids__space XL"></div>
                </div>
            </div>
        </div>

    </div>

    <div class="section">
        <div class="ids__space L"></div>
        <div class="ids__text-width">
            <NavTarget id="space" itemtext="Система отступов">
                <h3>Система отступов</h3>
            </NavTarget>
            <p>В IDS у обёрток нулевые отступы, а у большинства других элементов задан только отступ снизу, минимальный, чтобы верстать элементы одним потоком.</p>

            <p>Когда нужны заметные отступы — например, между этажами или перед заголовком, чтобы он не прилипал к предыдущему абзацу — используются специальные заглушки, спейсеры.</p>
        </div>
        <div class="ids__space M"></div>
        <div class="ids__grid M gap-S">
            <div class="ids__grid-cell">
                <p><code>ids__space.S</code></p>
                <div class="ids__space S" style="background-color: rgba(var(--ids__accent-RGB), 0.1);"></div>
            </div>
            <div class="ids__grid-cell">
                <p><code>ids__space.M</code></p>
                <div class="ids__space M" style="background-color: rgba(var(--ids__accent-RGB), 0.1);"></div>
            </div>
            <div class="ids__grid-cell">
                <p><code>ids__space.L</code></p>
                <div class="ids__space L" style="background-color: rgba(var(--ids__accent-RGB), 0.1);"></div>
            </div>
            <div class="ids__grid-cell">
                <p><code>ids__space.XL</code></p>
                <div class="ids__space XL" style="background-color: rgba(var(--ids__accent-RGB), 0.1);"></div>
            </div>
        </div>
        <div class="ids__space L"></div>
        <div class="ids__text-width">

            <aside>
                <h4>Почему так</h4>

                <p>На первый взгляд спейсеры — довольно тупое решение. Как во времена ручного металлического набора для создания пустых мест использовали свинцовые бруски, вот так и мы здась. Неужели нельзя как-то элегантнее? Практика показала, что это самое гибкое и удобное решение.</p>
                <p>Например, на этой плашке, где вы сейчас читаете этот текст, верхний отступ у заголовка «Почему так» помешал бы поставить его вот так аккуратно в угол — пришлось бы писать более сложные стили с условиями, это слишком хрупко. Ну и не только поэтому, много ещё почему, спасибо за вопрос.</p>
            </aside>

        </div>
    </div>
</div>

<footer>
    <h1>Это футер</h1>
</footer>
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
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.1);
    }
    footer {
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