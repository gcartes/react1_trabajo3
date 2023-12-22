import { useState } from "react"
export default function Formulario({listaColaboradores, setListaColaboradores, setSuccess, setError, setListaColaboradoresFiltro}){


    const [nombreColaborador, setNombreColaborador] = useState('')
    const [emailColaborador, setEmailColaborador] = useState('')
    const [edadColaborador, setEdadColaborador] = useState('')
    const [cargoColaborador, setCargoColaborador] = useState('')
    const [telefonoColaborador, setTelefonoColaborador] = useState('')

    const regexTextos = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/    
    const regexNumero = /^[0-9]+$/    
    const regexEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    const validarFormulario = (e)=>{
        e.preventDefault();
        
     
        if (nombreColaborador === ''){
            setSuccess('');
            return setError('Error al validar nombre');
        }

        if (!regexTextos.test(nombreColaborador)){
            setSuccess('');
            return setError('Error al validar nombre, solo letras');
        }


        if (emailColaborador === ''){
            setSuccess('');
            return setError('Error al validar email');
        }

        if (!regexEmail.test(emailColaborador)){
            setSuccess('');
            return setError('Error al validar email');
        }

        if (edadColaborador ===''){
            setSuccess('');
            return setError('Error debe ingresar edad');
        }

        if (!regexNumero.test(edadColaborador)){
            setSuccess('');
            return setError('Error: Edad debe ser solo números');
        }


        if (cargoColaborador === ''){
            setSuccess('');
            return setError('Error debe ingresar cargo');
        }
        if (telefonoColaborador === ''){
            setSuccess('');
            return setError('Error debe ingresar teléfono');
        }

        setError('');
        setSuccess('Agregado con Éxito')
        setListaColaboradoresFiltro('')

        let id = Date.now()
        setNombreColaborador('')
        setEmailColaborador('')
        setCargoColaborador('')
        setEdadColaborador('')
        setTelefonoColaborador('')
        return setListaColaboradores([...listaColaboradores, {id: id, nombre: nombreColaborador, correo: emailColaborador, edad: edadColaborador, cargo: cargoColaborador, telefono: telefonoColaborador}])

        
    }

    return(

        <>
            <form onSubmit={validarFormulario}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={nombreColaborador} onChange={(e) => setNombreColaborador(e.target.value)} />
                </div>
                <div className="mb-3">                
                    <input type="email" className="form-control" id="email" placeholder="Email" value={emailColaborador} onChange={(e) => setEmailColaborador(e.target.value)}  />
                </div>        
                <div className="mb-3">                
                    <input type="text" className="form-control" id="edad" placeholder="Edad" value={edadColaborador} onChange={(e) => setEdadColaborador(e.target.value)}  />
                </div>        
                <div className="mb-3">                
                    <input type="text" className="form-control" id="cargo" placeholder="Cargo" value={cargoColaborador} onChange={(e) => setCargoColaborador(e.target.value)}  />
                </div>        
                <div className="mb-3">                
                    <input type="text" className="form-control" id="telefono" placeholder="Teléfono" value={telefonoColaborador} onChange={(e) => setTelefonoColaborador(e.target.value)}  />
                </div>        
                <div className="mb-3">                
                    <button type="submit" className="btn btn-success">Agregar Colaborador</button>
                </div> 
            </form>       
              
        </>

    );
}
