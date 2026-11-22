from logging.config import fileConfig
from alembic import context

config = context.config
fileConfig(config.config_file_name)

target_metadata = None

def run_migrations_offline():
    context.configure(url=config.get_main_option("sqlalchemy.url"))
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online():
    connectable = context.config.attributes.get("connection")
    with connectable.connect() as connection:
        context.configure(connection=connection)
        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
