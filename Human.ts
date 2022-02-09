namespace Abschlussarbeit {
    export class Human {
        velocity: Vector;
        position: Vector;
        mood: MOOD;
        energy: number;

        constructor(_position: Vector) {

        }

        move(_timeslice: number) {

        }

        draw(): void {
            //smiley
            crc2.fillStyle = 'yellow';
            crc2.strokeStyle = 'black';
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(320, 240, 200, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //eyes
            crc2.fillStyle = 'black';
            crc2.beginPath();
            crc2.arc(270, 175, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(370, 175, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            crc2.strokeStyle = 'black';
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(320, 240, 150, 0, -1 * Math.PI);
            crc2.stroke();
            crc2.closePath();

        }

        updateMood(): void {

            do { this.energy = this.energy - 1 }
            while (this.energy <= 100);


        }

    }

}
