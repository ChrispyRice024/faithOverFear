import React, {useEffect, useState} from 'react'
import data from '../data'
// const dotenv = require('dotenv')
// dotenv.config()
//Seed Data


export default function Home (){

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('https://dark-erin-goshawk-toga.cyclic.app/item', {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                if (!res.ok){
                    throw new Error('Network response was not okay')
                }

                const result = await res.json()
                setData(result)
            }catch(err){
                console.error('Error', err)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <div id='home'>
            {data ? (
                <p>
                    Data: {JSON.stringify(data)}
                </p>
            ):(
                <p>No data available</p>
            )}

        </div>
    )
}