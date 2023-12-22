export default function Buscador({listaColaboradoresFiltro, setListaColaboradoresFiltro, listaColaboradores}){


    function filtrarDatos(arr, datoBuscar) {

        const nuavabusqueda = arr.filter((el) =>           
           
            el.nombre.toString().toLowerCase().includes(datoBuscar.toString().toLowerCase()) ||
            el.correo.toString().toLowerCase().includes(datoBuscar.toString().toLowerCase()) ||
            el.edad.toString().toLowerCase().includes(datoBuscar.toString().toLowerCase()) ||
            el.cargo.toString().toLowerCase().includes(datoBuscar.toString().toLowerCase()) ||
            el.telefono.toString().toLowerCase().includes(datoBuscar.toString().toLowerCase())
        
        );
        
        return nuavabusqueda
      }
    
      
    const filtrarTable = (e) => {
        
        const nuevaLista = [...listaColaboradores]

        let listaFiltrada = filtrarDatos(nuevaLista, e)


         if (e === '')
            return setListaColaboradoresFiltro(listaColaboradores)
        else
            return setListaColaboradoresFiltro(listaFiltrada)

    }

    return(

        <>

            <input type="text" id="q" className="form-control" placeholder="Buscar..." onChange={(e)=>filtrarTable(e.target.value)}/>
              
        </>

    );
}
