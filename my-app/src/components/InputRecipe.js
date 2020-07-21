import React, { Fragment, useState } from 'react';
import { Button } from '@material-ui/core';


const InputRecipe = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {description, date, name};
            const response = await fetch('http://localhost:5000/recipes', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = '/';
        }
        catch (err) {
            console.log(err.messages)
        }
    }
   
    return (
        <Fragment>
            <form noValidate >
            <input type='text' 
                className='form-control desc' 
                value={name} 
                required
                onChange={e => setName(e.target.value)}
                placeholder='Name'/>
                <textarea type='text' 
                className='form-control desc' 
                value={description} 
                required
                onChange={e => setDescription(e.target.value)}
                placeholder='Description'/>
                <input type="date" 
                required
                className='form-control'
                value={date} 
                required
                onChange={e => setDate(e.target.value)}/>
                <Button variant="contained" color="primary" onClick={onSubmitForm}>
                    Add recipe
                </Button>
            </form>
        </Fragment>
    )
}

export default InputRecipe;