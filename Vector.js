"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addEnd) {
            this.x += _addEnd.x;
            this.y += _addEnd.y;
        }
        forCustomer(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            this.set(Math.cos(1), Math.sin(0));
            this.scale(length);
        }
    }
    Abschlussarbeit.Vector = Vector;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Vector.js.map