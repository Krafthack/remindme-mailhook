var Week = require('./week');
var Day = require('./day');

class Classifier {
  classify (email) {
    const week = email.match(/([0-9]+)week(s{0,1})/);
    const day = email.match(/([0-9]+)day(s{0,1})/);
    if (week != null && week.length > 1) return new Week(week[1]);
    if (day != null && day.length > 1) return new Day(day[1]);
    return null;
  }
}

module.exports = Classifier;
