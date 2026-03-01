from deep_translator import GoogleTranslator
from langdetect import detect

def translate_to_english(text):
    lang = detect(text)
    translated = GoogleTranslator(source='auto', target='en').translate(text)
    return translated, lang

def translate_back(text, lang):
    return GoogleTranslator(source='en', target=lang).translate(text)