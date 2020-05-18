##### Cоздайте пустую папку
##### Скопируйте путь к папке 
##### Откройте консоль и наберите в консоли ```cd path to the created folder```
---
##### Чтобы скачать с гитхаба проект запускаем команду
##### ```git clone https://github.com/Arsu14/greet-go-arsu.git```
---
### Сначала запускаем сервер
##### Захоим в папку ```arsu-greetgo```
##### Запускаем команду ```mvn install```
##### Захоим в папку ```cd target```
##### Запускаем команду ```java -jar arsu-greetgo-0.0.1-SNAPSHOT.jar```
---
### Теперь запускаем клиента
##### Открываем новую консоль
##### Заходим в папку ```arsu-greetgo\src\main\webapp\angular2```
##### Запускаем команду ```ng serve```
##### Ждем , когда запуститься сервер. После запуска сервера , заходим в браузера по адресу: ```http://localhost:4200/```
---
##### Вы увидите форму для авторизации: login(arsu) , password(123)
##### Aвторизации работает без запроса БД
##### После в navbar-е увидите кнопку List и Add
---
### Add 
##### Нажмите на add откроется форма после заполнении формы нажмите на Add запрос пойдет в ДБ
##### Есть проблема с динамическим отображением (нужна обновить страницу) это только когда добавляется первый student
---
##### Наберите в браузере ```http://localhost:9096/h2-console``` вы можете увидеть изменения в базы данных
---
### Delete
##### Нажмите на  кнопку Delete. Так же как и добавить есть проблема , нужна обновить эх.
##### Изначально в базе при запуске всегда будет один студент , после завершения бд очищается
---
### Минусы 
##### Когда приходит запрос на серверную есть проблема с http ответом
##### Проблема с авторизации.
---
##### В этом проекте была много что нового (angular, MyBatis , H2)
