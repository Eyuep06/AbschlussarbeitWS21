namespace Abschlussarbeit {

    export class Customer extends Human {

        satisfaction: number;

        constructor(_position: Vector, _satisfaction: number) {
            super(new Vector(50, 500));
            this.position = _position;
            this.satisfaction = _satisfaction;
            this.velocity.forCustomer(100, 200);
            super.draw(this.position);
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