"use strict";

const loginBtn = document.querySelectorAll(".btn-login");
const registerBtn = document.querySelectorAll(".btn-register");
const libraryLogin = document.querySelectorAll(".btn-overlay");
const libraryOverlay = document.querySelectorAll(".overlay-actions");

const loginCartBox = document.querySelector(".login--cart-box");
const regCartBox = document.querySelector(".register--cart-box");
const successRegisterBox = document.querySelector(".info-login");
const closeCartBox = document.querySelectorAll(".close-icon");
const overlay = document.querySelector(".overlay");

const inputLogin = document.querySelector(".input-login");
const inputPassword = document.querySelector(".input-password");
const inputLoginBtn = document.querySelector(".login-button");
const inputRegisterBtn = document.querySelector(".register-button");
const inputRegisterName = document.querySelector("#registerName");
const inputRegisterSName = document.querySelector("#registerSName");
const inputRegisterEmail = document.querySelector("#email");
const inputRegisterPaswd = document.querySelector("#passwdReg");
const openMobileNav = document.querySelector(".open-icon");
const closeMobileNav = document.querySelector(".mobile--close-icon");
const header = document.querySelector(".header");

console.log(closeMobileNav);

const showBooksBtn = document.querySelector(".btn-show");
const selectGenre = document.querySelector(".select-show");
const tableRows = document.querySelector(".rows");

const addBookBtn = document.querySelector(".btn-add");
const inputBookTitle = document.querySelector(".input--book-title");
const selectGen = document.querySelector(".select-add");

//Accounts
const account1 = {
  name: "Krzysztof",
  surname: "Zieba",
  email: "dr@gmail.com",
  username: "kz",
  password: 1111,
};

const accounts = [account1];

//Books database
// Obiekt reprezentujący książkę
const book1 = {
  id: 1,
  title: "Harry Potter and the Philosopher's Stone",
  genre: "Fantasy",
  rate: 4.5,
};

const book2 = {
  id: 2,
  title: "To Kill a Mockingbird",
  genre: "Classics",
  rate: 4.0,
};

const book3 = {
  id: 3,
  title: "The Adventures of Sherlock Holmes",
  genre: "Crime",
  rate: 4.2,
};

const book4 = {
  id: 4,
  title: "The Lord of the Rings",
  genre: "Fantasy",
  rate: 4.7,
};

const book5 = {
  id: 5,
  title: "Dracula",
  genre: "Horror",
  rate: 3.8,
};

const book6 = {
  id: 6,
  title: "Pride and Prejudice",
  genre: "Classics",
  rate: 4.1,
};

const book7 = {
  id: 7,
  title: "The Catcher in the Rye",
  genre: "Humour and Satire",
  rate: 3.7,
};

const book8 = {
  id: 8,
  title: "The Hobbit",
  genre: "Fantasy",
  rate: 4.3,
};

const book9 = {
  id: 9,
  title: "The Adventures of Huckleberry Finn",
  genre: "Adventure",
  rate: 3.9,
};

const book10 = {
  id: 10,
  title: "War and Peace",
  genre: "War",
  rate: 4.6,
};
const book11 = {
  id: 11,
  title: "The Hitchhiker's Guide to the Galaxy",
  genre: "Humour and Satire",
  rate: 4.4,
};

const book12 = {
  id: 12,
  title: "The Shining",
  genre: "Horror",
  rate: 4.1,
};

const book13 = {
  id: 13,
  title: "The Great Gatsby",
  genre: "Classics",
  rate: 4.3,
};

const book14 = {
  id: 14,
  title: "The Girl with the Dragon Tattoo",
  genre: "Crime",
  rate: 4.2,
};

const books = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
  book11,
  book12,
  book13,
  book14,
];

//Go on top of the page
const goTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//Open login cart box
const loginBox = function () {
  goTop();
  loginCartBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Open register cart box
const regBox = function () {
  goTop();
  regCartBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Close login and register cart box
const closeBox = function () {
  loginCartBox.classList.add("hidden");
  regCartBox.classList.add("hidden");
  overlay.classList.add("hidden");
  successRegisterBox.classList.add("hidden");
};

//Prepare books for display
const displayBooks = function (bookArr, gen) {
  let html = "";
  let i = 1;

  for (const book of bookArr) {
    // console.log(book);
    if (
      book.genre.toLowerCase() === gen.toLowerCase() ||
      gen.toLowerCase() === "all"
    ) {
      console.log(book);
      html += `<div class="row sub-row">
  <span class="id-row">${i++}.</span>
  <span class="title-row">${book.title}</span>
  <span class="rating-row"
    ><div class="rate-star">
      ${book.rate}<ion-icon name="star-outline"></ion-icon></div
  ></span>
</div>`;
    } else console.log("nic");
  }

  return html;
};

//Prepare congrats box
const displayCongrats = function (acc) {
  let html = `<h2 class="header-info">Congrats!🎉</h2>
  <p class="text-info">You have successfully open a new account!</p>
  <p class="text-info">Your login is: <span class="newLogin">${acc.username}</span></p>
  <p class="text-info">
    Your password is: <span class="newLogin">${acc.password}</span>
  </p>`;
  return html;
};

//OPEN/CLOSE MOBILE NAV
const openCloseMobile = function () {
  header.classList.toggle("nav-open");
  closeMobileNav.classList.toggle("hidden");
  openMobileNav.classList.toggle("hidden");
};

//Add listener for close login and register cart box
//click
for (const close of closeCartBox) {
  close.addEventListener("click", closeBox);
}
//overlay click
overlay.addEventListener("click", closeBox);
//press escape
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    (!loginCartBox.classList.contains("hidden") ||
      !regCartBox.classList.contains("hidden"))
  ) {
    closeBox();
  }
});

//Add listener for all login buttons
for (const log of loginBtn) {
  log.addEventListener("click", loginBox);
}

//Add listener for all register burrons
for (const reg of registerBtn) {
  reg.addEventListener("click", regBox);
}

//login verification
let currentAccount;
inputLoginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find((acc) => acc.username === inputLogin.value);
  if (currentAccount?.password === Number(inputPassword.value)) {
    closeBox();
    libraryLogin.forEach((el) => el.classList.add("hidden"));
    libraryOverlay.forEach((el) => el.classList.add("hidden"));
  } else {
    alert("Something went wrong❌\nCheck login and password!");
  }

  //Clear input fields
  inputLogin.value = inputPassword.value = "";
});

//Creating new account
//create user login
inputRegisterBtn.addEventListener("click", function () {
  //Create account username
  const usern = inputRegisterName.value
    .toUpperCase()
    .at(0)
    .concat("", inputRegisterSName.value.toUpperCase().at(0));

  accounts.push({
    name: inputRegisterName.value,
    surname: inputRegisterSName.value,
    email: inputRegisterEmail.value,
    username: usern,
    password: Number(inputRegisterPaswd.value),
  });
  closeBox();
  successRegisterBox.classList.remove("hidden");
  successRegisterBox.innerHTML = "";
  successRegisterBox.insertAdjacentHTML(
    "afterbegin",
    displayCongrats(accounts.at(-1))
  );
  overlay.classList.remove("hidden");
  inputRegisterName.value =
    inputRegisterSName.value =
    inputRegisterEmail.value =
    inputRegisterPaswd.value =
      "";
});

//Display books in table
showBooksBtn.addEventListener("click", function (e) {
  e.preventDefault();

  tableRows.innerHTML = "";
  tableRows.insertAdjacentHTML(
    "afterbegin",
    displayBooks(books, selectGenre.value)
  );
});

//Add book to a library
addBookBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputBookTitle.value != "") {
    books.push({
      id: books.length + 1,
      title: inputBookTitle.value,
      genre: selectGen.value,
      rate: 5.0,
    });
  }
});

//MOBILE NAVIGATION
openMobileNav.addEventListener("click", function () {
  openCloseMobile();
});

closeMobileNav.addEventListener("click", function () {
  openCloseMobile();
});
