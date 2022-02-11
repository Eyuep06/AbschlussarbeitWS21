"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Customer extends Abschlussarbeit.Human {
        constructor(_position, _satisfaction) {
            super(new Abschlussarbeit.Vector(50, 500));
            this.position = _position;
            this.satisfaction = _satisfaction;
            this.velocity.forCustomer(100, 200);
            super.draw(this.position);
            super.move(1 / 100);
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