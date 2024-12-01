from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://AmoghSatish:Hackathon2024@crescendo.qnlll.mongodb.net/?retryWrites=true&w=majority&appName=Crescendo"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client.crescendo_db

users_collection = db['users']
