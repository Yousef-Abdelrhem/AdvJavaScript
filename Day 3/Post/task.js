var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();

xhr.onload = function () {
  document.querySelector(".Load").style.display = "block";
};

xhr.onerror = function () {
  alert("Network Error");
};

xhr.addEventListener("load", function () {
  if (xhr.status === 200) {
    document.querySelector(".Load").style.display = "none";

    var result = JSON.parse(xhr.responseText);
    if (result.length === 0) {
      alert("No data to Show");
    }
    result.forEach(function (element) {
      // document.querySelector("body").innerHTML +=
      //   "<h1>" + element.title + "</h1>" + "<p>" + element.body + "</p>";

      document.querySelector("body").innerHTML +=
        " <div class='card'><h1>" +
        element.title +
        "</h1><p>" +
        element.body +
        "</p></div>";
    });
  }
});
