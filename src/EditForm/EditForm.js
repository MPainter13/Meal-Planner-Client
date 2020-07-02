import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditForm extends Component {

    state = {
        meal: {

        }
    }

    componentDidMount() {

        fetch(`http://localhost:8000/meals/${this.props.match.params.id}`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.authToken}`
          },
        })
          .then((res) => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e));
    
            return res.json();
          })
          .then((data) => {
            console.log(data)
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

        fetch(`http://localhost:8000/meals/${this.props.match.params.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.authToken}`
            },
            body: JSON.stringify(meal)
        })

            .then((data) => {
                console.log(data)
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
                        <select id="selectMeal" onChange={e => this.setState({meal:{...this.state.meal, kind_of_meal:e.target.value}})}value={this.state.meal.kind_of_meal}>
                            <option>Select Meal</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="morningSnack">Morning snack</option>
                            <option value="lunch">Lunch</option>
                            <option value="afternoonSnack">Afternoon snack</option>
                            <option value="dinner">Dinner</option>
                        </select>
                        <select id="selectDay" onChange={e => this.setState({meal:{...this.state.meal, day:e.target.value}})}value={this.state.meal.day}>
                            <option>Select Day</option>
                            <option value="Sun">Sunday</option>
                            <option value="Mon">Monday</option>
                            <option value="Tue">Tuesday</option>
                            <option value="Wed">Wednesday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                            <option value="Sat">Saturday</option>
                        </select>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" defaultValue={this.state.meal.title} name="title" required />
                        <label htmlFor="link">Favorite recipe</label>
                        <input type="url" id="link" defaultValue={this.state.meal.link} name="link" />
                        <label htmlFor="description">Description</label>
                        <textarea type="text" id="description" name="description" defaultValue={this.state.meal.description} name="desc" required rows="4" cols="50"></textarea>
                        <div class="buttons">
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