const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../..//pages/login'); 
const PracticeFormPage = require('../../pages/practiceFormPage'); 

test('Login and  Form Submission', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const practiceFormPage = new PracticeFormPage(page);

    // Login
    await loginPage.gotoLoginPage();
    await page.pause(); 
    await loginPage.login('Jdsz', '10@Pearls');
    await page.pause();


    // Form
    await practiceFormPage.clickForms();
    await practiceFormPage.clickPracticeForm();
    await practiceFormPage.fillFirstName('Jason');
    await page.pause();
    await practiceFormPage.fillLastName('Dsouza');
    await page.pause();
    await practiceFormPage.fillEmail('jason.dsouza@10pearls.com');
    await page.pause();
    await practiceFormPage.selectGender('Male');
    await page.pause();
    await practiceFormPage.fillMobileNumber('3462690085');
    await page.pause();
    await practiceFormPage.selectDateOfBirth('1989', '4', 'Thursday, May 11th');
    await page.pause();
    await practiceFormPage.selectSubjects('Com');
    await page.pause();
    await practiceFormPage.fillCurrentAddress('ABC street');
    await page.pause();
    await practiceFormPage.uploadPicture('img.png');
    await page.pause(); 
    await practiceFormPage.selectState('NCR');
    await practiceFormPage.selectCity('Delhi');
    await practiceFormPage.submitForm();
    await practiceFormPage.closeForm();
});
