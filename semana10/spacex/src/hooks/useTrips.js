import axios from 'axios'
import { useState,useEffect } from 'react'
import {BASE_URL} from "../constants/url"

    const useTrips = (url,id,initialValue) => {

      const [trips,setTrips] = useState(initialValue)

      const getTrips = () => {

        const headers = { header: {
          auth: localStorage.getItem("token")? localStorage.getItem("token"): ""
          }
        }

        axios
        .get(`${BASE_URL+url}/${id}`,headers)
        .then((response) => {
          setTrips(response.data.trips)
          console.log(response)
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
