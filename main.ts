namespace Abschlussarbeit {

    let formData: FormData;
    let employees: Employee[]= [];
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
        crc2.fillStyle = "red"
        crc2.fillText("Gesamtzufriedenheit Kunden:", 10, 30);
        crc2.font = "15px Arial";
        crc2.fillStyle = "red"
        crc2.fillText("Gesamtzufriedenheit Mitarbeiter:", 310, 30);
        crc2.font = "15px Arial";
        crc2.fillStyle = "red"
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


    function deleteIngredient(_clickedIngredient: number): void {
        _clickedIngredient = _clickedIngredient - 25;
        console.log(_clickedIngredient);
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

        let tomatoBar: Tomato = new Tomato(capIngredients, capStock, tomato)
        tomatoBar.draw();

        let cabbageBar: Cabbage = new Cabbage(capIngredients, capStock, cabbage)
        cabbageBar.draw();

        let cornBar: Corn = new Corn(capIngredients, capStock, corn)
        cornBar.draw();

        let lettuceBar: Lettuce = new Lettuce(capIngredients, capStock, lettuce)
        lettuceBar.draw();

        let onionBar: Onion = new Onion(capIngredients, capStock, onion)
        onionBar.draw();

        //create Buttons for Ingredients
        for (let i: number = 0; i < 5; i++) {
            let button = document.createElement("button");
            document.getElementById("canvasDiv")?.appendChild(button);
            button.id = "button" + i;

        }

        let cabbageBtn: HTMLButtonElement;
        cabbageBtn = <HTMLButtonElement>document.getElementById("button0")

        let lettuceBtn: HTMLButtonElement;
        lettuceBtn = <HTMLButtonElement>document.getElementById("button1");

        let cornBtn: HTMLButtonElement;
        cornBtn = <HTMLButtonElement>document.getElementById("button2");

        let tomatoBtn: HTMLButtonElement;
        tomatoBtn = <HTMLButtonElement>document.getElementById("button3");

        let onionBtn: HTMLButtonElement;
        onionBtn = <HTMLButtonElement>document.getElementById("button4");

        cabbageBtn.addEventListener("pointerup", function () { deleteIngredient(cabbage) });
        lettuceBtn.addEventListener("pointerup", function () { deleteIngredient(lettuce) });
        cornBtn.addEventListener("pointerup", function () { deleteIngredient(corn) });
        tomatoBtn.addEventListener("pointerup", function () { deleteIngredient(tomato) });
        onionBtn.addEventListener("pointerup", function () { deleteIngredient(onion) });


        let doenerImg = document.createElement("img");
        doenerImg.src = "assets/doener.png";
        document.getElementById("canvasDiv")?.appendChild(doenerImg);

        let yufkaImg = document.createElement("img");
        yufkaImg.src = "assets/yufka.png"
        document.getElementById("canvasDiv")?.appendChild(yufkaImg);

        let lahmacunImg = document.createElement("img");
        lahmacunImg.src = "assets/lahmacun.png"
        document.getElementById("canvasDiv")?.appendChild(lahmacunImg);

        createEmployees(anzahlMA);

    }
// WENN DIESE FUNKTION AUSGEFÜHRT WIRD STOPPT DAS PROGRAMM
    function createEmployees(nEmployees: number): void {
        let energyMA: number;
        energyMA = Number(formData.get("Energie"));


        for (let i: number = 0; i < nEmployees; i++){
            let employee: Employee = new Employee(new Vector(50,50), energyMA)
            employees.push(employee);
        }

        for (let i: number = 0; i<employees.length; i++){
            employees[i].draw;
        }

        console.log("ich werde ausgeführt ya khelb");
        
    }




}