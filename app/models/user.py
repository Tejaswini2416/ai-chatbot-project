from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String(100), primary_key=True)
    email = Column(String(100), unique=True)
    password = Column(String(200))

    conversations = relationship("Conversation", back_populates="user")