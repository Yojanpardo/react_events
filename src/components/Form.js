import React, { Component } from 'react';

class Form extends Component{
    state = {}
    render(){
        return(
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Find your event by name or category
                    </legend>
                </fieldset>
                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" ukmargin="true">
                        <input 
                            type="text" 
                            className="uk-input" 
                            name="name" 
                            placeholder="Event or city name"
                        />
                    </div>
                    <div className="uk-margin" ukmargin="true">
                        <select 
                            className="uk-select"
                            name="category"
                        >

                        </select>
                    </div>
                    <div className="uk-margin" ukmargin="true">
                        <input
                            type="submit"
                            className="uk-button uk-button-danger"
                            value="Search events"
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;