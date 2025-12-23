
import pypdf
import os

pdf_path = r"..\assets\docs\word\slide word_Buổi 1.pdf"

keywords = {
    "Bài 1": ["font", "định dạng văn bản", "paragraph", "highlight"],
    "Bài 2": ["table", "bảng", "trộn ô", "merge", "border"],
    "Bài 3": ["tab", "leader", "thập phân", "decimal"],
    "Bài 4": ["column", "cột báo", "drop cap", "break", "ngắt"]
}

if not os.path.exists(pdf_path):
    print("PDF not found")
    exit()

reader = pypdf.PdfReader(pdf_path)
print(f"Total pages: {len(reader.pages)}")

for i, page in enumerate(reader.pages):
    text = page.extract_text().lower()
    found = []
    for key, terms in keywords.items():
        for term in terms:
            if term in text:
                found.append(key)
                break 
    if found:
        print(f"Page {i+1}: {found}")
