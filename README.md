# Домашнее задание №2 к лекции «hooks, Context API»

[![Build status](https://ci.appveyor.com/api/projects/status/fl6nkxlkfi2sp11o?svg=true)](https://ci.appveyor.com/project/yuriyvyatkin/ra-hw-8-2-use-json-fetch-frontend)

[Ссылка на Github Pages](https://yuriyvyatkin.github.io/ra-hw-8.2-use-json-fetch-frontend/)

useJsonFetch
===

Реализуйте кастомный хук `useJsonFetch`, который позволяет с помощью `fetch` осуществлять HTTP-запросы.

Использование этого хука должно выглядеть следующим образом:
```javascript
const [data, loading, error] = useJsonFetch(url, opts);
```

где:
* `data` - данные, полученные после `response.json()` (не Promise, а именно данные)
* `error` - ошибка (ошибка сети, ошибка ответа - если код не 20x, ошибка парсинга - если пришёл не JSON)
* `loading` - boolean флаг, сигнализирующий о том, что загрузка идёт

Покажите использование этого хука на примере трёх компонентов, каждый из которых делает запросы на следующие адреса (backend возьмите из каталога `backend`):
* GET http://localhost:7070/data - успешное получение данных
* GET http://localhost:7070/error - получение 500 ошибки
* GET http://localhost:7070/loading - индикатор загрузки
