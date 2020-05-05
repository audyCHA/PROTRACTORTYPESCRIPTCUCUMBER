import { ElementFinder, element, by, By } from "protractor";
import { browser } from 'protractor';

export class LoginPage {

    txtLogin: ElementFinder;
    txtPassword: ElementFinder;
    btnLogin: ElementFinder;
    
    constructor() {
        
        this.txtLogin = element(by.css("#user-name"));
        this.txtPassword = element(by.css("#password"));
        this.btnLogin = element(by.css(".btn_action"));

        
       
    }

    async loginSwagLabs(strUsername,strPassword) {

        await Promise.all([
            await this.txtLogin.sendKeys(strUsername),
            await this.txtPassword.sendKeys(strPassword),
            await this.btnLogin.click()
            
          ]);                     
        
    }
       
}