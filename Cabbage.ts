namespace Abschlussarbeit {
    export class Cabbage extends Ingredient {

        constructor(_amountBar: number, _amountStock: number, _ownAmount: number) {
            super("purple", new Vector(300, 400), _amountBar, _amountStock, _ownAmount);
            this.ownAmount = this.amountBar;
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;
            this.ownAmount = _amountStock;

        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(300, 400, 100, this.amountBar);
            crc2.fillRect(300, 100, 100, this.amountStock);

        }
    }

}
