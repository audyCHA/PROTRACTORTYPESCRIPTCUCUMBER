import { browser } from 'protractor';
import { LoginPage } from './pageObjects/login_page';
import { AddProducts } from './pageObjects/add_products';
import { CartPage } from './pageObjects/cart_page';
import * as helper from "../resources/helper.json";

describe('SWAG LABAS', () => {

  it('Adding products to the cart', async () => {

    let loginpage = new LoginPage();
    let addproducts = new AddProducts();
    let cartpage = new CartPage();

    await browser.waitForAngularEnabled(false)
    await browser.get((<any>helper).baseUrlQa);    
    await loginpage.loginSwagLabs((<any>helper).Products.User,(<any>helper).Products.Password);
    await addproducts.addProductstoCart((<any>helper).Products.onesie,(<any>helper).Products.lastName)
    await addproducts.cartReview()
    await cartpage.validateProducts()
  });


});