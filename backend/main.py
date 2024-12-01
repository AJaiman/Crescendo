from fastapi import APIRouter, FastAPI


app = FastAPI()
router = APIRouter()

app.include_router(router)
