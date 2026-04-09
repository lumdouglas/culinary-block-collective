import os
import google.generativeai as genai

def generate_loulan_images(api_key):
    genai.configure(api_key=api_key)
    
    print("Preparing to generate images using Gemini's Imagen API...")
    
    prompts = {
        "grilled_cumin_lamb_eggplant.jpg": "A high-end top-down food photography shot of a perfectly centered, authentic round ceramic Asian-style lunch plate on a dark bamboo wooden table. The plate features spicy Grilled Cumin Lamb, savory Stir Fry Green Beans with Eggplant, fresh Cucumber Salad, and steamed White Rice. Elegant presentation with resting chopsticks, warm natural light, food-focused, perfect for a catering website menu presentation. Sharp focus.",
        "sweet_sour_pork_glass_noodles.jpg": "A high-end top-down food photography shot of a perfectly centered, elegant white minimalist lunch plate on a textured linen background. The plate features vibrant Sweet and Sour Pork with pineapple, Stir-fried Cabbage with Glass Noodles, crispy Spring Rolls, and steamed White Rice. Clean and uncluttered, subtle Asian aesthetics, bright natural light, food-focused, perfect for a catering website menu presentation. Sharp focus.",
        "sichuan_spicy_fish_mapo_tofu.jpg": "A high-end top-down food photography shot of a perfectly centered chic round plate on a contrasting dark textured background. The plate features bright Sichuan Spicy Fish in chili oil, rich Mapo Tofu, vibrant Garlic Broccoli, and steamed White Rice. Minimalist composition, bright natural light, food-focused, perfect for a catering website menu presentation. Sharp focus."
    }
    
    try:
        # Note: image generation requires the Imagen model
        model = genai.ImageGenerationModel("imagen-3.0-generate-001")
        for filename, prompt in prompts.items():
            print(f"Generating {filename}...")
            result = model.generate_images(
                prompt=prompt,
                number_of_images=1,
                aspect_ratio="1:1",
                output_mime_type="image/jpeg"
            )
            for i, image in enumerate(result.images):
                with open(filename, 'wb') as f:
                    f.write(image.image.image_bytes)
                print(f"Saved {filename}")
    except Exception as e:
        print(f"Error during generation: {e}")

if __name__ == "__main__":
    api_key = os.environ.get("GEMINI_API_KEY", "YOUR_API_KEY_HERE")
    if api_key != "YOUR_API_KEY_HERE":
        generate_loulan_images(api_key)
    else:
        print("Please set the GEMINI_API_KEY environment variable. Example:")
        print("export GEMINI_API_KEY='your-key-here'")
        print("python3 generate_images.py")
