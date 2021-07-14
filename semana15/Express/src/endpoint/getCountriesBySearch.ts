import { Request, Response } from "express"
import { countries } from "../data"
import {country} from "../type"

export const getCountriesBySearch = (
    req: Request,
    res: Response
    
):void => {
    const result: country | undefined = countries.find(
        country => country.name === req.params.name
    )
}