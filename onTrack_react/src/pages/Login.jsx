import { Link } from "react-router-dom"

function Login (){
    return (
        <div>
            <Link to={'/trips/create_account'}>Create account</Link>
        </div>
    )
}

export default Login