import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowFolder = () => {
    const [folder, setFolder] = useState([]);

    useEffect(() => {
        getfolder();
    }, []);

    const getfolder = async () => {
        let result = await fetch('http://localhost:5000//api/user/folder');
        result = await result.json();
        setFolder(result);
    }



    return (
        <div className="folder show the data">
            <h3>Folder list</h3>
            <ul>
                <li>foldername</li>
                <li>is_private</li>
                <li>pin</li>

            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.foldername}</li>
                        <li>{item.is_private}</li>
                        <li>{item.pin}</li>
                        

                    </ul>
                )
            }
        </div>
    )
}

export default ShowFolder;