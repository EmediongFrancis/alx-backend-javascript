const chai = require('chai');
const calculateNumber = require('./1-calcul');

describe("Tests advanced calculateNumber function:", function(){
    describe("Tests SUM function:", function(){
        it("Returns 6.", function(){
            chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
        })
    })
    describe("Tests SUM function:", function(){
        it("Returns 5.", function(){
            chai.expect(calculateNumber('SUM', 1, 4)).to.equal(5)
        })
    })
    describe("Tests SUM function:", function(){
        it("Returns 6.", function(){
            chai.expect(calculateNumber('SUM', 4, 2.4)).to.equal(6)
        })
    })
    describe("Tests SUBTRACT function:", function(){
        it("Returns -4.", function(){
            chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
        })
    })
    describe("Tests DIVIDE function:", function(){
        it("Returns 0.2.", function(){
            chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
        })
    })
    describe("Tests DIVIDE function W 0:", function(){
        it("Returns 'Error'.", function(){
            chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
        })
    })
})
