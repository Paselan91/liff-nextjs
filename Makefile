app:
	docker compose exec app bash

lint:
	docker compose run --rm app yarn lint

fix:
	docker compose run --rm app yarn lint:fix
