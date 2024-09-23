let url = "https://fakerapi.it/api/v2/books?_quantity=";
let btn = document.querySelector("button");

// Event listener for button click
btn.addEventListener("click", async () => {
   let num = document.querySelector("input").value; // Get number of books from input
   if (num === "" || num <= 0) {
       alert("Please enter a valid number of books.");
       return;
   }
   let books = await getBook(num); // Fetch books data
   Show(books); // Display books
});

// Function to fetch book data from the API
async function getBook(num) {
   try {
       let res = await axios.get(url + num);
       return res.data.data;
   } catch (error) {
       console.log("error__", error);
       return [];
   }
}

// Function to display the books in a list
function Show(books) {
    let list = document.querySelector("#list");
    list.innerText = ""; // Clear previous

    // Loop through books and display each book's information
    for (let book of books) {
        let li = document.createElement("li");
        li.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.description}</p>
            <img src="${book.image}" alt="${book.title}" width="150" />`;
        list.appendChild(li);
    }
}