namespace Abschlussarbeit {

    export class Employee extends Human {
        task: TASK;

        constructor(_position: Vector, _energy: number) {
            super(_position)
            this.position = _position;
            this.energy = _energy;
            super.draw();
        }

        setTask(): void {

        }


        doTask(): void {

        }








}
}