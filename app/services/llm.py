from groq import Groq
from app.config import settings

client = Groq(api_key=settings.GROQ_API_KEY)

def stream_response(prompt: str):
    stream = client.chat.completions.create(
        model="llama-3.3-70b-versatile",  # update if needed
        messages=[
            {"role": "system", "content": "You are a helpful AI assistant."},
            {"role": "user", "content": prompt}
        ],
        stream=True
    )

    for chunk in stream:
        if chunk.choices[0].delta.content:
            yield chunk.choices[0].delta.content