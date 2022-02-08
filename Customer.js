"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Customer extends Abschlussarbeit.Human {
        constructor(_position) {
            super(_position);
            this.position = _position;
        }
        order() {
        }
    }
    Abschlussarbeit.Customer = Customer;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Customer.js.map