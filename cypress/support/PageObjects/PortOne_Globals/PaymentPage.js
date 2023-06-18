class PaymentPage {
  visitPaymentPage() {
    cy.visit("https://www.stage-page.portone.cloud/portOneGlobalPage");
  }
  LanguageDropdown() {
    cy.get("#mySelect").click();
    cy.xpath("(//ul[@role='listbox'])[1]/li")
      .contains(" English")
      .click()
      .should("have.text", " English");
  }

  WithInput_Data(amount, name, email, phonenumber, button) {
    cy.get("#amount").type(amount);
    cy.xpath("//*[@placeholder='Enter your name']").type(name);
    cy.xpath("//input[@placeholder='Enter your email']").type(email);
    cy.get(".arrow").click();
    cy.get(".country-name").contains("India").click();
    cy.xpath("//input[@placeholder='Phone Number']").type(phonenumber);
    cy.xpath("(//div[@role='button'])[3]").click();
    cy.xpath("(//li[@role='option'])[2]").click().should("have.text", "Yes");
    cy.xpath("//button[@type='button']").should(button).click({ force: true });
    cy.wait(3000);
  }
}

export default PaymentPage;
