import { useContext, useEffect } from "react";
import { CanchasContext } from "../../store/appContext";
import "./Reservas.css"

const Reservas = () => {
    const {reservas,setReservas} = useContext(CanchasContext)
    
    
    useEffect(()=>{
        localStorage.setItem("reservas", JSON.stringify(reservas))
    }, [reservas])
    
    //función para borrar reservas

    const borrarReserva = id =>{
        setReservas(reservas.filter(reserva=>reserva.reservaid!==id))
    }
    
    return (
        <>
        <h2 className="m-3">Reservas</h2>
       { reservas.length > 0 ?
        reservas.map(reserva=>(
            <div className='row border-top border-bottom mt-4 p-2 align-items-center' key={reserva.reservaid}>
                 <div className='col-4 fw-bolder'>{reserva.nombre}</div>
                 <div className='col-4 fw-bolder'>
                 <img src={reserva.url_imagen} className="img-fluid rounded-start" id="imgreserva" alt="cancha"/>
                 </div>
                 <div className='col-2 fw-bolder'>{reserva.hora.hora}hs</div>
                 <div className='col-2 fw-bolder'><button className="btn btn-danger" onClick={()=>borrarReserva(reserva.reservaid)} >Borrar</button>
                 {/* <button className="btn btn-primary m-2">Confirmar</button> */}
                 </div>
            </div>
            
        )) :
        <h4 className="text-center mt-3 mb-5">No hay reservas</h4>
}
      
        </>
        );
}
 
export default Reservas;