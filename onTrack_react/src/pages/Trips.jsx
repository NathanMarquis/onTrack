import { Link } from "react-router-dom"

function Trips (){
    return (
        <div>
            <Link to={'/create_trip'}>Create trip</Link>
        </div>
    )
}

export default Trips