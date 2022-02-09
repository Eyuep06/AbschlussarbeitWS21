"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Tomato extends Abschlussarbeit.Ingredient {
        constructor(_amountBar, _amountStock, _ownAmount) {
            super("red", new Abschlussarbeit.Vector(600, 400), _amountBar, _amountStock, _ownAmount);
            this.ownAmount = this.amountBar;
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;
            this.ownAmount = _amountStock;
        }
        draw() {
            Abschlussarbeit.crc2.fillStyle = this.color;
            Abschlussarbeit.crc2.fillRect(600, 400, 100, this.amountBar);
            Abschlussarbeit.crc2.fillRect(600, 100, 100, this.amountStock);
        }
    }
    Abschlussarbeit.Tomato = Tomato;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Tomato.js.map