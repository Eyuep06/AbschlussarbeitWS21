namespace Abschlussarbeit {

    export class Customer extends Human {

        satisfaction: number;

        constructor(_position: Vector, _satisfaction: number) {
            super(_position);
            this.position = _position;
            this.satisfaction = _satisfaction;
            this.velocity.forCustomer(100, 200);
            super.draw();
            super.move(1 / 100);
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



    }
}