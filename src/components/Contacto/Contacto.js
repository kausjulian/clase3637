import "./Contacto.css"
import instagram from "../../img/ig-logo.png"
import facebook from "../../img/fb-logo.png"
import yt from "../../img/yt-logo.png"

const Contacto = () => {
    return ( 
        <div className="container">
            <div className=" mt-5 barracontacto ">
                <h4>Seguinos en nuestras redes sociales</h4>
                <div className="d-flex">
                <img src={instagram} className="img" alt="instagram"/>
                <img src={facebook} className="img" alt="facebook"/>
                <img src={yt} className="img" alt="youtube"/>
                </div>
            </div>
           <div className="row">
            <div className="col-6 mt-2">
                <h4>Contacto</h4>
                <form className="form">
            
                    <div className="form-group">
                        <label for="exampleInputName">Nombre</label>
                        <input
                        type="text"
                        className="form-control m-2"
                        id="exampleInputName"
                        placeholder="Ingrese su nombre"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email </label>
                        <input
                        type="email"
                        className="form-control m-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese su email"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Mensaje</label>
                        <textarea
                        placeholder="Ingrese su mensaje"
                        className="form-control m-2"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                        Enviar
                    </button>
                    </form>
                    </div>
                    <div className="col-6 mt-2">
                        <h4>Dónde estamos?</h4>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.108082832451!2d-58.45868558544063!3d-34.62670886622067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca25d278f9ff%3A0xd4fab0f467f9685c!2sAv.%20Rivadavia%206400%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1642030981985!5m2!1ses-419!2sar"
                            width="440"
                            height="300"
                            // allowFullScreen=""
                            loading="lazy"
                        ></iframe>

                    
                    </div>
            </div> 
        </div>
     );
}
 
export default Contacto
