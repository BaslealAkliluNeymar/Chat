import axios from 'axios'
const url = 'http://localhost:3001/'


const getAll = async () =>{
    const all = await axios.get(url)
    return all.data
}




export default getAll