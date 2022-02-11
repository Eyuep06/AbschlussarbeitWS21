"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    let formData;
    let employees = [];
    let taskPositions = [new Abschlussarbeit.Vector(50, 250), new Abschlussarbeit.Vector(200, 250), new Abschlussarbeit.Vector(450, 250), new Abschlussarbeit.Vector(550, 350)];
    let allFood = ["Döner", "Yufka", "Lahmacun"];
    let allIngredients = ["Salat", "Zwiebel", "Mais", "Kraut", "Tomaten"];
    let completeOrder = [];
    let rndmNumFood;
    let rndmNumIngredient;
    rndmNumFood = Math.floor(Math.random() * 3);
    rndmNumIngredient = Math.floor(Math.random() * 5);
    let tomatoBar;
    let cabbageBar;
    let cornBar;
    let lettuceBar;
    let onionBar;
    let MOOD;
    (function (MOOD) {
        MOOD[MOOD["HAPPY"] = 0] = "HAPPY";
        MOOD[MOOD["MEH"] = 1] = "MEH";
        MOOD[MOOD["SAD"] = 2] = "SAD";
        MOOD[MOOD["KO"] = 3] = "KO";
    })(MOOD = Abschlussarbeit.MOOD || (Abschlussarbeit.MOOD = {}));
    let TASK;
    (function (TASK) {
        TASK[TASK["BAR"] = 0] = "BAR";
        TASK[TASK["CHANGE"] = 1] = "CHANGE";
        TASK[TASK["PREPARE"] = 2] = "PREPARE";
        TASK[TASK["ORDER"] = 3] = "ORDER";
    })(TASK = Abschlussarbeit.TASK || (Abschlussarbeit.TASK = {}));
    window.addEventListener("load", hdndlLoad);
    function hdndlLoad(_event) {
        let canvas = document.querySelector("canvas");
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        let startButton = document.querySelector(".startButton");
        startButton.addEventListener("pointerup", startGame);
        drawRestaurant();
        window.setInterval(update, 1000);
        createOrder();
    }
    function startGame() {
        //formData = new FormData(document.forms[0]);
        getSettingData();
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        let canvas = document.querySelector("canvas");
        canvas.classList.remove("hidden");
    }
    function drawRestaurant() {
        //white bg canvas
        Abschlussarbeit.crc2.fillStyle = "white";
        Abschlussarbeit.crc2.fillRect(0, 0, 800, 600);
        //border
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.rect(0, 0, 800, 600);
        //game infos
        Abschlussarbeit.crc2.moveTo(300, 100);
        Abschlussarbeit.crc2.lineTo(300, 0);
        Abschlussarbeit.crc2.moveTo(600, 100);
        Abschlussarbeit.crc2.lineTo(600, 0);
        Abschlussarbeit.crc2.moveTo(0, 100);
        Abschlussarbeit.crc2.lineTo(800, 100);
        Abschlussarbeit.crc2.font = "15px Arial";
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fillText("Gesamtzufriedenheit Kunden:", 10, 30);
        Abschlussarbeit.crc2.font = "15px Arial";
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fillText("Gesamtzufriedenheit Mitarbeiter:", 310, 30);
        Abschlussarbeit.crc2.font = "15px Arial";
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fillText("Verkaufte Gerichte:", 610, 30);
        //phone + prepare 
        Abschlussarbeit.crc2.moveTo(0, 200);
        Abschlussarbeit.crc2.lineTo(800, 200);
        Abschlussarbeit.crc2.moveTo(100, 200);
        Abschlussarbeit.crc2.lineTo(100, 100);
        Abschlussarbeit.crc2.moveTo(300, 200);
        Abschlussarbeit.crc2.lineTo(300, 100);
        Abschlussarbeit.crc2.moveTo(400, 200);
        Abschlussarbeit.crc2.lineTo(400, 100);
        Abschlussarbeit.crc2.moveTo(500, 200);
        Abschlussarbeit.crc2.lineTo(500, 100);
        Abschlussarbeit.crc2.moveTo(600, 200);
        Abschlussarbeit.crc2.lineTo(600, 100);
        Abschlussarbeit.crc2.moveTo(700, 200);
        Abschlussarbeit.crc2.lineTo(700, 100);
        //ingrediennts
        Abschlussarbeit.crc2.moveTo(0, 400);
        Abschlussarbeit.crc2.lineTo(800, 400);
        Abschlussarbeit.crc2.moveTo(100, 500);
        Abschlussarbeit.crc2.lineTo(100, 400);
        Abschlussarbeit.crc2.moveTo(200, 500);
        Abschlussarbeit.crc2.lineTo(200, 400);
        Abschlussarbeit.crc2.moveTo(300, 500);
        Abschlussarbeit.crc2.lineTo(300, 400);
        Abschlussarbeit.crc2.moveTo(400, 500);
        Abschlussarbeit.crc2.lineTo(400, 400);
        Abschlussarbeit.crc2.moveTo(500, 500);
        Abschlussarbeit.crc2.lineTo(500, 400);
        Abschlussarbeit.crc2.moveTo(600, 500);
        Abschlussarbeit.crc2.lineTo(600, 400);
        Abschlussarbeit.crc2.moveTo(700, 500);
        Abschlussarbeit.crc2.lineTo(700, 400);
        //customer
        Abschlussarbeit.crc2.moveTo(0, 500);
        Abschlussarbeit.crc2.lineTo(800, 500);
        Abschlussarbeit.crc2.stroke();
    }
    function deleteIngredient() {
        cornBar.amountBar = cornBar.amountBar - 25;
        cornBar.draw();
        console.log(cornBar.amountBar);
    }
    function getSettingData() {
        formData = new FormData(document.forms[0]);
        let anzahlMA;
        let intervallCustomer;
        let capIngredients;
        let capStock;
        let energyMA;
        let corn;
        let lettuce;
        let onion;
        let cabbage;
        let tomato;
        anzahlMA = Number(formData.get("mitarbeierzahl"));
        intervallCustomer = Number(formData.get("kundenIntervall"));
        capIngredients = Number(formData.get("kapazitätTheke"));
        capStock = Number(formData.get("kapazitätRohmaterial"));
        energyMA = Number(formData.get("Energie"));
        corn = capIngredients;
        lettuce = capIngredients;
        onion = capIngredients;
        cabbage = capIngredients;
        tomato = capIngredients;
        // wenn auf den button bei einer Zutat gedrückt wird, soll zb corn = corn - 25
        tomatoBar = new Abschlussarbeit.Tomato(capIngredients, capStock, tomato);
        tomatoBar.draw();
        cabbageBar = new Abschlussarbeit.Cabbage(capIngredients, capStock, cabbage);
        cabbageBar.draw();
        cornBar = new Abschlussarbeit.Corn(capIngredients, capStock, corn);
        cornBar.draw();
        lettuceBar = new Abschlussarbeit.Lettuce(capIngredients, capStock, lettuce);
        lettuceBar.draw();
        onionBar = new Abschlussarbeit.Onion(capIngredients, capStock, onion);
        onionBar.draw();
        //create Buttons for Ingredients
        for (let i = 0; i < 5; i++) {
            let button = document.createElement("button");
            document.getElementById("canvasDiv")?.appendChild(button);
            button.id = "button" + i;
        }
        let cabbageBtn;
        cabbageBtn = document.getElementById("button0");
        let lettuceBtn;
        lettuceBtn = document.getElementById("button1");
        let cornBtn;
        cornBtn = document.getElementById("button2");
        let tomatoBtn;
        tomatoBtn = document.getElementById("button3");
        let onionBtn;
        onionBtn = document.getElementById("button4");
        cabbageBtn.addEventListener("pointerup", function () { deleteIngredient(); });
        lettuceBtn.addEventListener("pointerup", function () { deleteIngredient(); });
        cornBtn.addEventListener("pointerup", function () { deleteIngredient(); });
        tomatoBtn.addEventListener("pointerup", function () { deleteIngredient(); });
        onionBtn.addEventListener("pointerup", function () { deleteIngredient(); });
        let doenerImg = document.createElement("img");
        doenerImg.src = "assets/doener.png";
        document.getElementById("canvasDiv")?.appendChild(doenerImg);
        let yufkaImg = document.createElement("img");
        yufkaImg.src = "assets/yufka.png";
        document.getElementById("canvasDiv")?.appendChild(yufkaImg);
        let lahmacunImg = document.createElement("img");
        lahmacunImg.src = "assets/lahmacun.png";
        document.getElementById("canvasDiv")?.appendChild(lahmacunImg);
        createEmployees(anzahlMA);
    }
    function createEmployees(nEmployees) {
        formData = new FormData(document.forms[0]);
        let energyMA;
        energyMA = Number(formData.get("Energie"));
        for (let i = 0; i < nEmployees; i++) {
            let employee = new Abschlussarbeit.Employee(taskPositions[i], energyMA);
            employees.push(employee);
        }
        // console.log();
    }
    function update() {
        for (let i = 0; i < employees.length; i++) {
            employees[i].draw(taskPositions[i]);
            employees[i].updateMood();
        }
    }
    function createOrder() {
        let food;
        food = allFood[rndmNumFood];
        allIngredients.splice(rndmNumIngredient);
        // console.log(food, allIngredients);
        completeOrder.push(food);
        Array.prototype.push.apply(completeOrder, allIngredients);
        console.log(completeOrder);
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map