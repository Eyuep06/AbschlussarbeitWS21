"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Employee extends Abschlussarbeit.Human {
        constructor(_position, _energy) {
            super(_position);
            this.position = _position;
            this.energy = _energy;
            super.draw(_position);
            this.position = (_position);
        }
        setTask() {
        }
        doTask() {
        }
        updateMood() {
            do {
                this.energy = this.energy - 1;
            } while (this.energy <= 100);
            console.log(this.energy);
            if (this.energy >= 67) {
                this.mood = Abschlussarbeit.MOOD.HAPPY;
            }
            if (this.energy < 67 && this.energy > 33) {
                this.mood = Abschlussarbeit.MOOD.MEH;
            }
            if (this.energy < 33 && this.energy > 0) {
                this.mood = Abschlussarbeit.MOOD.SAD;
            }
            if (this.energy == 0) {
                this.mood = Abschlussarbeit.MOOD.KO;
            }
            console.log(this.mood);
        }
    }
    Abschlussarbeit.Employee = Employee;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Employee.js.map