from fastapi import FastAPI, APIRouter

app = FastAPI()
router = APIRouter()

# Import routes after router is created
from routes import *  # This should be at the bottom

app.include_router(router)
