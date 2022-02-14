namespace Abschlussarbeit {
    export class Lettuce extends Ingredient {
        
            constructor(_amountBar: number, _amountStock: number) {
                super("green", new Vector (400, 400), _amountBar, _amountStock);
                this.amountBar = _amountBar;
                this.amountStock = _amountStock;

            }    

            public draw(): void {
                crc2.fillStyle = this.color;
                crc2.fillRect(400, 400, 100, this.amountBar);
                crc2.fillRect(400, 100, 100, this.amountStock);

            }
        }

    }
