import { createContext,useEffect,useState } from "react";
import axios from "axios";
export const CanchasContext = createContext(null)


const CanchasProvider = ({children}) =>{
    const [canchasList, setCanchasList] = useState([]);
    const [reservas, setReservas] = useState(JSON.parse(localStorage.getItem("reservas")) !== null ? JSON.parse(localStorage.getItem("reservas")):
    [])


const getCanchas = async (tipo) =>{
    const results = await axios.get(`https://apipdtc.herokuapp.com/${tipo}`)
    // console.log(results.data)
    setCanchasList(results.data)
}

// useEffect(() => {
//     getCanchas()
//   },[])


  
  const agregarreserva = (canchareservada) =>{
      setReservas([...reservas,canchareservada])
        
  }


  //reservas
// const getReservas = () =>{
//     reservas.map(reserva=>(

//     ))

//   }
  // este use efect sirve para mantener actualizado el localstorage cada vez que cambie reserva
useEffect(()=>{
    localStorage.setItem("reservas", JSON.stringify(reservas))

}, [reservas])

  return(
    <CanchasContext.Provider value={{canchasList, setCanchasList,getCanchas, agregarreserva,reservas,setReservas}}>
        {children}
    </CanchasContext.Provider>
);
}
export default CanchasProvider