import {BrowserRouter,Routes,Route,useNavigate,useParams,Link} from 'react-router-dom'


function WelcomeComponent(){

    const {username} = useParams()

    return(
        <div className="WelcomeComponent">
            <h1>Welcome to React {username}</h1>
            <div>
                Manage Your todos. <Link to='/todos'>Go here</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent