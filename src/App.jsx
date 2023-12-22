import { useState } from 'react';
import Tareas from './components/Tareas'
import Listado from './components/Listado'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario';
import { BaseColaboradores } from './components/BaseColaboradores'
import Alert from './components/Alert';

function App() {

  const [error, setError] = useState(0);
  const [succes, setSuccess] = useState(0);
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [listaColaboradoresFiltro, setListaColaboradoresFiltro] = useState('')
  
  return (
    <>
      <div className="container">

          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                  <Buscador listaColaboradoresFiltro={listaColaboradoresFiltro} setListaColaboradoresFiltro={setListaColaboradoresFiltro} listaColaboradores={listaColaboradores}></Buscador>
                  <Listado listaColaboradores={listaColaboradores} listaColaboradoresFiltro={listaColaboradoresFiltro}></Listado>
              </div>
              <div className="col">
                  <Formulario listaColaboradores={listaColaboradores} setListaColaboradores={setListaColaboradores} setSuccess={setSuccess} setError={setError} setListaColaboradoresFiltro={setListaColaboradoresFiltro}></Formulario>
                  <Alert error={error} succes={succes}></Alert>
              </div>
            </div>
          </div>

      </div>
    </>
  )


  
}
export default App
