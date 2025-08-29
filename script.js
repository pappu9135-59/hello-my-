const books = [
    { title: "The Alchemist", author: "Paulo Coelho", price: "₹299" },
    { title: "Atomic Habits", author: "James Clear", price: "₹399" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: "₹349" },
    { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", price: "₹199" },
    { title: "The Power of Now", author: "Eckhart Tolle", price: "₹299" },
    { title: "Ikigai", author: "Héctor García", price: "₹249" }
];

let cartCount = 0;

const bookList = document.getElementById('book-list');
const cartCountSpan = document.getElementById('cart-count');
const searchInput = document.getElementById('search');

function renderBooks(filter = "") {
    bookList.innerHTML = "";
    books
        .filter(book => book.title.toLowerCase().includes(filter.toLowerCase()) || book.author.toLowerCase().includes(filter.toLowerCase()))
        .forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'book';
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Price:</strong> ${book.price}</p>
                <button>Add to Cart</button>
            `;
            bookDiv.querySelector('button').addEventListener('click', () => {
                cartCount++;
                cartCountSpan.textContent = cartCount;
                bookDiv.querySelector('button').textContent = "Added!";
                setTimeout(() => {
                    bookDiv.querySelector('button').textContent = "Add to Cart";
                }, 1000);
            });
            bookList.appendChild(bookDiv);
        });
}

// Initial render
renderBooks();

// Search functionality
searchInput.addEventListener('input', (e) => {
    renderBooks(e.target.value);
});
