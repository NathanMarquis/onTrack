import { Link } from "react-router-dom"
import MapContainer from "../components/mapContainer"

function Trips (){
    return (
        <div>
            <Link to={'/createtrip'}>Create trip</Link>
            {MapContainer}
        </div>
    )
}

export default Trips