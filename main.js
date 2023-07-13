

DBService.getBreweries().then(breweries => render(breweries))


function render(breweries) {

    for (const brewery of breweries) {
        console.log(brewery.name)

    }

    function previous() {
        pageNumber--
        DBService.getBreweries(pageNumber).
            then(breweries => render(breweries))

    }



    function next() {
        pageNumber++
        DBService.getBreweries(pageNumber).
            then(breweries => render(breweries))



    }





}