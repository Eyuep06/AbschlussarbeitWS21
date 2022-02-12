namespace Abschlussarbeit {

    let formData: FormData;
    let employees: Employee[] = [];
    let customerArray: Customer[] = [];
    let taskPositions: Vector[] = [new Vector(50, 250), new Vector(200, 250), new Vector(450, 250), new Vector(550, 350), new Vector(1000, 650), new Vector(1000, 650), new Vector(1000, 650)];

    let customer: Customer;

    let orderText: HTMLParagraphElement;

    let restaurantImgData: ImageData;


    let choosenIngredients: string[] = [];

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

        let orderArea: HTMLDivElement;
        orderArea = document.createElement("div");
        orderArea.id = "orderDiv";



        orderArea.appendChild(orderText);


        body.appendChild(orderArea);

        drawRestaurant();

        window.setInterval(update, 1000);
        //createOrder();
    }


    function startGame(): void {
        //formData = new FormData(document.forms[0]);
        getSettingData();

        formData = new FormData(document.forms[0]);
        let intervallCustomer: number;
        intervallCustomer = Number(formData.get("kundenIntervall"));

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.removeChild(form);
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.classList.remove("hidden");
        window.setInterval(createCustomer, intervallCustomer * 1000);

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
        crc2.font = "15px Arial";
        crc2.fillStyle = "red";
        crc2.fillText("Gesamtzufriedenheit Kunden:", 10, 30);
        crc2.font = "15px Arial";
        crc2.fillStyle = "red";
        crc2.fillText("Gesamtzufriedenheit Mitarbeiter:", 310, 30);
        crc2.font = "15px Arial";
        crc2.fillStyle = "red";
        crc2.fillText("Verkaufte Gerichte:", 610, 30);
        //phone + prepare 
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

        let doenerImg: HTMLImageElement = document.createElement("img");
        doenerImg.src = "assets/doener.png";
        document.getElementById("canvasDiv")?.appendChild(doenerImg);
        doenerImg.id = "img1";

        let yufkaImg: HTMLImageElement = document.createElement("img");
        yufkaImg.src = "assets/yufka.png";
        document.getElementById("canvasDiv")?.appendChild(yufkaImg);
        yufkaImg.id = "img2";

        let lahmacunImg: HTMLImageElement = document.createElement("img");
        lahmacunImg.src = "assets/lahmacun.png";
        document.getElementById("canvasDiv")?.appendChild(lahmacunImg);
        lahmacunImg.id = "img3";

        let phoneImg: HTMLImageElement = document.createElement("img");
        phoneImg.src = "assets/Telefon.png";
        document.getElementById("canvasDiv")?.appendChild(phoneImg);
        phoneImg.id = "img4";



        lahmacunImg.addEventListener("pointerup", function (): void { clickFood("Lahmacun"); });
        doenerImg.addEventListener("pointerup", function (): void { clickFood("Döner"); });
        yufkaImg.addEventListener("pointerup", function (): void { clickFood("Yufka"); });



        restaurantImgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    }


    function clickIngredient(_event: Event): void {
        let id: HTMLElement = <HTMLElement>_event.target;
        let idString: string = id.id;

        if (idString == "button0" && cabbageBar.amountBar > 0) {
            crc2.fillStyle = "white";
            crc2.fillRect(301, 401, 98, 98);
            cabbageBar.amountBar = cabbageBar.amountBar - 25;
            cabbageBar.draw();
            choosenIngredients.push("Kraut");
        }

        if (idString == "button1" && lettuceBar.amountBar > 0) {
            crc2.fillStyle = "white";
            crc2.fillRect(401, 401, 98, 98);
            lettuceBar.amountBar = lettuceBar.amountBar - 25;
            lettuceBar.draw();
            choosenIngredients.push("Salat");
        }

        if (idString == "button2" && cornBar.amountBar > 0) {
            crc2.fillStyle = "white";
            crc2.fillRect(501, 401, 98, 98);
            cornBar.amountBar = cornBar.amountBar - 25;
            cornBar.draw();
            choosenIngredients.push("Mais");
        }

        if (idString == "button3") {
            //hier tomate
        }

        if (idString == "button4" && onionBar.amountBar > 0) {
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
        // let intervallCustomer: number;
        let capIngredients: number;
        let capStock: number;
        let energyMA: number;

        // let corn: number;
        // let lettuce: number;
        // let onion: number;
        // let cabbage: number;
        // let tomato: number;


        anzahlMA = Number(formData.get("mitarbeierzahl"));
        // intervallCustomer = Number(formData.get("kundenIntervall"));
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

        cabbageBar = new Cabbage(capIngredients, capStock);
        cabbageBar.draw();

        cornBar = new Corn(capIngredients, capStock);
        cornBar.draw();

        lettuceBar = new Lettuce(capIngredients, capStock);
        lettuceBar.draw();

        onionBar = new Onion(capIngredients, capStock);
        onionBar.draw();



        //create Buttons for Ingredients
        for (let i: number = 0; i < 5; i++) {
            let button: HTMLButtonElement = document.createElement("button");
            document.getElementById("canvasDiv")?.appendChild(button);
            button.id = "button" + i;
        }

        let cabbageBtn: HTMLButtonElement;
        cabbageBtn = <HTMLButtonElement>document.getElementById("button0");

        let lettuceBtn: HTMLButtonElement;
        lettuceBtn = <HTMLButtonElement>document.getElementById("button1");

        let cornBtn: HTMLButtonElement;
        cornBtn = <HTMLButtonElement>document.getElementById("button2");

        let tomatoBtn: HTMLButtonElement;
        tomatoBtn = <HTMLButtonElement>document.getElementById("button3");

        let onionBtn: HTMLButtonElement;
        onionBtn = <HTMLButtonElement>document.getElementById("button4");

        cabbageBtn.addEventListener("pointerup", clickIngredient);
        lettuceBtn.addEventListener("pointerup", clickIngredient);
        cornBtn.addEventListener("pointerup", clickIngredient);
        tomatoBtn.addEventListener("pointerup", clickIngredient);
        onionBtn.addEventListener("pointerup", clickIngredient);



        createEmployees(anzahlMA);
        drawController();
        // createOrder();

    }


    function createEmployees(nEmployees: number): void {
        formData = new FormData(document.forms[0]);

        let energyMA: number;
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



        // createOrder();

    }

    function update(): void {
        crc2.putImageData(restaurantImgData, 0, 0);
        cabbageBar.draw();
        cornBar.draw();
        lettuceBar.draw();
        onionBar.draw();


        for (let i: number = 0; i < employees.length; i++) {
            employees[i].draw();
            employees[i].updateMood();

        }

        for (let i: number = 0; i < customerArray.length; i++) {
            customerArray[i].draw();
            customerArray[i].updateMood();

        }


    }


    // function createOrder(): void {
    // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
    // let food: string;
    // food = allFood[rndmNumFood];
    // allIngredients.splice(rndmNumIngredient);
    // // console.log(food, allIngredients);
    // completeOrder.push(food);
    // Array.prototype.push.apply(completeOrder, allIngredients);

    // let orderArea: HTMLDivElement;
    // orderArea = document.createElement("div");
    // orderArea.id = "orderDiv";

    // let orderText: HTMLParagraphElement = document.createElement("p");
    // orderText.innerHTML =  completeOrder.toString();


    // orderArea.appendChild(orderText);

    // body.appendChild(orderArea);




    // }

    function checkOrder(): void {
        // completeOrder.sort();
        // choosenIngredients.sort();
        // console.log(customerArray[0].completeOrder);
        // console.log(choosenIngredients);

        if (customerArray[0].completeOrder.length == choosenIngredients.length) {

            for (let i: number = 0; i < customerArray[0].completeOrder.length; i++)
                if (customerArray[0].completeOrder[i] == choosenIngredients[i]) {
                    // // console.log("richtig");
                    // console.log(customerArray[0].completeOrder);
                    // console.log(customerArray[0].completeOrder);
                    // orderText.innerHTML = customerArray[0].completeOrder.toString();


                }

                else {
                    console.log("false");

                }
            orderText.innerHTML = "";
            customerArray.splice(0, 1);
            choosenIngredients.length = 0;
            customerArray[0].completeOrder.splice(0);
            orderText.innerHTML = customerArray[0].completeOrder.toString();

            let divInhalt: HTMLDivElement;
            divInhalt = <HTMLDivElement>document.getElementById("orderDiv");


        }

        // else if (completeOrder.length == choosenIngredients.length && completeOrder != choosenIngredients) {
        //     console.log("this aint it");

        // }
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
            option.value = tasks[i];
            option.text = tasks[i];
            selelctListTask.appendChild(option);
        }



    }

    function clickFood(food: string): void {

        if (food == "Lahmacun") {
            choosenIngredients.push("Lahmacun");

        }

        if (food == "Yufka") {
            choosenIngredients.push("Yufka");

        }

        if (food == "Döner") {
            choosenIngredients.push("Döner");

        }

        checkOrder();

    }




}