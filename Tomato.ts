namespace Abschlussarbeit {
    export class Tomato extends Ingredient {

        constructor(_amountBar: number, _amountStock: number) {
            super("red", new Vector(600, 400), _amountBar, _amountStock);
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;

        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(600, 400, 100, this.amountBar);
            crc2.fillRect(600, 100, 100, this.amountStock);

        }
    }

}
