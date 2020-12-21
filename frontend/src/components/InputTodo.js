import React,{useState} from 'react'

function InputTodo() {
    const [description,setDescription]=useState('')

    const descriptionChangeHandler=(e)=>{
        setDescription(e.target.value )
    }

    const onsubmitForm=async (e)=>{
        e.preventDefault();
        const body ={description}
        const response = await fetch("http://localhost:3004/todos",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(body)
        })
        setDescription("")
        console.log(response);
        window.location="/"
    }
  
    return (
        <div>
            <h1 className="text-center ">Pern Todo List</h1>
            <form className="d-flex"  onSubmit={onsubmitForm}>
                <input type="text" className="form-control" value={description} onChange={descriptionChangeHandler} />
                <button className="btn btn-primary" type="submit "  onClick={onsubmitForm}>Add</button>
            </form>
        </div>
    )
}

export default InputTodo
