"use strict";

let Scraper = require('../src/scraper');
let expect = require('expect.js');
let fs = require('fs');

describe('UBC classes scraper', () => {
  let scraper;
  let data;

  beforeEach(() => {
    scraper = new Scraper();
    data = fs.readFileSync('data/data.html', 'utf8');
  })

  it('should return true', () => {
    expect(scraper.scrape(data).length).to.equal(9);
  })
})
