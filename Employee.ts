namespace Abschlussarbeit {

    export class Employee extends Human {
        task: TASK;
        energy: number;

        constructor(_position: Vector, _energy: number) {
            super(_position);
            this.position = _position;
            this.energy = _energy;
            super.draw();
            this.position = (_position);


        }

        setTask(): void {
            // mach ich noch
        }


        doTask(): void {
            //mach ich noch
        }

        updateMood(): void {

            this.energy = this.energy - 1;



            if (this.energy >= 67) {
                this.mood = MOOD.HAPPY;
            }

            if (this.energy < 67 && this.energy > 33) {
                this.mood = MOOD.MEH;
            }

            if (this.energy <= 33 && this.energy > 0) {
                this.mood = MOOD.SAD;
            }

            if (this.energy == 0) {
                this.mood = MOOD.KO;
            }





        }









    }
}