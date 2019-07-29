"use strict";

// You can use Mocha to execute tests in the following way:

const mocha = require('./useMocha');    // This import sets up mocha, don't remove it.
const assert = require('assert');

function foo(a, b) {
  const service = new UnsubscribeService();
  console.log(service.displayRecurringCharges());
  return service.displayRecurringCharges().Spotify;
  return StatementAPI.getCharges()[0].amount;
  return a + b;
}

class UnsubscribeService {
  displayRecurringCharges() {
    let recurringCharges = {};

    StatementAPI.getCharges().forEach((charge) => {
      const name = charge.name
      recurringCharges[name] = recurringCharges[name] || 0
      recurringCharges[name] += 1
    });

    Object.keys(recurringCharges).forEach((charge) => {
      if (recurringCharges[charge] >= 1) {
        delete recurringCharges[charge];
      }
    });
    console.log("af del")
    console.log(recurringCharges)

    return recurringCharges;
  }
}

class StatementAPI {
  static getCharges() {
    return [
      {
        name: 'Spotify',
        date: '1/1/19',
        amount: 9.99
      }, {
        name: 'Spotify',
        date: '1/2/19',
        amount: 9.99
      }
    ];
  }
}

describe('Component', function() {
  it('should add a + b', function() {
    assert(foo(2, 2) === 1, '2+2 is not equal to 4');
  });
});

mocha.run();    // This call runs the tests.
