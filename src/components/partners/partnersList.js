import React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';

import PartnersItem from './partnersItem';

const ParntersList = ({ filter, partners, loading }) => {
    if(loading) {
        return (
            <div className="partners-spinner mt-5">
                <Spinner animation="border" variant="light" />
            </div>
        );
    }

    if(filter === '') {
        return (
            <div className="search-alert">Please, type something!</div>
        );
    }

    if(partners.length <= 0) {
        return (
            <div className="search-alert">Any partner founded!</div>
        );
    }

    return (
        <ListGroup className="overflow-auto partners-list" variant="flush">
            {partners.map(partner => (
                <PartnersItem title={partner.name} subtitle={partner.address} />
            ))}
        </ListGroup>
    )
}

export default ParntersList;