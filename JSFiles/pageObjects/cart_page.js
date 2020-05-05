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
class CartPage {
    constructor() {
        this.itemA = protractor_1.element(protractor_1.by.css("#item_0_title_link > div"));
        this.itemB = protractor_1.element(protractor_1.by.css("#item_2_title_link > div"));
    }
    validateProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.itemA.click();
            //await this.itemB.click()
            //expect(await this.itemA.isDisplayed()).toBe(true)
            //expect(await this.itemB.isDisplayed()).toBe(true)     
        });
    }
}
exports.CartPage = CartPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydF9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2FydF9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlFO0FBRWpFLE1BQWEsUUFBUTtJQU1qQjtRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7SUFFN0QsQ0FBQztJQUVLLGdCQUFnQjs7WUFHbEIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ3hCLDBCQUEwQjtZQUMxQixtREFBbUQ7WUFDbkQsd0RBQXdEO1FBRzVELENBQUM7S0FBQTtDQUVKO0FBeEJELDRCQXdCQyJ9