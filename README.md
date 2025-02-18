# 🍽 Meal Nutritional Facts Calculator  
A simple web-based application that calculates **calories and nutrition facts** for a meal, including food, drinks, and desserts. The tool fetches real-time nutrition data from the **Nutritionix API**.  

## 🌟 Features  
✔️ Enter a **main dish, drink, and dessert** to get detailed nutritional facts  
✔️ View **calories, fat, protein, sugar, and more** for each item  
✔️ **Calculate total** meal nutrition in one click  

## 📂 Folder Structure  
```
Project2/
├── index.html      # Main HTML file
├── css/
│   └── style.css   # Stylesheet
├── js/
│   ├── main.js     # JavaScript logic
│   ├── config.example.js  # Example configuration file for API keys
└── assets/
    ├── food.gif    # Food image
    ├── drinks.gif  # Drinks image
```

## 🔧 How to Run  
1. **Clone or Download** the repository:  
   ```bash
   git clone https://github.com/your-username/Project2.git
   cd Project2
   ```
2. Navigate to the `js/` folder and rename `config.example.js` to `config.js`:  
   ```bash
   mv js/config.example.js js/config.js
   ```
3. Open `config.js` and **replace** `YOUR_API_ID_HERE` and `YOUR_API_KEY_HERE` with your actual Nutritionix API keys.  
4. Open `index.html` in a browser and start using the app!  

## 🏗 Getting Your Own Nutritionix API Key  
1. Go to [Nutritionix Developer Portal](https://developer.nutritionix.com/) and **sign up for an account**.  
2. Navigate to the **API Keys** section and create a new API key.  
3. Copy your `API_ID` and `API_KEY`.  
4. Open `config.js` and insert your keys in the following format:  
   ```js
   const CONFIG = {
       API_ID: "YOUR_API_ID_HERE",
       API_KEY: "YOUR_API_KEY_HERE"
   };
   ```
5. Save the file and refresh your browser.  

## 🛠 Tech Stack  
- **HTML, CSS, JavaScript** 