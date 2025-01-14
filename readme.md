<h2 align = 'center'>Менеджер интервалов JS</h2>

<details style="padding-left: 20px; border: 1px solid #ccc; margin-bottom: 10px;">
    <summary>О приложении</summary>
	<p>В нативном JS отсутсвует механизм, отслеживаюший интервалы, указанные с помошью setInterval(), при неправильной обработке интервалов, может случиться дублирование интервалов, этот код нацелен на исправление этого упущения. Теперь интервалы контроллируются классом, имеют свое имя, контекст и могут быть удалены в любой момент</p>
</details>

<details style="padding-left: 20px; border: 1px solid #ccc; margin-bottom: 10px;">
    <summary style="font-weight: bold; color: #2C3E50; cursor: pointer;">Установка</summary>

    <details style="padding-left: 20px; border-left: 2px solid #ccc; margin-top: 10px; margin-bottom: 10px;">
        <summary style="font-weight: bold; color: #2980B9; cursor: pointer;">Способ 1: через онлайн подключение</summary>

  Вы можете подключить библиотеку онлайн разными способами, используя ссылку:
  
  **`https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js`**

  1. В HTML документе подключите скрипт кодом:
     ```html
     <script src="https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js"></script>
     ```

  2. В вашем подключенном JavaScript-коде импортируйте библиотеку с помощью:
     ```javascript
     import intervalManager from 'https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js';
     ```
    </details>

    <details style="padding-left: 20px; border-left: 2px solid #ccc; margin-top: 10px; margin-bottom: 10px;">
        <summary style="font-weight: bold; color: #2980B9; cursor: pointer;">Способ 2: оффлайн установка</summary>
        Чтобы установить через скачивание библиотеки, выполните следующие шаги:
        <ol>
            <li>Перейдите на официальный сайт по <a href="https://example.com">ссылке</a>.</li>
            <li>Скачайте архив с библиотекой.</li>
            <li>Распакуйте архив в удобное место.</li>
            <li>В терминале выполните команду: <code>example install --from-path /path/to/library</code>.</li>
        </ol>
        Убедитесь, что установка прошла успешно, выполнив команду: <code>example check</code>.
    </details>

</details>



<script type="module">
  import intervalManager from 'https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js';

  // Используйте библиотеку
  console.log(intervalManager);
</script>
<br>
