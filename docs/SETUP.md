# 🔧 NutriFlow Setup Guide

Complete setup instructions for judges, developers, and users.

## 📋 Table of Contents

1. [Quick Start (2 minutes)](#quick-start)
2. [Demo Mode](#demo-mode)
3. [Full Setup with AI](#full-setup)
4. [Troubleshooting](#troubleshooting)
5. [Configuration Options](#configuration)

---

## ⚡ Quick Start (2 minutes)

### Option 1: Demo Mode (No Setup Required)

```bash
# 1. Open the project
cd __NutriFlow

# 2. Open in browser
open src/index.html

# Or use Python
python3 -m http.server 8000
# Navigate to: http://localhost:8000/src/
```

**Demo mode features:**
- ✅ Full UI/UX experience
- ✅ Smart filename-based food detection
- ✅ All visualizations work
- ✅ Perfect for presentation
- ❌ No real AI (uses intelligent fallback)

---

## 🎭 Demo Mode

Demo mode automatically recognizes food from filenames:

| Filename | Recognized Food |
|----------|----------------|
| `pizza.jpg` | 🍕 Pizza + 🧀 Cheese + 🍅 Tomato |
| `chicken-salad.jpg` | 🍗 Chicken + 🥗 Salad + 🫒 Oil |
| `burger.jpg` | 🍔 Burger + 🍟 Fries |
| `pasta.jpg` | 🍝 Pasta + 🍅 Sauce + 🧀 Parmesan |
| `breakfast.jpg` | 🥚 Eggs + 🍞 Toast + 🥑 Avocado |
| `sushi.jpg` | 🍣 Sushi + 🐟 Salmon |
| Any other | 🥑 Avocado + 🍞 Toast + 🥚 Eggs |

**Perfect for:**
- ✅ Hackathon presentations
- ✅ Quick demos
- ✅ Testing UI
- ✅ When API is unavailable

---

## 🤖 Full Setup with AI

### Step 1: Get HuggingFace API Key

1. **Create Account**
   - Go to: https://huggingface.co/join
   - Sign up (free)

2. **Create Token**
   - Go to: https://huggingface.co/settings/tokens
   - Click "Create new token"
   - **IMPORTANT:** Select "Write" type (NOT Read)
   - Name: `__NutriFlow`
   - Click "Generate"

3. **Copy Token**
   ```
   hf_aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890
   ```
   ⚠️ Save it! You won't see it again.

### Step 2: Configure

**Method A: Edit config.js (Recommended)**

```bash
# Open config file
nano config/config.js

# Find line 6:
HUGGINGFACE_API_KEY: 'hf_demo',

# Replace with your key:
HUGGINGFACE_API_KEY: 'hf_aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890',

# Save: Ctrl+O, Enter, Ctrl+X
```

**Method B: Use .env file**

```bash
# Copy template
cp .env.example .env

# Edit
nano .env

# Replace:
HUGGINGFACE_API_KEY=hf_demo

# With:
HUGGINGFACE_API_KEY=hf_aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890

# Save
```

### Step 3: Test

1. **Hard Refresh Browser**
   - Windows: `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Open Console**
   - Press `F12`
   - Go to "Console" tab

3. **Upload Food Photo**
   - Click "🍽️ Personalized Meal Plans"
   - Upload real food photo (NOT named pizza.jpg)

4. **Verify Success**
   ```javascript
   // Should see in console:
   🔧 NutriFlow Configuration Loaded:
     Model: nateraw/food
     API Key: Custom Key Provided  ← Good!
     API Base: https://router.huggingface.co/hf-inference
   
   📤 Sending to Hugging Face API...
   📡 Response status: 200  ← Success!
   ✅ AI Results: [...]
   ```

---

## 🐛 Troubleshooting

### Issue 1: "Demo Key" in Console

**Problem:**
```
API Key: Demo Mode  ← Still using demo!
```

**Solution:**
1. Check `config/config.js` line 6
2. Ensure you replaced `'hf_demo'` with your key
3. Ensure your key starts with `hf_`
4. Hard refresh: `Ctrl+F5`

### Issue 2: 401 Unauthorized

**Problem:**
```
📡 Response status: 401
```

**Solution:**
1. Your API key is wrong or expired
2. Get new key: https://huggingface.co/settings/tokens
3. Make sure it's NOT a Read token (must be Write)

### Issue 3: 403 Forbidden

**Problem:**
```
📡 Response status: 403
x-error-message: insufficient permissions
```

**Solution:**
Your token is "Read" type. Need "Write" type!

1. Delete old token
2. Create new token with "Write" type
3. Update config.js

### Issue 4: Always Shows Same Food

**Problem:**
Uploads different photos but always recognizes as avocado + toast

**Solution:**
Still in demo mode!
1. Check console: Should say "Custom Key Provided"
2. If says "Demo Mode", API key not loaded
3. Clear cache: `Ctrl+Shift+Delete` → Clear cache
4. Hard refresh

### Issue 5: 503 Model Loading

**Problem:**
```
📡 Response status: 503
Model is loading, estimated_time: 20
```

**Solution:**
First request loads model. Wait 20 seconds and try again.

### Issue 6: Config Not Loading

**Problem:**
Console shows errors about CONFIG

**Solution:**
1. Check file path: `config/config.js`
2. Make sure you're running from correct directory
3. Use local server instead of file://
   ```bash
   python3 -m http.server 8000
   cd __NutriFlow
   ```

---

## ⚙️ Configuration Options

### config/config.js

```javascript
const CONFIG = {
    // API Key (Required for real AI)
    HUGGINGFACE_API_KEY: 'hf_YOUR_KEY',
    
    // Model Selection
    MODEL_NAME: 'nateraw/food', // Can change to other models
    
    // API Endpoint
    API_BASE_URL: 'https://router.huggingface.co/hf-inference',
    
    // Demo Mode
    DEMO_MODE: true, // Auto-set based on API key
    FALLBACK_ENABLED: true, // Keep enabled for safety
    
    // Features
    FEATURES: {
        AI_FOOD_RECOGNITION: true,  // Toggle food recognition
        MEAL_PLANNING: true,         // Toggle meal plans
        HEALTH_INSIGHTS: true,       // Toggle insights
        CYCLE_TRACKING: true         // Toggle cycle features
    }
};
```

### Alternative Models

Want to try different models?

```javascript
// In config.js, change MODEL_NAME:

// Current (Food-specific)
MODEL_NAME: 'nateraw/food'

// Alternative (General vision)
MODEL_NAME: 'google/vit-base-patch16-224-in21k'

// Alternative (ResNet)
MODEL_NAME: 'microsoft/resnet-50'
```

---

## 🎬 Presentation Tips

### For Judges

1. **Start with Demo Mode**
   - Shows full features without setup
   - Reliable for presentations
   - Upload photos with clear names

2. **Show Real AI (if setup)**
   - Open Console (F12) first
   - Show "Custom Key Provided"
   - Upload generic photo (food.jpg)
   - Point out different results vs demo

3. **Highlight Fallback**
   - "Even if API fails, app continues working"
   - Show seamless transition

### Demo Script

```
1. "Let me show you NutriFlow..."
2. Click "Personalized Meal Plans"
3. "Here's my breakfast - avocado toast with eggs"
4. Upload photo (breakfast.jpg)
5. "AI recognizes the food in under 2 seconds..."
6. Show recognition: 🥑 Avocado, 🍞 Toast, 🥚 Eggs
7. "I can edit portions if needed..."
8. Click "Confirm & Log"
9. "And it's logged to my daily nutrition!"
10. "Now let me show you insights..."
```

---

## 📱 Mobile Testing

```bash
# Find your local IP
ifconfig | grep "inet "

# Start server
python3 -m http.server 8000

# On phone, visit:
http://YOUR_IP:8000/src/

# Example:
http://192.168.1.100:8000/src/
```

---

## 🔐 Security Notes

**DO NOT commit API keys to Git!**

```bash
# Already in .gitignore:
.env
config/config.js  # If contains real key

# To remove from history if accidentally committed:
git rm --cached config/config.js
git commit -m "Remove API key"
```

**For demo:**
- ✅ Use demo mode
- ✅ Or use temporary token
- ✅ Delete token after hackathon

---

## ✅ Pre-Presentation Checklist

- [ ] Test app in demo mode
- [ ] Prepare 2-3 sample food photos with clear names
- [ ] Open Console (F12) for live debugging
- [ ] Test on both desktop and mobile
- [ ] Prepare backup demo video
- [ ] Check internet connection
- [ ] Have config.js backup with working key
- [ ] Test all interactive elements
- [ ] Rehearse demo script
- [ ] Time demo (should be <3 minutes)

---

## 🚀 Quick Commands

```bash
# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000/src/

# Edit config
nano config/config.js

# Check config
cat config/config.js | grep API_KEY

# View logs
# Open browser → F12 → Console
```

---

## 📞 Support

**During Hackathon:**
- Check Console (F12) first
- Read error messages carefully
- Try demo mode if stuck
- Ask team for help

**After Hackathon:**
- GitHub Issues
- Email: zelinska.nataliia.job@gmail.com
- Documentation: See docs/

---

**Requirements:** Modern browser, optional HF key

Good luck! 🚀
