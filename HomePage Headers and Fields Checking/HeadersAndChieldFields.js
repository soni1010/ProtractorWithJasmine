var HeadersAndChieldFields = require('../HomePage Headers and Fields Checking/HeadersAndChieldFields.PO.js');
var reusableFunc  = require('../ReUseableFunction/reusableFunc.js');

var HeadersAndChieldFields = new HeadersAndChieldFields();
var reFunc = new reusableFunc();

userStory_row=[];
userStory_row=reFunc.findData('row1'); 



describe('Header Fields and Fields under it Checking', function() {
  it('click on Web, verification of all fields and one screenshot', function() {

  	//click on Web Header
    //browser.findElement(By.xpath('//li/a/span[text()="Web"]')).click();
    Web_Header.click();
    HeadersAndChieldFields.VerifyHeaderAndChieldsField(Web_Header,'Web');

    //fields verification
    HeadersAndChieldFields.VerifyHeaderAndChieldsField(Java_Field,'Java');
    HeadersAndChieldFields.VerifyHeaderAndChieldsField(Python_Field,'Python');
    HeadersAndChieldFields.VerifyHeaderAndChieldsField(Apache_Field,'Apache');
    HeadersAndChieldFields.VerifyHeaderAndChieldsField(JSP_Field,'JSP');
    HeadersAndChieldFields.VerifyHeaderAndChieldsField(SQL_Field,'SQL');
  
   });

  it('click on Testing and Screenshot', function() {
  
	//comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

    //click on Testing Header
    browser.findElement(By.xpath('//li/a/span[text()="Testing"]')).click();
     
   });

  it('click on SAP and Screenshot', function() {
  
  	//comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

    //click on SAP Header
    browser.findElement(By.xpath('//li/a/span[text()="SAP"]')).click();
   
   });

  it('click on BigData and Screenshot', function() {
  
  	//comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

     //click on Big Data
    browser.findElement(By.xpath('//li/a/span[text()="Big Data"]')).click();
     
   });

  it('click on Live_Projects and Screenshot', function() {
  
  	//comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

    //click on Live Projects
    browser.findElement(By.xpath('//li/a/span[text()="Live Projects"]')).click();
     
   });

  it('click on Must Learn and Screenshot', function() {
  
    //comparison of title !
    expect(browser.getTitle()).toContain('Meet Guru99 - Free Training Tutorials & Video for IT Courses');

    //click on Live Projects
    browser.findElement(By.xpath('//li/a/span[text()="Must Learn!"]')).click();
     
   });
});

 




