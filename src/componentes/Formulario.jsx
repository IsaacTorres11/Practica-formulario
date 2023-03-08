import { useState } from "react"

const Formulario =()=>{

    //Se crea el estado formulario
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        descripcion: '',
        estado: 'Completado',
        validacion: true
    })

    //Destructuracion de formulario
    const {nombre, apellido, descripcion, estado ,validacion} = formulario
    
    //Se genera la funcion para enviar el formulario
    const enviar =(e)=>{
        e.preventDefault()
        console.log(nombre)
        console.log(apellido)
        console.log(descripcion)
        console.log(estado)
        console.log(validacion)
        
        if(validacion == false){
            alert('debes ser mayor de edad')
        }
        
    }


    //Funcion para el evento onChange
    const handleChange = e=>{
        //destructuracion del evento 
        const {name, checked, value, type} = e.target
        
        setFormulario({
            ...formulario,
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
                placeholder="Ingresa tu nombre"
                name= 'nombre'
                value = {formulario.nombre}
                onChange ={handleChange}/>

                <input type="text"
                className="container mt-2"
                placeholder="Ingresa tu apellido"
                name='apellido' 
                value={formulario.apellido}
                onChange ={handleChange}
                />

                <textarea type="text" 
                className="container mt-2"
                placeholder="Haz una descripcion de ti"
                name="descripcion"
                value={formulario.descripcion}
                onChange ={handleChange}/>

                <select name="estado"  value={estado} className="form-control mb-2" onChange ={handleChange}>
                    <option value="Completado">Completado</option>
                    <option value="Pendiente">Pendiente</option>
                </select>

                <div>
                    <input type="checkbox" 
                    name='validacion'
                    id="inputCheck"
                    checked={formulario.validacion}
                    onChange ={handleChange}/>

                    <label htmlFor="inputCheck">Eres Mayor de Edad</label>
                </div>

                <button className="btn btn-primary"> Enviar</button>
            </form>
        </>
    )
}

export default Formulario