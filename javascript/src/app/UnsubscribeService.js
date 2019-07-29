// static method for getting charges
import StatementApi from '../lib/statementApi.js';
// import _ from 'lodash';

class UnsubscribeService {
  displayRecurringCharges() {
    let billStatement = {};
    let recurringCharges = {};

    StatementApi.getCharges().forEach(charge => {
      const { amount, name } = charge;
      if (billStatement[name] === undefined) {
        billStatement[name] = { amount, count: 1 };
      } else {
        const { count } = billStatement[name];
        billStatement[name] = { amount, count: count + 1 };
      }
    });

    for (const [chargeName, obj] of Object.entries(billStatement)) {
      if (obj.count > 1) {
        recurringCharges[chargeName] = obj;
      }
    }
    return recurringCharges;
  }
}

export default UnsubscribeService;
