import React from 'react';
import { InputGroup, FormControl, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { updateOptionTitle, updateOptionDescription, updateOptionPrice } from '../../../actions/mealOptions';

const MealOption = ({ index, option, onDelete, updateOptionTitle, updateOptionDescription, updateOptionPrice }) => {
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
                <FormControl
                    placeholder="Enter the option description"
                    value={option.description}
                    onChange={event => updateOptionDescription(index, event.target.value)}
                />
                <InputGroup.Append>
                    <Button variant="outline-danger" onClick={onDelete}>X</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
};

export default connect(null, { updateOptionTitle, updateOptionDescription, updateOptionPrice })(MealOption);