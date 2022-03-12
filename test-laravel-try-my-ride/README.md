# API simple authentication

Esta API se desarrolló en laravel y laravel sanctum, sqlite. Genera un token de autenticación cuando se registra e inicia sesión un nuevo usuario

## Installación

Para correr el proyecto es necesario tener instalado PHP, laravel, laravel sanctum, sqlite.

Si no está instalado sqlite 
```bash
  sudo apt install php-sqlite3
```
Comandos para instalar el proyecto
```bash
  composer install
  npm install
  cp .env.example .env
  php artisan key:generate
```

Crear una base de datos vacia de nombre dabase.sqlite en el foder database. Revisar que las variables de base de datos sean las correctas en el archivo .env.


```bash
    echo database/datasbase.sqlite
    php artisan migrate
    php artisan serve
```


    

