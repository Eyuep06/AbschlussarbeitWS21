"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Corn extends Abschlussarbeit.Ingredient {
        constructor(_amountBar, _amountStock) {
            super("yellow", new Abschlussarbeit.Vector(500, 400), _amountBar, _amountStock);
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;
        }
        draw() {
            Abschlussarbeit.crc2.fillStyle = this.color;
            Abschlussarbeit.crc2.fillRect(500, 400, 100, this.amountBar);
            Abschlussarbeit.crc2.fillRect(500, 100, 100, this.amountStock);
        }
    }
    Abschlussarbeit.Corn = Corn;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Corn.js.map