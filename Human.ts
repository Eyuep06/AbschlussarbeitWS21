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

        draw(_position: Vector): void {
            
            //smiley
            crc2.fillStyle = 'yellow';
            crc2.strokeStyle = 'black';
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.arc(_position.x, _position.y, 45, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //eyes
            crc2.fillStyle = 'black';
            crc2.beginPath();
            crc2.arc(_position.x -10, _position.y -25, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(_position.x + 10 , _position.y - 25, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            crc2.strokeStyle = 'black';
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.arc(_position.x, _position.y , 30, 0, -1 * Math.PI);
            crc2.stroke();
            crc2.closePath();

        }

        updateMood(): void {

            do { this.energy = this.energy - 1 }
            while (this.energy <= 100);


        }

    }

}
