"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Lettuce extends Abschlussarbeit.Ingredient {
        constructor(_amountBar, _amountStock, _ownAmount) {
            super("green", new Abschlussarbeit.Vector(400, 400), _amountBar, _amountStock, _ownAmount);
            this.ownAmount = this.amountBar;
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;
            this.ownAmount = _amountStock;
        }
        draw() {
            Abschlussarbeit.crc2.fillStyle = this.color;
            Abschlussarbeit.crc2.fillRect(400, 400, 100, this.amountBar);
            Abschlussarbeit.crc2.fillRect(400, 100, 100, this.amountStock);
        }
    }
    Abschlussarbeit.Lettuce = Lettuce;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Lettuce.js.map