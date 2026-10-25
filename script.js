// Search Books
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function searchBooks() {
    if (!searchInput) return;

    const searchText = searchInput.value.toLowerCase().trim();
    const books = document.querySelectorAll(".book");
    let found = 0;

    books.forEach(function (book) {
        const bookText = book.textContent.toLowerCase();
        const matches = bookText.includes(searchText);

        book.style.display = matches ? "" : "none";

        if (matches) found++;
    });

    if (noResults) {
        noResults.style.display = found === 0 ? "block" : "none";
    }
}

if (searchInput) {
    searchInput.addEventListener("input", searchBooks);
}


// View Book
function showBook(bookName, authorName) {
    document.getElementById("modalBookTitle").textContent = bookName;
    document.getElementById("modalBookAuthor").textContent =
        "Author: " + authorName;

    document.getElementById("bookModal").style.display = "flex";
}

function closeBook() {
    document.getElementById("bookModal").style.display = "none";
}

function issueSelectedBook() {
    const bookName = document.getElementById("modalBookTitle").textContent;

    document.getElementById("bookName").value = bookName;

    closeBook();

    document.getElementById("issue").scrollIntoView({
        behavior: "smooth"
    });
}


// Issue Book Form
const issueForm = document.getElementById("issueForm");

if (issueForm) {
    issueForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your book request has been submitted successfully!");
        issueForm.reset();
    });
}


// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Demo login submitted successfully!");
        loginForm.reset();
    });
}


// Register Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Demo registration submitted successfully!");
        registerForm.reset();
    });
}


// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your message has been submitted successfully!");
        contactForm.reset();
    });
}