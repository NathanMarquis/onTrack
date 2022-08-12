import { Link } from "react-router-dom"

function Login (){
    return (
        <div>
            <Link to={'/createaccount'}>Create account</Link>
        </div>
    )
}

export default Login