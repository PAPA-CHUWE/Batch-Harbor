FROM python:3.11-slim
WORKDIR /app
COPY pyproject.toml uv.lock ./
RUN pip install uv && uv sync --frozen --no-dev
COPY pipelines ./pipelines
COPY packages/core ./packages/core
COPY packages/llm ./packages/llm
CMD ["uv", "run", "dagster", "dev", "-f", "pipelines/src/batch_harbor_pipeline/definitions.py"]
