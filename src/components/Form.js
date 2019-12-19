import React, { Component } from 'react';
import {CategoriesConsumer} from '../context/CategoriesContext';
import {EventsConsumer} from '../context/EventsCotext';

class Form extends Component{
    state = {
        name : '',
        category : '' 
    }

    getEventData = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <EventsConsumer>
                {(value)=>{
                    return(
                        <form
                            onSubmit={ e => {
                                e.preventDefault();
                                value.getEvents(this.state);
                            }}
                        >
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
                                        onChange={this.getEventData}
                                    />
                                </div>
                                <div className="uk-margin" ukmargin="true">
                                    <select 
                                        className="uk-select"
                                        name="category"
                                        onChange={this.getEventData}
                                    >
                                        <option value="">Select a category... </option>
                                        <CategoriesConsumer>
                                            {(value) => {
                                                return(
                                                    value.categories.map(category => (
                                                        <option value={category.id} key={category.id}  data-uk-form-select>
                                                            {category.name_localized}
                                                        </option>
                                                    ))
                                                )
                                            }}
                                        </CategoriesConsumer>
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
                    )
                }}
            </EventsConsumer>
        );
    }
}

export default Form;