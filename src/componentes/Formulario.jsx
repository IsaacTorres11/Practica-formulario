import { useState } from "react"

const Formulario =()=>{

    //Se crea el estado formulario
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        descripcion: '',
        validacion: true
    })

    //Destructuracion de formulario
    const {nombre, apellido, descripcion, validacion} = formulario
    
    //Se genera la funcion para enviar el formulario
    const enviar =(e)=>{
        e.preventDefault()
        console.log(nombre)
        console.log(apellido)
        console.log(descripcion)
        console.log(validacion)
        
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
                placeholder="Ingresa tu nombre"
                name= 'nombre'
                value = {formulario.nombre}
                onChange ={handleChange}/>

                <input type="text"
                placeholder="Ingresa tu apellido"
                name='apellido' 
                value={formulario.apellido}
                onChange ={handleChange}
                />

                <input type="textarea" 
                placeholder="Haz una descripcion de ti"
                name="descripcion"
                value={formulario.descripcion}
                onChange ={handleChange}/>

                <div>
                    <input type="checkbox" 
                    name='validacion'
                    id="inputCheck"
                    checked={formulario.validacion}
                    onChange ={handleChange}/>

                    <label htmlFor="inputCheck">Eres Mayor de Edad</label>
                </div>

                <button> Enviar</button>
            </form>
        </>
    )
}

export default Formulario