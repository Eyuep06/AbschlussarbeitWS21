namespace Abschlussarbeit {

    let formData: FormData;
    let employees: Employee[] = [];
    let customerArray: Customer[] = [];
    let taskPositions: Vector[] = [new Vector(50, 250), new Vector(200, 250), new Vector(450, 250), new Vector(550, 350), new Vector(50, 450), new Vector(150, 450), new Vector(250, 450)];
    let energyMA: number;
    let verkaufteProdukte: string[] = [];
    let fillBarArray: string[] = [""];
    let customer: Customer;
    let orderText: HTMLParagraphElement;
    let restaurantImgData: ImageData;
    let choosenIngredients: string[] = [];
    let energyAllEmployees: number[] = [];
    let allCustomerMood: number[] = [];
    let energyAllEmployeesNum: number = 0;
    let allCustomerMoodNum: number = 0;

    let orderArea: HTMLDivElement;


    let tomatoBar: Tomato;
    let cabbageBar: Cabbage;
    let cornBar: Corn;
    let lettuceBar: Lettuce;
    let onionBar: Onion;
    export enum MOOD {
        HAPPY,
        MEH,
        SAD,
        KO
    }

    export enum TASK {
        BAR,
        CHANGE,
        PREPARE,
        ORDER,
        BREAK
    }

    window.addEventListener("load", hdndlLoad);
    export let crc2: CanvasRenderingContext2D;

    function hdndlLoad(_event: Event): void {

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = canvas.getContext("2d")!;
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".startButton");
        startButton.addEventListener("pointerup", startGame);

        orderText = document.createElement("p");

        orderArea = document.createElement("div");
        orderArea.id = "orderDiv";
        orderArea.classList.add("hidden");


        barSelections();
        stockSelections();
        orderArea.appendChild(orderText);
        body.appendChild(orderArea);
        drawRestaurant();
        window.setInterval(update, 1000);
    }


    function startGame(): void {
        document.getElementById("vorrat")?.classList.remove("hidden");
        document.getElementById("bedienung")?.classList.remove("hidden");
        getSettingData();


        formData = new FormData(document.forms[0]);
        let intervallCustomer: number;
        intervallCustomer = Number(formData.get("kundenIntervall"));

        orderArea.classList.remove("hidden");

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.removeChild(form);
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.classList.remove("hidden");
        setInterval(createCustomer, intervallCustomer * 1000);
        // hndController();
    }


    function drawRestaurant(): void {

        //white bg canvas
        crc2.fillStyle = "white";
        crc2.fillRect(0, 0, 800, 600);
        //border
        crc2.beginPath();
        crc2.rect(0, 0, 800, 600);
        //game infos
        crc2.moveTo(300, 100);
        crc2.lineTo(300, 0);
        crc2.moveTo(600, 100);
        crc2.lineTo(600, 0);
        crc2.moveTo(0, 100);
        crc2.lineTo(800, 100);
        // crc2.font = "15px Arial";
        // crc2.fillStyle = "red";
        // crc2.fillText("Gesamtzufriedenheit Kunden:", 10, 30);
        // crc2.font = "15px Arial";
        // crc2.fillStyle = "red";
        // crc2.fillText("Gesamtzufriedenheit Mitarbeiter:", 310, 30);

        crc2.font = "13px Arial";
        crc2.fillStyle = "red";
        crc2.fillText("Vorratslieferung", 5, 130);


        crc2.moveTo(0, 200);
        crc2.lineTo(800, 200);
        crc2.moveTo(100, 200);
        crc2.lineTo(100, 100);
        crc2.moveTo(300, 200);
        crc2.lineTo(300, 100);
        crc2.moveTo(400, 200);
        crc2.lineTo(400, 100);
        crc2.moveTo(500, 200);
        crc2.lineTo(500, 100);
        crc2.moveTo(600, 200);
        crc2.lineTo(600, 100);
        crc2.moveTo(700, 200);
        crc2.lineTo(700, 100);
        //ingrediennts
        crc2.moveTo(0, 400);
        crc2.lineTo(800, 400);
        crc2.moveTo(100, 500);
        crc2.lineTo(100, 400);
        crc2.moveTo(200, 500);
        crc2.lineTo(200, 400);
        crc2.moveTo(300, 500);
        crc2.lineTo(300, 400);
        crc2.moveTo(400, 500);
        crc2.lineTo(400, 400);
        crc2.moveTo(500, 500);
        crc2.lineTo(500, 400);
        crc2.moveTo(600, 500);
        crc2.lineTo(600, 400);
        crc2.moveTo(700, 500);
        crc2.lineTo(700, 400);
        //customer
        crc2.moveTo(0, 500);
        crc2.lineTo(800, 500);

        crc2.stroke();



        restaurantImgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    }


    function clickIngredient(_event: Event): void {
        let id: HTMLElement = <HTMLElement>_event.target;
        let idString: string = id.id;

        if (idString == "kraut" && cabbageBar.amountBar > 0) {
            crc2.fillStyle = "white";
            crc2.fillRect(301, 401, 98, 98);
            cabbageBar.amountBar = cabbageBar.amountBar - 25;
            cabbageBar.draw();
            choosenIngredients.push("Kraut");
        }

        if (idString == "salat" && lettuceBar.amountBar > 0) {
            crc2.fillStyle = "white";
            crc2.fillRect(401, 401, 98, 98);
            lettuceBar.amountBar = lettuceBar.amountBar - 25;
            lettuceBar.draw();
            choosenIngredients.push("Salat");
        }

        if (idString == "mais" && cornBar.amountBar > 0) {
            crc2.fillStyle = "white";
            crc2.fillRect(501, 401, 98, 98);
            cornBar.amountBar = cornBar.amountBar - 25;
            cornBar.draw();
            choosenIngredients.push("Mais");
        }

        if (idString == "tomate" && tomatoBar.amountBar > 0) {
            crc2.fillStyle = "white";
            crc2.fillRect(501, 401, 98, 98);
            tomatoBar.amountBar = tomatoBar.amountBar - 25;
            tomatoBar.draw();
            choosenIngredients.push("Tomaten");
        }

        if (idString == "zwiebel" && onionBar.amountBar > 0) {
            crc2.fillStyle = "white";
            crc2.fillRect(701, 401, 98, 98);
            onionBar.amountBar = onionBar.amountBar - 25;
            onionBar.draw();
            choosenIngredients.push("Zwiebel");
        }
        checkOrder();

    }


    function getSettingData(): void {
        formData = new FormData(document.forms[0]);
        let anzahlMA: number;
        let capIngredients: number;
        let capStock: number;


        anzahlMA = Number(formData.get("mitarbeierzahl"));
        capIngredients = Number(formData.get("kapazitätTheke"));
        capStock = Number(formData.get("kapazitätRohmaterial"));
        energyMA = Number(formData.get("Energie"));


        cabbageBar = new Cabbage(capIngredients, capStock);
        cabbageBar.draw();

        cornBar = new Corn(capIngredients, capStock);
        cornBar.draw();

        lettuceBar = new Lettuce(capIngredients, capStock);
        lettuceBar.draw();

        onionBar = new Onion(capIngredients, capStock);
        onionBar.draw();

        tomatoBar = new Tomato(capIngredients, capStock);
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


    function createEmployees(nEmployees: number): void {
        formData = new FormData(document.forms[0]);

        energyMA = Number(formData.get("Energie"));

        for (let i: number = 0; i < nEmployees; i++) {
            let employee: Employee = new Employee(taskPositions[i], energyMA);

            employees.push(employee);


        }

    }


    function createCustomer(): void {
        let rndmPos: number = Math.floor(Math.random() * 800);
        customer = new Customer(new Vector(rndmPos, 550), 100);
        customerArray.push(customer);
        customer.order();
        orderText.innerHTML = customerArray[0].completeOrder.toString();
    }


    function update(): void {
        crc2.putImageData(restaurantImgData, 0, 0);
        cornBar.draw();
        lettuceBar.draw();
        onionBar.draw();
        tomatoBar.draw();
        cabbageBar.draw();

        crc2.font = "30px Arial";
        crc2.fillStyle = "red";
        crc2.fillText(fillBarArray[0], 110, 130);

        crc2.font = "15px Arial";
        crc2.fillStyle = "red";
        crc2.fillText("Verkaufte Gerichte:" + verkaufteProdukte.length, 610, 30);

        for (let i: number = 0; i < employees.length; i++) {
            employees[i].draw();
            employees[i].updateMood();
            energyAllEmployees.push(employees[i].energy);

        }

        if (customerArray.length >= 1) {

            for (let i: number = 0; i < customerArray.length; i++) {
                customerArray[i].draw();
                customerArray[i].updateMood();
                allCustomerMood.push(customer.satisfaction);
            }

            for (let i: number = 0; i < allCustomerMood.length; i++) {
                allCustomerMoodNum += allCustomerMood[i];
            }
            allCustomerMoodNum = Math.round(allCustomerMoodNum / allCustomerMood.length);
            crc2.font = "15px Arial";
            crc2.fillStyle = "red";
            crc2.fillText("Gesamtzufriedenheit Kunden:" + allCustomerMoodNum, 10, 30);
        }

        if (allCustomerMoodNum > 65) {
            alert("Fired!");
            document.location.reload();
        }


        // for (let i: number = 0; i < allCustomerMood.length; i++) {
        //     allCustomerMoodNum += allCustomerMood[i];
        // }
        // allCustomerMoodNum = Math.round(allCustomerMoodNum / allCustomerMood.length);
        // crc2.font = "15px Arial";
        // crc2.fillStyle = "red";
        // crc2.fillText("Gesamtzufriedenheit Kunden:" + allCustomerMoodNum, 10, 30);



        for (let i: number = 0; i < energyAllEmployees.length; i++) {
            energyAllEmployeesNum += energyAllEmployees[i];
            if (energyAllEmployees.length > 4) {
                energyAllEmployees.splice(0, 4);
            }

        }

        energyAllEmployeesNum = Math.round(energyAllEmployeesNum / energyAllEmployees.length);

        crc2.font = "15px Arial";
        crc2.fillStyle = "red";
        crc2.fillText("Gesamtzufriedenheit Mitarbeiter:" + energyAllEmployeesNum, 310, 30);

        if (energyAllEmployeesNum <= 25) {
            alert("You lost, the employees quit");
            document.location.reload();

        }


    }


    function checkOrder(): void {


        if (customerArray[0].completeOrder.length == choosenIngredients.length) {

            for (let i: number = 0; i < customerArray[0].completeOrder.length; i++)
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


    function drawController(): void {
        let employeesString: string[] = [];
        let tasks: string[] = ["Theke", "Bestellung", "Zubereitung", "Füllen", "Pause"];
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        let controllerArea: HTMLDivElement;
        controllerArea = document.createElement("div");
        controllerArea.id = "controllerDiv";
        for (let i: number = 1; i < employees.length + 1; i++) {
            employeesString.push("Mitarbeiter" + i);
        }



        body.appendChild(controllerArea);
        let selectList: HTMLSelectElement = document.createElement("select");
        let selelctListTask: HTMLSelectElement = document.createElement("select");
        let controllerOkBtn: HTMLButtonElement = document.createElement("button");
        controllerOkBtn.id = "controllerOkBtn";

        selelctListTask.id = "selectTask";
        controllerOkBtn.innerHTML = "OK";

        controllerOkBtn.addEventListener("pointerup", hndController);

        selectList.id = "selectEmployee";
        controllerArea.appendChild(selectList);
        controllerArea.appendChild(selelctListTask);
        controllerArea.appendChild(controllerOkBtn);

        //Create and append the options
        for (let i: number = 0; i < employees.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");

            option.value = employeesString[i];
            option.text = employeesString[i];
            selectList.appendChild(option);
        }

        //Create and append the options
        for (let i: number = 0; i < tasks.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.id = "optionTask";
            option.value = tasks[i];
            option.text = tasks[i];
            selelctListTask.appendChild(option);
        }




    }


    function clickFood(_event: Event): void {
        let id: HTMLElement = <HTMLElement>_event.target;
        let idString: string = id.id;

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

    function phonecall(): void {

        setTimeout(preparePreparebtn, 5000);

    }

    function preparePreparebtn(): void {
        fillBarArray.splice(0, 1);
        fillBarArray.push("Zubereiten");

        crc2.font = "30px Arial";
        crc2.fillStyle = "red";
        crc2.fillText(fillBarArray[0], 110, 130);

        // let button: HTMLButtonElement = document.createElement("button");
        // document.getElementById("canvasDiv")?.appendChild(button);
        // button.id = "buttonFuellTheke";
        // button.addEventListener("pointerup", preparation);
    }


    function preparation(): void {

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


    function clickIngredientStock(_event: Event): void {
        let id: HTMLElement = <HTMLElement>_event.target;
        let idString: string = id.id;

        if (idString == "krautVorrat" && cabbageBar.amountBar < 100 && cabbageBar.amountStock >= 25) {
            cabbageBar.amountBar = cabbageBar.amountBar + 25;
            cabbageBar.amountStock = cabbageBar.amountStock - 25;

        }

        if (idString == "salatVorrat" && lettuceBar.amountBar < 100 && cabbageBar.amountStock >= 25) {
            lettuceBar.amountBar = lettuceBar.amountBar + 25;
            lettuceBar.amountStock = lettuceBar.amountStock - 25;

        }

        if (idString == "maisVorrat" && cornBar.amountBar < 100 && cabbageBar.amountStock >= 25) {
            cornBar.amountBar = cornBar.amountBar + 25;
            cornBar.amountStock = cornBar.amountStock - 25;

        }

        if (idString == "tomateVorrat" && tomatoBar.amountBar < 100 && cabbageBar.amountStock >= 25) {
            tomatoBar.amountBar = tomatoBar.amountBar + 25;
            tomatoBar.amountStock = tomatoBar.amountStock - 25;

        }


        if (idString == "zwiebelVorrat" && onionBar.amountBar < 100 && cabbageBar.amountStock >= 25) {
            onionBar.amountBar = onionBar.amountBar + 25;
            onionBar.amountStock = onionBar.amountStock - 25;

        }


    }

    function barSelections(): void {

        // document.getElementById("vorrat")?.classList.remove("hidden");
        // document.getElementById("bedienung")?.classList.remove("hidden");



        let cabbageBtn: HTMLButtonElement;
        cabbageBtn = <HTMLButtonElement>document.getElementById("kraut");

        let lettuceBtn: HTMLButtonElement;
        lettuceBtn = <HTMLButtonElement>document.getElementById("salat");

        let cornBtn: HTMLButtonElement;
        cornBtn = <HTMLButtonElement>document.getElementById("mais");

        let tomatoBtn: HTMLButtonElement;
        tomatoBtn = <HTMLButtonElement>document.getElementById("tomate");

        let onionBtn: HTMLButtonElement;
        onionBtn = <HTMLButtonElement>document.getElementById("zwiebel");

        let doenerBtn: HTMLButtonElement;
        doenerBtn = <HTMLButtonElement>document.getElementById("doener");

        let yufkaBtn: HTMLButtonElement;
        yufkaBtn = <HTMLButtonElement>document.getElementById("yufka");

        let lahmacunBtn: HTMLButtonElement;
        lahmacunBtn = <HTMLButtonElement>document.getElementById("lahmacun");

        lahmacunBtn.addEventListener("pointerup", clickFood);
        doenerBtn.addEventListener("pointerup", clickFood);
        yufkaBtn.addEventListener("pointerup", clickFood);


        cabbageBtn.addEventListener("pointerup", clickIngredient);
        lettuceBtn.addEventListener("pointerup", clickIngredient);
        cornBtn.addEventListener("pointerup", clickIngredient);
        tomatoBtn.addEventListener("pointerup", clickIngredient);
        onionBtn.addEventListener("pointerup", clickIngredient);
    }

    function stockSelections(): void {

        let cabbageBtn: HTMLButtonElement;
        cabbageBtn = <HTMLButtonElement>document.getElementById("krautVorrat");

        let lettuceBtn: HTMLButtonElement;
        lettuceBtn = <HTMLButtonElement>document.getElementById("salatVorrat");

        let cornBtn: HTMLButtonElement;
        cornBtn = <HTMLButtonElement>document.getElementById("maisVorrat");

        let tomatoBtn: HTMLButtonElement;
        tomatoBtn = <HTMLButtonElement>document.getElementById("tomateVorrat");

        let onionBtn: HTMLButtonElement;
        onionBtn = <HTMLButtonElement>document.getElementById("zwiebelVorrat");

        let phoneBtn: HTMLButtonElement;
        phoneBtn = <HTMLButtonElement>document.getElementById("telefon");

        let prepareBtn: HTMLButtonElement;
        prepareBtn = <HTMLButtonElement>document.getElementById("zubereiten");



        cabbageBtn.addEventListener("pointerup", clickIngredientStock);
        lettuceBtn.addEventListener("pointerup", clickIngredientStock);
        cornBtn.addEventListener("pointerup", clickIngredientStock);
        tomatoBtn.addEventListener("pointerup", clickIngredientStock);
        onionBtn.addEventListener("pointerup", clickIngredientStock);
        phoneBtn.addEventListener("pointerup", phonecall);
        prepareBtn.addEventListener("pointerup", preparation);

    }


    function hndController(): void {
        let auswahlMA: HTMLSelectElement;
        let auswahlTask: HTMLSelectElement;

        auswahlMA = <HTMLSelectElement>document.getElementById("selectEmployee");
        auswahlTask = <HTMLSelectElement>document.getElementById("selectTask");
        console.log(auswahlMA.value);

        if (auswahlMA.value == "Mitarbeiter1") {
            employees[0].setTask(auswahlTask.value);
            employees[0].doTask();
        }

        if (auswahlMA.value == "Mitarbeiter2") {
            employees[1].setTask(auswahlTask.value);
            employees[1].doTask();
        }

        if (auswahlMA.value == "Mitarbeiter3") {
            employees[2].setTask(auswahlTask.value);
            employees[2].doTask();
        }

        if (auswahlMA.value == "Mitarbeiter4") {
            employees[3].setTask(auswahlTask.value);
            employees[3].doTask();
        }

        if (auswahlMA.value == "Mitarbeiter5") {
            employees[4].setTask(auswahlTask.value);
            employees[4].doTask();
        }

        if (auswahlMA.value == "Mitarbeiter6") {
            employees[5].setTask(auswahlTask.value);
            employees[5].doTask();
        }

        if (auswahlMA.value == "Mitarbeiter7") {
            employees[6].setTask(auswahlTask.value);
            employees[6].doTask();
        }









    }


}