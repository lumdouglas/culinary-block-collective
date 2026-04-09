import os
from pypdf import PdfReader
import json

def extract_menus(pdf_path):
    reader = PdfReader(pdf_path)
    text = ''
    for page in reader.pages:
        text += page.extract_text() + '\n'
        
    # We can perform more sophisticated extraction here, e.g. using an LLM or regex 
    # to find specific menu items. For now, we will just dump the text.
    with open('extracted_menu.txt', 'w') as f:
        f.write(text)
    print(f"Extracted text to extracted_menu.txt")

if __name__ == '__main__':
    extract_menus('menu proposal culinary block collective .pdf')
