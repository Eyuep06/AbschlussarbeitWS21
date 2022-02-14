namespace Abschlussarbeit {

    export abstract class Ingredient {
        public amountBar: number;
        public amountStock: number;
        protected color: string;
        protected position: Vector;
        

        constructor(_color: string, _position: Vector, _amountBar: number, _amountStock: number) {
            this.color = _color;
            this.position = _position;
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;

        }

        abstract draw(): void;

    }

}