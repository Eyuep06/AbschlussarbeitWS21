"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    //let formData: FormData;
    window.addEventListener("load", hdndlLoad);
    function hdndlLoad(_event) {
        let startButton = document.querySelector(".startButton");
        startButton.addEventListener("pointerup", startGame);
        console.log("hndlload");
    }
    function startGame() {
        //formData = new FormData(document.forms[0]);
        // let settings: HTMLFormElement = <HTMLFormElement>document.getElementById("settings");
        // settings.classList.add("hidden");
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        console.log("startgame");
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map