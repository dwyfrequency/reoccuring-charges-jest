import chargeList from '../config/charges.js';
// just importing the array of objs of charges

class StatementApi {
  static getCharges() {
    return chargeList.charges;
  }
}

export default StatementApi;
