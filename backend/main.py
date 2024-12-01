from fastapi import APIRouter, FastAPI
from routes import router

app = FastAPI()
router = APIRouter()

app.include_router(router)
