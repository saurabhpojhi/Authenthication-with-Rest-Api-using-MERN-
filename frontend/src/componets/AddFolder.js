import React from 'react';

const AddFolder = () => {
    const [foldername, setFoldername] = React.useState('');
    const [is_private, setIs_private] = React.useState('');
    const [pin, setPin] = React.useState('');
    
    const addFolder = async () => {

        if(!foldername|| !is_private || !pin)
        {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/api/user/addfolder", {
            method: "post",
            body: JSON.stringify({foldername, is_private, pin }),
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
            <input type="text" placeholder='Enter Folder Name ' className='inputBox'
                value={foldername} onChange={(e) => { setFoldername(e.target.value) }}
            />
            {error && !foldername && <span className='invalid-input'>Enter valid  Folder Name</span>}

            <input type="text" placeholder='Enter is_private true or false ' className='inputBox'
                value={is_private} onChange={(e) => { setIs_private(e.target.value) }}
            />
            {error && !is_private && <span className='invalid-input'>Enter valid  is_private true or false </span>}

            <input type="number" placeholder='Enter pin' className='inputBox'
                value={pin} onChange={(e) => { setPin(e.target.value) }}
            />
            {error && !pin && <span className='invalid-input'>Enter valid Pin  </span>} 


            <button onClick={addFolder} className='appButton'>Add Folder</button>
        </div>
    )
}

export default AddFolder;