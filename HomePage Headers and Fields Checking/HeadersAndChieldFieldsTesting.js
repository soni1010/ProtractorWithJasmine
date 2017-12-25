
describe('Header Fields and Fields under it Checking', function() {
  it('click on Web, verification of all fields and one screenshot', function() {

  	//click on Web Header
    browser.findElement(By.xpath('//li/a/span[text()="Web"]')).click();

    //fields verification
    expect(element(by.xpath('//li/a/span[text()="Java"]')).getText()).toEqual('Java');
    expect(element(by.xpath('//li/a/span[text()="Python"]')).getText()).toEqual('Python');
    expect(element(by.xpath('//li/a/span[text()="Apache"]')).getText()).toEqual('Apache');
    expect(element(by.xpath('//li/a/span[text()="JSP"]')).getText()).toEqual('JSP');
    expect(element(by.xpath('//li/a/span[text()="ASP.Net"]')).getText()).toEqual('ASP.Net');
    expect(element(by.xpath('//li/a/span[text()="SQL"]')).getText()).toEqual('SQL');
    expect(element(by.xpath('//li/a/span[text()="Perl"]')).getText()).toEqual('Perl');
    expect(element(by.xpath('//li/a/span[text()="PHP"]')).getText()).toEqual('PHP');
    expect(element(by.xpath('//li/a/span[text()="SQLite"]')).getText()).toEqual('SQLite');
    expect(element(by.xpath('//li/a/span[text()="MYSQL"]')).getText()).toEqual('MYSQL');
    expect(element(by.xpath('//li/a/span[text()="PL/SQL"]')).getText()).toEqual('PL/SQL');
    expect(element(by.xpath('//li/a/span[text()="Linux"]')).getText()).toEqual('Linux');
    expect(element(by.xpath('//li/a/span[text()="AngularJS"]')).getText()).toEqual('AngularJS');
    expect(element(by.xpath('//li/a/span[text()="Web Services"]')).getText()).toEqual('Web Services');
    expect(element(by.xpath('//li/a/span[text()="WAPT Pro"]')).getText()).toEqual('WAPT Pro');
    expect(element(by.xpath('//li/a/span[text()="VBScript"]')).getText()).toEqual('VBScript');
    expect(element(by.xpath('//li/a/span[text()="JavaScript"]')).getText()).toEqual('JavaScript');
    expect(element(by.xpath('//li/a/span[text()="Node.js"]')).getText()).toEqual('Node.js');
    expect(element(by.xpath('//li/a/span[text()="C#"]')).getText()).toEqual('C#');

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

 




