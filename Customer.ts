namespace Abschlussarbeit {

    export class Customer extends Human {

        allFood: string[] = ["Döner", "Yufka", "Lahmacun"];
        allIngredients: string[] = ["Salat", "Zwiebel", "Mais", "Kraut", "Tomaten"];

        rndmNumFood: number = Math.floor(Math.random() * 3);
        rndmNumIngredient: number = Math.floor(Math.random() * 5);

        completeOrder: string[] = [];
        satisfaction: number;

        constructor(_position: Vector, _satisfaction: number) {
            super(_position);
            this.position = _position;
            this.satisfaction = _satisfaction;
            // this.velocity.forCustomer(100, 200);
            // super.draw();
            // super.move(1 / 100);
        }

        draw(): void {
            super.draw();
        }



        updateMood(): void {
            this.satisfaction = this.satisfaction - 5;



            if (this.satisfaction >= 67) {
                this.mood = MOOD.HAPPY;
            }

            if (this.satisfaction < 67 && this.satisfaction > 33) {
                this.mood = MOOD.MEH;
            }

            if (this.satisfaction <= 33) {
                this.mood = MOOD.SAD;
            }
        }

        order(): void {
            let food: string;
            food = this.allFood[this.rndmNumFood];
            this.allIngredients.splice(this.rndmNumIngredient);
            // console.log(food, allIngredients);
            this.completeOrder.push(food);
            Array.prototype.push.apply(this.completeOrder, this.allIngredients);


        }



    }
}