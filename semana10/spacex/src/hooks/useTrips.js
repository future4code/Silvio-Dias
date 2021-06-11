import axios from 'axios'
import { useState,useEffect } from 'react'
import {BASE_URL,headers} from "../constants/url"

    const useTrips = (url,id,initialValue) => {

      const [trips,setTrips] = useState(initialValue)

      const getTrips = () => {


        axios
        .get(`${BASE_URL+url}/${id}`,headers)
        .then((response) => {
          if(url === "/trips"){
            setTrips(response.data.trips)
            console.log(response)
          }else{
            setTrips(response.data.trip)
            console.log(response)
          }

        })
        .catch((err) =>{
          console.log(err.response)
        })

      }

      useEffect(() => {
        getTrips()
      }, [])

      return trips
    }
    



export default useTrips
