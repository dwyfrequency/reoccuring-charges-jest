import StatementApi from '../src/lib/statementApi.js';
import UnsubscribeService from '../src/app/UnsubscribeService.js';
import _ from 'lodash';

describe('UnsubscribeService', () => {
  describe('#displayRecurringCharges', () => {
    const subject = new UnsubscribeService();
    const sampleName = 'Spotify';
    const sampleDate = '1/1/18';
    const sampleAmount = 9.99;

    let statementCharges = [];

    function createCharge(name, date, amount) {
      statementCharges.push({
        name: name,
        date: date,
        amount: amount,
      });
    }

    beforeEach(() => {
      statementCharges = [];
      jest
        .spyOn(StatementApi, 'getCharges')
        .mockImplementation(() => statementCharges);
    });

    test('sums the charges that occur more than once and includes amount', () => {
      createCharge(sampleName, '1/1/18', sampleAmount);
      createCharge(sampleName, '1/2/18', sampleAmount);
      // this test is passing right now
      const recurringCharges = subject.displayRecurringCharges();
      expect(recurringCharges[sampleName].amount).toBe(9.99);
    });

    test('sums the charges that occur more than once', () => {
      createCharge(sampleName, '1/1/18', sampleAmount);
      createCharge(sampleName, '1/2/18', sampleAmount);
      // this test is passing right now
      const recurringCharges = subject.displayRecurringCharges();
      expect(recurringCharges[sampleName].count).toBe(2);
    });

    test('does not include charges that only occur once', () => {
      // we only include one spotify, so expect it to be filtered out
      createCharge(sampleName, sampleDate, sampleAmount);

      const recurringCharges = subject.displayRecurringCharges();
      expect(recurringCharges[sampleName]).toBeUndefined();
    });
  });
});
/*
name: spotify
cnt: 2
amount: {
  "amount": [dates, dates, ]

}

*/
