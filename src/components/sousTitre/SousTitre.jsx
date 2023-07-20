import React from 'react';
import "./sousTitre.scss";

const SousTitre = ({title}) => {
    return (
        <div>
        <h2 className='titre'>{title}</h2>
        </div>
    );
};

export default SousTitre;