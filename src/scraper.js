"use strict";

let cheerio = require('cheerio');
let queryString = require('query-string');

class Scraper {

  /**
   * @return a promise returning list of class objects denoting
   *
   * {
   *  dept: string // i.e. 'PSYCH'
   *  course: string // i.e. '101'
   *  section: string // i.e. '901'
   *  term : string (for now) // i.e. '1'
   *  days: String // i.e. 'Tu Th'
   *  timeStart: String // i.e. '14:00'
   *  timeEnd: String // i.e. '15:30'
   *  credits: String (for now)
   * }
   */
  scrape(html) {
    const $ = cheerio.load(html)

    const classes = [];

    const self = this;

    $('.section-summary tbody tr').each(function(index, row) {
      let cells = $(this).children('td');

      let classLink = cells.eq(2).children().first().attr('href');
      let parsed = queryString.parse(classLink);

      let type = cells.eq(3).text().trim();
      let term = cells.eq(4).text().trim();
      let days = cells.eq(6).text().trim();
      let startTime = cells.eq(7).text().trim();
      let endTime = cells.eq(8).text().trim();
      let credits = cells.eq(10).text().trim();

      classes.push({
        dept: parsed.dept,
        course: parsed.course,
        section: parsed.section,
        type,
        term,
        days,
        startTime,
        endTime,
        credits,
      })
    })

    return classes;
  }
}

module.exports = Scraper;
