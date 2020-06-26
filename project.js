describe('A project',function(){
it("A suite to run",function(){

function selectProduct(product){
    element.all(by.tagName("app-card")).each(function(item){
        item.element(by.css("h4[class*='card-title'] a")).getText().then(function(text){
            console.log(text);
            if(text==product){
                item.element(by.css("class*='btn-info'")).click();
            }
        });
    });
    
}

    browser.get("https://qaclickacademy.github.io/protocommerce/");
    browser.driver.manage().window().maximize();
    // element(by.name('name')).sendKeys("saad");
    // element(by.name('email')).sendKeys("saad@yahoo.com");
    // element(by.id('exampleInputPassword1')).sendKeys("123saad");
    // element(by.id('exampleCheck1')).click();
    // element.all(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female")).click();
    // element.all(by.name('inlineRadioOptions')).first().click();
    // element(by.buttonText('Submit')).click();
    // // .then(function(){
    // //          element(by.css("[class*='alert-success']")).getText().then(function(text){
    // //        console.log(text);
    // //      });
    // // });
    //  var EC = protractor.ExpectedConditions;
    //  browser.wait(EC.visibilityOf(element(by.css("[class*='alert-success']"))),8000);
    //      element(by.css("[class*='alert-success']")).getText().then(function(text){
    //          console.log(text);
    //      });

     element(by.linkText('Shop')).click();
   
    // selectProduct("Samsung Note 8");
    // element(by.partialLinkText('Checkout')).getText().then(function(text){
    //     var res = text.split("(");
    //     expect(Number(res[1].trim().charAt(0))).toBe(1);
    //     console.log(text);
    // });


    //Exercise
    element.all(by.tagName("app-card")).each(function(item){
        item.element(by.css("button[class*='btn-info']")).click();
    });
   
    element(by.partialLinkText('Checkout')).click();
   
    var price;
    var i = 0;
    var price0;
    var price1;
    var price2;
    var price3;
    var total;
    element.all(by.css("table[class*='table-hover'] tbody tr")).each(function(row){
        row.element(by.css('td:nth-child(4)')).getText().then(function(text){
            price=text.split(".");
            //var num = Number(price[1].trim());
            //console.log(price[1]);
               if(i==0){
                price0 = Number(price[1].trim());
                 console.log(price0);
                }
               if(i==1){
               price1 = Number(price[1].trim());
               console.log(price1);
               }
               if(i==2){
               price2 = Number(price[1].trim());
               console.log(price2);
               }
               if(i==3){
                price3 = Number(price[1].trim());
                console.log(price3);
                    }
                i=i+1;
        });
        
    });

    element.all(by.css("table[class*='table-hover'] tbody tr")).each(function(row){
        row.element(by.css('td:nth-child(5)')).getText().then(function(text){
            price=text.split(".");
        
            if(i==10){
            total = Number(price[1].trim());
            var sum = price0+price1+price2+price3;
            expect(sum).toBe(total);
             }
        i=i+1;
        
        });
        });
        var count=-2;
        element(by.css("button[class*='btn-danger']")).click();
        element.all(by.css("table[class*='table-hover'] tbody tr")).each(function(item){
            count=count+1;
        
        }).then(function(){
            expect(count).toBe(3);
        });
    // console.log(price4);
    // console.log(price5);
    // console.log(price6);
    // console.log(price7);

    



});
});