import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowNote = () => {
    const [Note, setNote] = useState([]);

    useEffect(() => {
        getNote();
    }, []);

    const getnote = async () => {
        let result = await fetch('http://localhost:5000//api/user/note');
        result = await result.json();
        setNote(result);
    }



    return (
        <div className="Note show the data">
            <h3>Notes list</h3>
            <ul>
                <li>title</li>
                <li>description</li>
                <li>folder_id</li>

            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.title}</li>
                        <li>{item.description}</li>
                        <li>{folder_id}</li>
                        

                    </ul>
                )
            }
        </div>
    )
}

export default ShowNote;