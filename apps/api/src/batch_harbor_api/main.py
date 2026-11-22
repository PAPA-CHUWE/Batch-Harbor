from fastapi import FastAPI

from .routes import feeds, mappings, runs, catalogue

app = FastAPI(title="DataRelay API")

app.include_router(feeds.router, prefix="/feeds", tags=["feeds"])
app.include_router(mappings.router, prefix="/mappings", tags=["mappings"])
app.include_router(runs.router, prefix="/runs", tags=["runs"])
app.include_router(catalogue.router, prefix="/catalogue", tags=["catalogue"])

@app.get("/health")
def health():
    return {"status": "ok"}
