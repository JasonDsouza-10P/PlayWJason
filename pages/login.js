// login.js
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameTextbox = page.getByPlaceholder('UserName');
        this.passwordTextbox = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
        await this.page.goto('https://demoqa.com/login');
    }

    async login(username, password) {
        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };
