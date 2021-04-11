import React from 'react';
import './NameCard.css';
const NameCheapUrl="https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

const NameCard= ({suggestedName}) =>
{
    return(
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link" href={`${NameCheapUrl}${suggestedName}`}>
                
            <div className="result-name-card">
            <p className="result-name">{suggestedName}</p>
            </div>
        </a>
        
    );
};

export default NameCard;