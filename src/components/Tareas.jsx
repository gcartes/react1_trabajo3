import { useState } from 'react'
import { tareasIniciales } from './TareasIniciales'

export default function Tareas(){

    const [nombreTarea, setNombreTarea] = useState()
    const [listaTareas, setListaTareas] = useState(tareasIniciales)

    //const listaTareas = ["Tarea 1", "Tarea 2", "Tarea 3"]


// Función al enviar el formulario
const enviarFormulario = (e) => {
    
    e.preventDefault()
    setListaTareas([...listaTareas, { nombre: nombreTarea, completada: false } ])
    setNombreTarea('')

}
    //Función al escribir sobre el input del formulario
const capturaInput = (e) => {
    setNombreTarea(e.target.value)

}

const completarTarea = (tarea) => {
    const nuevasTareas = [...listaTareas]
    const index = nuevasTareas.findIndex(el => el.nombre === tarea.nombre)
    nuevasTareas[index].completada = true;
    setListaTareas(nuevasTareas);

}

const eliminarTarea = (tarea) => {

    const listaFiltrada = listaTareas.filter(el => el.nombre !== tarea.nombre)
    setListaTareas(listaFiltrada)

}

    return(
        <>

            <form onSubmit={enviarFormulario}>
            <input name="nombreTarea" onChange={capturaInput} />
            <button> Agregar Tarea </button>
            </form>

            <ul>
                {listaTareas.map(tarea => <li 
                        key={tarea.nombre}
                        onClick={()=>console.log(tarea.nombre)}
                        style={tarea.completada === true ? {textDecoration:'line-through'} : {}}>
                        {tarea.nombre}

                        {tarea.completada === false ? <button onClick={()=>completarTarea(tarea)}> Completar </button> : ''}
                        <button onClick={()=>eliminarTarea(tarea)}>Borrar</button>

                        
                        </li>)}
            </ul>
        </>
    );
}