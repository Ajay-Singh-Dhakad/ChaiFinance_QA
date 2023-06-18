import CheckoutPage from "../../support/PageObjects/PortOne_Globals/CheckoutPage";
import PaymentPage from "../../support/PageObjects/PortOne_Globals/PaymentPage";
describe("Testing the Checkout Page of PortOne Global", () => {
  const paymentpage = new PaymentPage();
  const checkoutpage = new CheckoutPage();
  before(() => {
    cy.fixture("ValidData").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach("Launch the application and navigate to CheckoutPage", () => {
    paymentpage.visitPaymentPage();
    paymentpage.LanguageDropdown();
    paymentpage.WithInput_Data(
      data.amount,
      data.name,
      data.email,
      data.PhoneNumber,
      data.button
    );
    checkoutpage.Checkoutpage_LanguageDropdown();
  });
  
  it("TC001_PortOneGlobal_CheckoutPage_LanguageDropdown", () => {
    checkoutpage.Checkoutpage_LanguageDropdown();
  });
  it("TC002_PortOneGlobal_CheckoutPage_TotalAmount", () => {
    checkoutpage.TotalAmount();
  });
  it("TC003_PortOneGlobal_CheckoutPage_PaymentOptions", () => {
    checkoutpage.Installment_PaymentOption();
  });
  it("TC004_PortOneGlobal_CheckoutPage_PaymentOptions_CODoption", () => {
    checkoutpage.COD_PaymentOption();
  });
  it('TC005_PortOneGlobal_CheckoutPage_PaymentOptions_WalletOption',()=>{
    checkoutpage.Wallet_PaymentOption();
   })
});
