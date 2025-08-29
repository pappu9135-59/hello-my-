const books = [
    { title: "The Alchemist", author: "Paulo Coelho", price: "₹299" },
    { title: "Atomic Habits", author: "James Clear", price: "₹399" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: "₹349" },
    { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", price: "₹199" }
];

const bookList = document.getElementById('book-list');

books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Price:</strong> ${book.price}</p>
        <button onclick="alert('Added to cart: ${book.title}')">Add to Cart</button>
    `;
    bookList.appendChild(bookDiv);
});
