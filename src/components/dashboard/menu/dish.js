import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Dish = ({ value, onClick, onChange }) => {
    return (
        <div className="dish-container">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter the dish description"
                    value={value}
                    onChange={event => onChange(event.target.value)}
                />
                <InputGroup.Append>
                    <Button variant="outline-danger" onClick={onClick}>X</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
};

export default Dish;