app:
	docker compose exec app bash

lint:
	docker compose run --rm app yarn lint

fmt:
	docker compose run --rm app yarn lint:fix &
	docker compose run --rm app yarn format

gqlgen:
	docker compose run --rm app yarn run graphql-codegen --config codegen.yaml