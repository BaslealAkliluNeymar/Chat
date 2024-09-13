import React, { useEffect, useState } from 'react'
import getAll from '../services/services'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
      getAll()
      .then(res => setData(res))
    },[])
    console.log(data)


    return (
        <div>Home</div>
    )
}

export default Home