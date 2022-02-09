namespace Abschlussarbeit {

    export class Employee extends Human {
        task: TASK;
        energy: number;

        constructor(_position: Vector, _energy: number) {
            super(_position)
            this.position = _position;
            this.energy = _energy;
            super.draw(_position);
            this.position = (_position);


        }

        setTask(): void {

        }


        doTask(): void {

        }

        updateMood(): void {

            do { this.energy = this.energy - 1 }
            while (this.energy <= 100);
            console.log(this.energy);


            if (this.energy >= 67) {
               this.mood = MOOD.HAPPY
            }

            if (this.energy < 67 && this.energy > 33) {
                this.mood = MOOD.MEH
            }

            if (this.energy < 33 && this.energy > 0) {
                this.mood = MOOD.SAD
            }

            if (this.energy == 0) {
               this.mood = MOOD.KO
            }

            console.log(this.mood);
            



        }









    }
}