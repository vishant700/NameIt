import React from 'react'; 
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard'
const ResultsContainer = ({suggestedNames}) =>
{
    const suggestedNamesjsx= suggestedNames.map((suggestedName =>{
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    }));

    return (
        <div className="results-container">       
            {suggestedNamesjsx}  
        </div>
    );      //First checks the firt statement. if true then moves to second and executes it
};

export default ResultsContainer;
