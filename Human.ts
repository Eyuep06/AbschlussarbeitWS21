namespace Abschlussarbeit {
    export class Human {
        velocity: Vector;
        position: Vector;
        mood: MOOD;


        constructor(_position: Vector) {

        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }



        draw(_position: Vector): void {


            //head
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
            crc2.arc(_position.x - 10, _position.y - 25, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(_position.x + 10, _position.y - 25, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            switch (this.mood) {
                case MOOD.HAPPY:
                    crc2.strokeStyle = 'black';
                    crc2.lineWidth = 2;
                    crc2.beginPath();
                    crc2.arc(_position.x, _position.y, 30, 0, -1 * Math.PI);
                    crc2.stroke();
                    crc2.closePath();

                    break;

                case MOOD.MEH:
                    crc2.strokeStyle = 'black';
                    crc2.lineWidth = 2;
                    crc2.beginPath();
                    crc2.moveTo(_position.x - 10, _position.y + 15);
                    crc2.lineTo(_position.x + 10, _position.y + 15)
                    crc2.stroke();
                    crc2.closePath();

                    break;

                case MOOD.SAD:
                    crc2.strokeStyle = 'black';
                    crc2.lineWidth = 2;
                    crc2.beginPath();
                    crc2.arc(_position.x, _position.y + 15, 30, 0, -1 * Math.PI, true);
                    crc2.stroke();
                    crc2.closePath();

                    break;

                case MOOD.KO:
                    crc2.strokeStyle = 'black';
                    crc2.lineWidth = 2;
                    crc2.beginPath();
                    crc2.moveTo(_position.x - 10, _position.y + 20);
                    crc2.lineTo(_position.x + 10, _position.y)
                    crc2.moveTo(_position.x + 10, _position.y + 20)
                    crc2.lineTo(_position.x - 10, _position.y)
                    crc2.stroke();
                    crc2.closePath();

                    break;






            }



        }





    }

}

