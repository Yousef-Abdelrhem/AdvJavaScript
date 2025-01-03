var xhr = new XMLHttpRequest();

xhr.open("GET", "file.json");
xhr.send();

xhr.onload = function () {
  document.querySelector(".Load").style.display = "block";
  // alert("loading...");
};

xhr.onerror = function () {
  alert("Network Error");
};

var Band = document.querySelector(".Band");
var Artist = document.querySelector(".Artist");
var result;
xhr.addEventListener("load", function () {
  if (xhr.status === 200) {
    document.querySelector(".Load").style.display = "none";


    result = JSON.parse(xhr.responseText);

    for (key in result) {
      Band.innerHTML += "<option value= '" + key + "'>" + key + "</option>";
    }

    if (result.length === 0) {
      alert("No data to Show");
    }
  }
});

Band.addEventListener('change',function(e) {
  result[e.target.value].forEach(function(key){
    Artist.innerHTML +=
    "<option value= '" + key.value + "'>" + key.name + "</option>";
   });
 });

 Artist.addEventListener('change',function(e) {
  
  window.location.href = e.target.value;
 });