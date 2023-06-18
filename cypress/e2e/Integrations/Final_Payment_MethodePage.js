import PaymentPage from "../../support/PageObjects/PortOne_Globals/PaymentPage";
import CheckoutPage from "../../support/PageObjects/PortOne_Globals/CheckoutPage";
import FinalPaymentPage from "../../support/PageObjects/PortOne_Globals/Final_Payment_MethodePage";
describe("Testing the Final Payment methode Page of PortOne Global", () => {
  const paymentpage = new PaymentPage();
  const checkoutpage = new CheckoutPage();
  const finalpaymentpage = new FinalPaymentPage();
  before(() => {
    cy.fixture("ValidData").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(
    "Launch the application and navigate to Final payment methode Page",
    () => {
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
    }
  );

  it("TC001_PortOneGlobal_CheckoutPage_CODoption_FinalPaymentMethodPage", () => {
    finalpaymentpage.CODPaymentOption();
  });
  it("TC002_PortOneGlobal_CheckoutPage_InstallmentOption_FinalPaymentMethodPage", () => {
    finalpaymentpage.InstallatmentPaymentOption();
  });
  it("TC003_PortOneGlobal_CheckoutPage_WalletPayment_FinalPaymentMethodPage", () => {
    finalpaymentpage.WalletPaymentOption();
  });
});
