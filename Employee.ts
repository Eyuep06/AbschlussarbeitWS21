namespace Abschlussarbeit {

    export class Employee extends Human {
       public task: TASK;
       public energy: number;

        constructor(_position: Vector, _energy: number) {
            super(_position);
            this.position = _position;
            this.energy = _energy;
            super.draw();
            this.position = (_position);


        }

        public setTask(_task: string): void {
            if (_task == "Theke") {
                this.task = TASK.BAR;

            }

            if (_task == "Bestellung") {
                this.task = TASK.ORDER;

            }

            if (_task == "Zubereitung") {
                this.task = TASK.PREPARE;

            }

            if (_task == "Füllen") {
                this.task = TASK.CHANGE;

            }

            if (_task == "Pause") {
                this.task = TASK.BREAK;

            }

        }


        public doTask(): void {
            if (this.task == TASK.BAR) {
                this.position.x = 550;
                this.position.y = 350;


            }

            if (this.task == TASK.CHANGE) {
                this.position.x = 450;
                this.position.y = 250;


            }



            if (this.task == TASK.ORDER) {
                this.position.x = 50;
                this.position.y = 250;


            }

            if (this.task == TASK.PREPARE) {
                this.position.x = 200;
                this.position.y = 250;


            }

            if (this.task == TASK.BREAK) {
                this.position.x = Math.floor(Math.random() * (250 - 50)) + 50;
                this.position.y = 450;

                do { this.energy = this.energy + 5; }
                while (this.energy <= 100);


            }
        }

        public updateMood(): void {

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