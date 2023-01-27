## Build Instructions:

- ``git clone https://github.com/djake1680/quaver-challenge.git`` <br />
- ``cd quaver-challenge`` to get into directory 
- ``npm install``
- ``composer install``
- Copy .env.example file and create new .env file from it
  - Set following variables: (normally this step would be to get ENV variables from a dev, but these are just the basic settings for Laraval using Sail)
    - DB_CONNECTION=mysql \
      DB_HOST=mysql \
      DB_PORT=3306 \
      DB_DATABASE=quaver_challenge \
      DB_USERNAME=sail \
      DB_PASSWORD=password
- ``./vendor/bin/sail artisan key:generate``
- ``npm run dev``
- ``./vendor/bin/sail up``
- ``./vendor/bin/sail artisan migrate``
