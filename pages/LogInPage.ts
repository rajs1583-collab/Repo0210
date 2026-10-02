import{Page,Locator} from '@playwright/test';

export class LoginPage{

    private readonly page:Page;
    private readonly Username: Locator;
    private readonly Password: Locator;
    private readonly Submit: Locator;

    constructor (page:Page){
           
        this.page = page;
        this.Username = page.getByLabel ("Username");
        this.Password = page.getByLabel ("Password");
        this.Submit = page.getByRole ('button', {name: 'Submit'})

    }

    async login(username:string,password:string){

        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.Submit.click();
    }
}