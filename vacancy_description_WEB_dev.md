# Junior / Middle JavaScript(TypeScript) fullstack developer

## Описание

JavaScript программист для работы над существующим проектом - ПО для контакт-центров.

У нас есть разные задачи, в которых можно применить знания JS: фронтэнд, бекенд (nodejs), десктопное приложение (Electron),
разработка пользовательских интерфейсов, обработка данных, работа с потоками событий и т.д.

У нас приветствуется изучение и внедрение новых технологий, главное, чтобы это давало практический результат -
улучшение качества кода и/или ускорение работы над новыми фичами.

- Удалённая работа / Полный рабочий день
- ЗП:
  - от 50 до 80 т.р. для junior fullstack developer
  - от 100 до 140 т.р. для middle fullstack developer.

## Требования

### Обязательные на позицию junior fullstack developer
- Опыт работы/обучения: от 1 года
- Начальные знания TypeScript:
  - Types / Interfaces
  - Generics, в том числе встроенные
  - `const enum`, Tuple, Union, `as const`, readonly, etc
- JavaScript / ECMAScript6+:
  - Symbol, BigInt
  - arrow functions
  - async/await, Promise
  - destructuring, rest, spread
  - default parameters, rest parameters
  - Object/Array/Function standard methods
  - `class` (private `#`, `static`, `extends`, `super`)
  - Одно из: React/Vue/Angular + Redux/Vuex/Mobx
  - debounce/throttle
  - рекурсия
  - контекст: в функциях, в методах объекта, в классах
  - область видимости / замыкания
  - `const`, `let`, etc
- Nodejs (базовые знания):
  - npm
  - Одно из: grunt / gulp / webpack / rollup / parcel
  - Работа с fs, http(express)
  - Понимание, что такое Buffer
- Верстка (базовые знания):
  - HTML5
  - CSS3+:
    - Понимание блочной модели и знание значений display 
    - grid, flex
    - Понимание работы и знание значений position 
    - transition/animation
  - Понимание БЭМ или альтернативной структуры CSS-модулей
  - Знание одного из CSS preprocessor: SASS / LESS / Stylus
- Unit-тестирование: вазовое понимание зачем это нужно и как их писать

### Обязательные на позицию middle fullstack developer
- Углублённый опыт работы с одним из СУБД: MongoDB / MySQL / PostgreSQL
- JavaScript / ECMAScript2020+:
  - operators: `??`, `??=`, `?.`, `maybeObj?.["maybeMethod"]?.()`
  - structured clone
  - `pure functions`, функциональное программирование
  - Bitwise operations. Bit flags (Bit Masking)
  - Generators, Iterators, Async Iterators, `for await...of`
  - Streams (Web and Node.js)
  - Опыт работы с интернационализацией в JavaScript. Понимание работы `Intl`. Опыт интернационализации дат и чисел. Понимание `ISO 8601`
  - Binary data. Typed Arrays. DataView
  - Понимание работы с некоторыми методами и классами стандартной библиотеки (чем больше - тем лучше):
`Proxy`/`Reflect`, `AggregateError`, `AbortController` (`AbortSignal`), `fetch` (`Request`, `Headers`), `CSS` (`CSS.supports`, `CSS.registerProperty`),
`TextDecoder`/`TextEncoder`, `URL`, `MediaDevices`/`MediaSource` (and other Media* classes),
`MessageChannel`/`MessagePort`/`BroadcastChannel`, `MutationObserver`, `localStorage`, `performance`, `canvas`, `File API`,
`Fullscreen API`, `History API`
- Опыт работы с NextJS/NestJS
- Опыт работы с WebSocket
- React 18+:
  - Правила создания и выделения функциональных компонентов
  - Hooks (useEffect(), useContext(), useSelector() vs useStore() и другие)
  - css modules
  - list key
  - Понимание стратегии создания Preloader (любая реализация/библиотека)
  - Знание одной из библиотеки компонентов типа `mui`
- Nodejs:
  - EventEmitter, events.once
  - Promisify
  - Работа с сокетами
  - Распараллеливание: Workers, Cluster
  - Опыт работы с `pm2`
  - Понимание работы event-loop
- Углублённые знания TypeScript:
  - Ключевые слова `declare`, `abstract`, `public`, `protected`, `private` и т.д.
  - Понимание концепции `abstract class`
  - Написание собственных Generics
  - Хорошее понимание Generics и умение использовать сторонние коллекции Generics (`type-challenges`, `ts-toolbelt`, `utility-types`, `SimplyTyped`)
  - Понимание tsconfig: что такое "compilerOptions.module", "compilerOptions.target" и другие настройки, влияющие на компиляцию кода в js
  - Понимание, почему нигде и никогда нельзя использовать `any` и какая есть альтернатива этому ключевому слову
  - Авто-вывод типов: где и когда использовать, плюсы и минусы, ограничения
  - Оператор `satisfies` и его отличие от кастования
- Тестирование:
  - Понимание работы `JSDOM`
  - Пирамида тестирования (интеграционные, функциональные, unit и т.д.)
  - Понимание того, как пишутся тесты (тесты - это пример использования кода)
  - Опыт работы с `jest` или аналогичным фреймворком для тестирования
  - Опыт написания или использования готовых Mock'ов
- Желательные требования:
  - Желательный опыт работы с СУБД `ClickHouse`
  - Желательный опыт и понимание работы мультипоточного приложения (`Worker`/`Worklet`), с SharedMemory и `LockManager`
  - Желательный опыт работы с MobX и/или Zustand
  - Плюсом будет знания теории: ООП, IoC, TDD, DDD, CQRS, CORS, REST
  - Плюсом будет знания библиотек: Mongoose, Sequelize
  - Плюсом будет углублённый опыт работы с Rollup и его плагинами

### Тестовые задания

* Кандидату необходимо выполнить набор тестовых заданий.
* Тестовые задания сгруппированы в несколько *.js-файлов.
* Для выполнения заданий кандидату нужно иметь на своём компьютере установленный **nodejs**.  
* Для проверки тестов, достаточно в терминале выполнить команду `node *путь_до_файла_с_тестами*`
* Если какие-то задания будут выполнены неверно, кандидат увидит ошибку в терминале
  **с указанием строки с провалившейся проверкой**
* Структура файлов представляет собой блоки `{}` с отдельными заданиями.
* В заданиях будут содержаться заготовки функций, которые требуется исправить/дополнить кандидату. 
* Перед функцией будет **todo-комментарий** с задачей и, возможно, дополнительными условиями, 
  а после функции будут находиться блоки `{}` с ее вызовом и проверкой результатов с использованием
  nodejs-модуля `assert`.
* Проверки модуля `assert` **удалять нельзя**.
