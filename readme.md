<h2 align = 'center'>Менеджер интервалов JS</h2>

<details>
    <summary>О приложении</summary>
	<p>В нативном JS отсутсвует механизм, отслеживаюший интервалы, указанные с помошью setInterval(), при неправильной обработке интервалов, может случиться дублирование интервалов, этот код нацелен на исправление этого упущения. Теперь интервалы контроллируются классом, имеют свое имя, контекст и могут быть удалены в любой момент</p>
</details>

<details>
    <summary>Установка</summary>
     Вы можете установить библиотеку разными способами
    <details>
        <summary>Онлайн подключение</summary>
          <details>
          <summary>Используйте ссылку на библиотеку в коде **`https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js`**</summary>
          Способ 1. В HTML документе подключите скрипт кодом:
               ```html
               <script src="https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js"></script>
               ```
          Cпособ 2. В вашем подключенном JavaScript-коде импортируйте библиотеку с помощью:
          ```javascript
          import intervalManager from 'https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js';
          ```
          </details>

  
  

  
</details>

<details>
     <summary>Оффлайн установка</summary>
    Скачайте библиотеку <a href="https://github.com/neychychyen/JSIntervalManager/blob/master/IntervalManager.js">intervalmanagerjs</a> и поместите ее в папку с проектом
    <details>
          <summary>Детальная установка</summary>
          Способ 1. В HTML документе подключите скрипт кодом:
               ```html
               <script src="/Ваш/Путь/До/Библиотеки"></script>
               ```
          Cпособ 2. В вашем подключенном JavaScript-коде импортируйте библиотеку с помощью:
          ```javascript
          import intervalManager from "/Ваш/Путь/До/Библиотеки";
          ```
      </details>
  
</details>


</details>



<script type="module">
  import intervalManager from 'https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js';

  // Используйте библиотеку
  console.log(intervalManager);
</script>
<br>
