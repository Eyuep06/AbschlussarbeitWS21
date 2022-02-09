"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Human {
        constructor(_position) {
        }
        move(_timeslice) {
        }
        draw(_position) {
            //smiley
            Abschlussarbeit.crc2.fillStyle = 'yellow';
            Abschlussarbeit.crc2.strokeStyle = 'black';
            Abschlussarbeit.crc2.lineWidth = 2;
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_position.x, _position.y, 45, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
            //eyes
            Abschlussarbeit.crc2.fillStyle = 'black';
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_position.x - 10, _position.y - 25, 5, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_position.x + 10, _position.y - 25, 5, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
            //mouth
            Abschlussarbeit.crc2.strokeStyle = 'black';
            Abschlussarbeit.crc2.lineWidth = 2;
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(_position.x, _position.y, 30, 0, -1 * Math.PI);
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
        }
        updateMood() {
            do {
                this.energy = this.energy - 1;
            } while (this.energy <= 100);
        }
    }
    Abschlussarbeit.Human = Human;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Human.js.map