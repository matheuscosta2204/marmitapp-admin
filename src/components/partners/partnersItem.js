import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PartnersItem = ({ title, subtitle }) => {
    return (
            <ListGroup.Item className="partner-item">
                <div className="title">{ title }</div>
                <div className="subtitle">{ subtitle }</div>
            </ListGroup.Item>
    )
}

export default PartnersItem;