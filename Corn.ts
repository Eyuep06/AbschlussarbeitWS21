namespace Abschlussarbeit{
    export class Corn extends Ingredient {
        
            constructor(_amountBar: number, _amountStock: number, _ownAmount: number) {
                super("yellow", new Vector (500, 400), _amountBar, _amountStock, _ownAmount)
                this.ownAmount = this.amountBar;
                this.amountBar = _amountBar;
                this.amountStock = _amountStock;
                this.ownAmount = _amountStock;

            }    

            draw(): void {
                crc2.fillStyle = this.color;
                crc2.fillRect(500, 400, 100, this.amountBar);
            }
        }

    }
