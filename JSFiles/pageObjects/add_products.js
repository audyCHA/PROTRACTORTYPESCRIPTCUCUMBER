"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddProducts {
    constructor() {
        this.addCart_Onesie = protractor_1.element(protractor_1.by.css("div:nth-child(5) > div.pricebar > button"));
        this.addCart_BikeLight = protractor_1.element(protractor_1.by.css("div:nth-child(2) > div.pricebar > button"));
        this.btnCart = protractor_1.element(protractor_1.by.css(".svg-inline--fa"));
    }
    cartReview() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.btnCart.click();
        });
    }
    addProductstoCart(strProductA, strproductB) {
        return __awaiter(this, void 0, void 0, function* () {
            if (strProductA = "Sauce Labs Onesie") {
                yield this.addCart_Onesie.click();
            }
            if (strproductB = "Sauce Labs Bike Light") {
                yield this.addCart_BikeLight.click();
            }
        });
    }
}
exports.AddProducts = AddProducts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkX3Byb2R1Y3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYWRkX3Byb2R1Y3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWdFO0FBRWhFLE1BQWEsV0FBVztJQU9wQjtRQUVJLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUVLLFVBQVU7O1lBR1IsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5DLENBQUM7S0FBQTtJQUdLLGlCQUFpQixDQUFDLFdBQVcsRUFBQyxXQUFXOztZQUUzQyxJQUFHLFdBQVcsR0FBQyxtQkFBbUIsRUFBQztnQkFDL0IsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3JDO1lBRUQsSUFBRyxXQUFXLEdBQUMsdUJBQXVCLEVBQUM7Z0JBQ25DLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hDO1FBRUwsQ0FBQztLQUFBO0NBQ0o7QUFsQ0Qsa0NBa0NDIn0=