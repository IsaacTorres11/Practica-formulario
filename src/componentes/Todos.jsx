import Todo from "./Todo";


//recibimos como propiedad el estado todos
const Todos =({todos, deleteTodo, updateTodo})=>{
    console.log(todos);
    return(
        <div className="mt-5">
            <h2 className="text-center">Tareas</h2>
            <ul className="list-group">
                {
                    todos.map(todo=>(
                        <Todo key={todo.id} todo ={todo} deleteTodo = {deleteTodo} updateTodo={updateTodo}/>
                ))}

                {
                    todos.length === 0 &&(
                        <li className="list-group-item text-center"> Sin todos</li>
                    ) 
                }
            </ul>
        </div>
    )
}

export default Todos
