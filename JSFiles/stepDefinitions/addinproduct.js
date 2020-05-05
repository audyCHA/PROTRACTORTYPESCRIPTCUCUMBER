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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const helper = __importStar(require("../../resources/helper.json"));
const login_page_1 = require("../pageObjects/login_page");
const add_products_1 = require("../pageObjects/add_products");
const cart_page_1 = require("../pageObjects/cart_page");
cucumber_1.Given('access the swaglabs application in his web browser', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get(helper.baseUrlQa);
}));
cucumber_1.When('add the products', () => __awaiter(void 0, void 0, void 0, function* () {
    let loginpage = new login_page_1.LoginPage();
    let addproducts = new add_products_1.AddProducts();
    yield loginpage.loginSwagLabs(helper.Products.User, helper.Products.Password);
    yield addproducts.addProductstoCart(helper.Products.onesie, helper.Products.lastName);
    yield addproducts.cartReview();
}));
cucumber_1.Then('can see the products at the cart', () => __awaiter(void 0, void 0, void 0, function* () {
    let cartpage = new cart_page_1.CartPage();
    yield cartpage.validateProducts();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaW5wcm9kdWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2FkZGlucHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFDO0FBQ3JDLG9FQUFzRDtBQUN0RCwwREFBc0Q7QUFDdEQsOERBQTBEO0FBQzFELHdEQUFvRDtBQU1wRCxnQkFBSyxDQUFDLG9EQUFvRCxFQUFFLEdBQVMsRUFBRTtJQUVuRSxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDMUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBTyxNQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7SUFFbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7SUFDaEMsSUFBSSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7SUFDcEMsTUFBTSxTQUFTLENBQUMsYUFBYSxDQUFPLE1BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFPLE1BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0YsTUFBTSxXQUFXLENBQUMsaUJBQWlCLENBQU8sTUFBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQU8sTUFBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRyxNQUFNLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtBQUVoQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQVMsRUFBRTtJQUVsRCxJQUFJLFFBQVEsR0FBRyxJQUFJLG9CQUFRLEVBQUUsQ0FBQztJQUM5QixNQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0FBRW5DLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==