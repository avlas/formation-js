var assert = require('assert');

var chai = require('chai');
var expect = chai.expect;

var math = require('../math');

// ADD -------------------------------------------------------------------------
describe('math', function() {
    describe('#add()', function() {

        it('given_validNumbers_thenResult', function() {
            expect(math.add(3, 5)).to.equal(8);
            // assert.equal(8, math.add(3, 5));
        });

        it('given_x_NaN_thenError', function() {
            expect( function(){  math.add('trois', 5) } ).to.throw('x is not a number');
        });

        it('given_y_NaN_thenError', function() {
            expect( function(){  math.add(5, 'trois') } ).to.throw('y is not a number');
        });
    });

    describe('#remove()', function() {

        it('given_validNumbers_thenResult', function() {
            expect(math.remove(5, 3)).to.equal(2);
        });

        it('given_x_NaN_thenError', function() {
            expect( function(){  math.remove('trois', 5) } ).to.throw('x is not a number');
        });

        it('given_y_NaN_thenError', function() {
            expect( function(){  math.remove(5, 'trois') } ).to.throw('y is not a number');
        });
    });

    describe('#multiply()', function() {

        it('given_validNumbers_thenResult', function() {
            expect(math.multiply(5, 3)).to.equal(15);
        });

        it('given_x_NaN_thenError', function() {
            expect( function(){  math.multiply('trois', 5) } ).to.throw('x is not a number');
        });

        it('given_y_NaN_thenError', function() {
            expect( function(){  math.multiply(5, 'trois') } ).to.throw('y is not a number');
        });
    });

    describe('#divide()', function() {

        it('given_validNumbers_thenResult', function() {
            expect(math.divide(8, 2)).to.equal(4);
        });

        it('given_x_NaN_thenError', function() {
            expect( function(){  math.divide('trois', 5) } ).to.throw('x is not a number');
        });

        it('given_y_NaN_thenError', function() {
            expect( function(){  math.divide(5, 'trois') } ).to.throw('y is not a number');
        });

        it('given_y_0_thenError', function() {
            expect( function(){  math.divide(5, 0) } ).to.throw('Invalid - division by 0');
        });
    });
});

