import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import config from '../../config';

//This component is to edit the meal. 
class EditForm extends Component {

    state = {
        meal: {}
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/meals/${this.props.match.params.id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then((res) => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));

                return res.json();
            })
            .then((data) => {
                this.setState({
                    meal: data
                })
            })
            .catch(error => { console.error({ error }); });
    }

    onEdit = (e) => {
        e.preventDefault()
        const meal = {
            day: this.state.meal.day,
            kind_of_meal: this.state.meal.kind_of_meal,
            title: e.target.title.value,
            description: e.target.description.value,
            link: e.target.link.value
        }

        fetch(`${config.API_ENDPOINT}/meals/${this.props.match.params.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(meal)
        })
            .then((data) => {
                this.props.history.push('/home')
            })
            .catch(error => { console.error({ error }); });
    }

    render() {
        return (
            <div className='addForm'>
                <form onSubmit={this.onEdit}>
                    <fieldset>
                        <legend>Add new meal</legend>
                        <select id="selectMeal" onChange={e => this.setState({ meal: { ...this.state.meal, kind_of_meal: e.target.value } })} value={this.state.meal.kind_of_meal}>
                            <option>Select Meal</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Morning Snack">Morning snack</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Afternoon Snack">Afternoon snack</option>
                            <option value="Dinner">Dinner</option>
                        </select>
                        <select id="selectDay" onChange={e => this.setState({ meal: { ...this.state.meal, day: e.target.value } })} value={this.state.meal.day}>
                            <option>Select Day</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wedesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" defaultValue={this.state.meal.title} name="title" required />
                        <label htmlFor="link">Favorite recipe</label>
                        <input type="url" id="link" defaultValue={this.state.meal.link} name="link" />
                        <label htmlFor="description">Description</label>
                        <textarea type="text" id="description" name="description" defaultValue={this.state.meal.description} required rows="4" cols="50"></textarea>
                        <div className="buttons">
                            <Link to='/home'>
                                <button type="cancel">Go back</button>
                            </Link>
                            <button type="submit">Save</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default EditForm;