const Todo =({todo, deleteTodo, updateTodo})=>{
    const {id,tarea, descripcion, estado, prioridad} = todo
    return(
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className= {`${estado && 'text-decoration-line-through'}`}>{tarea}</h5>
                    <p  className= {`${estado && 'text-decoration-line-through'}`}>{descripcion}</p>
                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-danger" onClick={()=> deleteTodo(id)}>Eliminar</button>
                        <button className="btn btn-sm btn-warning" onClick={()=> updateTodo(id)}>Actualizar</button>
                    </div>
                </div>
                <span className="badge text-bg-primary"> {prioridad && 'Prioridad'} </span>
            </div>
        </li>
    )
}

export default Todo