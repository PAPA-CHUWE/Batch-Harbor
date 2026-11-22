.PHONY: setup migrate demo test lint

setup:
	uv sync
	cd apps/web && npm install

migrate:
	cd database && alembic upgrade head

demo:
	@echo "Starting DataRelay demo..."
	docker compose up -d
	@echo "API: http://localhost:8000"
	@echo "Web: http://localhost:3000"

test:
	uv run pytest tests/
	cd apps/web && npm run lint

lint:
	uv run ruff check .
	cd apps/web && npm run lint
