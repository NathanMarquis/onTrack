import { Link } from "react-router-dom"
import axios from "axios"

function CreateTrip (){
    axios.get('/weatherupdate').then((response)=>{
        console.log('response from server: ', response)})

  
    return (
        <div>
            Create trip
        </div>
    )
}

export default CreateTrip