

DBService.getBreweries().then(breweries => render(breweries))


function render(breweries) {

  const mainContainer = document.getElementById('main-container');

  mainContainer.innerHTML = '';

  for (let i = 0; i < breweries.length; i++) {

    let brewerie = breweries[i]

    const cardBreweries = document.createElement('div')
    cardBreweries.classList.add('card-brewerie')
    const nameCard = document.createElement('strong')
    const stateCard = document.createElement('span')



    const nodeName = document.createTextNode(brewerie.name)
    const nodeState = document.createTextNode(brewerie.state)



    nameCard.appendChild(nodeName)
    stateCard.appendChild(nodeState)
    cardBreweries.appendChild(nameCard)
    cardBreweries.appendChild(stateCard)
    mainContainer.appendChild(cardBreweries)


    const detailBtn = document.createElement('button')
    const detailBtnNode = document.createTextNode('Dettagli')
    detailBtn.appendChild(detailBtnNode)



    detailBtn.addEventListener('click', () => {
      sessionStorage.setItem('brewerie', JSON.stringify(brewerie));
      window.location.href = './details.html';
    }


    )
    cardBreweries.appendChild(detailBtn)

  }
}



let pageNumber = 1


function previous() {


  if (pageNumber === 1) {

    alert('non ci sono pagine prima di questa!')
    return pageNumber[1]
  }
  pageNumber--;
  DBService.getBreweries(pageNumber)
    .then((brewery) => render(brewery));


}

function next() {


  pageNumber++;
  DBService.getBreweries(pageNumber)
    .then(brewery => render(brewery))

}



function getDetailsBrewery(id) {

  const url = 'https://api.openbrewerydb.org/v1/breweries?per_id=' + brewery.id;




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






