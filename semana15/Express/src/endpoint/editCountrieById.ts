import { Request, Response } from "express"
import { countries } from "../data"
import {country} from "../type"

export const editCountrieById = (
    req:Request,
    res:Response
):void => {
    const id = Number(req.params.id)
    let errorCode: number = 400;
    
    try{
        const countryIndex: number = countries.findIndex(
            (country) => country.id === id
        )

        if(countryIndex === -1){
            errorCode = 404
            throw new Error()
        }

        if(!req.body.name || !req.body.capital){
            throw new Error("Nome ou Capital não foram enviadas")
        }else{
            countries[countryIndex].name = req.body.name
            countries[countryIndex].capital = req.body.capital
        }
        
        res.status(200).send("País atualizado com sucesso")
    } catch(error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}