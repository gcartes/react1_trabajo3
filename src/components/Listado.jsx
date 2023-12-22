
export default function Listado({listaColaboradores, listaColaboradoresFiltro}){

    if (listaColaboradoresFiltro !== '')
        listaColaboradores = listaColaboradoresFiltro;

    return(

        <>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Cargo</th>
                                <th scope="col">Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaColaboradores.map(colaborador =>
                                    <tr key={colaborador.id}>
                                        <td>{colaborador.nombre}</td>
                                        <td>{colaborador.correo}</td>
                                        <td>{colaborador.edad}</td>
                                        <td>{colaborador.cargo}</td>
                                        <td>{colaborador.telefono}</td>
                                    </tr>
                            )}
                        </tbody>
                        </table>        

                </div>    
        </>

    );
}
