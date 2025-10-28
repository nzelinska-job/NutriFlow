// 🔑 NutriFlow Configuration
// For hackathon demo: Replace 'hf_demo' with your HuggingFace Write token

const CONFIG = {
    // HuggingFace API Configuration
    HUGGINGFACE_API_KEY: 'hf_demo', // ← Replace with your Write token from https://huggingface.co/settings/tokens
    
    // Model Configuration
    MODEL_NAME: 'nateraw/food', // Food-101 dataset (101 categories, ~85% accuracy)
    
    // API Endpoints
    API_BASE_URL: 'https://router.huggingface.co/hf-inference',
    
    // App Settings
    DEMO_MODE: true, // Set to false when using real API key
    FALLBACK_ENABLED: true, // Enable smart demo fallback if API fails
    
    // Feature Flags
    FEATURES: {
        AI_FOOD_RECOGNITION: true,
        MEAL_PLANNING: true,
        HEALTH_INSIGHTS: true,
        CYCLE_TRACKING: true
    }
};

// Export for use in main app
if (typeof window !== 'undefined') {
    window.NUTRIFLOW_CONFIG = CONFIG;
}
