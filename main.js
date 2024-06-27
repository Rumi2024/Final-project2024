function setup() {
    createCanvas(1000, 10000);
    console.log(recipes);
    let i = 0;
    while (i < recipes.length) {
            fill(155, 50, 168);
        rect(0, 55 + i * 700, 450, 605);
        strokeWeight(2);
        line(0, 110 + i * 700, 450, 110 + i * 700);
        line(0, 165 + i * 700, 450, 165 + i * 700);
        line(0, 220 + i * 700, 450, 220 + i * 700);
        line(0, 275 + i * 700, 450, 275 + i * 700);
        line(0, 330 + i * 700, 450, 330 + i * 700);
        line(0, 385 + i * 700, 450, 385 + i * 700);
        line(0, 440 + i * 700, 450, 440 + i * 700);
        line(0, 495 + i * 700, 450, 495 + i * 700);
        line(0, 550 + i * 700, 450, 550 + i * 700);
        line(0, 605 + i * 700, 450, 605 + i * 700);
        line(150, 55 + i * 700, 150, 660 + i * 700);
        line(300, 55 + i * 700, 300, 660 + i * 700);
        fill(245, 221, 66);
        textSize(20);
        text("Ingredient", 30, 85 + i * 700);
        text("Measurement", 170, 85 + i * 700);
        text("Cost price", 330, 85 + i * 700);
        fill(255);
        textSize(15);
        text(recipes[i].Ingredients1, 30, 140 + i * 700);
        text(recipes[i].ingredients2, 30, 195 + i * 700);
        text(recipes[i].ingredients3, 30, 250 + i * 700);
        text(recipes[i].ingredients4, 30, 305 + i * 700);
        text(recipes[i].ingredients5, 30, 360 + i * 700);
        text(recipes[i].ingredients6, 30, 415 + i * 700);
        text(recipes[i].ingredients7, 30, 470 + i * 700);
        text(recipes[i].ingredients8, 30, 525 + i * 700);
        text(recipes[i].ingredients9, 30, 580 + i * 700);
        text(recipes[i].ingredients10, 30, 635 + i * 700);


        text(recipes[i].measurement1, 170, 140 + i * 700);
        text(recipes[i].measurement2, 170, 195 + i * 700);
        text(recipes[i].measurement3, 170, 250 + i * 700);
        text(recipes[i].measurement4, 170, 305 + i * 700);
        text(recipes[i].measurement5, 170, 360 + i * 700);
        text(recipes[i].measurement6, 170, 415 + i * 700);
        text(recipes[i].measurement7, 170, 470 + i * 700)             
        text(recipes[i].measurement8, 170, 525 + i * 700);
        text(recipes[i].measurement9, 170, 580 + i * 700);
        text(recipes[i].measurement10, 170, 635 + i * 700);


        text(recipes[i].costPrice1, 330, 140 + i * 700);
        text(recipes[i].costPrice2, 330, 195 + i * 700);
        text(recipes[i].costPrice3, 330, 250 + i * 700);
        text(recipes[i].costPrice4, 330, 305 + i * 700);
        text(recipes[i].costPrice5, 330, 360 + i * 700);
        text(recipes[i].costPrice6, 330, 415 + i * 700);
        text(recipes[i].costPrice7, 330, 470 + i * 700)             
        text(recipes[i].costPrice8, 330, 525 + i * 700);
        text(recipes[i].costPrice9, 330, 580 + i * 700);
        text(recipes[i].costPrice10, 330, 635 + i * 700);
        textSize(20);
        fill(43, 22, 166);
        text(recipes[i].nameOfRecipe, 0, 20 + i * 700);
        image(recipes[i].image, 500, 100 + i * 700, 350, 250, 0, 0, 0, 0,CONTAIN);
        i = i + 1;
    }

}
let recipes;
function reqListener() {
    recipes = this.response;
    let i = 0;
    while (i < recipes.length) {
        recipes[i].image = loadImage(recipes[i].picture);
        i = i + 1;
    }
}

function preload() {
    let req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET","http://192.168.16.87:8080/sajidah/");
    req.responseType = "json";
    req.send();  
}