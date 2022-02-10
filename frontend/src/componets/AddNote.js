import React from 'react';

const AddNote = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [folder_id, setFolder_id] = React.useState('');
    
    const addNote = async () => {

        if(!title || !description || !folder_id )
        {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/api/user/note/addnote", {
            method: "post",
            body: JSON.stringify({ title ,description ,folder_id }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)

    }

    return (
        <div className='Note'>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter Title ' className='inputBox'
                value={title} onChange={(e) => { setTitle(e.target.value) }}
            />
            {error && !title && <span className='invalid-input'>Enter valid  title</span>}

            <input type="text" placeholder='Enter description' className='inputBox'
                value={description} onChange={(e) => { setDescription(e.target.value) }}
            />
            {error && !description && <span className='invalid-input'>Enter valid description</span>}

            <input type="text" placeholder='Enter folder_id' className='inputBox'
                value={folder_id} onChange={(e) => { setFolder_id(e.target.value) }}
            />
            {error && !folder_id && <span className='invalid-input'>Enter valid folder_id </span>} 


            <button onClick={addNote} className='appButton'>Add Note</button>
        </div>
    )
}

export default AddNote;