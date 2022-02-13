"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    let formData;
    let employees = [];
    let customerArray = [];
    let taskPositions = [new Abschlussarbeit.Vector(50, 250), new Abschlussarbeit.Vector(200, 250), new Abschlussarbeit.Vector(450, 250), new Abschlussarbeit.Vector(550, 350), new Abschlussarbeit.Vector(1000, 650), new Abschlussarbeit.Vector(1000, 650), new Abschlussarbeit.Vector(1000, 650)];
    let energyMA;
    let verkaufteProdukte = [];
    let fillBarArray = [""];
    let customer;
    let orderText;
    let restaurantImgData;
    let choosenIngredients = [];
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
        let body = document.querySelector("body");
        let canvas = document.querySelector("canvas");
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        let startButton = document.querySelector(".startButton");
        startButton.addEventListener("pointerup", startGame);
        orderText = document.createElement("p");
        let orderArea;
        orderArea = document.createElement("div");
        orderArea.id = "orderDiv";
        barSelections();
        stockSelections();
        orderArea.appendChild(orderText);
        body.appendChild(orderArea);
        drawRestaurant();
        window.setInterval(update, 1000);
    }
    function startGame() {
        getSettingData();
        formData = new FormData(document.forms[0]);
        let intervallCustomer;
        intervallCustomer = Number(formData.get("kundenIntervall"));
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        let canvas = document.querySelector("canvas");
        canvas.classList.remove("hidden");
        window.setInterval(createCustomer, intervallCustomer * 1000);
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
        // let doenerImg: HTMLImageElement = document.createElement("img");
        // doenerImg.src = "assets/doener.png";
        // document.getElementById("canvasDiv")?.appendChild(doenerImg);
        // doenerImg.id = "img1";
        // let yufkaImg: HTMLImageElement = document.createElement("img");
        // yufkaImg.src = "assets/yufka.png";
        // document.getElementById("canvasDiv")?.appendChild(yufkaImg);
        // yufkaImg.id = "img2";
        // let lahmacunImg: HTMLImageElement = document.createElement("img");
        // lahmacunImg.src = "assets/lahmacun.png";
        // document.getElementById("canvasDiv")?.appendChild(lahmacunImg);
        // lahmacunImg.id = "img3";
        // let phoneImg: HTMLImageElement = document.createElement("img");
        // phoneImg.src = "assets/Telefon.png";
        // document.getElementById("canvasDiv")?.appendChild(phoneImg);
        // phoneImg.id = "img4";
        // lahmacunImg.addEventListener("pointerup", function (): void { clickFood("Lahmacun"); });
        // doenerImg.addEventListener("pointerup", function (): void { clickFood("Döner"); });
        // yufkaImg.addEventListener("pointerup", function (): void { clickFood("Yufka"); });
        // phoneImg.addEventListener("pointerup", phonecall);
        // for (let i: number = 0; i < 5; i++) {
        //     let button: HTMLButtonElement = document.createElement("button");
        //     document.getElementById("canvasDiv")?.appendChild(button);
        //     button.id = "buttonStock" + i;
        // }
        // let cabbageBtn: HTMLButtonElement;
        // cabbageBtn = <HTMLButtonElement>document.getElementById("buttonStock0");
        // let lettuceBtn: HTMLButtonElement;
        // lettuceBtn = <HTMLButtonElement>document.getElementById("buttonStock1");
        // let cornBtn: HTMLButtonElement;
        // cornBtn = <HTMLButtonElement>document.getElementById("buttonStock2");
        // let tomatoBtn: HTMLButtonElement;
        // tomatoBtn = <HTMLButtonElement>document.getElementById("buttonStock3");
        // let onionBtn: HTMLButtonElement;
        // onionBtn = <HTMLButtonElement>document.getElementById("buttonStock4");
        // cabbageBtn.addEventListener("pointerup", clickIngredientStock);
        // lettuceBtn.addEventListener("pointerup", clickIngredientStock);
        // cornBtn.addEventListener("pointerup", clickIngredientStock);
        // tomatoBtn.addEventListener("pointerup", clickIngredientStock);
        // onionBtn.addEventListener("pointerup", clickIngredientStock);
        restaurantImgData = Abschlussarbeit.crc2.getImageData(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
    }
    function clickIngredient(_event) {
        let id = _event.target;
        let idString = id.id;
        if (idString == "kraut" && cabbageBar.amountBar > 0) {
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(301, 401, 98, 98);
            cabbageBar.amountBar = cabbageBar.amountBar - 25;
            cabbageBar.draw();
            choosenIngredients.push("Kraut");
        }
        if (idString == "salat" && lettuceBar.amountBar > 0) {
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(401, 401, 98, 98);
            lettuceBar.amountBar = lettuceBar.amountBar - 25;
            lettuceBar.draw();
            choosenIngredients.push("Salat");
        }
        if (idString == "mais" && cornBar.amountBar > 0) {
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(501, 401, 98, 98);
            cornBar.amountBar = cornBar.amountBar - 25;
            cornBar.draw();
            choosenIngredients.push("Mais");
        }
        if (idString == "tomate" && tomatoBar.amountBar > 0) {
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(501, 401, 98, 98);
            tomatoBar.amountBar = tomatoBar.amountBar - 25;
            tomatoBar.draw();
            choosenIngredients.push("Tomaten");
        }
        if (idString == "zwiebel" && onionBar.amountBar > 0) {
            Abschlussarbeit.crc2.fillStyle = "white";
            Abschlussarbeit.crc2.fillRect(701, 401, 98, 98);
            onionBar.amountBar = onionBar.amountBar - 25;
            onionBar.draw();
            choosenIngredients.push("Zwiebel");
        }
        checkOrder();
    }
    function getSettingData() {
        formData = new FormData(document.forms[0]);
        let anzahlMA;
        let capIngredients;
        let capStock;
        anzahlMA = Number(formData.get("mitarbeierzahl"));
        capIngredients = Number(formData.get("kapazitätTheke"));
        capStock = Number(formData.get("kapazitätRohmaterial"));
        energyMA = Number(formData.get("Energie"));
        cabbageBar = new Abschlussarbeit.Cabbage(capIngredients, capStock);
        cabbageBar.draw();
        cornBar = new Abschlussarbeit.Corn(capIngredients, capStock);
        cornBar.draw();
        lettuceBar = new Abschlussarbeit.Lettuce(capIngredients, capStock);
        lettuceBar.draw();
        onionBar = new Abschlussarbeit.Onion(capIngredients, capStock);
        onionBar.draw();
        tomatoBar = new Abschlussarbeit.Tomato(capIngredients, capStock);
        tomatoBar.draw();
        // for (let i: number = 0; i < 5; i++) {
        //     let button: HTMLButtonElement = document.createElement("button");
        //     document.getElementById("canvasDiv")?.appendChild(button);
        //     button.id = "button" + i;
        // }
        // let cabbageBtn: HTMLButtonElement;
        // cabbageBtn = <HTMLButtonElement>document.getElementById("button0");
        // let lettuceBtn: HTMLButtonElement;
        // lettuceBtn = <HTMLButtonElement>document.getElementById("button1");
        // let cornBtn: HTMLButtonElement;
        // cornBtn = <HTMLButtonElement>document.getElementById("button2");
        // let tomatoBtn: HTMLButtonElement;
        // tomatoBtn = <HTMLButtonElement>document.getElementById("button3");
        // let onionBtn: HTMLButtonElement;
        // onionBtn = <HTMLButtonElement>document.getElementById("button4");
        // cabbageBtn.addEventListener("pointerup", clickIngredient);
        // lettuceBtn.addEventListener("pointerup", clickIngredient);
        // cornBtn.addEventListener("pointerup", clickIngredient);
        // tomatoBtn.addEventListener("pointerup", clickIngredient);
        // onionBtn.addEventListener("pointerup", clickIngredient);
        createEmployees(anzahlMA);
        drawController();
    }
    function createEmployees(nEmployees) {
        formData = new FormData(document.forms[0]);
        energyMA = Number(formData.get("Energie"));
        for (let i = 0; i < nEmployees; i++) {
            let employee = new Abschlussarbeit.Employee(taskPositions[i], energyMA);
            employees.push(employee);
        }
    }
    function createCustomer() {
        let rndmPos = Math.floor(Math.random() * 800);
        customer = new Abschlussarbeit.Customer(new Abschlussarbeit.Vector(rndmPos, 550), 100);
        customerArray.push(customer);
        customer.order();
        orderText.innerHTML = customerArray[0].completeOrder.toString();
    }
    function update() {
        Abschlussarbeit.crc2.putImageData(restaurantImgData, 0, 0);
        cornBar.draw();
        lettuceBar.draw();
        onionBar.draw();
        tomatoBar.draw();
        cabbageBar.draw();
        console.log(cabbageBar.amountStock);
        Abschlussarbeit.crc2.font = "30px Arial";
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fillText(fillBarArray[0], 110, 130);
        Abschlussarbeit.crc2.font = "15px Arial";
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fillText("Verkaufte Gerichte:" + verkaufteProdukte.length, 610, 30);
        for (let i = 0; i < employees.length; i++) {
            employees[i].draw();
            employees[i].updateMood();
        }
        for (let i = 0; i < customerArray.length; i++) {
            customerArray[i].draw();
            customerArray[i].updateMood();
        }
    }
    function checkOrder() {
        if (customerArray[0].completeOrder.length == choosenIngredients.length) {
            for (let i = 0; i < customerArray[0].completeOrder.length; i++)
                if (customerArray[0].completeOrder[i] == choosenIngredients[i]) {
                    console.log("sauber");
                    verkaufteProdukte.push("x");
                    customerArray.splice(0, 1);
                    orderText.innerHTML = "";
                    choosenIngredients.length = 0;
                    orderText.innerHTML = customerArray[0].completeOrder.toString();
                }
                else {
                    console.log("false");
                }
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
    function clickFood(_event) {
        let id = _event.target;
        let idString = id.id;
        if (idString == "lahmacun") {
            choosenIngredients.push("Lahmacun");
        }
        if (idString == "yufka") {
            choosenIngredients.push("Yufka");
        }
        if (idString == "doener") {
            choosenIngredients.push("Döner");
        }
        checkOrder();
    }
    function phonecall() {
        setTimeout(preparePreparebtn, 5000);
    }
    function preparePreparebtn() {
        fillBarArray.splice(0, 1);
        fillBarArray.push("Zubereiten");
        Abschlussarbeit.crc2.font = "30px Arial";
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fillText(fillBarArray[0], 110, 130);
        // let button: HTMLButtonElement = document.createElement("button");
        // document.getElementById("canvasDiv")?.appendChild(button);
        // button.id = "buttonFuellTheke";
        // button.addEventListener("pointerup", preparation);
    }
    function preparation() {
        if (cabbageBar.amountStock < 100) {
            cabbageBar.amountStock = cabbageBar.amountStock + 25;
        }
        if (onionBar.amountStock < 100) {
            onionBar.amountStock = onionBar.amountStock + 25;
        }
        if (lettuceBar.amountStock < 100) {
            lettuceBar.amountStock = lettuceBar.amountStock + 25;
        }
        if (cornBar.amountStock < 100) {
            cornBar.amountStock = cornBar.amountStock + 25;
        }
        if (tomatoBar.amountStock < 100) {
            tomatoBar.amountStock = tomatoBar.amountStock + 25;
        }
    }
    function clickIngredientStock(_event) {
        let id = _event.target;
        let idString = id.id;
        if (idString == "salatVorrat" && cabbageBar.amountBar < 100) {
            cabbageBar.amountBar = cabbageBar.amountBar + 25;
            cabbageBar.amountStock = cabbageBar.amountStock - 25;
        }
        if (idString == "salatVorrat" && lettuceBar.amountBar < 100) {
            lettuceBar.amountBar = lettuceBar.amountBar + 25;
            lettuceBar.amountStock = lettuceBar.amountStock - 25;
        }
        if (idString == "maisVorrat" && cornBar.amountBar < 100) {
            cornBar.amountBar = cornBar.amountBar + 25;
            cornBar.amountStock = cornBar.amountStock - 25;
        }
        if (idString == "tomateVorrat" && tomatoBar.amountBar < 100) {
            tomatoBar.amountBar = tomatoBar.amountBar + 25;
            tomatoBar.amountStock = tomatoBar.amountStock - 25;
        }
        if (idString == "zwiebelVorrat" && onionBar.amountBar < 100) {
            onionBar.amountBar = onionBar.amountBar + 25;
            onionBar.amountStock = onionBar.amountStock - 25;
        }
    }
    function barSelections() {
        let cabbageBtn;
        cabbageBtn = document.getElementById("kraut");
        let lettuceBtn;
        lettuceBtn = document.getElementById("salat");
        let cornBtn;
        cornBtn = document.getElementById("mais");
        let tomatoBtn;
        tomatoBtn = document.getElementById("tomate");
        let onionBtn;
        onionBtn = document.getElementById("zwiebel");
        let doenerBtn;
        doenerBtn = document.getElementById("doener");
        let yufkaBtn;
        yufkaBtn = document.getElementById("yufka");
        let lahmacunBtn;
        lahmacunBtn = document.getElementById("lahmacun");
        lahmacunBtn.addEventListener("pointerup", clickFood);
        doenerBtn.addEventListener("pointerup", clickFood);
        yufkaBtn.addEventListener("pointerup", clickFood);
        cabbageBtn.addEventListener("pointerup", clickIngredient);
        lettuceBtn.addEventListener("pointerup", clickIngredient);
        cornBtn.addEventListener("pointerup", clickIngredient);
        tomatoBtn.addEventListener("pointerup", clickIngredient);
        onionBtn.addEventListener("pointerup", clickIngredient);
    }
    function stockSelections() {
        let cabbageBtn;
        cabbageBtn = document.getElementById("krautVorrat");
        let lettuceBtn;
        lettuceBtn = document.getElementById("salatVorrat");
        let cornBtn;
        cornBtn = document.getElementById("maisVorrat");
        let tomatoBtn;
        tomatoBtn = document.getElementById("tomateVorrat");
        let onionBtn;
        onionBtn = document.getElementById("zwiebelVorrat");
        let phoneBtn;
        phoneBtn = document.getElementById("telefon");
        let prepareBtn;
        prepareBtn = document.getElementById("zubereiten");
        cabbageBtn.addEventListener("pointerup", clickIngredientStock);
        lettuceBtn.addEventListener("pointerup", clickIngredientStock);
        cornBtn.addEventListener("pointerup", clickIngredientStock);
        tomatoBtn.addEventListener("pointerup", clickIngredientStock);
        onionBtn.addEventListener("pointerup", clickIngredientStock);
        phoneBtn.addEventListener("pointerup", phonecall);
        prepareBtn.addEventListener("pointerup", preparation);
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map