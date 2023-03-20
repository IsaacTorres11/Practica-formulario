
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


  //Funcion para ordernar los todos por prioridad
  const orderTodo =(arrayTodos)=>{
      return arrayTodos.sort((a,b)=>{
        // con cero indicamos que no cambiara el orden 
        if (a.prioridad === b.prioridad) return 0
        // si a.prioridad es verdadero retornamos -1, con -1 indicamos que tiene mayor prioridad
        if (a.prioridad)  return -1
        // // si a.prioridad es falso retornamos 1, con 1 indicamos que tiene menor prioridad 
        if (!a.prioridad) return 1
      })
  }


  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo ={addTodo} />
      {/* pasamos la funcion orderTodo como propiedad al componente Todos y lo ejecutamos al momento de que este 
      componente se renderice y le pasamos como parametro de la funcion el todo */}
      <Todos  todos = {orderTodo(todos)} deleteTodo ={deleteTodo} updateTodo ={updateTodo}/>
    </div>
  )
}

export default App
