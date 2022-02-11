"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Cabbage extends Abschlussarbeit.Ingredient {
        constructor(_amountBar, _amountStock) {
            super("purple", new Abschlussarbeit.Vector(300, 400), _amountBar, _amountStock);
            // this.ownAmount = this.amountBar;
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;
            // this.ownAmount = _amountStock;
        }
        draw() {
            Abschlussarbeit.crc2.fillStyle = this.color;
            Abschlussarbeit.crc2.fillRect(300, 400, 100, this.amountBar);
            Abschlussarbeit.crc2.fillRect(300, 100, 100, this.amountStock);
        }
    }
    Abschlussarbeit.Cabbage = Cabbage;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Cabbage.js.map