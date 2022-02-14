"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Customer extends Abschlussarbeit.Human {
        constructor(_position, _satisfaction) {
            super(_position);
            this.allFood = ["Döner", "Yufka", "Lahmacun"];
            this.allIngredients = ["Salat", "Zwiebel", "Mais", "Kraut", "Tomaten"];
            this.completeOrder = [];
            this.rndmNumFood = Math.floor(Math.random() * 3);
            this.rndmNumIngredient = Math.floor(Math.random() * 5);
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
            food = this.allFood[this.rndmNumFood];
            this.allIngredients.splice(this.rndmNumIngredient);
            // console.log(food, allIngredients);
            this.completeOrder.push(food);
            Array.prototype.push.apply(this.completeOrder, this.allIngredients);
        }
    }
    Abschlussarbeit.Customer = Customer;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Customer.js.map