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
const protractor_1 = require("protractor");
const login_page_1 = require("./pageObjects/login_page");
const add_products_1 = require("./pageObjects/add_products");
const cart_page_1 = require("./pageObjects/cart_page");
const helper = __importStar(require("../resources/helper.json"));
describe('SWAG LABAS', () => {
    it('Adding products to the cart', () => __awaiter(void 0, void 0, void 0, function* () {
        let loginpage = new login_page_1.LoginPage();
        let addproducts = new add_products_1.AddProducts();
        let cartpage = new cart_page_1.CartPage();
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(helper.baseUrlQa);
        yield loginpage.loginSwagLabs(helper.Products.User, helper.Products.Password);
        yield addproducts.addProductstoCart(helper.Products.onesie, helper.Products.lastName);
        yield addproducts.cartReview();
        yield cartpage.validateProducts();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkaW5nUHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BZGRpbmdQcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMseURBQXFEO0FBQ3JELDZEQUF5RDtBQUN6RCx1REFBbUQ7QUFDbkQsaUVBQW1EO0FBRW5ELFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO0lBRTFCLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7UUFFM0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFDaEMsSUFBSSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxvQkFBUSxFQUFFLENBQUM7UUFFOUIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQU8sTUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sU0FBUyxDQUFDLGFBQWEsQ0FBTyxNQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBTyxNQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sV0FBVyxDQUFDLGlCQUFpQixDQUFPLE1BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFPLE1BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbEcsTUFBTSxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDOUIsTUFBTSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0wsQ0FBQyxDQUFDLENBQUMifQ==