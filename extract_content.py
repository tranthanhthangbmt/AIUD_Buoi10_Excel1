
import os
import json
import re

try:
    import pypdf
except ImportError:
    print("pypdf not found. Please install it using 'pip install pypdf' or 'pip install pypdf2' if you want to extract text.")
    # Fallback to empty if no library
    print("Skipping extraction due to missing library.")
    exit(0)

source_dir = r"..\\assets\docs\word"
output_file = r"data\\extracted_lessons.json"

lessons = []

def extract_steps(text):
    # This is a heuristic to find steps. 
    # Valid steps often start with "Bước" or numbers like "1.", "2."
    lines = text.split('\n')
    steps = []
    current_step = ""
    
    for line in lines:
        line = line.strip()
        if not line: continue
        
        # Check for step markers
        if re.match(r'^(Bước \d+|Step \d+|\d+\.)', line, re.IGNORECASE):
            if current_step:
                steps.append(current_step)
            current_step = line
        else:
            if current_step:
                current_step += " " + line
            else:
                # content before first step? or just intro
                pass
                
    if current_step:
        steps.append(current_step)
        
    return steps

if not os.path.exists(source_dir):
    print(f"Directory not found: {source_dir}")
    exit(1)

for filename in os.listdir(source_dir):
    if filename.lower().endswith(".pdf"):
        filepath = os.path.join(source_dir, filename)
        print(f"Processing {filename}...")
        
        try:
            reader = pypdf.PdfReader(filepath)
            full_text = ""
            for page in reader.pages:
                full_text += page.extract_text() + "\n"
            
            steps = extract_steps(full_text)
            
            lessons.append({
                "filename": filename,
                "title": filename.replace(".pdf", ""),
                "steps": steps
            })
            
        except Exception as e:
            print(f"Failed to read {filename}: {e}")

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print(f"Extraction complete. Saved to {output_file}")
