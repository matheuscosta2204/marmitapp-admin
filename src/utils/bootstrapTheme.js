import React from 'react';

const BootstrapTheme = () => {
    return (
        <style type="text/css">
            {`
                .btn-primary {
                    background-color: #224B5E;
                    color: white;
                    border-color: #224B5E;
                }

                .btn-success {
                    background-color: #26AA8E;
                    color: white;
                    border-color: #26AA8E;
                }

                .btn-danger {
                    background-color: #E93F2D;
                    color: white;
                    border-color: #E93F2D;
                }

                .btn-outline-success {
                    color: #26AA8E;
                    border-color: #26AA8E;
                }

                .btn-outline-danger {
                    color: #E93F2D;
                    border-color: #E93F2D;
                }

                .custom-control-input:checked~.custom-control-label::before {
                    color: #fff;
                    border-color: #224B5E;
                    background-color: #224B5E;
                }
            `}
        </style>
    )
}

export default BootstrapTheme;