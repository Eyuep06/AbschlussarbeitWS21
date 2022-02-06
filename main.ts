namespace Abschlussarbeit {

    //let formData: FormData;

    window.addEventListener("load", hdndlLoad);

    function hdndlLoad(_event: Event): void {
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".startButton");
        startButton.addEventListener("pointerup", startGame);
        console.log("hndlload");

    }


    function startGame(): void {
        //formData = new FormData(document.forms[0]);
        // let settings: HTMLFormElement = <HTMLFormElement>document.getElementById("settings");
        // settings.classList.add("hidden");
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.removeChild(form);
        console.log("startgame");

    }

}