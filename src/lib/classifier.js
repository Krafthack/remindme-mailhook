var Week = require('./week');

class Classifier {
  classify (email) {
    const week = email.match(/([0-9]+)week/);
    if (week != null && week.length > 1) return new Week(week[1]);
    return null;
  }
}

module.exports = Classifier;
