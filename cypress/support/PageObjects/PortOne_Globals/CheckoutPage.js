class CheckoutPage{
  Checkoutpage_LanguageDropdown(){
    cy.xpath("(//*[@class='languageChanger'])[2]").click();
    cy.xpath("(//a[@href='#'])[6]").click();
  }
  TotalAmount(){
    cy.get('.totalAmountCount').then((totalamount)=>{
       cy.log(totalamount.text());
     expect(totalamount.text()).to.include('15.000,00');
    })
  }

  Wallet_PaymentOption(){
    cy.xpath("//a[@data-target='#wallets']").click();
    cy.get('#ONEPAY-ONEPAY_WALLET').click();
    cy.get('#PayNowButtonWeb').click({force:true});
  }
  Installment_PaymentOption(){
    cy.get('#installmentlangDirect').click();
    cy.get('#PayNowButtonWeb').click();
 }
  COD_PaymentOption(){
    cy.get('#codlangDirect').click();
    cy.get('#PayNowButtonWeb').click();
    cy.url().then((url)=>{
        expect(url).to.include('checkout');
    });
  }

}

export default CheckoutPage;