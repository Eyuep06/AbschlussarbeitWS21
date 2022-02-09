"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Employee extends Abschlussarbeit.Human {
        constructor(_position, _energy) {
            super(_position);
            this.position = _position;
            this.energy = _energy;
            super.draw();
        }
        setTask() {
        }
        doTask() {
        }
    }
    Abschlussarbeit.Employee = Employee;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Employee.js.map