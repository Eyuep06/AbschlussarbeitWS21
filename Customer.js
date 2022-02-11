"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Customer extends Abschlussarbeit.Human {
        constructor(_position, _satisfaction) {
            super(_position);
            this.position = _position;
            this.satisfaction = _satisfaction;
        }
        move() {
            //mach ich am Ende
        }
        updateMood() {
            this.satisfaction = this.satisfaction - 5;
            if (this.satisfaction >= 67) {
                this.mood = Abschlussarbeit.MOOD.HAPPY;
            }
            if (this.satisfaction < 67 && this.satisfaction > 33) {
                this.mood = Abschlussarbeit.MOOD.MEH;
            }
            if (this.satisfaction <= 33) {
                this.mood = Abschlussarbeit.MOOD.SAD;
            }
        }
    }
    Abschlussarbeit.Customer = Customer;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Customer.js.map