let food_calories=0
let food_fat=0
let food_fat_sat=0
let food_cholesterol=0
let food_potassium=0
let food_sodium=0
let food_carb=0
let food_fiber=0
let food_sugar=0
let food_protein=0

let drinks_calories=0
let drinks_fat=0
let drinks_fat_sat=0
let drinks_cholesterol=0
let drinks_potassium=0
let drinks_sodium=0
let drinks_carb=0
let drinks_fiber=0
let drinks_sugar=0
let drinks_protein=0

let sweets_calories=0
let sweets_fat=0
let sweets_fat_sat=0
let sweets_cholesterol=0
let sweets_potassium=0
let sweets_sodium=0
let sweets_carb=0
let sweets_fiber=0
let sweets_sugar=0
let sweets_protein=0



function calculate_food(){

let food = $("#foodInput").val();
let base_url= "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=";
let full_url= base_url+food;

const settings = {

"async": true,
"crossDomain": true,
"url": full_url,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "079541db24mshedf09f2b42737afp1aaf01jsn2e821d8234e6"
	}
};

$.ajax(settings).done(function (data) {
	console.log(data);
  f_in_table(data);
});
} 

function f_in_table(data){
	// let c = $("#foodInput").val();
// if(c ==" "){
	// return ;
// }


food_calories=0
food_fat=0
food_fat_sat=0
food_cholesterol=0
food_potassium=0
food_sodium=0
food_carb=0
food_fiber=0
food_sugar=0
food_protein=0

if(data.length==1){
let serving_size_g = data[0].serving_size_g;
$("#fserving_size_g").html("Serving Size"+serving_size_g+"g");
}

for(let i=0; i<data.length ;i++){
let obj = data[i];

let calories = obj.calories;
food_calories+=calories;

let fat_total_g = obj.fat_total_g;
food_fat+=fat_total_g;

let fat_saturated_g = obj.fat_saturated_g;
food_fat_sat+=fat_saturated_g;

let cholesterol_mg = obj.cholesterol_mg;
food_cholesterol+=cholesterol_mg;

let potassium_mg = obj.potassium_mg;
food_potassium+=potassium_mg

let sodium_mg = obj.sodium_mg;
food_sodium+=sodium_mg;

let carbohydrates_total_g = obj.carbohydrates_total_g;
food_carb+=carbohydrates_total_g;

let fiber_g = obj.fiber_g;
food_fiber+=fiber_g;

let sugar_g = obj.sugar_g;
food_sugar+=sugar_g;

let protein_g = obj.protein_g;
food_protein+=protein_g

}
if(food_calories==0){
	return;
}
	$("#meal-facts1").show();

$("#fcalories").html(food_calories.toFixed(2));

//let serving_size_g = obj.serving_size_g;
//$("#fserving_size_g").html("Serving Size"+serving_size_g+"g");

$("#ffat_total_g").html(food_fat.toFixed(2)+"g");

$("#ffat_saturated_g").html(food_fat_sat.toFixed(2)+"g");

$("#fcholesterol_mg").html(food_cholesterol.toFixed(2)+"mg");

$("#fpotassium_mg").html(food_potassium.toFixed(2)+"mg");

$("#fsodium_mg").html(food_sodium.toFixed(2)+"mg");

$("#fcarbohydrates_total_g").html(food_carb.toFixed(2)+"g");

$("#ffiber_g").html(food_fiber.toFixed(2)+"g");

$("#fsugar_g").html(food_sugar.toFixed(2)+"g");

$("#fprotein_g").html(food_protein.toFixed(2)+"g");


}

function calculate_drink(){
	


let drink = $("#drinksInput").val();
let base_url= "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=";
let full_url= base_url+drink;

const settings = {

"async": true,
"crossDomain": true,
"url": full_url,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "079541db24mshedf09f2b42737afp1aaf01jsn2e821d8234e6"
	}
};

$.ajax(settings).done(function (data) {
	console.log(data);
  d_in_table(data);
});
} 

function d_in_table(data){
	// let c = $("#drinksInput").val();
// if(c ==" "){
	// return ;
// }


drinks_calories=0
drinks_fat=0
drinks_fat_sat=0
drinks_cholesterol=0
drinks_potassium=0
drinks_sodium=0
drinks_carb=0
drinks_fiber=0
drinks_sugar=0
drinks_protein=0

if(data.length==1){
let serving_size_g = data[0].serving_size_g;
$("#dserving_size_g").html("Serving Size"+serving_size_g+"ml");
}


for(let i=0; i<data.length ;i++){
let obj = data[i];

let calories = obj.calories;
drinks_calories+=calories;

let fat_total_g = obj.fat_total_g;
drinks_fat+=fat_total_g;

let fat_saturated_g = obj.fat_saturated_g;
drinks_fat_sat+=fat_saturated_g;

let cholesterol_mg = obj.cholesterol_mg;
drinks_cholesterol+=cholesterol_mg;

let potassium_mg = obj.potassium_mg;
drinks_potassium+=potassium_mg

let sodium_mg = obj.sodium_mg;
drinks_sodium+=sodium_mg;

let carbohydrates_total_g = obj.carbohydrates_total_g;
drinks_carb+=carbohydrates_total_g;

let fiber_g = obj.fiber_g;
drinks_fiber+=fiber_g;

let sugar_g = obj.sugar_g;
drinks_sugar+=sugar_g;

let protein_g = obj.protein_g;
drinks_protein+=protein_g

}
if(drinks_calories==0){
	return;
}
$("#meal-facts2").show();


$("#dcalories").html(drinks_calories.toFixed(2));

//$("#dserving_size_g").html("Serving Size"+serving_size_g+"g");

$("#dfat_total_g").html(drinks_fat.toFixed(2)+"g");

$("#dfat_saturated_g").html(drinks_fat_sat.toFixed(2)+"g");

$("#dcholesterol_mg").html(drinks_cholesterol.toFixed(2)+"mg");

$("#dpotassium_mg").html(drinks_potassium.toFixed(2)+"mg");

$("#dsodium_mg").html(drinks_sodium.toFixed(2)+"mg");

$("#dcarbohydrates_total_g").html(drinks_carb.toFixed(2)+"g");

$("#dfiber_g").html(drinks_fiber.toFixed(2)+"g");

$("#dsugar_g").html(drinks_sugar.toFixed(2)+"g");

$("#dprotein_g").html(drinks_protein.toFixed(2)+"g");

}



function calculate_sweet(){
	


let sweet = $("#sweetInput").val();
let base_url= "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=";
let full_url= base_url+sweet;

const settings = {

"async": true,
"crossDomain": true,
"url": full_url,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "079541db24mshedf09f2b42737afp1aaf01jsn2e821d8234e6"
	}
};

$.ajax(settings).done(function (data) {
	console.log(data);
  s_in_table(data);
});
} 

function s_in_table(data){
	// let c = $("#sweetInput").val();
// if(c ==" "){
	// return ;
// }


 sweets_calories=0
 sweets_fat=0
 sweets_fat_sat=0
 sweets_cholesterol=0
 sweets_potassium=0
 sweets_sodium=0
 sweets_carb=0
 sweets_fiber=0
 sweets_sugar=0
 sweets_protein=0


if(data.length==1){
let serving_size_g = data[0].serving_size_g;
$("#sserving_size_g").html("Serving Size"+serving_size_g+"g");
}

for(let i=0; i<data.length ;i++){
let obj = data[i];

let calories = obj.calories;
sweets_calories+=calories;

let fat_total_g = obj.fat_total_g;
sweets_fat+=fat_total_g;

let fat_saturated_g = obj.fat_saturated_g;
sweets_fat_sat+=fat_saturated_g;

let cholesterol_mg = obj.cholesterol_mg;
sweets_cholesterol+=cholesterol_mg;

let potassium_mg = obj.potassium_mg;
sweets_potassium+=potassium_mg

let sodium_mg = obj.sodium_mg;
sweets_sodium+=sodium_mg;

let carbohydrates_total_g = obj.carbohydrates_total_g;
sweets_carb+=carbohydrates_total_g;

let fiber_g = obj.fiber_g;
sweets_fiber+=fiber_g;

let sugar_g = obj.sugar_g;
sweets_sugar+=sugar_g;

let protein_g = obj.protein_g;
sweets_protein+=protein_g

}
if (sweets_calories==0){
	return;
}
	$("#meal-facts3").show();



$("#scalories").html(sweets_calories.toFixed(2));

//$("#sserving_size_g").html("Serving Size"+serving_size_g+"g");

$("#sfat_total_g").html(sweets_fat.toFixed(2)+"g");

$("#sfat_saturated_g").html(sweets_fat_sat.toFixed(2)+"g");

$("#scholesterol_mg").html(sweets_cholesterol.toFixed(2)+"mg");

$("#spotassium_mg").html(sweets_potassium.toFixed(2)+"mg");

$("#ssodium_mg").html(sweets_sodium.toFixed(2)+"mg");

$("#scarbohydrates_total_g").html(sweets_carb.toFixed(2)+"g");

$("#sfiber_g").html(sweets_fiber.toFixed(2)+"g");

$("#ssugar_g").html(sweets_sugar.toFixed(2)+"g");

$("#sprotein_g").html(sweets_protein.toFixed(2)+"g");

}

function calculate_total(){
// calculate_foodt();
// calculate_drinkst();
// calculate_sweett();
	




let total_calories=food_calories+drinks_calories+sweets_calories
let total_fat=food_fat+drinks_fat+sweets_fat
let total_fat_sat=food_fat_sat+drinks_fat_sat+sweets_fat_sat
let total_cholesterol=food_cholesterol+drinks_cholesterol+sweets_cholesterol
let total_potassium=food_potassium+drinks_potassium+sweets_potassium
let total_sodium=food_sodium+drinks_sodium+sweets_sodium
let total_carb=food_carb+drinks_carb+sweets_carb
let total_fiber=food_fiber+drinks_fiber+sweets_fiber
let total_sugar=food_sugar+drinks_sugar+sweets_sugar
let total_protein=food_protein+drinks_protein+sweets_protein

	if(total_calories==0){
		return;
	}
		$("#meal-facts4").show();


$("#calories").html(total_calories.toFixed(2));

$("#fat_total_g").html(total_fat.toFixed(2)+"g");

$("#fat_saturated_g").html(total_fat_sat.toFixed(2)+"g");

$("#cholesterol_mg").html(total_cholesterol.toFixed(2)+"mg");

$("#potassium_mg").html(total_potassium.toFixed(2)+"mg");

$("#sodium_mg").html(total_sodium.toFixed(2)+"mg");

$("#carbohydrates_total_g").html(total_carb.toFixed(2)+"g");

$("#fiber_g").html(total_fiber.toFixed(2)+"g");

$("#sugar_g").html(total_sugar.toFixed(2)+"g");

$("#protein_g").html(total_protein.toFixed(2)+"g");

}



function calculate_foodt(){

let food = $("#foodInput").val();
let base_url= "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=";
let full_url= base_url+food;

const settings = {

"async": true,
"crossDomain": true,
"url": full_url,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "079541db24mshedf09f2b42737afp1aaf01jsn2e821d8234e6"
	}
};

$.ajax(settings).done(function (data) {
	console.log(data);
  f_in_tablet(data);
});
} 

function f_in_tablet(data){
	// let c = $("#foodInput").val();
// if(c ==" "){
	// return ;
// }


food_calories=0
food_fat=0
food_fat_sat=0
food_cholesterol=0
food_potassium=0
food_sodium=0
food_carb=0
food_fiber=0
food_sugar=0
food_protein=0

if(data.length==1){
let serving_size_g = data[0].serving_size_g;
$("#fserving_size_g").html("Serving Size"+serving_size_g+"g");
}

for(let i=0; i<data.length ;i++){
let obj = data[i];

let calories = obj.calories;
food_calories+=calories;

let fat_total_g = obj.fat_total_g;
food_fat+=fat_total_g;

let fat_saturated_g = obj.fat_saturated_g;
food_fat_sat+=fat_saturated_g;

let cholesterol_mg = obj.cholesterol_mg;
food_cholesterol+=cholesterol_mg;

let potassium_mg = obj.potassium_mg;
food_potassium+=potassium_mg

let sodium_mg = obj.sodium_mg;
food_sodium+=sodium_mg;

let carbohydrates_total_g = obj.carbohydrates_total_g;
food_carb+=carbohydrates_total_g;

let fiber_g = obj.fiber_g;
food_fiber+=fiber_g;

let sugar_g = obj.sugar_g;
food_sugar+=sugar_g;

let protein_g = obj.protein_g;
food_protein+=protein_g

}


$("#fcalories").html(food_calories.toFixed(2));

//let serving_size_g = obj.serving_size_g;
//$("#fserving_size_g").html("Serving Size"+serving_size_g+"g");

$("#ffat_total_g").html(food_fat.toFixed(2)+"g");

$("#ffat_saturated_g").html(food_fat_sat.toFixed(2)+"g");

$("#fcholesterol_mg").html(food_cholesterol.toFixed(2)+"mg");

$("#fpotassium_mg").html(food_potassium.toFixed(2)+"mg");

$("#fsodium_mg").html(food_sodium.toFixed(2)+"mg");

$("#fcarbohydrates_total_g").html(food_carb.toFixed(2)+"g");

$("#ffiber_g").html(food_fiber.toFixed(2)+"g");

$("#fsugar_g").html(food_sugar.toFixed(2)+"g");

$("#fprotein_g").html(food_protein.toFixed(2)+"g");


}

function calculate_drinkt(){
	


let drink = $("#drinksInput").val();
let base_url= "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=";
let full_url= base_url+drink;

const settings = {

"async": true,
"crossDomain": true,
"url": full_url,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "079541db24mshedf09f2b42737afp1aaf01jsn2e821d8234e6"
	}
};

$.ajax(settings).done(function (data) {
	console.log(data);
  d_in_tablet(data);
});
} 

function d_in_tablet(data){
	// let c = $("#drinksInput").val();
// if(c ==" "){
	// return ;
// }


drinks_calories=0
drinks_fat=0
drinks_fat_sat=0
drinks_cholesterol=0
drinks_potassium=0
drinks_sodium=0
drinks_carb=0
drinks_fiber=0
drinks_sugar=0
drinks_protein=0

if(data.length==1){
let serving_size_g = data[0].serving_size_g;
$("#dserving_size_g").html("Serving Size"+serving_size_g+"ml");
}


for(let i=0; i<data.length ;i++){
let obj = data[i];

let calories = obj.calories;
drinks_calories+=calories;

let fat_total_g = obj.fat_total_g;
drinks_fat+=fat_total_g;

let fat_saturated_g = obj.fat_saturated_g;
drinks_fat_sat+=fat_saturated_g;

let cholesterol_mg = obj.cholesterol_mg;
drinks_cholesterol+=cholesterol_mg;

let potassium_mg = obj.potassium_mg;
drinks_potassium+=potassium_mg

let sodium_mg = obj.sodium_mg;
drinks_sodium+=sodium_mg;

let carbohydrates_total_g = obj.carbohydrates_total_g;
drinks_carb+=carbohydrates_total_g;

let fiber_g = obj.fiber_g;
drinks_fiber+=fiber_g;

let sugar_g = obj.sugar_g;
drinks_sugar+=sugar_g;

let protein_g = obj.protein_g;
drinks_protein+=protein_g

}


$("#dcalories").html(drinks_calories.toFixed(2));

//$("#dserving_size_g").html("Serving Size"+serving_size_g+"g");

$("#dfat_total_g").html(drinks_fat.toFixed(2)+"g");

$("#dfat_saturated_g").html(drinks_fat_sat.toFixed(2)+"g");

$("#dcholesterol_mg").html(drinks_cholesterol.toFixed(2)+"mg");

$("#dpotassium_mg").html(drinks_potassium.toFixed(2)+"mg");

$("#dsodium_mg").html(drinks_sodium.toFixed(2)+"mg");

$("#dcarbohydrates_total_g").html(drinks_carb.toFixed(2)+"g");

$("#dfiber_g").html(drinks_fiber.toFixed(2)+"g");

$("#dsugar_g").html(drinks_sugar.toFixed(2)+"g");

$("#dprotein_g").html(drinks_protein.toFixed(2)+"g");

}



function calculate_sweett(){
	


let sweet = $("#sweetInput").val();
let base_url= "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=";
let full_url= base_url+sweet;

const settings = {

"async": true,
"crossDomain": true,
"url": full_url,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "079541db24mshedf09f2b42737afp1aaf01jsn2e821d8234e6"
	}
};

$.ajax(settings).done(function (data) {
	console.log(data);
  s_in_tablet(data);
});
} 

function s_in_tablet(data){
	// let c = $("#sweetInput").val();
// if(c ==" "){
	// return ;
// }


 sweets_calories=0
 sweets_fat=0
 sweets_fat_sat=0
 sweets_cholesterol=0
 sweets_potassium=0
 sweets_sodium=0
 sweets_carb=0
 sweets_fiber=0
 sweets_sugar=0
 sweets_protein=0


if(data.length==1){
let serving_size_g = data[0].serving_size_g;
$("#sserving_size_g").html("Serving Size"+serving_size_g+"g");
}

for(let i=0; i<data.length ;i++){
let obj = data[i];

let calories = obj.calories;
sweets_calories+=calories;

let fat_total_g = obj.fat_total_g;
sweets_fat+=fat_total_g;

let fat_saturated_g = obj.fat_saturated_g;
sweets_fat_sat+=fat_saturated_g;

let cholesterol_mg = obj.cholesterol_mg;
sweets_cholesterol+=cholesterol_mg;

let potassium_mg = obj.potassium_mg;
sweets_potassium+=potassium_mg

let sodium_mg = obj.sodium_mg;
sweets_sodium+=sodium_mg;

let carbohydrates_total_g = obj.carbohydrates_total_g;
sweets_carb+=carbohydrates_total_g;

let fiber_g = obj.fiber_g;
sweets_fiber+=fiber_g;

let sugar_g = obj.sugar_g;
sweets_sugar+=sugar_g;

let protein_g = obj.protein_g;
sweets_protein+=protein_g

}



$("#scalories").html(sweets_calories.toFixed(2));

//$("#sserving_size_g").html("Serving Size"+serving_size_g+"g");

$("#sfat_total_g").html(sweets_fat.toFixed(2)+"g");

$("#sfat_saturated_g").html(sweets_fat_sat.toFixed(2)+"g");

$("#scholesterol_mg").html(sweets_cholesterol.toFixed(2)+"mg");

$("#spotassium_mg").html(sweets_potassium.toFixed(2)+"mg");

$("#ssodium_mg").html(sweets_sodium.toFixed(2)+"mg");

$("#scarbohydrates_total_g").html(sweets_carb.toFixed(2)+"g");

$("#sfiber_g").html(sweets_fiber.toFixed(2)+"g");

$("#ssugar_g").html(sweets_sugar.toFixed(2)+"g");

$("#sprotein_g").html(sweets_protein.toFixed(2)+"g");

}
