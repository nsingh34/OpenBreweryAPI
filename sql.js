const Pool = require('pg').Pool


// creating a pool [replace this information when real DB is created]
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

const getBreweriesByCountryAndType = (request, response) => {
    pool.query('SELECT * FROM breweries WHERE country="Canada" AND brewery_type="mirco"', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// calling the function
getBreweriesByCountryAndType()
