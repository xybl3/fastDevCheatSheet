from fastapi import FastAPI
from utils.database_manager import get_sheet
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/cheats/{language}")
async def say_hello(language: int):

    return {"sheet": get_sheet(language)}
