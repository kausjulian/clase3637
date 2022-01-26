import { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { CanchasContext } from "../../store/appContext";
import "./Cancha.css"


const Cancha = () => {
    const {id} = useParams()
    const {canchasList,getCanchas,agregarreserva, reservas} = useContext(CanchasContext)
    
   
    //funcion para reservar la cancha
    const agregar = (cancha,hora) =>{
        agregarreserva({...cancha, hora,reservaid:new Date().getTime()})
        toast.success(`Cancha ${cancha.nombre} reservada con éxito`)
    }
     ///funcion para cargas las canchas
    useEffect(() => {
        getCanchas(id)
      },[id])


   
      return ( 
    <>
<h2 className="m-3 ">Nuestras Canchas</h2>
{canchasList.length > 0 ?
canchasList?.map((cancha) => (
<div className="card m-4 shadow" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={cancha.url_imagen} className="img-fluid rounded-start" alt="cancha"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{cancha.nombre}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">{cancha.horarios?.map((hora)=>
        <button onClick={()=>agregar(cancha, hora)} key={hora.id} className="btn btn-primary m-2" disabled={reservas.find(reserva=>reserva.nombre ===cancha.nombre && reserva.hora.id===hora.id) ? true :false}> 
            {hora.hora} 
        </button>)}
        <Toaster />
        </small></p>
      </div>
    </div>
  </div>
</div>

)) :
<h4>Cargando</h4>}
    </> 
    );
}
 
export default Cancha;



