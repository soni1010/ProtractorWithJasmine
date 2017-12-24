
describe('Guru99 Web_Header and fields under it Checking', function() {
  it('click on Web and Screenshot', function() {

  	//comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');
  
    //click on Web Header
    browser.findElement(By.xpath('//li/a/span[text()="Web"]')).click();

   });
});

describe('Guru99 Testing_Header and fields under it Checking', function() {
  it('click on Testing and Screenshot', function() {
  
	//comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

    //click on Testing Header
    browser.findElement(By.xpath('//li/a/span[text()="Testing"]')).click();
     
   });
});

describe('Guru99 SAP_Header and fields under it Checking', function() {
  it('click on SAP and Screenshot', function() {
  
  	//comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

    //click on SAP Header
    browser.findElement(By.xpath('//li/a/span[text()="SAP"]')).click();
   
   });
});

describe('Guru99 BigData_Header and fields under it Checking', function() {
  it('click on BigData and Screenshot', function() {
  
  	//comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

     //click on Big Data
    browser.findElement(By.xpath('//li/a/span[text()="Big Data"]')).click();
     
   });
});

describe('Guru99 LiveProjects_Header and fields under it Checking', function() {
  it('click on Live_Projects and Screenshot', function() {
  
  	//comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

    //click on Live Projects
    browser.findElement(By.xpath('//li/a/span[text()="Live Projects"]')).click();
     
   });
});


