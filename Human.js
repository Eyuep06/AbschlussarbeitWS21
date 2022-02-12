"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Human {
        constructor(_position) {
        }
        move(_timeslice) {
            let offset = new Abschlussarbeit.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        draw() {
            //head
            Abschlussarbeit.crc2.fillStyle = 'yellow';
            Abschlussarbeit.crc2.strokeStyle = 'black';
            Abschlussarbeit.crc2.lineWidth = 2;
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.position.x, this.position.y, 45, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
            //eyes
            Abschlussarbeit.crc2.fillStyle = 'black';
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.position.x - 10, this.position.y - 25, 5, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.position.x + 10, this.position.y - 25, 5, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
            //mouth
            switch (this.mood) {
                case Abschlussarbeit.MOOD.HAPPY:
                    Abschlussarbeit.crc2.strokeStyle = 'black';
                    Abschlussarbeit.crc2.lineWidth = 2;
                    Abschlussarbeit.crc2.beginPath();
                    Abschlussarbeit.crc2.arc(this.position.x, this.position.y, 30, 0, -1 * Math.PI);
                    Abschlussarbeit.crc2.stroke();
                    Abschlussarbeit.crc2.closePath();
                    break;
                case Abschlussarbeit.MOOD.MEH:
                    Abschlussarbeit.crc2.strokeStyle = 'black';
                    Abschlussarbeit.crc2.lineWidth = 2;
                    Abschlussarbeit.crc2.beginPath();
                    Abschlussarbeit.crc2.moveTo(this.position.x - 10, this.position.y + 15);
                    Abschlussarbeit.crc2.lineTo(this.position.x + 10, this.position.y + 15);
                    Abschlussarbeit.crc2.stroke();
                    Abschlussarbeit.crc2.closePath();
                    break;
                case Abschlussarbeit.MOOD.SAD:
                    Abschlussarbeit.crc2.strokeStyle = 'black';
                    Abschlussarbeit.crc2.lineWidth = 2;
                    Abschlussarbeit.crc2.beginPath();
                    Abschlussarbeit.crc2.arc(this.position.x, this.position.y + 15, 30, 0, -1 * Math.PI, true);
                    Abschlussarbeit.crc2.stroke();
                    Abschlussarbeit.crc2.closePath();
                    break;
                case Abschlussarbeit.MOOD.KO:
                    Abschlussarbeit.crc2.strokeStyle = 'black';
                    Abschlussarbeit.crc2.lineWidth = 2;
                    Abschlussarbeit.crc2.beginPath();
                    Abschlussarbeit.crc2.moveTo(this.position.x - 10, this.position.y + 20);
                    Abschlussarbeit.crc2.lineTo(this.position.x + 10, this.position.y);
                    Abschlussarbeit.crc2.moveTo(this.position.x + 10, this.position.y + 20);
                    Abschlussarbeit.crc2.lineTo(this.position.x - 10, this.position.y);
                    Abschlussarbeit.crc2.stroke();
                    Abschlussarbeit.crc2.closePath();
                    break;
            }
        }
    }
    Abschlussarbeit.Human = Human;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Human.js.map