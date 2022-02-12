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
    let choosenIngredients = [];
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
        TASK[TASK["BREAK"] = 4] = "BREAK";
    })(TASK = Abschlussarbeit.TASK || (Abschlussarbeit.TASK = {}));
    window.addEventListener("load", hdndlLoad);
    function hdndlLoad(_event) {
        let canvas = document.querySelector("canvas");
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        let startButton = document.querySelector(".startButton");
        startButton.addEventListener("pointerup", startGame);
        drawRestaurant();
        window.setInterval(update, 1000);
        //createOrder();
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
    function clickIngredient(_event) {
        let id = _event.target;
        let idString = id.id;
        if (idString == "button0" && cabbageBar.amountBar > 0) {
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(301, 401, 98, 98);
            cabbageBar.amountBar = cabbageBar.amountBar - 25;
            cabbageBar.draw();
            choosenIngredients.push("Kraut");
        }
        if (idString == "button1" && lettuceBar.amountBar > 0) {
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(401, 401, 98, 98);
            lettuceBar.amountBar = lettuceBar.amountBar - 25;
            lettuceBar.draw();
            choosenIngredients.push("Salat");
        }
        if (idString == "button2" && cornBar.amountBar > 0) {
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(501, 401, 98, 98);
            cornBar.amountBar = cornBar.amountBar - 25;
            cornBar.draw();
            choosenIngredients.push("Mais");
        }
        if (idString == "button3") {
            //hier tomate
        }
        if (idString == "button4" && onionBar.amountBar > 0) {
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(701, 401, 98, 98);
            onionBar.amountBar = onionBar.amountBar - 25;
            onionBar.draw();
            choosenIngredients.push("Zwiebel");
        }
    }
    function getSettingData() {
        formData = new FormData(document.forms[0]);
        let anzahlMA;
        let intervallCustomer;
        let capIngredients;
        let capStock;
        let energyMA;
        // let corn: number;
        // let lettuce: number;
        // let onion: number;
        // let cabbage: number;
        // let tomato: number;
        anzahlMA = Number(formData.get("mitarbeierzahl"));
        intervallCustomer = Number(formData.get("kundenIntervall"));
        capIngredients = Number(formData.get("kapazitätTheke"));
        capStock = Number(formData.get("kapazitätRohmaterial"));
        energyMA = Number(formData.get("Energie"));
        // corn = capIngredients;
        // lettuce = capIngredients;
        // onion = capIngredients;
        // cabbage = capIngredients;
        // tomato = capIngredients;
        // wenn auf den button bei einer Zutat gedrückt wird, soll zb corn = corn - 25
        // tomatoBar = new Tomato(capIngredients, capStock, tomato);
        // tomatoBar.draw();
        cabbageBar = new Abschlussarbeit.Cabbage(capIngredients, capStock);
        cabbageBar.draw();
        cornBar = new Abschlussarbeit.Corn(capIngredients, capStock);
        cornBar.draw();
        lettuceBar = new Abschlussarbeit.Lettuce(capIngredients, capStock);
        lettuceBar.draw();
        onionBar = new Abschlussarbeit.Onion(capIngredients, capStock);
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
        cabbageBtn.addEventListener("pointerup", clickIngredient);
        lettuceBtn.addEventListener("pointerup", clickIngredient);
        cornBtn.addEventListener("pointerup", clickIngredient);
        tomatoBtn.addEventListener("pointerup", clickIngredient);
        onionBtn.addEventListener("pointerup", clickIngredient);
        let doenerImg = document.createElement("img");
        doenerImg.src = "assets/doener.png";
        document.getElementById("canvasDiv")?.appendChild(doenerImg);
        let yufkaImg = document.createElement("img");
        yufkaImg.src = "assets/yufka.png";
        document.getElementById("canvasDiv")?.appendChild(yufkaImg);
        let lahmacunImg = document.createElement("img");
        lahmacunImg.src = "assets/lahmacun.png";
        document.getElementById("canvasDiv")?.appendChild(lahmacunImg);
        lahmacunImg.addEventListener("pointerup", function () { clickFood("Lahmacun"); });
        doenerImg.addEventListener("pointerup", function () { clickFood("Döner"); });
        yufkaImg.addEventListener("pointerup", function () { clickFood("Yufka"); });
        createEmployees(anzahlMA);
        drawController();
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
            // let testCustomer: Customer;
            // testCustomer = new Customer(new Vector(50, 500), 100);
            // testCustomer.draw(new Vector(50, 500));
            // testCustomer.move(1 / 100);
        }
    }
    function createOrder() {
        let body = document.querySelector("body");
        let food;
        food = allFood[rndmNumFood];
        allIngredients.splice(rndmNumIngredient);
        // console.log(food, allIngredients);
        completeOrder.push(food);
        Array.prototype.push.apply(completeOrder, allIngredients);
        console.log(completeOrder);
        let orderArea;
        orderArea = document.createElement("div");
        orderArea.id = "orderDiv";
        let orderText = document.createElement("p");
        orderText.innerHTML = completeOrder.toString();
        orderArea.appendChild(orderText);
        body.appendChild(orderArea);
    }
    function checkOrder() {
        completeOrder.sort();
        choosenIngredients.sort();
        if (completeOrder.length == checkOrder.length && completeOrder == choosenIngredients) {
            console.log("richtig");
        }
        else if (completeOrder.length == checkOrder.length && completeOrder != choosenIngredients) {
            console.log("this aint it");
        }
    }
    function drawController() {
        let employeesString = [];
        let tasks = ["Theke", "Bestellung", "Zubereitung", "Füllen", "Pause"];
        let body = document.querySelector("body");
        let controllerArea;
        controllerArea = document.createElement("div");
        controllerArea.id = "controllerDiv";
        for (let i = 1; i < employees.length + 1; i++) {
            employeesString.push("Mitarbeiter" + i);
        }
        body.appendChild(controllerArea);
        let selectList = document.createElement("select");
        let selelctListTask = document.createElement("select");
        let controllerOkBtn = document.createElement("button");
        controllerOkBtn.id = "controllerOkBtn";
        selelctListTask.id = "selectTask";
        controllerOkBtn.innerHTML = "OK";
        selectList.id = "selectEmployee";
        controllerArea.appendChild(selectList);
        controllerArea.appendChild(selelctListTask);
        controllerArea.appendChild(controllerOkBtn);
        //Create and append the options
        for (let i = 0; i < employees.length; i++) {
            let option = document.createElement("option");
            option.value = employeesString[i];
            option.text = employeesString[i];
            selectList.appendChild(option);
        }
        //Create and append the options
        for (let i = 0; i < tasks.length; i++) {
            let option = document.createElement("option");
            option.value = tasks[i];
            option.text = tasks[i];
            selelctListTask.appendChild(option);
        }
    }
    function clickFood(food) {
        if (food == "Lahmacun") {
            choosenIngredients.push("Lahmacun");
        }
        if (food == "Yufka") {
            choosenIngredients.push("Yufka");
        }
        if (food == "Döner") {
            choosenIngredients.push("Döner");
        }
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map