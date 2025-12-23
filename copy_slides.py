
import os
import shutil

# Use raw strings for Windows paths
base_path = r"d:\DongAUniversity\TÀI LIỆU DẠY HỌC_2024-2025\CNTT.2025. TriTueNhanTaoUngDung_3TC\Các buổi học\Buổi 6\Thực hành\webThucHanhBuoi6_Word_B1_B4"
source_dir = os.path.join(base_path, "assets/slides", "slide word_Buổi 1")
dest_dir = os.path.join(base_path, "website", "assets", "slides")

print(f"Base path: {base_path}")
print(f"Source: {source_dir}")
print(f"Dest: {dest_dir}")

try:
    if not os.path.exists(dest_dir):
        print("Creating destination directory...")
        os.makedirs(dest_dir)
        print("Created.")
    else:
        print("Destination directory exists.")

    count = 0
    if not os.path.exists(source_dir):
        print("Error: Source directory does not exist!")
        files = []
    else:
        files = os.listdir(source_dir)

    for filename in files:
        if filename.lower().endswith(".png"):
            try:
                parts = filename.replace(".png", "").split("_")
                number = parts[-1]
                new_filename = f"slide_{number}.png"
                
                src_path = os.path.join(source_dir, filename)
                dst_path = os.path.join(dest_dir, new_filename)
                
                shutil.copy2(src_path, dst_path)
                # print(f"Copied {filename} -> {new_filename}")
                count += 1
            except Exception as e:
                print(f"Error copying {filename}: {e}")

    print(f"Finished copying {count} files.")

except Exception as e:
    print(f"An error occurred: {e}")
