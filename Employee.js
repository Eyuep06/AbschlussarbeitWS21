"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Employee extends Abschlussarbeit.Human {
        constructor(_position, _energy) {
            super(_position);
            this.position = _position;
            this.energy = _energy;
            super.draw();
            this.position = (_position);
        }
        setTask(_task) {
            if (_task == "Theke") {
                this.task = Abschlussarbeit.TASK.BAR;
            }
            if (_task == "Bestellung") {
                this.task = Abschlussarbeit.TASK.ORDER;
            }
            if (_task == "Zubereitung") {
                this.task = Abschlussarbeit.TASK.PREPARE;
            }
            if (_task == "Füllen") {
                this.task = Abschlussarbeit.TASK.CHANGE;
            }
            if (_task == "Pause") {
                this.task = Abschlussarbeit.TASK.BREAK;
            }
        }
        doTask() {
            if (this.task == Abschlussarbeit.TASK.BAR) {
                this.position.x = 550;
                this.position.y = 350;
            }
            if (this.task == Abschlussarbeit.TASK.CHANGE) {
                this.position.x = 450;
                this.position.y = 250;
            }
            if (this.task == Abschlussarbeit.TASK.ORDER) {
                this.position.x = 50;
                this.position.y = 250;
            }
            if (this.task == Abschlussarbeit.TASK.PREPARE) {
                this.position.x = 200;
                this.position.y = 250;
            }
            if (this.task == Abschlussarbeit.TASK.BREAK) {
                this.position.x = Math.floor(Math.random() * (250 - 50)) + 50;
                this.position.y = 450;
                do {
                    this.energy = this.energy + 5;
                } while (this.energy <= 100);
            }
        }
        updateMood() {
            this.energy = this.energy - 1;
            if (this.energy >= 67) {
                this.mood = Abschlussarbeit.MOOD.HAPPY;
            }
            if (this.energy < 67 && this.energy > 33) {
                this.mood = Abschlussarbeit.MOOD.MEH;
            }
            if (this.energy <= 33 && this.energy > 0) {
                this.mood = Abschlussarbeit.MOOD.SAD;
            }
            if (this.energy == 0) {
                this.mood = Abschlussarbeit.MOOD.KO;
            }
        }
    }
    Abschlussarbeit.Employee = Employee;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Employee.js.map