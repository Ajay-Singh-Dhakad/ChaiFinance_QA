import PaymentPage from "../../support/PageObjects/PortOne_Globals/PaymentPage";

describe("Testing the Payment page of PortOne Globals", () => {
  const paymentPage = new PaymentPage();
  beforeEach("Launching the website", () => {
    paymentPage.visitPaymentPage();
    paymentPage.LanguageDropdown();
    cy.fixture("InvalidData").then((invaliddata) => {
      globalThis.invaliddata = invaliddata;
    });
  });
  before(() => {
    cy.fixture("ValidData").then((data) => {
      globalThis.data = data;
    });
  });
  it("TC001_PortOneGlobal_ PaymentPage_LanguageDropdown", () => {
    paymentPage.LanguageDropdown();
  });

  it("TC002_PortOneGlobal_PaymentPage_PaymentDetailsForm_with Invalid Amount", () => {
    paymentPage.WithInput_Data(
      invaliddata[0].amount,
      invaliddata[0].name,
      invaliddata[0].email,
      invaliddata[0].PhoneNumber,
      invaliddata[0].button
    );
    cy.get(".MuiAlert-message").then((t) => {
      const err = t.text();
      expect(err).eq(
        "The amount selected is invalid. Amount should be between : 10000.000000 - 20000.000000"
      );
    });
  });
  it("TC003_PortOneGlobal_PaymentPage_PaymentDetailsForm with Invalid Email", () => {
    paymentPage.WithInput_Data(
      invaliddata[1].amount,
      invaliddata[1].name,
      invaliddata[1].email,
      invaliddata[1].PhoneNumber,
      invaliddata[1].button
    );
    cy.xpath("//p[text()='Invalid Email']").then((errtext) => {
      const invalidEmail = errtext.text();
      expect(invalidEmail).eq("Invalid Email");
    });
  });
  it("TC004_PortOneGlobal_PaymentPage_PaymentDetailsForm with Invalid Phone Number", () => {
    paymentPage.WithInput_Data(
      invaliddata[2].amount,
      invaliddata[2].name,
      invaliddata[2].email,
      invaliddata[2].PhoneNumber,
      invaliddata[2].button
    );
    cy.xpath("//p[text()='Invalid Phone Number']").then((errtext) => {
      const invalidPhone = errtext.text();
      expect(invalidPhone).eq("Invalid Phone Number");
    });
  });
  it("TC005_PortOneGlobal_PaymentPage_PaymentDetailsForm with valid input data", () => {
    paymentPage.WithInput_Data(
      data.amount,
      data.name,
      data.email,
      data.PhoneNumber,
      data.button
    );
    cy.url().then((t) => {
      expect(t).to.include("checkout");
    });
  });
});
