from flask import Flask, jsonify
from flask_cors import CORS
import os
from supabase import create_client, Client
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow frontend (Vercel) to access this API

# Initialize Supabase client
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Test API Route
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Flask API is running!"})

# API Route to Fetch Projects from Supabase
@app.route("/comments", methods=["GET"])
def get_comments():
    response = supabase.table("comments").select("*").execute()
    return jsonify(response.data)

if __name__ == "__main__":
    app.run(debug=True)
