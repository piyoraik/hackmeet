build:
	@docker compose build

up:
	@docker compose up -d

down:
	@docker compose down

## TypeORM Operation
migration.sync:
	@yarn typeorm schema:sync

migration.drop:
	@yarn typeorm schema:drop

migration:
	@yarn typeorm migration:run

migration.gen:
	@yarn typeorm migration:generate -n $(name)

migration.rollback:
	@yarn typeorm migration:revert

migration.seed:
	@yarn seed:run