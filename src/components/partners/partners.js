import React, { useState } from 'react';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

import { searchPartners } from '../../actions/restaurant';
import ParntersList from './partnersList';
import './partners.scss';

const Partners = ({ partners, searchPartners }) => {

    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);

    const onChange = e => {
        setLoading(true);
        setFilter(e.target.value);
        searchPartners(e.target.value).then(() => {
            setTimeout(() => {setLoading(false);}, 500);
        });
    }

    return (
        <>
            <Row className="mt-5">
                <Col md={{ span: 4, offset: 4 }}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <FontAwesomeIcon icon={faSearch} size="sm" />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="text" 
                            placeholder="Search by name or addres" 
                            name="filter" 
                            value={filter} 
                            onChange={e => onChange(e)}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={{ span: 6, offset: 3 }}>
                    <ParntersList filter={filter} partners={partners} loading={loading} />
                </Col>
            </Row>
        </>
    )
};

function mapStateToProps({ restaurant }) {
    return {
        partners: restaurant.restaurants
    }
}

export default connect(mapStateToProps, { searchPartners })(Partners);