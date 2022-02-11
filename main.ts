namespace Abschlussarbeit {

    let formData: FormData;
    let employees: Employee[] = [];
    let taskPositions: Vector[] = [new Vector(50, 250), new Vector(200, 250), new Vector(450, 250), new Vector(550, 350)];

    let allFood: string[] = ["Döner", "Yufka", "Lahmacun"];
    let allIngredients: string[] = ["Salat", "Zwiebel", "Mais", "Kraut", "Tomaten"];
    let completeOrder: string[] = [];
    let rndmNumFood: number;
    let rndmNumIngredient: number;

    rndmNumFood = Math.floor(Math.random() * 3);
    rndmNumIngredient = Math.floor(Math.random() * 5);

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
        ORDER
    }

    window.addEventListener("load", hdndlLoad);

    export let crc2: CanvasRenderingContext2D;


    function hdndlLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = canvas.getContext("2d")!;
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".startButton");
        startButton.addEventListener("pointerup", startGame);

        drawRestaurant();
        window.setInterval(update, 1000);
        createOrder();
    }


    function startGame(): void {
        //formData = new FormData(document.forms[0]);
        getSettingData();

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.removeChild(form);
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.classList.remove("hidden");

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
    }


    function deleteIngredient(): void {
        cornBar.amountBar = cornBar.amountBar - 25;
        cornBar.draw();
        console.log(cornBar.amountBar);



    }


    function getSettingData(): void {
        formData = new FormData(document.forms[0]);
        let anzahlMA: number;
        let intervallCustomer: number;
        let capIngredients: number;
        let capStock: number;
        let energyMA: number;

        let corn: number;
        let lettuce: number;
        let onion: number;
        let cabbage: number;
        let tomato: number;


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

        tomatoBar = new Tomato(capIngredients, capStock, tomato);
        tomatoBar.draw();

        cabbageBar = new Cabbage(capIngredients, capStock, cabbage);
        cabbageBar.draw();

        cornBar = new Corn(capIngredients, capStock, corn);
        cornBar.draw();

        lettuceBar = new Lettuce(capIngredients, capStock, lettuce);
        lettuceBar.draw();

        onionBar = new Onion(capIngredients, capStock, onion);
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

        cabbageBtn.addEventListener("pointerup", function (): void { deleteIngredient(); });
        lettuceBtn.addEventListener("pointerup", function (): void { deleteIngredient(); });
        cornBtn.addEventListener("pointerup", function (): void { deleteIngredient(); });
        tomatoBtn.addEventListener("pointerup", function (): void { deleteIngredient(); });
        onionBtn.addEventListener("pointerup", function (): void { deleteIngredient(); });


        let doenerImg: HTMLImageElement = document.createElement("img");
        doenerImg.src = "assets/doener.png";
        document.getElementById("canvasDiv")?.appendChild(doenerImg);

        let yufkaImg: HTMLImageElement = document.createElement("img");
        yufkaImg.src = "assets/yufka.png";
        document.getElementById("canvasDiv")?.appendChild(yufkaImg);

        let lahmacunImg: HTMLImageElement = document.createElement("img");
        lahmacunImg.src = "assets/lahmacun.png";
        document.getElementById("canvasDiv")?.appendChild(lahmacunImg);

        createEmployees(anzahlMA);
    }


    function createEmployees(nEmployees: number): void {
        formData = new FormData(document.forms[0]);

        let energyMA: number;
        energyMA = Number(formData.get("Energie"));


        for (let i: number = 0; i < nEmployees; i++) {
            let employee: Employee = new Employee(taskPositions[i], energyMA);
            employees.push(employee);
        }

        // console.log();
    }


    function update(): void {
        for (let i: number = 0; i < employees.length; i++) {
            employees[i].draw(taskPositions[i]);
            employees[i].updateMood();
        }


    }

    function createOrder(): void {
        let food: string;
        food = allFood[rndmNumFood];
        allIngredients.splice(rndmNumIngredient);
        // console.log(food, allIngredients);
        completeOrder.push(food);
        Array.prototype.push.apply(completeOrder, allIngredients);
        console.log(completeOrder);
        


    }


}