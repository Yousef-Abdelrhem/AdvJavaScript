// Make a function constructor to create
// a book object every book should
// have (name, price, author) properties.
function Author(name, email) {
  this.name = name;
  this.email = email;
}
function Book(name, price, AuthorName, AuthorEmail) {
  this.name = name;
  this.price = price;
  this.author = new Author(AuthorName, AuthorEmail);
}

var Books = [];
var bookNumber;

var addBtn = document.querySelector(".AddBtn");
addBtn.addEventListener("click", function () {
  bookNumber = Number(document.querySelector(".BookNumberInput").value);
  if (bookNumber > 0) {
    document.querySelector(".containerBookNumber").style.display = "none";
    document.querySelector(".containerForm").style.display = "block";
  }
});

var counter = 0;
document.querySelector(".formbtn").addEventListener("click", function () {
  var BookName = document.querySelector(".bookname");
  var Price = document.querySelector(".Price");
  var Author = document.querySelector(".Author");
  var AuthorEmail = document.querySelector(".AuthorEmail");
  var errorMsg = document.querySelectorAll(".errormsg");
  var nameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  var EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!nameRegex.test(BookName.value)) {
    errorMsg[0].style.display = "block";
  } else {
    errorMsg[0].style.display = "none";
  }

  if (!Price.value || isNaN(Price.value) || Number(Price.value) <= 0) {
    errorMsg[1].style.display = "block";
  } else {
    errorMsg[1].style.display = "none";
  }

  if (!nameRegex.test(Author.value)) {
    errorMsg[2].style.display = "block";
  } else {
    errorMsg[2].style.display = "none";
  }

  if (!EmailRegex.test(AuthorEmail.value)) {
    errorMsg[3].style.display = "block";
  } else {
    errorMsg[3].style.display = "none";
  }

  if (
    nameRegex.test(BookName.value) &&
    (Price.value || isNaN(Price.value) || Number(Price.value) <= 0) &&
    nameRegex.test(Author.value) &&
    EmailRegex.test(AuthorEmail.value)
  ) {
    if (counter < bookNumber) {
      counter++;
      alert("Book: " + counter + " Added");
      Books.push(
        new Book(BookName.value, Price.value, Author.value, AuthorEmail.value)
      );


      BookName.value = "";
      Price.value = "";
      Author.value = "";
      AuthorEmail.value = "";
    }

    /// here in the count
    if (counter === bookNumber) {
      for(var i = 0; i < Books.length; i++) {

        AddtoTable(Books[i].name, Books[i].price, Books[i].author.name, Books[i].author.email);

      }
      document.querySelector(".containerTable").style.display = "flex";
      document.querySelector(".containerForm").style.display = "none";
    }
  }
});

function AddtoTable(BookName, price, Author, AuthorEmail) {
  var tbody = document.querySelector("tbody");
  tbody.innerHTML += `<tr>
      <td>${BookName}</td>
      <td>${price}$</td>
      <td>${Author}</td>
      <td>${AuthorEmail}</td>
      <td><button class="btn btn-table edit">Edit</button></td>
      <td><button class="btn btn-table delete">Delete</button></td>
    </tr>`;
}

/// when click on delete button get the parent element and remove it

document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("edit")) {
    var row = e.target.parentElement.parentElement;
    var cells = row.querySelectorAll("td");
    console.log(cells);

    var currentName = cells[0].textContent.trim();
    var price = cells[1].textContent.trim().replace("$", "");
    var author = cells[2].textContent.trim();
    var AuthorEmail = cells[3].textContent.trim();


    row.innerHTML = `<tr>
    <td><input type="text"  placeholder='Name' value="${currentName}"/></td>
    <td><input type="text" placeholder='Price' value="${price}"/></td>
    <td><input type="text" placeholder='Author' value="${author}"/></td>
    <td><input type="text" placeholder='AuthorEmail' value="${AuthorEmail}"/></td>
    <td><button class="btn btn-table save">Save</button></td>
    <td><button class="btn btn-table cancel">Cancel</button></td>
    </tr>`;
  }

  if (e.target.classList.contains("save") || e.target.classList.contains("cancel")) {
    var row = e.target.parentElement.parentElement;
    var inputs = row.querySelectorAll("input");

    var currentName = inputs[0].value;
    var price = inputs[1].value;
    var author = inputs[2].value;
    var AuthorEmail = inputs[3].value;

    row.innerHTML = `<tr>
    <td>${currentName}</td>
    <td>${price}$</td>
    <td>${author}</td>
    <td>${AuthorEmail}</td>
    <td><button class="btn btn-table edit">Edit</button></td>
    <td><button class="btn btn-table delete">Delete</button></td>
  </tr>`;
  }

});
