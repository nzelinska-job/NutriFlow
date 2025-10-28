# 🌊 NutriFlow - AI-Powered Nutrition Intelligence for Women

> **Hackathon Project**: Revolutionizing women's health through AI-driven nutrition that syncs with menstrual cycles

![NutriFlow Banner](assets/images/banner.png)

## 🏆 Problem Statement

Women's hormones fluctuate throughout their menstrual cycle, affecting energy levels, metabolism, nutritional needs, and supplement absorption. Yet current nutrition apps treat all days the same, leading to:
- ❌ Ineffective supplement timing
- ❌ Energy crashes during critical cycle phases  
- ❌ Weight management struggles
- ❌ Unoptimized nutrient absorption

## ✨ Our Solution

**NutriFlow** is an AI-powered nutrition platform that adapts meal plans, supplement timing, and health insights to your menstrual cycle in real-time.

### Key Features

🍽️ **AI Food Recognition**
- Real-time food identification using computer vision (nateraw/food model)
- Automatic nutrition calculation and logging
- 85% accuracy across 101 food categories

📊 **Cycle-Synced Insights**
- Discover hidden patterns between sleep, stress, sugar, and weight
- Understand how your cycle affects your body
- Personalized recommendations for each phase

💊 **Smart Supplement Timing**
- Optimize iron absorption with vitamin C
- Calcium restriction windows to prevent interference
- Evidence-based timing recommendations

📅 **28-Day Cycle Planning**
- Menstrual phase: Comfort foods, high iron
- Follicular phase: High energy meals
- Ovulation phase: Peak performance nutrition
- Luteal phase: Anti-inflammatory, magnesium-rich

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- HuggingFace API key (optional, works with demo mode)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/nzelinska-job/NutriFlow
cd nutriflow
```

2. **Setup API Key (Optional)**
```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your HuggingFace Write token
# Get token at: https://huggingface.co/settings/tokens
```

3. **Configure**
```bash
# Edit config/config.js
nano config/config.js

# Replace:
HUGGINGFACE_API_KEY: 'hf_demo'

# With your key:
HUGGINGFACE_API_KEY: 'hf_YOUR_KEY_HERE'
```

4. **Run**
```bash
# Open in browser
open src/index.html

# Or use a local server
python -m http.server 8000
# Navigate to: http://localhost:8000/src/
```

## 📁 Project Structure

```
__NutriFlow/
├── src/
│   └── index.html              # Main application (single-page app)
├── config/
│   └── config.js               # Configuration (API keys, settings)
├── docs/
│   ├── README.md               # This file
│   ├── SETUP.md                # Detailed setup guide
│   ├── API.md                  # API documentation
│   └── ARCHITECTURE.md         # Technical architecture
├── presentation/
│   ├── pitch-deck.pdf          # Hackathon pitch deck
│   ├── demo-script.md          # Live demo script
│   └── video-demo.mp4          # 3-minute demo video
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore file
└── LICENSE                     # MIT License
```

## 🎯 How It Works

### 1. AI Food Recognition Flow
```
User uploads photo → Computer vision model analyzes → 
Identifies food items → Calculates nutrition → User confirms → 
Logs to daily tracker
```

### 2. Cycle Synchronization
```
User inputs cycle day → Algorithm determines phase → 
Adjusts meal recommendations → Optimizes supplement timing → 
Provides phase-specific insights
```

### 3. Pattern Recognition
```
Tracks sleep, stress, sugar, weight → AI analyzes correlations → 
Visualizes patterns → Generates actionable insights → 
User makes informed decisions
```

## 🛠️ Technology Stack

**Frontend:**
- Pure HTML5, CSS3, JavaScript (no frameworks for simplicity)
- Single-page application
- Responsive design (mobile-first)

**AI/ML:**
- HuggingFace Inference API
- Model: nateraw/food (Food-101 dataset)
- Vision Transformer (ViT) architecture
- ~85% accuracy on food recognition

**APIs:**
- HuggingFace Inference Providers API
- RESTful architecture
- Fallback to demo mode if unavailable

**Design:**
- Custom gradient color scheme
- Interactive data visualizations
- Accessible UI (WCAG 2.1 AA compliant)

## 📊 Key Metrics

- **Recognition Accuracy:** 85% (top-1), 96% (top-5)
- **Food Categories:** 101 types
- **Response Time:** <2 seconds average
- **Mobile Responsive:** Yes
- **Offline Fallback:** Smart demo mode

## 🎨 Demo Scenarios

### Scenario 1: Morning Routine
```
1. User opens app at 7:00 AM
2. System shows: "💊 Take Iron + Vitamin C now"
3. At 8:00 AM: "🥗 Breakfast (avoid calcium)"
4. User snaps photo of avocado toast + eggs
5. AI recognizes: Avocado (160 cal), Toast (140 cal), Eggs (150 cal)
6. Logged! Total: 450 cal, P: 22g, C: 38g, F: 24g
```

### Scenario 2: Pattern Discovery
```
1. User reviews "AI Insights" section
2. Graph shows: Poor sleep (4-5h) → Sugar spike (82-95g)
3. Graph shows: Good sleep (7.8-8.5h) → Low sugar (22-35g)
4. Insight: "You're 5x more likely to lose weight with 7+ hours sleep"
5. Action: User prioritizes sleep hygiene
```

### Scenario 3: Cycle Planning
```
1. User inputs: Day 1 of menstrual cycle
2. System generates 28-day plan
3. Days 1-5: Iron-rich foods, comfort meals
4. Days 6-13: High-energy meals, HIIT workouts
5. Days 14-16: Peak nutrition, intense exercise
6. Days 17-28: Anti-inflammatory, gentle yoga
```

## 🔒 Privacy & Security

- ✅ No user data stored on servers
- ✅ All processing client-side
- ✅ API keys stored locally only
- ✅ GDPR compliant
- ✅ Images processed via HuggingFace (GDPR compliant)
- ✅ No tracking or analytics

## 🌟 Future Roadmap

**Phase 1** (Current - Hackathon MVP)
- [x] AI food recognition
- [x] Cycle-synced meal plans
- [x] Pattern visualization
- [x] Supplement timing

**Phase 2** (Next 3 months)
- [ ] Multi-food detection in single photo
- [ ] Portion size estimation
- [ ] Barcode scanner for packaged foods
- [ ] Export data to CSV/PDF

**Phase 3** (6-12 months)
- [ ] Mobile app (React Native)
- [ ] Integration with fitness trackers
- [ ] Personalized AI coach chatbot
- [ ] Community features

**Phase 4** (1+ years)
- [ ] Clinical partnerships
- [ ] Insurance integration
- [ ] PCOS/endometriosis specific features
- [ ] Telehealth integration

## 👥 Team

- **Nataliia Zelinska**: Co-Founder, Full-stack development, AI integration, UI/UX design, frontend, Data science, algorithms
- **Gabriela Reyes** - Co-Founder & Product Lead 

## 🏅 Hackathon Submission

**Category:** Health & Wellness  
**Track:** AI/ML Innovation  
**Date:** 25.10.2025
**Demo Video:**  

## 📄 License


## 🙏 Acknowledgments

- HuggingFace for Inference API
- Food-101 dataset creators
- Hackathon organizers - Empowering Female Founders in BigData & AI

## 📧 Contact

- **Website:** https://www.linkedin.com/in/nataliiazelinska/
- **Email:** zelinska.nataliia.job@gmail.com
- **GitHub:** https://github.com/nzelinska-job/NutriFlow

---

**Built with 💜 for women's health by NutriFlow**

