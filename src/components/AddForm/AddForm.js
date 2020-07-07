import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config';
import './Add.css'


class AddForm extends Component {

  handleSubmit = e => {
    e.preventDefault()
    const { selectMeal, selectDay, title, link, desc } = e.target
    const meal = {
      kind_of_meal: selectMeal.value,
      day: selectDay.value,
      title: title.value,
      link: link.value,
      description: desc.value
    }
    fetch(`${config.API_ENDPOINT}/meals`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(meal)
    })
    .then(res => res.json())
    .then(data => console.log(this.props.history.push('/home')))
  }

  render() {
    return (
      <div className='addForm'>
          <form className='addForm-form' onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Add new meal</legend>
              <select id="selectMeal">
                <option>Select Meal</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Morning Snack">Morning snack</option>
                <option value="Lunch">Lunch</option>
                <option value="Afternoon Snack">Afternoon snack</option>
                <option value="Dinner">Dinner</option>
              </select>
              <select id="selectDay">
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
              <input type="text" id="title" name="title" required />
              <label htmlFor="link">Favorite recipe</label>
              <input type="url" id="link" name="url" />
              <label htmlFor="desc">Description</label>
              <textarea type="text" id="desc" name="desc" required rows="4" cols="50"></textarea>
              <div className="buttons">
                <Link to='/home'>
                  <button type="cancel">Cancel</button>
                </Link>
            
                <button type="submit">Add</button>
                
              </div>
            </fieldset>
          </form>
        </div>
    )
  }
}

export default AddForm;