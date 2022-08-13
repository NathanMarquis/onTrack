import { Link } from "react-router-dom"
import axios from "axios"

function CreateTrip (){
    axios.get('https://api.weather.gov/gridpoints/TOP/31,80/forecast').then((response)=>{
        console.log('response from server: ', response)})
    return (
        <div>
            Create trip
        </div>
    )
}

export default CreateTrip