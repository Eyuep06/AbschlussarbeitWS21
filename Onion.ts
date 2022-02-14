namespace Abschlussarbeit {
    export class Onion extends Ingredient {
        
            constructor(_amountBar: number, _amountStock: number) {
                super("#ECF8E0", new Vector (700, 400), _amountBar, _amountStock);
                this.amountBar = _amountBar;
                this.amountStock = _amountStock;
                
            }    

            draw(): void {
                crc2.fillStyle = this.color;
                crc2.fillRect(700, 400, 100, this.amountBar);

                crc2.fillRect(700, 100, 100, this.amountStock);
                
            }
        }

    }
