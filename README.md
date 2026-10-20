# 🌸 20.10 Vietnamese Women's Day — Interactive Glowing Experience

A single-page web application celebrating **Vietnamese Women's Day (20/10)**. This project combines a **dreamy pastel pink base** with **vibrant glowing neon pink and purple accents**, built with modern glassmorphism, 60fps canvas particle simulations, and 3D interactions.

---

## ✨ Key Features & Highlights

### 1. 🎨 Luminous Pastel Meets Electric Neon & Smooth 120FPS UI
- **High-Contrast, Ultra-Readable Typography:** The letter card and quote cards feature pure, crisp white surfaces (`rgba(255, 255, 255, 0.97)`) paired with deep velvet plum (`#380727`) and rich readable plum-black (`#23061A`) text — completely eliminating washed-out pink-on-pink contrast issues.
- **Buttery-Smooth Scrolling:** Removed `background-attachment: fixed` and heavy runtime blur sampling; moved background gradients to a dedicated fixed GPU layer (`.fixed-bg`), ensuring 60fps/120fps stutter-free scroll performance.
- **Fast Petal Dispersal:** Rose petals burst outward and fade away swiftly (~1s), clearing the screen quickly for the letter card.
- **Streamlined Single-Action Flow:**
  - Centerpiece letter card features a clean, single **"Đóng Thư (Close)"** button.
  - Quote generator showcases clean category themes (e.g. `🌸 Nội Lực Vượt Bậc`) without distracting index numbers.
  - Distracting copy buttons and dedication bars removed for a focused, magical experience.

### 2. 💖 Sparse Falling Hearts Background (Canvas 60fps)
- An HTML5 Canvas particle system rendering a delicate, gentle "rain" of glowing hearts.
- **Density Control:** Strictly **sparse and delicate** (only 15–25 hearts on screen at any time) to keep the layout clean, elegant, and uncluttered.
- **Motion:** Slow vertical drift, smooth sinusoidal horizontal sway, and soft opacity breathing.

### 3. ✉️ Centerpiece: Interactive Envelope, Blooming Rose & Letter
- **Interactive Envelope:** 3D satin-textured envelope with a pulsating neon wax seal and an inviting *"Click to Open"* cue.
- **The Magic Sequence:**
  1. **Flap Opens:** The top flap smoothly folds back in 3D perspective (`rotateX(180deg)`).
  2. **Rose Rises & Blooms:** A radiant glowing rose rises out of the pocket and blooms into full glory.
  3. **Petal Splitting & Wind Physics:** The rose disperses into 38+ individual glowing petals that burst outward, flutter in 3D across the screen with wind-like physics, and slowly fade into the air.
  4. **Frosted-Glass Letter Card:** Expands into full view presenting the heartfelt English message celebrating the grace, resilience, and strength of Vietnamese women.
  5. **Action:** A single, clean **"Đóng Thư (Close)"** button to fold the letter back into the envelope.

### 4. 🌟 "Spark of Empowerment" Random Vietnamese Quote Generator
- **Crystal Capsule Design:** Glowing neon-bordered high-contrast card.
- **Magic Button:** Shimmering neon pink-to-purple gradient button: *"✨ Gửi Ngàn Lời Chúc Yêu Thương ✨"*.
- **Click Transition:** Magical sparkle burst of stars & stardust radiating from the click location.
- **Smart Non-Repeating Logic:** Every click displays an inspiring quote and is guaranteed to **never repeat the exact same quote twice in a row**.
- **Quote Library (25 Total):**
  - Includes all 10 user-requested core quotes.
  - Plus 15 additional non-romantic, deeply empowering quotes celebrating intellect, independence, ambition, courage, resilience, and self-love.

### 5. 🎶 Web Audio Synthesizer (Zero External Dependencies)
- Pure code-generated chimes, celesta bloom arpeggios, and sparkle burst sound effects using the standard Web Audio API.
- No external `.mp3` or `.wav` files required (0% risk of 404 broken audio links).
- Floating sound toggle button (`🔔 / 🔕`) with full user control.

---

## 🚀 How to Run

Simply open `index.html` in any modern web browser:

```bash
# Option 1: Double-click index.html or open via command line:
start index.html

# Option 2: Run a quick local Python server:
python -m http.server 8080
# Then open http://localhost:8080 in your browser
```

---

## 📁 File Structure

```
d:/HCMUT/2010/
├── index.html        # Semantic HTML5 layout, SVG rose & envelope structure
├── style.css         # Glassmorphism, 3D envelope folds, neon glows, responsive styles
├── script.js         # Canvas engines (falling hearts, bursting petals), quote generator & sound synth
└── README.md         # Project documentation
```

