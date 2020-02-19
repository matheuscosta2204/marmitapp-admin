import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Dish = ({ dish, onClick, onDishChange, dishValue, onDishValueChange }) => {
    return (
        <div className="dish-container">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Custo adicional</InputGroup.Text>
                    <FormControl
                        placeholder="0.00"
                        type="number"
                        value={dishValue}
                        onChange={event => onDishValueChange(event.target.value)}
                    />
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Enter the dish description"
                    value={dish}
                    onChange={event => onDishChange(event.target.value)}
                />
                <InputGroup.Append>
                    <Button variant="outline-danger" onClick={onClick}>X</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
};

export default Dish;