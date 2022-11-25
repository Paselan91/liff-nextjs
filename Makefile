app:
	docker compose exec app bash

lint:
	docker compose run --rm app yarn lint

typecheck:
	docker compose run --rm app yarn typecheck

fmt:
	docker compose run --rm app yarn lint:fix &
	docker compose run --rm app yarn format &
	docker compose run --rm app yarn typecheck

gqlgen:
	docker compose run --rm app yarn run graphql-codegen --config codegen.yaml