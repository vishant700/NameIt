import React from 'react';       //Functions returns html directly while class use render method.
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name= require('@rstacruz/startup-name-generator');    // called library

class App extends React.Component 
{
    state={     //State is used to save a piece of data which can be changed in future.
        headerText: 'Name It!',      // headerText is key and 'Name It!' the value. 
        headerExpanded: true,
        suggestedNames:[],  //empty array to store string
    };

    handleInputChange = (inputText) =>
    {   
        this.setState(      //setState to merge new state updates
            {
                headerExpanded: !inputText,    //Checks if data is present in string and returns boolean value 
                suggestedNames: inputText ? name(inputText) : [],
            }
        ); 
    }       

    render() 
    {
        return(
            <div>
                <Header     // From parent to child              //searchBox From child to parent
                    headerExpanded={this.state.headerExpanded}
                    headerTitle={this.state.headerText}/>
                                                                           
                <SearchBox onInputChange={this.handleInputChange}/> 

                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
                
            </div>          
        );
    }
}


export default App;