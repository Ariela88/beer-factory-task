class Book{


    constructor(title,author,dop,genre,cover){
    this.title = title
    this.author = author
    this.dop = dop 
    this.genre = genre 
    this.cover = cover
}
}

class Manager {

    constructor(booksArray = []) {
        
        this.booksArray = booksArray

    }

    addbooks(books) {

        this.booksArray.push(books)

    }

    addbooksWithTitle(title) {

        const newbooks = new books(title)

        this.addbooks(newbooks)
        Storage.saveData(Manager.booksArray)} 


   

    orderoDosByTitle() {

        this.booksArray.sort((books1, books2) => books1.compareByTitle(books2))


    }

    orderbookssByDop() {


        this.booksArray.sort((books1, books2) => books1.compareByDop(books2))


    }

    


    deletebooks(index) {

        
        
        this.booksArray.splice(index, 1);
        
        

    }

}


class DbService{

   
    
    getAllBooks(){
    
    const url = 'https://64b512caf3dbab5a95c6a515.mockapi.io/'
    
    return fetch(url)
    .then(resp => resp.json())
    .then(result => this.convertBooksArray(result))
    .catch(error => console.log(error.message))
    
    }

    
   convertBooksArray(genericArray){
    
        const tempArray = []
    
        for (const obj of genericArray) {
    
            const newBook = new Book(obj.title,obj.author, obj.dop,obj.genre,obj.cover)
    
            tempArray.push(newBook)
            
            
        }
        
        return tempArray
    
    
    }

    static getSingleBook(id) {
     

        const url = 'https://64b512caf3dbab5a95c6a515.mockapi.io/' + id;
        return fetch(url).then(resp=>resp.json())
      
}



//DELETE
static deleteBooks(id){
    
        
    
    const deleteUrl = 'https://64b512caf3dbab5a95c6a515.mockapi.io/books/' + id;
    
    return fetch(deleteUrl,{method:'delete'}).then(resp => resp.json())
}
}


DbService.getAllBooks().then(books => render(books))


function render(books) {

    const booksWrapper = document.getElementById('books-wrapper');
  
    booksWrapper.innerHTML = '';
  
    for (let i = 0; i < books.length; i++) {
  
      let book = books[i]
  
      const cardBreweries = document.createElement('div')
      cardBreweries.classList.add('card-brewerie')
      const TitleCard = document.createElement('strong')
      const AuthorCard = document.createElement('span')
  
  
  
      const nodeTitle = document.createTextNode(book.title)
      const nodeAuthor = document.createTextNode(book.author)
  
  
  
      TitleCard.appendChild(nodeTitle)
      AuthorCard.appendChild(nodeAuthor)
      cardBreweries.appendChild(TitleCard)
      cardBreweries.appendChild(AuthorCard)
      mainContainer.appendChild(cardBreweries)
  
  
      const detailBtn = document.createElement('button')
      const detailBtnNode = document.createTextNode('Dettagli')
      detailBtn.appendChild(detailBtnNode)
  
  
  
      detailBtn.addEventListener('click', () => {
        // sessionStorage.setItem('brewerie', JSON.stringify(brewerie));
        window.location = './details.html?id=' + book.id;
      }
  
  
      )
      cardBook.appendChild(detailBtn)
  
    }
  }
  
  
  
  let pageNumber = 1
  
  
  function previous() {
  
  
    if (pageNumber === 1) {
  
      alert('non ci sono pagine prima di questa!')
      return pageNumber[1]
    }
    pageNumber--;
    DBService.getAllBooks(pageNumber)
      .then((book) => render(book));
  
  
  }
  
  function next() {
  
  
    pageNumber++;
    DBService.getBreweries(pageNumber)
      .then(book => render(book))
  
  }
  
  
  
  
  
  let mybutton = document.getElementById("myBtn");
  
  
  window.onscroll = function () { scrollFunction() };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  
  