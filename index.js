// function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  

  function fetchBooks() {
    return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
  }

function renderBooks(books) {
  const main = document.querySelector('main');

  for (const book of books){
    console.log (book)
 
  }
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

  const numArray = [1, 3, 4, 5, 6, 7] 

//console.log(numArray [0])
//consolle.log(numArray[1])

//for (let i=0; 1 < numArray.length; i++){
//  console.log(numArray(i))
// }

for (const num of numArray){
  console.log(num)
}

});
