const brewerieString = sessionStorage.getItem('brewerie');
const detailContainer = document.getElementById('details-wrapper');

    const brewerie = JSON.parse(brewerieString);
    
    detailContainer.innerHTML = `<h2>${brewerie.name}</h2> <br>
                                 
                                 <span>${brewerie.brewery_type}</span><br>
                                 <span>${brewerie.address_1}</span><br>
                                 <span>${brewerie.address_2 === null? "" : brewerie.address_2}</span><br>
                                 <span>${brewerie.address_3 === null? "" : brewerie.address_3}</span><br>
                                 <span>${brewerie.city}</span><br>
                                 <span>${brewerie.state_province}</span><br>
                                 <span>${brewerie.postal_code}</span><br>
                                 <span>${brewerie.country}</span><br>
                                 <a href="${brewerie.website_url}"> Sito web</a><br>
                                 <span>${brewerie.state}</span><br>
                                 <span>${brewerie.street}</span> <br>
                                 <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=${brewerie.longitude}%2C${brewerie.latitude}&amp;marker=${brewerie.latitude}%2C${brewerie.longitude}" style="border: 1px solid black"></iframe>
                                 
                                 `
                                 


