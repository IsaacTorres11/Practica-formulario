
// Importamos los componentes
import { useState } from "react"
import Formulario from "./componentes/Formulario"
import Todos from "./componentes/Todos"


//Creamos el estado incial del estado todos el cual sera un objeto llamado initialState
const initialState = [
  {
    id: 1,
    tarea: 'Tarea 01',
    descripcion: 'Descripcion 01',
    estado: true,
    prioridad: true
  },

  {
    id: 2,
    tarea: 'Tarea 02',
    descripcion: 'Descripcion 02',
    estado: false,
    prioridad: true
  },

  {
    id: 3,
    tarea: 'Tarea 03',
    descripcion: 'Descripcion 03',
    estado: true,
    prioridad: false
  },

]




function App() {

  //Creamos un estado llamado todos
  const [todos, setTodos] = useState(initialState)

  //Creamos la funcion para agregar una tarea
  const addTodo = todo =>{
    setTodos([...todos, todo])
  }

  //se crea la funcion para eliminar tareas
  const deleteTodo = id =>{
    
    const newArray = todos.filter(todo => todo.id !== id )

    setTodos (newArray)
  }

  //Creamos la funcion para actualizar la tarea
  
  const updateTodo = id =>{
    
    const newArray = todos.map( todo =>{
      if (todo.id === id){
        todo.estado = !todo.estado
      }
      return todo
    })

    setTodos(newArray)
  }

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo ={addTodo} />
      <Todos  todos = {todos} deleteTodo ={deleteTodo} updateTodo ={updateTodo}/>
    </div>
  )
}

export default App
