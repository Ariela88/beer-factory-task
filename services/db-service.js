class DBService {


    static getBreweries(pageNumber) {

        const url = 'https://api.openbrewerydb.org/v1/breweries?per_page=12&page=' + pageNumber;



        return fetch(url)
        .then(resp => resp.json())



    }

    


}




