var reusableFunc=function(){

var excel	=	require('xlsx');

//----------------------------------------------------------------------------------------------------------
this.findData=function(storyname){
	var record=[];
	var j=0;
	for(var i=0;i<testData.length;i++){
		if(testData[i].StoryTitle==storyname){
			record[j]=i;
			j++;
		}
	}
	return record;
};	

//----------------------------------------------------------------------------------------------------------

this.findDataTest=function(expVal,ActVal){
	global.jsonObj;
	for(var i=0;i<jsonObj.length;i++){
		if(jsonObj[i].expVal==ActVal){
			return true;
		}
	}
};

//----------------------------------------------------------------------------------------------------------

this.getURL=function(url){
	browser.driver.get(url);
	browser.driver.get(url);
	browser.driver.sleep(3000);
};

//----------------------------------------------------------------------------------------------------------

this.verifyPage=function(title){
	var browserTitle=browser.driver.getTitle();
	expect(browserTitle).toBe(title);
};

//----------------------------------------------------------------------------------------------------------

};

module.exports=reusableFunc;
