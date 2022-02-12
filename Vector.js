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
    }
    Abschlussarbeit.Vector = Vector;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Vector.js.map