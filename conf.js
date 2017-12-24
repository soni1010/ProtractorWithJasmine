//example configuration file
exports.config = {
	
  //to run chrome driver automatically
  directConnect: true,
  
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  //All Scripts Timeout
  allScriptTimeout:20000,
  framework: 'jasmine2',
  
  specs: [  //'./Scripts/simple_specs.js',
  			'./Common/open_home_page.js',
  			'./Guru99_Scripts/guru99_testing.js',
  		  ],

 
/*-|-------------------------------------------------------------------------------------------------|-
   |						Browser Configurations                                                   |
---|-------------------------------------------------------------------------------------------------|-*/   
  
// Capabilities to be passed to the webdriver instance.

	multiCapabilities:[
	{
		'name':'Chrome',
		'browserName':'chrome',
		'loggingPrefs':{
			'performance':'ALL',
		},
		'chromeOptions':{
			args:[
				  '--disable-gpu',
				  '--disable-infobars',
				  '--start-maximized'
				  ],
		'perfLoggingPrefs':{
			'enableNetwork':true
		}
		}
	}
	],
	onPrepare:function(){
		
/*-|-------------------------------------------------------------------------------------------------|-
   |						Angular Or Non Angular SITE                                              |
---|-------------------------------------------------------------------------------------------------|-*/   
   
	global.isAngularSite=function(flag){
		browser.ignoreSynchronization=!flag;
	};
	
/*-|-------------------------------------------------------------------------------------------------|-
   |						Fetch Data From Excel                                                    |
---|-------------------------------------------------------------------------------------------------|-*/   
 	
	var excel=require('xlsx');
	
	global.to_json=function(workbook,sheetName){
		
		var result={};
		var roa=excel.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
		if(roa.length>0){
			result[sheetName]=roa;
		}
		console.log(sheetName);
		return result[sheetName];
	};
	
	var workbook=excel.readFile('./TestData/Datasheet.xlsx');
	global.testData=to_json(workbook,'Sheet1');
	
/*-|-------------------------------------------------------------------------------------------------|-
   |						HTML Reporting                                                           |
---|-------------------------------------------------------------------------------------------------|-*/   
	
	var Jasmine2HtmlReporter=require('protractor-jasmine2-html-reporter');
	jasmine.getEnv().addReporter(
	new Jasmine2HtmlReporter({
		savePath:'target/HTML-Report/'
	})
	);
	
	var SpecReporter=require('jasmine-spec-reporter').SpecReporter;
	jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace:'all'}));
	
/*-|-------------------------------------------------------------------------------------------------|-
   |						Console Reporting                                                        |
---|-------------------------------------------------------------------------------------------------|-*/   
	
	// jasmineNodeOpts:{ defaultTimeoutInterval:200000,
	// 				  displaySpecDuration:true,
	// 				  print:function(){}
	// 				},
	
	// colors:{
	// 		  success:'green',
	// 		  failure:'red',
	// 		  pending:'yellow'
	// 		},
	
	// prefixes:{
	// 	success:'$',
	// 	failure:'#',
	// 	pending:'*'
	// }
  }
};