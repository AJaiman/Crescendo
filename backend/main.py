from fastapi import FastAPI, APIRouter

app = FastAPI()
router = APIRouter()

# Import routes after router is created
from routes import *

app.include_router(router)
