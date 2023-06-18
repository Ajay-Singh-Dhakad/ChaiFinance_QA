class FinalPaymentPage {
  WalletPaymentOption() {
    cy.xpath("//a[@data-target='#wallets']").click();
    cy.get("#ONEPAY-ONEPAY_WALLET").click();
    cy.get("#PayNowButtonWeb").click({ force: true });
    cy.origin("https://mtf.onepay.vn/paygate/", () => {
      cy.visit("/");
      cy.get(".d_language > :nth-child(1) > img").click();
      cy.contains("Payment Successful!");
    });
  }
  InstallatmentPaymentOption() {
    cy.get("#installmentlangDirect").click();
    cy.get("#PayNowButtonWeb").click();
    cy.xpath("(//*[@class='statusMessage'])[2]").then((message) => {
      const msg = message.text();
      expect(msg).eq("Payment Successful!");
    });
  }
  CODPaymentOption() {
    cy.get("#codlangDirect").click();
    cy.get("#PayNowButtonWeb").click();
    cy.url().then((url) => {
      expect(url).to.include("checkout");
    });
    cy.get("#headingLang").then((messagee) => {
      const msgs = messagee.text();
      cy.log(msgs);
      expect(msgs).eq("Payment Successful!");
    });

    cy.get("#amount-elem").then((amount) => {
      expect(amount.text()).eq("₫15,000");
    });
    cy.get("#qrcode-image").should("be.visible");
  }
}

export default FinalPaymentPage;
