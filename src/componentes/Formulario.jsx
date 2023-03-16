import { useState } from "react"
import Swal from "sweetalert2"


const Formulario =({addTodo})=>{

    //Se crea el estado formulario
    const [todo, setTodo] = useState({
        tarea: '',
        descripcion: '',
        estado: 'Completado',
        prioridad: true
    })

    //Destructuracion de formulario
    const {tarea, descripcion, estado ,prioridad} = todo
    
    //Se genera la funcion para enviar el formulario
    const enviar =(e)=>{
        e.preventDefault()
        
        if( !tarea.trim()  || !descripcion.trim() ){
            //Agregamos un mensaje con sweetalert2 
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La tarea y Descripcion son obligatorios',
              })
              //este return se pone para que el codigo no avance en caso de que los campos tarea y descripcion esten con espacions en blanco   
        }

        addTodo({
            id: Date.now(),
            ...todo,
            estado : estado ==='Completaado'
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregaste la tarea de forma correcta',
            showConfirmButton: false,
            timer: 1000
          })

    }


    //Funcion para el evento onChange
    const handleChange = e=>{
        //destructuracion del evento 
        const {name, checked, value, type} = e.target
        
        setTodo({
            ...todo,
            [name] : type === 'checkbox'
            ? checked
            : value
        })
    }

    return (
        <>
            <form onSubmit={enviar}>

                <input type="text" 
                className="container mt-2"
                placeholder="Ingresa la tarea"
                name= 'tarea'
                value = {tarea}
                onChange ={handleChange}/>

                <textarea type="text" 
                className="container mt-2"
                placeholder="Describe la tarea"
                name="descripcion"
                value={descripcion}
                onChange ={handleChange}/>

                <select name="estado"  value={estado} className="form-control mb-2" onChange ={handleChange}>
                    <option value="Completado">Completado</option>
                    <option value="Pendiente">Pendiente</option>
                </select>

                <div>
                    <input type="checkbox" 
                    name='prioridad'
                    id="inputCheck"
                    checked={prioridad}
                    onChange ={handleChange}/>

                    <label htmlFor="inputCheck">Dar Prioridad</label>
                </div>

                <button className="btn btn-primary"> Agregar Tarea </button>
            </form>
        </>
    )
}

export default Formulario