import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

function EditRecipe({recipe}) {
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState(recipe.description)
  
    const handleClose = () => {
        setShow(false);
        setDescription(recipe.description)
    }
    const handleShow = () => setShow(true);
    
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {description}
            const response = await fetch(`http://localhost:5000/recipes/${recipe.recipe_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = '/';
          } catch (err) {
            console.error(err.message);
          }
    }
    return (
      <>
        <Button variant="contained" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>Edit recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body><textarea type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/></Modal.Body>
          <Modal.Footer>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained" onClick={e => updateDescription(e)} >
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default EditRecipe;