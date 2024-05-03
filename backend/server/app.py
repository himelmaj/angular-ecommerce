from fastapi import FastAPI
from server.routes import router
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.environ['FRONTEND_URL'],  
    allow_headers=['*']
)

app.include_router(router)
