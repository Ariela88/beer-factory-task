const brewerieString = sessionStorage.getItem('brewerie');



// const brewerie = JSON.parse(brewerieString);




const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')

if(id){

    DBService.getSingleBrewery(id).then(brewerie => render(brewerie))
    
}

    

function render(brewerie){

    const detailContainer = document.getElementById('details-wrapper');

    detailContainer.innerHTML = `<h2>${brewerie.name}</h2> <br>
    <span> Nome Azienda: ${brewerie.name}</span><br>
    <span> Tipo Azienda: ${brewerie.brewery_type}</span><br>
    <span> Indirizzo: ${brewerie.address_1}</span><br>
    <span> ${brewerie.address_2 === null? "" : brewerie.address_2}</span><br>
    <span> ${brewerie.address_3 === null? "" : brewerie.address_3}</span><br>
    <span> Città: ${brewerie.city}</span><br>
    <span> Provincia statale ${brewerie.state_province}</span><br>
    <span> Codice postale: ${brewerie.postal_code}</span><br>
    <span> Paese ${brewerie.country}</span><br>
    <a href="${brewerie.website_url}"> <u>Sito web dell'azienda</u> </a><br>
    <span> Stato: ${brewerie.state}</span><br>
    <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=${brewerie.longitude}%2C${brewerie.latitude}&amp;marker=${brewerie.latitude}%2C${brewerie.longitude}" style="border: 1px solid black"></iframe>`
}



                                 
                                 
                                 


