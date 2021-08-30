var request =new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data =JSON.parse(this.response);
        
       console.log(data);
    
    
var rdata=data.filter((ele)=>ele.region);
console.log(rdata);
    
var rdata1=data.filter((ele)=>ele.Totalpopulation);
console.log(rdata1);

var rdata2=data.filter((ele)=>ele.Countriesname);
console.log(rdata2);
var rdata3=data.filter((ele)=>ele.subregion);
console.log(rdata3);


}
