const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const shared = require('@wdio/shared-store-service');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await shared.setValue('nombre','cynthia');
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        let temp = await shared.getValue('nombre');
        console.log(temp);
    });
});


