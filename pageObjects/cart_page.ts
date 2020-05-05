import { ElementFinder, element, by, browser } from "protractor";

export class CartPage {

    itemA: ElementFinder;
    itemB: ElementFinder;
  
    
    constructor() {

        this.itemA = element(by.css("#item_0_title_link > div"));
        this.itemB = element(by.css("#item_2_title_link > div"));
        
    }

    async validateProducts() {
                  
        
        await this.itemA.click()
        //await this.itemB.click()
        //expect(await this.itemA.isDisplayed()).toBe(true)
        //expect(await this.itemB.isDisplayed()).toBe(true)     
         
     
    }

}