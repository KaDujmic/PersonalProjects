


// Book constructor
function Book(title, author, isbn){
  this.title = title
  this.author = author
  this.isbn = isbn
}



// UI constructor
function UI(){}

// Add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list')

  // Create tr element
  const row = document.createElement('tr')

  //Insert calls
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class = "delete">x<a></td>
  `
  list.appendChild(row)
}

// Show alert
UI.prototype.showAlert = function(msg, className){
  // Create a div
  const div = document.createElement('div')
  // Add classes
  div.className = `alert ${className}`
  div.appendChild(document.createTextNode(msg))
  // Get parrent
  const container = document.querySelector('.container')
  // Get form
  const form = document.querySelector('#book-form')
  // Insert alert
  container.insertBefore(div, form)

  //Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 3000)

}

// Delete book
UI.prototype.deleteBook = function(target){
  if (target.className === 'delete'){
    target.parentElement.parentElement.remove()
  }
}



// Clear Fields
UI.prototype.clearFields = function (){
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}


// Event listeners
document.getElementById('book-form').addEventListener('submit', 
function(e){
  // Get form values
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value

  // Instatiate book
  



  // Instatiate UI
  const ui = new UI()

  
  if (title === '' || author === '' | isbn === ''){
    // Add book to list
    ui.showAlert('Please fill in all fields', 'error')
    // Clear fields
    ui.clearFields()
  } else {
    const book = new Book(title, author, isbn)
    ui.addBookToList(book)
    // Clear fields
    ui.clearFields()
    ui.showAlert('Book Added!!', 'success')
  }
  

  

  e.preventDefault()
})


// Event listener for delete

document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI()

  ui.deleteBook(e.target)
  ui.showAlert('Book removed!', 'success')
  e.preventDefault()
})