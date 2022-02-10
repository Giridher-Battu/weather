var button=document.querySelector(".button");
var inputValue=document.querySelector(".inputValue");
var name=document.querySelector(".name");
var disc=document.querySelector(".disc");
var temp=document.querySelector(".temp");

function adurs(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=bd91d9dbe8f158c4a532639c7f82ff1a")
.then(Response => Response.json())
.then(data => {
  var nameValue = data['name'];
  var tempValue = data['main']['temp'];
  var descValue = data['weather'][0]['description'];
 console.log(data)
   name.innerHTML = nameValue;
   temp.innerHTML = tempValue;
   desc.innerHTML = descValue; 
})

/*.catch(err => alert("Wrong city"))*/
}
