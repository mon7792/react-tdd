const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();
    console.log(actualTitle);
    expect(actualTitle).to.eql('localhost');
  });
});
