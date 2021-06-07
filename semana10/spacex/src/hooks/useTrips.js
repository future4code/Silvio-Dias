import axios from 'axios'
import { useState,useEffect } from 'react'


    const useTrips = (url,id,initialValue) => {

      const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio/` 
      const headers = { header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs"
        }
      }

      const [trips,setTrips] = useState(initialValue)
      
      const getTrips = () => {
        axios
        .get(BASE_URL + url,headers)
        .then((response) => {
          setTrips(response.data.trips)
          console.log(trips)
        })
        .catch((err) =>{
          alert('foi não')
        })

      }

      useEffect(() => {
        getTrips()
      }, [])

      return trips
    }
    



export default useTrips
