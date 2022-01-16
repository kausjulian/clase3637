import { useContext, useEffect } from "react";
import { CanchasContext } from "../../store/appContext";
import Card from "../Card";
import Carrousel from "../Carrousel";
import "./Home.css"


const Home = () => {
    const {canchasList,getCanchas} = useContext(CanchasContext)
    


    useEffect(() => {
        getCanchas("deportes")
      },[])
    
      return (
        <main className="container">
            <Carrousel/>
            <div className="container">
            <div className="row d-flex justify-content-between">
                <h1 className="text-center mt-3 p-3">Nuestras canchas</h1>
                {canchasList.length > 0 ?
                canchasList.map((cancha) => (
                <Card  key={cancha.id} cancha={cancha} {...cancha}>
                    {/* <i onClick={() => onAdd(movie)} className="bi bi-heart-fill"></i> */}
                </Card>
                ))
             :
            <h4>Cargando</h4>}
            </div>
            </div>
      </main>

      );
}
 
export default Home;

