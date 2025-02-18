
const API_BASE_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients";

async function fetchNutritionData(query) {
  try {
    console.log("fetchNutritionData() -> Query:", query);
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": API_ID,
        "x-app-key": API_KEY
      },
      body: JSON.stringify({ query: query })
    });
    const data = await response.json();
    console.log("API Response:", data);

    if (!data || !data.foods) {
      alert("No nutrition data found. Try another food/drink/dessert.");
      return null;
    }
    return data.foods[0];
  } catch (error) {
    console.error("API Request Failed:", error);
    alert("Failed to fetch nutrition data. Check API key or network.");
    return null;
  }
}

function extractNutrition(data) {
  console.log("extractNutrition() -> Raw data:", data);
  return {
    calories: data.nf_calories || 0,
    fat_total_g: data.nf_total_fat || 0,
    fat_saturated_g: data.nf_saturated_fat || 0,
    cholesterol_mg: data.nf_cholesterol || 0,
    potassium_mg: data.nf_potassium || 0,
    sodium_mg: data.nf_sodium || 0,
    carbohydrates_total_g: data.nf_total_carbohydrate || 0,
    fiber_g: data.nf_dietary_fiber || 0,
    sugar_g: data.nf_sugars || 0,
    protein_g: data.nf_protein || 0
  };
}

// Individual part calculation functions
async function calculate_food() {
  calculateNutrition("foodInput", "meal-facts1", "f");
}
async function calculate_drink() {
  calculateNutrition("drinksInput", "meal-facts2", "d");
}
async function calculate_sweet() {
  calculateNutrition("sweetInput", "meal-facts3", "s");
}

async function calculateNutrition(inputId, sectionId, prefix) {
  const userInput = document.getElementById(inputId).value.trim();
  if (!userInput) {
    console.log(`No input in #${inputId}, skipping.`);
    return;
  }
  const data = await fetchNutritionData(userInput);
  if (!data) {
    console.log("fetchNutritionData returned null; skipping update.");
    return;
  }
  const stats = extractNutrition(data);
  updateMealFacts(sectionId, stats, prefix);
}

function updateMealFacts(sectionId, stats, prefix) {
  if (isNaN(stats.calories)) {
    console.log("updateMealFacts() -> stats.calories is NaN, skipping");
    return;
  }
  console.log(`updateMealFacts() -> prefix=${prefix}, stats=`, stats);

  // Reveal the part's table
  document.getElementById(sectionId).style.display = "block";

  // Populate each cell
  document.getElementById(`${prefix}calories`).innerText              = stats.calories.toFixed(2);
  document.getElementById(`${prefix}fat_total_g`).innerText           = stats.fat_total_g.toFixed(2);
  document.getElementById(`${prefix}fat_saturated_g`).innerText       = stats.fat_saturated_g.toFixed(2);
  document.getElementById(`${prefix}cholesterol_mg`).innerText        = stats.cholesterol_mg.toFixed(2);
  document.getElementById(`${prefix}potassium_mg`).innerText          = stats.potassium_mg.toFixed(2);
  document.getElementById(`${prefix}sodium_mg`).innerText             = stats.sodium_mg.toFixed(2);
  document.getElementById(`${prefix}carbohydrates_total_g`).innerText = stats.carbohydrates_total_g.toFixed(2);
  document.getElementById(`${prefix}fiber_g`).innerText               = stats.fiber_g.toFixed(2);
  document.getElementById(`${prefix}sugar_g`).innerText               = stats.sugar_g.toFixed(2);
  document.getElementById(`${prefix}protein_g`).innerText             = stats.protein_g.toFixed(2);
}

/**
 * Ensures a given meal part is calculated if it's not already displayed.
 * If user never pressed "Calculate" for that section, we do it now.
 */
async function ensurePartCalculated(sectionId, inputId, prefix) {
  const partDisplay = document.getElementById(sectionId).style.display;
  if (partDisplay === "none") {
    // Means we haven't shown that section yet -> calculate it
    console.log(`ensurePartCalculated() -> calling for prefix=${prefix}`);
    await calculateNutrition(inputId, sectionId, prefix);
  }
}

// Make this async so we can wait for parts to be calculated if needed
async function calculate_total() {
  // First ensure all sections are calculated if not already
  await ensurePartCalculated("meal-facts1", "foodInput", "f");
  await ensurePartCalculated("meal-facts2", "drinksInput", "d");
  await ensurePartCalculated("meal-facts3", "sweetInput", "s");

  // Now sum up
  const fields = [
    "calories",
    "fat_total_g",
    "fat_saturated_g",
    "cholesterol_mg",
    "potassium_mg",
    "sodium_mg",
    "carbohydrates_total_g",
    "fiber_g",
    "sugar_g",
    "protein_g"
  ];

  const total = {};
  fields.forEach(field => {
    total[field] = sumValues([`f${field}`, `d${field}`, `s${field}`]);
  });

  console.log("Total Nutrition Calculated:", total);

  // Show the total section
  document.getElementById("meal-facts4").style.display = "block";

  // Populate total values
  fields.forEach(field => {
    const element = document.getElementById(`t${field}`);
    if (element) {
      element.innerText = total[field].toFixed(2);
    }
  });
}

function sumValues(ids) {
  return ids.reduce((sum, id) => {
    const element = document.getElementById(id);
    if (!element) {
      console.log(`sumValues() -> No element with id=${id}, skipping`);
      return sum;
    }
    const value = parseFloat(element.innerText);
    return sum + (isNaN(value) ? 0 : value);
  }, 0);
}
