import { Request, Response } from "express"
import { countries } from "../data"
import {country} from "../type"

export const getCountriesBySearch = (
    req: Request,
    res: Response
    
):void => {
    let countriesList: country[] = countries
    try {
        
        if(!req.query.name && !req.query.capital && !req.query.continent){
            throw new Error("Nenhum parametro enviado")
        }

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

        res.status(200).send(countriesList)
    }catch(error){
        res.status(400).send(error.message)
    }

}