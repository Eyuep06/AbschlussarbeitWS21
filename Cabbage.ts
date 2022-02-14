namespace Abschlussarbeit {
    export class Cabbage extends Ingredient {

        constructor(_amountBar: number, _amountStock: number) {
            super("purple", new Vector(300, 400), _amountBar, _amountStock);
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;

        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(300, 400, 100, this.amountBar);
            crc2.fillRect(300, 100, 100, this.amountStock);

        }
    }

}
