var request=new XMLHttpRequest();
var $newIPAdress = document.querySelector('#newIPAdress');

request.open('GET', "http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");
request.send();

request.onload=function(){
    var response = request.responseXML;
    var country=response.querySelector('geoplugin_countryName');

    console.log(country.textContent);
     
    //$('#showCountry').text(country.textContent);
}

var newIP=function(){
    

}

$newIPAdress.addEventListener('click', newIP());