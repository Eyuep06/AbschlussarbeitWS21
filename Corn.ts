namespace Abschlussarbeit {
    export class Corn extends Ingredient {

        constructor(_amountBar: number, _amountStock: number) {
            super("yellow", new Vector(500, 400), _amountBar, _amountStock);
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;

        }

        public draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(500, 400, 100, this.amountBar);
            crc2.fillRect(500, 100, 100, this.amountStock);

        }
    }

}
