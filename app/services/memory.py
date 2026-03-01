import redis
from app.config import REDIS_HOST, REDIS_PORT

r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT)

def store_history(user_id, message):
    r.rpush(user_id, message)

def get_history(user_id):
    history = r.lrange(user_id, 0, -1)
    return [msg.decode("utf-8") for msg in history]