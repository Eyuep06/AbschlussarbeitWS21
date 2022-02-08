"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Onion extends Abschlussarbeit.Ingredient {
        constructor(_amountBar, _amountStock, _ownAmount) {
            super("#ECF8E0", new Abschlussarbeit.Vector(700, 400), _amountBar, _amountStock, _ownAmount);
            this.ownAmount = this.amountBar;
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;
            this.ownAmount = _amountStock;
        }
        draw() {
            Abschlussarbeit.crc2.fillStyle = this.color;
            Abschlussarbeit.crc2.fillRect(700, 400, 100, this.amountBar);
        }
    }
    Abschlussarbeit.Onion = Onion;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Onion.js.map