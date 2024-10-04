// practiceFormPage.js
class PracticeFormPage {
    constructor(page) {
        this.page = page;
    }

    async clickForms() {
        await this.page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
    }

    async clickPracticeForm() {
        await this.page.getByText('Practice Form').click();
    }

    async fillFirstName(firstName) {
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }

    async fillLastName(lastName) {
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    async fillEmail(email) {
        await this.page.getByPlaceholder('name@example.com').fill(email);
    }

    async selectGender(gender) {
        await this.page.getByText(gender, { exact: true }).click();
    }

    async fillMobileNumber(mobileNumber) {
        await this.page.getByPlaceholder('Mobile Number').fill(mobileNumber);
    }

    async selectDateOfBirth(year, month, day) {
        await this.page.locator('#dateOfBirthInput').click();
        await this.page.getByRole('combobox').nth(1).selectOption(year);
        await this.page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ })
            .getByRole('combobox').selectOption(month);
        await this.page.getByLabel(`Choose ${day}`).click();
    }

    async selectSubjects(subjects) {
        await this.page.locator('.subjects-auto-complete__value-container').click();
        await this.page.locator('#subjectsInput').fill(subjects);
        await this.page.getByText('Computer Science', { exact: true }).click();
        await this.page.getByText('Sports').click();
    }

    async fillCurrentAddress(address) {
        await this.page.getByPlaceholder('Current Address').fill(address);
    }

    async uploadPicture() {
        const filePath = 'C:\\Users\\jason.dsouza\\Downloads\\img.png'; 
        await this.page.getByLabel('Select picture').setInputFiles(filePath);
    }
    
    async selectState(state) {
        await this.page.locator('#state svg').click();
        await this.page.getByText(state, { exact: true }).click();
    }

    async selectCity(city) {
        await this.page.locator('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
        await this.page.getByText(city, { exact: true }).click();
    }

    async submitForm() {
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async closeForm() {
        await this.page.getByRole('button', { name: 'Close' }).click();
    }
}

module.exports = PracticeFormPage;
