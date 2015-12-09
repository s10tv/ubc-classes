"use strict";

let popsicle = require('popsicle');

class Scraper {

  constructor(jsessionId, csjdk6) {
    this.jsessionId = jsessionId,
    this.csjdk6 = csjdk6;

    this.url = 'https://courses.students.ubc.ca/cs/main?pname=regiregisteredcourses&tname=regiregisteredcourses';
    this.jar = popsicle.jar();

    this.jar.setCookieSync(`JSESSIONID=${jsessionId}`, this.url);
    this.jar.setCookieSync(`csjdk6=${csjdk6}`, this.url);

    this.request = popsicle.defaults({ options: { jar: this.jar } });
  }

  /**
   * @return a promise returning list of class objects denoting
   *
   * {
   *  code: string // i.e. 'econ101'
   *  name: String // i.e. 'Introduction to MicroEconomics',
   *  prof: String // i.e. 'Robert Gateman'
   *  term : Number // i.e. 1
   *  timeStart: Date  // calibrated to pacific time of 1/1/2015
   *  timeEnd: Date    // calibrated to pacific time of 1/1/2015
   *  credits: Number
   * }
   */
  scrape() {
    this.request(this.url)
    .then(response => {
      console.log(response.body);
    })
  }

  __fetchData() {

  }
}

module.exports = Scraper;
