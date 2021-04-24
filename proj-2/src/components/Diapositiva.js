import React from 'react';

// Por: Duvan Florez 23/04/2021

// Card central
const Diapositiva = (props) => {
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="card-text">
                        <h4>{props.text}</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Diapositiva