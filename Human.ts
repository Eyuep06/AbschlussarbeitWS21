namespace Abschlussarbeit {
    export class Human {
        protected velocity: Vector;
        public position: Vector;
        public mood: MOOD;


        constructor(_position: Vector) {

        }

        protected move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }



        public draw(): void {

            

            //head
            crc2.fillStyle = 'yellow';
            crc2.strokeStyle = 'black';
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 45, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //eyes
            crc2.fillStyle = 'black';
            crc2.beginPath();
            crc2.arc(this.position.x - 10, this.position.y - 25, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x + 10, this.position.y - 25, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            switch (this.mood) {
                case MOOD.HAPPY:
                    crc2.strokeStyle = 'black';
                    crc2.lineWidth = 2;
                    crc2.beginPath();
                    crc2.arc(this.position.x, this.position.y, 30, 0, -1 * Math.PI);
                    crc2.stroke();
                    crc2.closePath();

                    break;

                case MOOD.MEH:
                    crc2.strokeStyle = 'black';
                    crc2.lineWidth = 2;
                    crc2.beginPath();
                    crc2.moveTo(this.position.x - 10, this.position.y + 15);
                    crc2.lineTo(this.position.x + 10, this.position.y + 15)
                    crc2.stroke();
                    crc2.closePath();

                    break;

                case MOOD.SAD:
                    crc2.strokeStyle = 'black';
                    crc2.lineWidth = 2;
                    crc2.beginPath();
                    crc2.arc(this.position.x, this.position.y + 15, 30, 0, -1 * Math.PI, true);
                    crc2.stroke();
                    crc2.closePath();

                    break;

                case MOOD.KO:
                    crc2.strokeStyle = 'black';
                    crc2.lineWidth = 2;
                    crc2.beginPath();
                    crc2.moveTo(this.position.x - 10, this.position.y + 20);
                    crc2.lineTo(this.position.x + 10, this.position.y)
                    crc2.moveTo(this.position.x + 10, this.position.y + 20)
                    crc2.lineTo(this.position.x - 10, this.position.y)
                    crc2.stroke();
                    crc2.closePath();

                    break;






            }

        }

    }

}

