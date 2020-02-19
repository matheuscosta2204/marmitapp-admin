import React from 'react';
import { connect } from 'react-redux';
import { Alert, AlertContainer } from "react-bs-notifier";

const AlertComponent = props => 
    props.alerts !== null &&
    props.alerts.length > 0 && 
    <AlertContainer position="top-left">
        {props.alerts.map(alert => (
            <Alert key={alert.id} type={alert.alertType} showIcon={false}>
                { alert.msg }
            </Alert>
        ))}
    </AlertContainer>

function mapStateToProps({ alert }) {
    return {
        alerts: alert
    }
}

export default connect(mapStateToProps)(AlertComponent);