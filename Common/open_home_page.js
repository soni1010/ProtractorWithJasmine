beforeEach(function() {
      return browser.ignoreSynchronization = true;
 });

describe('Guru99 homepage Opening !', function() {
  it('Open Browser with Guru99 homepage !', function() {
  	
	
	//opening webpage !
    browser.get('https://www.guru99.com/');

    //comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

	  console.log('homepage opening done !');
    
   });
});

