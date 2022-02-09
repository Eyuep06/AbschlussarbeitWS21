"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Human {
        constructor(_position) {
        }
        move(_timeslice) {
        }
        draw() {
            //smiley
            Abschlussarbeit.crc2.fillStyle = 'yellow';
            Abschlussarbeit.crc2.strokeStyle = 'black';
            Abschlussarbeit.crc2.lineWidth = 5;
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(320, 240, 200, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
            //eyes
            Abschlussarbeit.crc2.fillStyle = 'black';
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(270, 175, 30, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(370, 175, 30, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.closePath();
            //mouth
            Abschlussarbeit.crc2.strokeStyle = 'black';
            Abschlussarbeit.crc2.lineWidth = 5;
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(320, 240, 150, 0, -1 * Math.PI);
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