import { Request, Response } from "express"
import { countries } from "../data"
import {country} from "../type"

export const getCountriesBySearch = (
    req: Request,
    res: Response
    
):void => {
    let countriesList: country[] = countries

    if(req.query.name){
        const query = req.query.name as string
        countriesList = countriesList.filter(
            country => country.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
    }

    if(req.query.capital){
        const query = req.query.capital as string
        countriesList = countriesList.filter(
            country => country.capital.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
    }

    if(req.query.continent){
        const query = req.query.continent as string
        countriesList = countriesList.filter(
            country => country.continent.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
    }


    if(countriesList.length > 0){
        res.send(countriesList)
    }else{
        res.statusCode = 404
        res.end(`Resultado não enconotrado`)
    }

}