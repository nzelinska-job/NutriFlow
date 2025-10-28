# 🚀 NutriFlow - Quick Start for Hackathon

## 📁 Project Structure

```
__NutriFlow/
├── 📄 README.md                    # Main project documentation
├── 📄 .env.example                 # API key template
├── 📄 .gitignore                   # Git ignore rules
│
├── 📂 src/
│   └── 📄 index.html               # Main app (single-page, 2365 lines)
│
├── 📂 config/
│   └── 📄 config.js                # Configuration (API keys, settings)
│
├── 📂 docs/
│   └── 📄 SETUP.md                 # Detailed setup instructions
│
├── 📂 presentation/
│   ├── 📄 README.md                # Presentation materials guide
│   └── 📄 demo-script.md           # 3-minute demo script
│
└── 📂 assets/
    ├── 📂 images/                  # Screenshots, logos
    └── 📂 videos/                  # Demo videos
```

---

## ⚡ Quick Start (2 Minutes)

### Option 1: Demo Mode (No Setup)

```bash
# 1. Navigate to project
cd __NutriFlow/src

# 2. Open in browser
open index.html

# Or use Python server
python3 -m http.server 8000
# Visit: http://localhost:8000
```

**Features available:**
- ✅ Full UI/UX
- ✅ Smart demo (filename-based recognition)
- ✅ All visualizations
- ✅ Perfect for presentation
- ❌ No real AI

---

### Option 2: With Real AI (5 Minutes)

**Step 1: Get API Key**
- Visit: https://huggingface.co/settings/tokens
- Create "Write" token (NOT Read)
- Copy token (starts with `hf_...`)

**Step 2: Configure**
```bash
# Edit config file
nano config/config.js

# Line 6: Replace 'hf_demo' with your key
HUGGINGFACE_API_KEY: 'hf_YOUR_KEY_HERE',

# Save: Ctrl+O, Enter, Ctrl+X
```

**Step 3: Run**
```bash
cd src
open index.html

# Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
```

**Step 4: Test**
- Open Console (F12)
- Upload food photo
- See: `📡 Response status: 200 OK ✅`

---

## 🎯 Key Features

### 1. AI Food Recognition
- **Model:** nateraw/food (Food-101)
- **Accuracy:** 85% (top-1), 96% (top-5)
- **Speed:** <2 seconds
- **Categories:** 101 food types

### 2. Health Insights
- Sleep vs Sugar correlation
- Stress vs Carbs vs Weight patterns
- Weight fluctuations analysis
- Actionable recommendations

### 3. Cycle Synchronization
- 28-day meal planning
- Supplement timing optimization
- Phase-specific nutrition
- Exercise recommendations

---

## 📊 Technical Details

### Stack
- **Frontend:** Pure HTML/CSS/JavaScript
- **AI:** HuggingFace Inference Providers API
- **Model:** nateraw/food (ViT architecture)
- **API:** router.huggingface.co/hf-inference

### API Integration
```javascript
// In src/index.html (line ~1940)
const HF_MODEL = window.NUTRIFLOW_CONFIG?.MODEL_NAME || 'nateraw/food';
const HF_API_KEY = window.NUTRIFLOW_CONFIG?.HUGGINGFACE_API_KEY || 'hf_demo';
```

### Configuration
```javascript
// In config/config.js
const CONFIG = {
    HUGGINGFACE_API_KEY: 'hf_demo',  // ← Replace this
    MODEL_NAME: 'nateraw/food',
    API_BASE_URL: 'https://router.huggingface.co/hf-inference',
    DEMO_MODE: true,
    FALLBACK_ENABLED: true
};
```

---

## 🎬 Demo Instructions

### Preparation
1. **Test internet** connection
2. **Prepare 3 food photos** with clear names:
   - `breakfast.jpg` → 🥚 Eggs + 🍞 Toast + 🥑 Avocado
   - `lunch.jpg` → 🍗 Chicken + 🥗 Salad
   - `dinner.jpg` → 🍝 Pasta + 🍅 Sauce

3. **Open app** in fresh browser tab
4. **Open Console** (F12) to show logs
5. **Practice** demo 10 times

### Demo Flow (3 minutes)

**[0:00-0:30] Introduction**
- "Hi, I'm [Name] from [Team]"
- "NutriFlow solves a $50B problem..."

**[0:30-1:30] AI Food Recognition**
- Click "Personalized Meal Plans"
- Upload photo
- Show recognition
- Confirm & log

**[1:30-2:30] Health Insights**
- Show Sleep vs Sugar graph
- Show Stress/Carbs/Weight correlation
- Point out key findings

**[2:30-3:00] Cycle Planning**
- Show 28-day calendar
- Explain phase-specific nutrition
- Close with impact statement

---

## 🐛 Troubleshooting

### "Still using hf_demo"
**Console shows:** `API Key: Demo Mode`

**Fix:**
```bash
# Check config.js line 6
cat config/config.js | grep -A 1 "HUGGINGFACE_API_KEY"

# Should show your key, not 'hf_demo'
# If wrong, edit and save:
nano config/config.js

# Then hard refresh browser
```

### "401 Unauthorized"
**Console shows:** `Response status: 401`

**Fix:**
- Your key is wrong or expired
- Create new Write token
- Update config.js

### "403 Forbidden"
**Console shows:** `insufficient permissions`

**Fix:**
- Your token is "Read" type
- Need "Write" type
- Delete token, create new one with Write

### "Always shows same food"
**Recognition shows:** Avocado + Toast + Eggs every time

**Fix:**
- Still in demo mode
- API key not loading
- Clear cache and hard refresh

---

## 📝 Files to Modify

### Must Edit (if using real AI):
1. **config/config.js** - Add your API key

### Optional:
2. **README.md** - Add team info, links
3. **presentation/** - Add pitch deck, video

### Do NOT Edit:
- **src/index.html** - Unless you know what you're doing
- **.gitignore** - Already configured
- **.env.example** - It's a template

---

## 🔒 Security

**Before committing to Git:**

```bash
# Make sure these are in .gitignore
echo ".env" >> .gitignore
echo "config/config.js.local" >> .gitignore

# If you accidentally committed API key:
git rm --cached config/config.js
git commit -m "Remove API key"
```

**For hackathon demo:**
- Use temporary API key
- Delete key after event
- Or use demo mode only

---

## ✅ Pre-Demo Checklist

**30 minutes before:**
- [ ] Test internet connection
- [ ] Open app in browser
- [ ] Test with sample photos
- [ ] Open Console (F12)
- [ ] Close unnecessary tabs
- [ ] Set zoom to 100%
- [ ] Test all interactive elements
- [ ] Have backup video ready

**5 minutes before:**
- [ ] Deep breath
- [ ] Smile
- [ ] Review key points
- [ ] Check time limit
- [ ] Prepare for Q&A

---

## 🎯 Key Metrics to Mention

- **85%** food recognition accuracy
- **<2 seconds** processing time
- **101** food categories
- **800M** target users globally
- **$60B** supplement market
- **5x** more likely to lose weight with good sleep

---

## 📞 Need Help?

**During Setup:**
1. Read `docs/SETUP.md` (detailed instructions)
2. Check Console (F12) for errors
3. Try demo mode if stuck
4. Ask your team

**During Presentation:**
1. Stay calm
2. Use demo mode as backup
3. Show passion and enthusiasm
4. Judges want you to succeed!

---

## 🚀 Quick Commands

```bash
# Start server
cd __NutriFlow/src
python3 -m http.server 8000

# Edit config
nano config/config.js

# Check structure
ls -R

# Open in browser
open http://localhost:8000

# View logs (open in browser)
# Press F12 → Console tab
```

---

## 📖 Documentation

- **Main README:** [README.md](README.md)
- **Setup Guide:** [docs/SETUP.md](docs/SETUP.md)
- **Demo Script:** [presentation/demo-script.md](presentation/demo-script.md)
- **Presentation Guide:** [presentation/README.md](presentation/README.md)

---

## 💜 Good Luck!

**Remember:**
- ✅ Demo mode is totally fine
- ✅ Passion > perfection
- ✅ Judges want to see impact
- ✅ Have fun!

**You've got this!** 🚀

---

**Project by:** Nataliia Zelinska
**Hackathon:** https://www.kaggle.com/competitions/empowering-female-founders-in-ai-and-big-data/overview
**Date:** 25.10.2025  
**Category:** Health & Wellness / AI Innovation
