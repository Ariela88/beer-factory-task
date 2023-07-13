

DBService.getBreweries().then(breweries => render(breweries))


function render(breweries) {

    for (const brewery of breweries) {
        console.log(brewery.name)

    }

    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (let i = 0; i < breweries.length; i++) {

        let brewerie = breweries[i]

        const cardBreweries = document.createElement('div')

        cardBreweries.classList.add('card-brewerie')

        const nameCard = document.createElement('span')
        const breweryTypeCard = document.createElement('span')
        const addressCard = document.createElement('span')
        const stateProvinceCard = document.createElement('span')
        const postalCodeCard = document.createElement('span')
        const countryCard = document.createElement('span')
        const phoneCard = document.createElement('span')
        const webSiteUrlCard = document.createElement('span')
        const stateCard = document.createElement('span')
        const streetCard = document.createElement('span')


        const nodeName = document.createTextNode('Name: ' + brewerie.name + '\n')
        const nodeBreweryType = document.createTextNode('Type: ' + brewerie.brewery_type + '\n')
        const nodeAddress = document.createTextNode('Address: ' + brewerie.address_1 + '\n')
        const nodeStateProvince = document.createTextNode('Province: ' + brewerie.state_province + '\n')
        const nodePostalCode = document.createTextNode('Postal Code: ' + brewerie.postal_code + '\n')
        const nodeCountry = document.createTextNode('Country: ' + brewerie.country + '\n')
        const nodePhone = document.createTextNode('Phone: ' + brewerie.phone + '\n')
        const nodeWebSiteUrl = document.createTextNode('Web Site: ' + brewerie.website_url + '\n')
        const nodeState = document.createTextNode('State: ' + brewerie.state + '\n')
        const nodeStreet = document.createTextNode('Street: ' + brewerie.street)


        nameCard.appendChild(nodeName)
        breweryTypeCard.appendChild(nodeBreweryType)
        addressCard.appendChild(nodeAddress)
        stateProvinceCard.appendChild(nodeStateProvince)
        postalCodeCard.appendChild(nodePostalCode)
        countryCard.appendChild(nodeCountry)
        phoneCard.appendChild(nodePhone)
        webSiteUrlCard.appendChild(nodeWebSiteUrl)
        stateCard.appendChild(nodeState)
        streetCard.appendChild(nodeStreet)



        cardBreweries.appendChild(nameCard)
        cardBreweries.appendChild(breweryTypeCard)
        cardBreweries.appendChild(addressCard)
        cardBreweries.appendChild(stateProvinceCard)
        cardBreweries.appendChild(postalCodeCard)
        cardBreweries.appendChild(countryCard)
        cardBreweries.appendChild(phoneCard)
        cardBreweries.appendChild(webSiteUrlCard)
        cardBreweries.appendChild(stateCard)
        cardBreweries.appendChild(streetCard)

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
        



        console.log(cardBreweries)
    }
}








let pageNumber = 1;


function previous() {
    pageNumber--;
    DBService.getBreweries(pageNumber)
        .then(brewery => render(brewery))
}



function next() {
    pageNumber++;
    DBService.getBreweries(pageNumber)
        .then(brewery => render(brewery))

}



function getDetailsBrewery(id) {

    const url = 'https://api.openbrewerydb.org/v1/breweries?per_id=' + brewery.id;




}


