from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from app.database import SessionLocal
from app.models.user import User
from app.services.auth import hash_password, verify_password, create_token

router = APIRouter()

class AuthRequest(BaseModel):
    email: EmailStr
    password: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(request: AuthRequest, db: Session = Depends(get_db)):
    user = User(
        id=request.email,
        email=request.email,
        password=hash_password(request.password)
    )
    db.add(user)
    db.commit()
    return {"message": "User registered"}

@router.post("/login")
def login(request: AuthRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == request.email).first()

    if not user or not verify_password(request.password, user.password):
        return {"error": "Invalid credentials"}

    token = create_token({"sub": user.email})
    return {"access_token": token}