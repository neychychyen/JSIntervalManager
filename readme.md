<h2 align = 'center'>Менеджер интервалов JS</h2>

<details>
    <summary>О приложении</summary>
	<p>В нативном JS отсутсвует механизм, отслеживаюший интервалы, указанные с помошью setInterval(), при неправильной обработке интервалов, может случиться дублирование интервалов, этот код нацелен на исправление этого упущения. Теперь интервалы контроллируются классом, имеют свое имя, контекст и могут быть удалены в любой момент</p>
</details>

<details>
    <summary>Установка</summary>
     Вы можете установить библиотеку разными способами

<hr>
<details>
<summary>Онлайн подключение</summary>
<p>Используйте ссылку на библиотеку в коде <a href = ''>https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js</a></p>

<details>
<summary>Подробная инструкция</summary>

Способ 1. В HTML документе подключите скрипт кодом:

```html 
<script src='https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js'></script>
```
      
Cпособ 2. В вашем подключенном JavaScript-коде импортируйте библиотеку с помощью:
```javascript
import intervalManager from 'https://cdn.jsdelivr.net/gh/neychychyen/JSIntervalManager/IntervalManager.js';
```
</details>
</details>
<hr>
<details>
<summary>Оффлайн подключение</summary>
<p>Скачайте библиотеку <a href = 'https://github.com/neychychyen/JSIntervalManager/blob/master/IntervalManager.js'>IntervalManager.js</a>  и поместите ее в папку с проектом</p>

<details>
<summary>Подробная инструкция по установке</summary>

Способ 1. В HTML документе подключите скрипт кодом:

```html 
<script src="/Ваш/Путь/До/Библиотеки/IntervalManager.js"></script>
```
      
Cпособ 2. В вашем подключенном JavaScript-коде импортируйте библиотеку с помощью:
```javascript
import intervalManager from "/Ваш/Путь/До/Библиотеки/IntervalManager.js";
```
</details>
</details>
<hr>

</details>



