namespace Abschlussarbeit{
    export class Tomato extends Ingredient {
        
            constructor(_amountBar: number, _amountStock: number, _ownAmount: number) {
                super("red", new Vector (600, 400), _amountBar, _amountStock, _ownAmount)
                this.ownAmount = this.amountBar;
                this.amountBar = _amountBar;
                this.amountStock = _amountStock;
                this.ownAmount = _amountStock;

            }    

            draw(): void {
                crc2.fillStyle = this.color;
                crc2.fillRect(600, 400, 100, this.amountBar);
                crc2.fillRect(600, 100, 100, this.amountStock)

            }
        }

    }
