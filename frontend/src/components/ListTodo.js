import React,{useEffect,useState} from 'react';
import EditTodo from "./EditTodo"

function ListTodo() {
  
    const [getDescription,setDescription]= useState([])
    const getTodos= async ()=>{
        try {
            const response = await fetch("http://localhost:3004/todos")
            const result = await response.json();
            setDescription(...getDescription,result)
            console.log(result);
   
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteTodo=async (id)=>{
        try {
            const deleteTodo = await fetch(`http://localhost:3004/todos/${id}`,{
                method:"DELETE",
            })
            console.log("Deleted Sucessfully");
            setDescription(getDescription.filter(todo=>todo.todo_id !== id))
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getTodos()
    },[])
    return (
        <div>
            <h1 className="text-center "> List Todo</h1>
            <table className="table text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {
                        getDescription.map(desc=>(
                            <tr  key={desc.todo_id}>
                                <td>{desc.description}</td>
                                <td><EditTodo getDescription={getDescription} /></td>
                                <td><button className="btn btn-danger" onClick={()=>deleteTodo(desc.todo_id)}>Delete</button></td>
                              </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo
