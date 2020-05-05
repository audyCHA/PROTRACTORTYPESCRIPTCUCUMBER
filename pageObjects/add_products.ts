import { ElementFinder, element, by, browser} from "protractor";

export class AddProducts {

    addCart_Onesie: ElementFinder;
    addCart_BikeLight: ElementFinder;
    btnCart: ElementFinder;
   
    
    constructor() {

        this.addCart_Onesie = element(by.css("div:nth-child(5) > div.pricebar > button"));
        this.addCart_BikeLight = element(by.css("div:nth-child(2) > div.pricebar > button"));
        this.btnCart = element(by.css(".svg-inline--fa"));      
        
    }

    async cartReview() {

     
            await this.btnCart.click(); 
       
    }


    async addProductstoCart(strProductA,strproductB) {

        if(strProductA="Sauce Labs Onesie"){
            await this.addCart_Onesie.click();
        }

        if(strproductB="Sauce Labs Bike Light"){
            await this.addCart_BikeLight.click(); 
        }
                    
    }
}