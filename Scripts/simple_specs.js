beforeEach(function() {
      return browser.ignoreSynchronization = true;
  });

describe('Google Search Engine !', function() {
  it('My Name in searchBox', function() {

	//console log !
	console.log('Test 1 Start Point!');
	
	//set browser window to some paticular size !
	browser.driver.manage().window().setSize(800, 600);
	
	//maximize browser window !
    browser.driver.manage().window().maximize();
	
	//opening webpage !
    browser.get('https://www.google.com/');

    //comparison of title !
    expect(browser.getTitle()).toContain('Google');

    //provide input !
    var searchBox = browser.findElement(By.xpath('//*[@id="lst-ib"]'));
	searchBox.sendKeys('Harender Soni');

   });
});

describe('Dream input in Google Search Box', function() {
  it('My Dream in searchBox', function() {
	
	//console log !
	console.log('Test 2 Start Point!');
	
	//set browser window to some paticular size !
	browser.driver.manage().window().setSize(800, 600);
	
	//maximize browser window !
    browser.driver.manage().window().maximize();
	
	//opening webpage !
    browser.get('https://www.google.com/');

    //comparison of title !
    expect(browser.getTitle()).toContain('Google');

    //provide input !
    var searchBox = browser.findElement(By.xpath('//*[@id="lst-ib"]'));
	searchBox.sendKeys('Australian Citizenship');
	});
});
