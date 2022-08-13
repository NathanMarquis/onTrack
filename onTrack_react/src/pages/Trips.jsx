import { Link } from "react-router-dom"

function Trips (){
    return (
        <div>
            <Link to={'/createtrip'}>Create trip</Link>
        </div>
    )
}

export default Trips