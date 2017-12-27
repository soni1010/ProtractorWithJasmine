
//HomePage Headers and Fields elements
//Headers
Web_Header    	= element(By.xpath('//li/a/span[text()="Web"]'));
Java_Field		= element(by.xpath('//li/a/span[text()="Java"]'));
Python_Field	= element(by.xpath('//li/a/span[text()="Python"]'));
Apache_Field	= element(by.xpath('//li/a/span[text()="Apache"]'));
JSP_Field		= element(by.xpath('//li/a/span[text()="JSP"]'));
SQL_Field		= element(by.xpath('//li/a/span[text()="SQL"]'));

var HeadersAndChieldFields=function(){

// to verify particular field in Headers and Chield Fields on homepage
this.VerifyHeaderAndChieldsField = function(webElem,actElem){
	webElem.getText().then(function(text){
		expect(actElem).toBe(text);
	});
  browser.sleep(1000);
};
};

module.exports=HeadersAndChieldFields;




