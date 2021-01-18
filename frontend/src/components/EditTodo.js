import React,{Fragment,useState} from 'react'


function EditTodo({getDescription}) {
    const [desc,setDesc]=useState(getDescription.desc);

    const updateDescription= async (e)=>{
        e.preventDefault();
        const body ={desc}
        const response = await fetch(`/todos/${getDescription.todo_id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })

        window.location="/"
    }
    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${getDescription.todo_id}`}>
                Edit
            </button>
 
            <div className="modal" id={`id${getDescription.todo_id}`}>
            <div className="modal-dialog">
                <div className="modal-content">
 
                <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
 
                <div className="modal-body">
                  <input type="text" className="form-control" value={desc} onChange={e=>setDesc(e.target.value)}        />
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-dismiss="modal">Edit</button>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={e=>updateDescription(e)}>Close</button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditTodo
