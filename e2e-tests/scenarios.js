'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  describe('hello world app', function() {
    it('should have a title', function() {
      browser.get('http://localhost:8000/src/');
      expect(browser.getTitle()).toEqual('Hello World');
    });
  });

  it('should automatically redirect to /products when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/products");
  });


  describe('products', function() {

    beforeEach(function() {
      browser.get('index.html#/products');
    });


    it('should render products when user navigates to /products', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
