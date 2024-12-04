import React, { useState } from 'react';

function ResCreator ({callback})
{
    const [newItemText, setNewItemText] = useState(""); // using same variable names as todo to avoid confusion

    const updateNewTextValue = (event) => {
        setNewItemText(event.target.value);
    };

    const createNewRes = () => {
        if(newItemText !== "")
        {
            callback(newItemText);
            setNewItemText("");
        }
    }

    return (
        <div className="my-1">
            <input
                className="form-control"
                value={ newItemText }
                onChange={ updateNewTextValue }            
            />
            <button className="btn btn-success mt-1" onClick={ createNewRes }>
                Add New Reservation
            </button>
            
        </div>
    );
}

export default ResCreator;