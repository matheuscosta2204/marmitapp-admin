import React from 'react';
import { InputGroup, FormControl, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { updateOptionTitle, updateOptionDescription, updateOptionPrice, updateOptionDishQuantity, updateOptionDishDescription } from '../../../actions/mealOptions';

const MealOption = ({ index, option, onDelete, updateOptionTitle, updateOptionDishQuantity, updateOptionDishDescription, updateOptionPrice }) => {
    return (
        <div className="meal-option-container">
            <InputGroup size="lg" className="mb-3" as={Col} md="6">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">Title</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    aria-label="Large" 
                    aria-describedby="inputGroup-sizing-sm" 
                    value={option.title}
                    onChange={event => updateOptionTitle(index, event.target.value)} 
                />
                <InputGroup.Append>
                    <Button variant="outline-danger" onClick={onDelete}>X</Button>
                </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3" as={Col}>
                <InputGroup.Prepend>
                    <InputGroup.Text>Price</InputGroup.Text>
                    <FormControl
                        placeholder="0.00" 
                        type="number" 
                        value={option.price} 
                        onChange={event => updateOptionPrice(index, event.target.value)}
                    />
                </InputGroup.Prepend>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend className="mb-3" as={Col}>
                    <InputGroup.Text>Main Dishes</InputGroup.Text>
                    <FormControl
                        placeholder="Max Quantity" 
                        type="number" 
                        value={option.main.quantity} 
                        onChange={event => updateOptionDishQuantity(index, 'main', event.target.value)}
                    />
                </InputGroup.Prepend>
                <InputGroup.Prepend className="mb-3" as={Col}>
                    <InputGroup.Text>Side Dishes</InputGroup.Text>
                    <FormControl
                        placeholder="Max Quantity" 
                        type="number" 
                        value={option.side.quantity} 
                        onChange={event => updateOptionDishQuantity(index, 'side', event.target.value)}
                    />
                </InputGroup.Prepend>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend className="mb-3" as={Col}>
                    <InputGroup.Text>Salads</InputGroup.Text>
                    <FormControl
                        placeholder="Max Quantity" 
                        type="number" 
                        value={option.salads.quantity} 
                        onChange={event => updateOptionDishQuantity(index, 'salads', event.target.value)}
                    />
                </InputGroup.Prepend>
                <InputGroup.Prepend className="mb-3" as={Col}>
                    <InputGroup.Text>Deserts</InputGroup.Text>
                    <FormControl
                        placeholder="Max Quantity" 
                        type="number" 
                        value={option.deserts.quantity} 
                        onChange={event => updateOptionDishQuantity(index, 'deserts', event.target.value)}
                    />
                </InputGroup.Prepend>
            </InputGroup>
        </div>
    )
};

export default connect(null, { updateOptionTitle, updateOptionDishQuantity, updateOptionDishDescription, updateOptionPrice })(MealOption);