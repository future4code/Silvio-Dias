import {app} from "./app"
import {getAllCountries} from "./endpoint/getAllCountries"
import {getCountryById} from "./endpoint/getCountryById"

app.get("/countries",getAllCountries)
app.get("/countries/:id",getCountryById)