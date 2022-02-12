"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Customer extends Abschlussarbeit.Human {
        constructor(_position, _satisfaction) {
            super(_position);
            this.completeOrder = [];
            this.position = _position;
            this.satisfaction = _satisfaction;
            // this.velocity.forCustomer(100, 200);
            // super.draw();
            // super.move(1 / 100);
        }
        draw() {
            super.draw();
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
        order() {
            let food;
            food = Abschlussarbeit.allFood[Abschlussarbeit.rndmNumFood];
            Abschlussarbeit.allIngredients.splice(Abschlussarbeit.rndmNumIngredient);
            // console.log(food, allIngredients);
            this.completeOrder.push(food);
            Array.prototype.push.apply(this.completeOrder, Abschlussarbeit.allIngredients);
        }
    }
    Abschlussarbeit.Customer = Customer;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Customer.js.map