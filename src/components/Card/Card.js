import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ deporte, url_imagen }) => {
    
    
    return ( 

        <div className="card col-4 shadow border-0" >
            <img src={url_imagen} className="card-img-top pt-3" alt="cancha"/>
            <div className="card-body">
                <h5 className="card-title">{deporte}</h5>
                <p className="card-text pt-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={`/${deporte}`} className="btn btn-primary ">Ver canchas</Link>
            </div>
        </div>
     );
}
 
export default Card;