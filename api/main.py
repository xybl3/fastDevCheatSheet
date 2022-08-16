from fastapi import FastAPI
from utils.database_manager import get_sheet
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/cheats/{language}")
async def say_hello(language: int):

    return {"sheet": get_sheet(language)}
