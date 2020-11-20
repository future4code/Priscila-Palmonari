import React , {useState, useEffect} from "react"
import axios from "axios"

export function useRequestData(url,initialState){
    const [data, SetData] = useState(initialState)

    useEffect(() =>{
        axios.get(url)
        .then((response) =>{
            SetData(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[url])
    return data
}