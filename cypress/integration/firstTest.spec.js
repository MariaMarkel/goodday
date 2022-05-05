before(function (){
   cy.fixture('testData').then(function (data){
        this.data = data
    })
})
context('Test suite: ', function () {
    it('test1', function () {

    });
});
