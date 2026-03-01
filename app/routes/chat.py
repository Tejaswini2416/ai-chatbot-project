from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔑 Make sure this exists in .env
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

client = Groq(api_key=GROQ_API_KEY)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def home():
    return {"message": "Backend running"}

@app.post("/chat")
def chat(request: ChatRequest):
    try:
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",  # 🔥 Use this model
            messages=[
                {"role": "user", "content": request.message}
            ]
        )

        return {
            "response": response.choices[0].message.content
        }

    except Exception as e:
        return {"response": f"Error: {str(e)}"}