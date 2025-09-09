const { expect } = require('chai');
const sinon = require('sinon');

// test/indexTest.test.js


describe('Fix the Scope', function() {
  beforeEach(function() {
    // Reset global variables before each test
    global.customerName = 'bob';
    global.bestCustomer = undefined;
    global.leastFavoriteCustomer = 'initial value';
  });

  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', function() {
      expect(global.customerName).to.equal('bob');
    });
  });

  describe('upperCaseCustomerName()', function() {
    it('modifies the customerName variable', function() {
      upperCaseCustomerName();
      expect(global.customerName).to.equal('BOB');
    });
  });

  describe('setBestCustomer()', function() {
    it('sets bestCustomer to "not bob"', function() {
      setBestCustomer();
      expect(global.bestCustomer).to.equal('not bob');
    });
  });

  describe('overwriteBestCustomer()', function() {
    it('overwrites the best customer', function() {
      overwriteBestCustomer('maybe bob');
      expect(global.bestCustomer).to.equal('maybe bob');
    });
  });

  describe('changeLeastFavoriteCustomer()', function() {
    it('throws an error when trying to reassign leastFavoriteCustomer', function() {
      expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
    });
  });
});