describe('A suite',function(){
	it('First test case',function(){
		// function Calc(a,b,c){
		// 	element(by.model("first")).sendKeys(a);
		// element(by.model("second")).sendKeys(b);
		// element.all(by.tagName('options')).each(function(item){ //use element(by.tagName('options')).get(0) to get the first element
		// 	item.getAttribute("value").then(function(values){
		// 		if(values===c){
		// 			item.click();
		// 		}
		// 	})
		// });
		// element(by.id('gobutton')).click();
		// }
		
		//browser.get("https://juliemr.github.io/protractor-demo/");
		//browser.waitForAngularEnabled(false); //to access non angular sites
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		
		browser.driver.manage().window().maximize();
		// Calc("5","3","ADDITION");
		// Calc("5","3","ADDITION");
		// Calc("5","3","ADDITION");
		// element(by.css("h2[class='ng-binding']")).getText().then(function(text){
		// 	console.log(text);
		// });	
		
		/******************* Assertion   ***************** */
		//expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8"); //use toEqual to compare numbers
		
		/******************* Actions   ***************** */
		// browser.actions().mouseMove(element(by.css('something')).sendKeys("London")).perform();
		// browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		// browser.actions().sendKeys(protractor.Key.ENTER).perform();

		/******************* Window Handling   ***************** */

		// browser.getAllWindowHandles().then(function(handle){
		// 	browser.switchTo().window(handle[1]); //switching to child window
		// });

		/******************* Alert Handling   ***************** */

		// browser.switchTo().alert().accept();
		// browser.switchTo().alert().dismiss();


		/******************* Chaining elements   ***************** */
		// element.all(by.repeater('result in memory')).element(by.css("td")).getText().then(function(text){
		// 	console.log(text);
		// });

		/******************* Rendering elements   ***************** */
		// element.all(by.repeater('result in memory')).each(function(item){
		// 	item.element(by.css('td:nth-child(3)')).getText().then(function(text){
		// 		//browser.getTitle() to get title
		// 		console.log(text);
		// 	});
		// })

		/******************* Frame Handling   ***************** */
		// browser.switchTo().frame(0);
		// element(by.css("a[href='https://courses.rahulshettyacademy.com/courses']")).getText().then(function(text){
		// 	console.log(text);
		// });
		//await browser.switchTo().defaultContent(); //come out of iframe

		/******************* Explicit Wait/Synchronization   ***************** */
		// element(by.css("a[href*='loadAjax()']")).click();
		// var EC = protractor.ExpectedConditions;
		// browser.wait(EC.invisibilityOf(element(by.id('modal'))),8000);
		// element(by.id('results')).getText().then(function(text){
		// 	console.log(text);
		// });
	console.log();

		

	});
});