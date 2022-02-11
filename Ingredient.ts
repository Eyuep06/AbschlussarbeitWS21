namespace Abschlussarbeit {

    export abstract class Ingredient {
        color: string;
        position: Vector;
        amountBar: number;
        amountStock: number;
        // ownAmount: number;

        constructor(_color: string, _position: Vector, _amountBar: number, _amountStock: number) {
            this.color = _color;
            this.position = _position;
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;
            // this.ownAmount = _ownAmount;

        }

        abstract draw(): void;

    }

}