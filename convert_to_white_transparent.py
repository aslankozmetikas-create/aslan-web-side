import subprocess

def process_image(input_png, raw_in, raw_out, w, h):
    print(f"Converting {input_png} to raw RGBA...")
    subprocess.run(["convert", input_png, f"rgba:{raw_in}"], check=True)
    
    with open(raw_in, "rb") as f:
        data = f.read()
        
    out_data = bytearray(w * h * 4)
    
    for i in range(0, len(data), 4):
        r, g, b, a = data[i], data[i+1], data[i+2], data[i+3]
        
        # Calculate luminance (grayscale)
        # Using the standard luminance formula
        gray = 0.299 * r + 0.587 * g + 0.114 * b
        
        # We want to map:
        # gray >= 245 -> alpha = 0 (completely transparent)
        # gray <= 150 -> alpha = 255 (completely opaque)
        # 150 < gray < 245 -> smooth interpolation
        if gray >= 245:
            alpha = 0
        elif gray <= 150:
            alpha = 255
        else:
            # Linear interpolation
            alpha = int((245 - gray) / (245 - 150) * 255)
            
        # Set output pixel to pure white with the calculated alpha
        out_data[i] = 255     # R
        out_data[i+1] = 255   # G
        out_data[i+2] = 255   # B
        out_data[i+3] = alpha # A
        
    with open(raw_out, "wb") as f:
        f.write(out_data)
        
    # Convert raw RGBA back to PNG
    output_png = input_png.replace(".png", "_white_transparent.png")
    print(f"Converting raw back to PNG: {output_png}...")
    subprocess.run(["convert", "-size", f"{w}x{h}", "-depth", "8", f"rgba:{raw_out}", output_png], check=True)
    print(f"Successfully created {output_png}!")
    return output_png

def main():
    # Process Lion: 458x459
    process_image("public/lion.png", "lion_rgba.raw", "lion_out.raw", 458, 459)
    
    # Process ASLAN Text: 1117x921
    process_image("public/aslan_text.png", "aslan_text_rgba.raw", "aslan_text_out.raw", 1117, 921)

if __name__ == "__main__":
    main()
