import {app} from "./app"
import {getAllCountries} from "./endpoint/getAllCountries"
import { getCountriesBySearch } from "./endpoint/getCountriesBySearch"
import {getCountryById} from "./endpoint/getCountryById"

app.get("/countries",getAllCountries)
app.get("/countries/:id",getCountryById)
app.get("/countrie/search",getCountriesBySearch)