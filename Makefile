app:
	docker compose exec app bash

lint:
	docker compose run --rm app yarn lint

format:
	docker compose run --rm app yarn lint:fix &
	docker compose run --rm app yarn format

gql-gen:
	docker compose run --rm app yarn run graphql-codegen --config codegen.yaml