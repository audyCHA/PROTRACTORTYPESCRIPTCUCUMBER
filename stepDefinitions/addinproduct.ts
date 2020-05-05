import { Given, When, Then } from "cucumber";
import { browser } from 'protractor';
import * as helper from "../../resources/helper.json";
import { LoginPage } from '../pageObjects/login_page';
import { AddProducts } from '../pageObjects/add_products';
import { CartPage } from '../pageObjects/cart_page';





Given('access the swaglabs application in his web browser', async () => {
    
    await browser.waitForAngularEnabled(false)
    await browser.get((<any>helper).baseUrlQa); 

  });

  When('add the products', async () => {

    let loginpage = new LoginPage();
    let addproducts = new AddProducts();
    await loginpage.loginSwagLabs((<any>helper).Products.User,(<any>helper).Products.Password);
    await addproducts.addProductstoCart((<any>helper).Products.onesie,(<any>helper).Products.lastName)
    await addproducts.cartReview()
   
  });

  Then('can see the products at the cart', async () => {
      
    let cartpage = new CartPage();
    await cartpage.validateProducts()
    
  });