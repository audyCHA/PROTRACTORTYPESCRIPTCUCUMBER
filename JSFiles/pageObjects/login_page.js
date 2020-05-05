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
class LoginPage {
    constructor() {
        this.txtLogin = protractor_1.element(protractor_1.by.css("#user-name"));
        this.txtPassword = protractor_1.element(protractor_1.by.css("#password"));
        this.btnLogin = protractor_1.element(protractor_1.by.css(".btn_action"));
    }
    loginSwagLabs(strUsername, strPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                yield this.txtLogin.sendKeys(strUsername),
                yield this.txtPassword.sendKeys(strPassword),
                yield this.btnLogin.click()
            ]);
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2xvZ2luX3BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEQ7QUFHNUQsTUFBYSxTQUFTO0lBTWxCO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFJbkQsQ0FBQztJQUVLLGFBQWEsQ0FBQyxXQUFXLEVBQUMsV0FBVzs7WUFFdkMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNkLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2dCQUN6QyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztnQkFDNUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTthQUU1QixDQUFDLENBQUM7UUFFVCxDQUFDO0tBQUE7Q0FFSjtBQTNCRCw4QkEyQkMifQ==